import React, { type ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}

const OrderedList = ({ children }: OrderedListProps) => {
  return <ul className="list-decimal text-white md:text-lg py-4 pl-4">{children}</ul>;
};

export default OrderedList;
