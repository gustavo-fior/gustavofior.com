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
    <div className="my-8 rounded-lg text-center p-2 md:p-3 bg-white bg-opacity-20 drop-shadow-lg backdrop-blur-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
      />
      {alt ? (
        <div className="text-sm text-slate-300 pt-3 pb-1 italic">{alt}</div>
      ) : null}
    </div>
  ) : null;
};

export default CustomImage;
