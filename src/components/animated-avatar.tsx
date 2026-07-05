import { useEffect, useRef, useState } from "react";

type Frame = "idle" | "blink-half" | "blink" | "hair-moved-half" | "hair-moved";

const FRAME_SRC: Record<Frame, string> = {
  idle: "/idle.png",
  "blink-half": "/blink-half.png",
  blink: "/blink.png",
  "hair-moved-half": "/hair-moved-half.png",
  "hair-moved": "/hair-moved.png",
};

// How long to ease through the half frame on the way in and out of a hair move.
// Slower than a blink's half frame so the hair drifts rather than snaps.
const HAIR_HALF_DURATION = 360;

// One organic blink: idle -> half -> closed -> half -> idle.
const BLINK_SEQUENCE: Array<{ frame: Frame; duration: number }> = [
  { frame: "blink-half", duration: 60 },
  { frame: "blink", duration: 80 },
  { frame: "blink-half", duration: 60 },
  { frame: "idle", duration: 0 },
];

// Random gap between blinks so it never feels like a loop.
const BLINK_MIN_DELAY = 2000;
const BLINK_MAX_DELAY = 4000;

// A rarer, subtler flourish: the hair shifts for a beat, then settles back.
const HAIR_MIN_DELAY = 2000;
const HAIR_MAX_DELAY = 2000;
const HAIR_HOLD_MIN = 2000;
const HAIR_HOLD_MAX = 2000;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

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

  // Preload every frame once so swapping never flickers.
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

    // The blink and hair loops both drive the single visible frame, so a shared
    // guard keeps them from overwriting each other mid-sequence. If one loop
    // wants to fire while the other is animating, it briefly retries instead.
    let busy = false;

    const runBlink = () => {
      if (busy) return push(runBlink, 200);
      busy = true;
      let elapsed = 0;
      BLINK_SEQUENCE.forEach(({ frame: f, duration }) => {
        push(() => setFrame(f), elapsed);
        elapsed += duration;
      });
      push(() => {
        busy = false;
        scheduleBlink();
      }, elapsed);
    };

    const runHairMove = () => {
      if (busy) return push(runHairMove, 400);
      busy = true;
      // Ease in and out through the half frame, holding on the moved frame:
      // idle -> half -> moved -> (hold) -> half -> idle.
      const sequence: Array<{ frame: Frame; duration: number }> = [
        { frame: "hair-moved-half", duration: HAIR_HALF_DURATION },
        { frame: "hair-moved", duration: rand(HAIR_HOLD_MIN, HAIR_HOLD_MAX) },
        { frame: "hair-moved-half", duration: HAIR_HALF_DURATION },
        { frame: "idle", duration: 0 },
      ];
      let elapsed = 0;
      sequence.forEach(({ frame: f, duration }) => {
        push(() => setFrame(f), elapsed);
        elapsed += duration;
      });
      push(() => {
        busy = false;
        scheduleHairMove();
      }, elapsed);
    };

    const scheduleBlink = () => {
      push(runBlink, rand(BLINK_MIN_DELAY, BLINK_MAX_DELAY));
    };

    const scheduleHairMove = () => {
      push(runHairMove, rand(HAIR_MIN_DELAY, HAIR_MAX_DELAY));
    };

    scheduleBlink();
    scheduleHairMove();

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
