import React, { type ReactNode } from "react";

interface PProps {
  children: ReactNode;
}

const P = ({ children }: PProps) => {
  return (
    <p className="text-base leading-relaxed tracking-[0.005em] text-neutral-600">
      {children}
    </p>
  );
};

export default P;
