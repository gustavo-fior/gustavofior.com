import React, { type ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}

const OrderedList = ({ children }: OrderedListProps) => {
  return (
    <ul className="marker: mt-2 list-decimal pl-8 text-base leading-relaxed text-neutral-700 marker:text-neutral-300">
      {children}
    </ul>
  );
};

export default OrderedList;
