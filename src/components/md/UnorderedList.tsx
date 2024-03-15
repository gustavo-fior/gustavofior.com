import React, { type ReactNode } from "react";

interface UnorderedListProps {
  children: ReactNode;
}

const UnorderedList = ({ children }: UnorderedListProps) => {
  return <ul className="text-zinc-400 text-base list-disc pl-6">{children}</ul>;
};

export default UnorderedList;
