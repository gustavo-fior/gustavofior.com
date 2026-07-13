import Image from "next/image";
import { type CSSProperties } from "react";

export function BookCover({
  src,
  alt,
  width = 50,
  height = 75,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="book-scene select-none"
      style={{ "--bw": `${width}px`, "--bh": `${height}px` } as CSSProperties}
    >
      <div className="book">
        <div className="book-front">
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="pointer-events-none block h-full w-full object-cover"
            priority
            quality={100}
            sizes={`${width}px`}
            loading="eager"
          />
        </div>
        <div
          className="book-spine"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div className="book-pages"></div>
      </div>
      <div className="book-ground"></div>
    </div>
  );
}
