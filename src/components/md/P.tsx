import React, { type ReactNode } from "react";

interface PProps {
  children: ReactNode;
}

const P = ({ children }: PProps) => {
  return (
    <p className="text-base font-[370] leading-[1.8] tracking-[-0.00em] text-neutral-600">
      {children}
    </p>
  );
};

export default P;
