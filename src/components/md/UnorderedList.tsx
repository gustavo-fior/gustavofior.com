import React, { type ReactNode } from "react";

interface UnorderedListProps {
  children: ReactNode;
}

const UnorderedList = ({ children }: UnorderedListProps) => {
  return <ul className="text-neutral-400 text-base list-disc pl-6 marker:text-neutral-200 mt-2">{children}</ul>;
};

export default UnorderedList;
