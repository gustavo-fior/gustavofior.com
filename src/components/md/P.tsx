import React, { type ReactNode } from "react";

interface PProps {
  children: ReactNode;
}

const P = ({ children }: PProps) => {
  return (
    <p className="text-[15px] leading-[1.8] text-neutral-700">{children}</p>
  );
};

export default P;
