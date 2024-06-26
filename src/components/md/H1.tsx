import React, { type ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

const H1 = ({ children }: H1Props) => {
  return <h1 className="text-3xl font-medium text-neutral-200 py-2">{children}</h1>;
};

export default H1;