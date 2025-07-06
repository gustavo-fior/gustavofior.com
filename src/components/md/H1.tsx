import React, { type ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

const H1 = ({ children }: H1Props) => {
  return <h1 className="py-2 text-3xl font-medium">{children}</h1>;
};

export default H1;
