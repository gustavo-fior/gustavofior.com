import React, { type ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}

const OrderedList = ({ children }: OrderedListProps) => {
  return <ul className="list-decimal text-neutral-400 text-base pl-8 marker:text-neutral-200 mt-2">{children}</ul>;
};

export default OrderedList;
