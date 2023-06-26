import React, { type ReactNode } from "react";

interface PProps {
  children: ReactNode;
}

const P = ({ children }: PProps) => {
  return <p className="text-slate-300 md:text-lg">{children}</p>;
};

export default P;