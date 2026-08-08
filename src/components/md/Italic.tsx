import React, { type ReactNode } from "react";

interface ItalicProps {
  children: ReactNode;
}

const Italic = ({ children }: ItalicProps) => {
  return (
    <span className="font-normal italic leading-relaxed text-neutral-700">
      {children}
    </span>
  );
};

export default Italic;
