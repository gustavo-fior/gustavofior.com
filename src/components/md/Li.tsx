import React, { type ReactNode } from "react";

interface LiProps {
  children: ReactNode;
}

const Li = ({ children }: LiProps) => {
  return <li className="py-1 text-neutral-400">{children}</li>;
};

export default Li;