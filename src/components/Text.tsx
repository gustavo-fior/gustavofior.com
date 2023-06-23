import React, { type ReactNode } from "react";

interface MyHeadingProps {
  children: ReactNode;
}

const MyHeading = ({ children }: MyHeadingProps) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export default MyHeading;