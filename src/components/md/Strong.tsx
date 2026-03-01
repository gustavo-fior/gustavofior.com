import React, { type ReactNode } from "react";

interface StrongProps {
  children: ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return (
    <span className="font-[450] leading-relaxed text-neutral-800">
      {children}
    </span>
  );
};

export default Strong;
