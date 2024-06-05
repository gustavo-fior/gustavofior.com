import React, { type ReactNode } from "react";

interface StrongProps {
  children: ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return <span className="text-neutral-200 base font-normal">{children}</span>;
};

export default Strong;