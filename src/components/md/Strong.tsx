import React, { type ReactNode } from "react";

interface StrongProps {
  children: ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return (
    <span className=" font-medium leading-[1.8] text-neutral-900">
      {children}
    </span>
  );
};

export default Strong;
