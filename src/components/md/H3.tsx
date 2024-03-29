import React, { type ReactNode } from "react";

interface H3Props {
  children: ReactNode;
}

const H3 = ({ children }: H3Props) => {
  return <h3 className="text-lg md:text-xl font-bold pt-8 pb-2">{children}</h3>;
};

export default H3;