import React, { type ReactNode } from "react";

interface StrongProps {
  children: ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return <span className="text-white md:text-lg">{children}</span>;
};

export default Strong;