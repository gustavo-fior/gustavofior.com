import React, { type ReactNode } from "react";

interface ItalicProps {
  children: ReactNode;
}

const Italic = ({ children }: ItalicProps) => {
  return (
    <span className="font-normal italic leading-relaxed text-neutral-600">
      {children}
    </span>
  );
};

export default Italic;
