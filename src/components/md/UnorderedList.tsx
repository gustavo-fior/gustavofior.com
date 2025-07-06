import React, { type ReactNode } from "react";

interface UnorderedListProps {
  children: ReactNode;
}

const UnorderedList = ({ children }: UnorderedListProps) => {
  return (
    <ul className="mt-2 list-disc pl-8 text-base text-neutral-600 marker:text-neutral-300">
      {children}
    </ul>
  );
};

export default UnorderedList;
