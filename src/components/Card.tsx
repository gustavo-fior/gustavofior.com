import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white bg-opacity-20 px-6 py-4 drop-shadow-lg backdrop-blur-lg">
      {children}
    </div>
  );
};

export default Card;
