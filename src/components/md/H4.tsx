import React, { type ReactNode } from "react";

interface H3Props {
  children: ReactNode;
}

const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="pb-4 pt-10 text-[15px] font-medium tracking-tight text-neutral-800">
      {children}
    </h3>
  );
};

export default H3;
