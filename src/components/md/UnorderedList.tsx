import React, { type ReactNode } from "react";

interface UnorderedListProps {
  children: ReactNode;
}

const UnorderedList = ({ children }: UnorderedListProps) => {
  return <ul className="text-slate-300 md:text-lg list-disc pl-8 py-4">{children}</ul>;
};

export default UnorderedList;
