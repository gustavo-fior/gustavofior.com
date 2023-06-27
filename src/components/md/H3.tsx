import React, { type ReactNode } from "react";

interface H3Props {
  children: ReactNode;
}

const H3 = ({ children }: H3Props) => {
  return <h3 className="text-xl md:text-2xl font-bold pt-8 pb-2">{children}</h3>;
};

export default H3;