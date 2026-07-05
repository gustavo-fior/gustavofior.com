import { useEffect, useRef, useState } from "react";

type Frame = "idle" | "blink-half" | "blink";

const FRAME_SRC: Record<Frame, string> = {
  idle: "/idle.png",
  "blink-half": "/blink-half.png",
  blink: "/blink.png",
};

// One organic blink: idle -> half -> closed -> half -> idle.
const BLINK_SEQUENCE: Array<{ frame: Frame; duration: number }> = [
  { frame: "blink-half", duration: 60 },
  { frame: "blink", duration: 80 },
  { frame: "blink-half", duration: 60 },
  { frame: "idle", duration: 0 },
];

// Random gap between blinks so it never feels like a loop.
const MIN_DELAY = 2000;
const MAX_DELAY = 4000;

interface AnimatedAvatarProps {
  className?: string;
  size?: number;
  alt?: string;
}

export default function AnimatedAvatar({
  className,
  size = 256,
  alt = "",
}: AnimatedAvatarProps) {
  const [frame, setFrame] = useState<Frame>("idle");
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Preload every frame once so blinking never flickers.
  useEffect(() => {
    Object.values(FRAME_SRC).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const push = (fn: () => void, delay: number) => {
      timeouts.current.push(setTimeout(fn, delay));
    };

    const runBlink = () => {
      let elapsed = 0;
      BLINK_SEQUENCE.forEach(({ frame: f, duration }) => {
        push(() => setFrame(f), elapsed);
        elapsed += duration;
      });
      // After the blink resolves, schedule the next one at a random gap.
      push(scheduleNext, elapsed);
    };

    const scheduleNext = () => {
      const delay = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
      push(runBlink, delay);
    };

    scheduleNext();

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  return (
    <div className={className} style={{ width: size, height: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FRAME_SRC[frame]}
        alt={alt}
        width={size}
        height={size}
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}
