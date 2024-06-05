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
    <div className="rounded-lg text-center p-1 md:p-2 bg-neutral-800">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-md"
      />
      {alt ? (
        <div className="text-sm text-neutral-500 pt-2">{alt}</div>
      ) : null}
    </div>
  ) : null;
};

export default CustomImage;
