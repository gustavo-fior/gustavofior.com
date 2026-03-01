import React, { type ReactNode } from "react";

interface H3Props {
  children: ReactNode;
}

const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="pb-4 pt-8 text-base font-medium tracking-tight text-neutral-800">
      {children}
    </h3>
  );
};

export default H3;
