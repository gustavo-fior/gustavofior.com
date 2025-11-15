import React, { type ReactNode } from "react";

interface LiProps {
  children: ReactNode;
}

const Li = ({ children }: LiProps) => {
  return <li className="py-1 leading-relaxed text-neutral-600">{children}</li>;
};

export default Li;
