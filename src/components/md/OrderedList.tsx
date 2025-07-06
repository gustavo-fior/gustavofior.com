import React, { type ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}

const OrderedList = ({ children }: OrderedListProps) => {
  return (
    <ul className="mt-2 list-decimal pl-8 text-base text-neutral-600 marker:text-neutral-300">
      {children}
    </ul>
  );
};

export default OrderedList;
