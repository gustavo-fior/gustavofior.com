import React, { type ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

const H2 = ({ children }: H2Props) => {
  return <h2 className="text-2xl text-neutral-200 font-medium py-2">{children}</h2>;
};

export default H2;