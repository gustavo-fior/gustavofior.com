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
      <div className="rounded-lg bg-neutral-200 p-1">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-md"
        />
      </div>
      <div className="pt-3 text-xs text-neutral-400">{alt}</div>
    </div>
  ) : null;
};

export default CustomImage;
