import React, { type ReactNode } from "react";

interface H3Props {
  children: ReactNode;
}

const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="tracking-tigh pb-4 pt-8 text-base font-semibold">
      {children}
    </h3>
  );
};

export default H3;
