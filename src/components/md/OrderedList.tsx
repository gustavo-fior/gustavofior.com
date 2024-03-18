import React, { type ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}

const OrderedList = ({ children }: OrderedListProps) => {
  return <ul className="list-decimal text-white text-base py-4 pl-5">{children}</ul>;
};

export default OrderedList;
