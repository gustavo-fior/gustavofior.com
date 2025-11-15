import React, { type ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

const H2 = ({ children }: H2Props) => {
  return (
    <h2 className="py-2 text-2xl font-medium tracking-tight">{children}</h2>
  );
};

export default H2;
