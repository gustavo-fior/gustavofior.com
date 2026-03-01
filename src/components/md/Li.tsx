import React, { type ReactNode } from "react";

interface LiProps {
  children: ReactNode;
}

const Li = ({ children }: LiProps) => {
  return (
    <li className="py-1 font-[350] leading-relaxed text-neutral-600">
      {children}
    </li>
  );
};

export default Li;
