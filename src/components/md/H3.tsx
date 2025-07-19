import React, { type ReactNode } from "react";

interface H3Props {
  children: ReactNode;
}

const H3 = ({ children }: H3Props) => {
  return <h3 className="pb-3 pt-8 text-lg font-medium">{children}</h3>;
};

export default H3;
