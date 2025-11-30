import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CustomImage = ({ src, alt, width = 1920, height = 1080 }: ImageProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div className="text-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl"
        style={{
          boxShadow:
            "0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px -1px rgba(0, 0, 0, 0.06), 0px 2px 4px 0px rgba(0, 0, 0, 0.04)",
        }}
      />
      <div className="pt-3 text-xs italic text-neutral-400/80">{alt}</div>
    </div>
  ) : null;
};

export default CustomImage;
