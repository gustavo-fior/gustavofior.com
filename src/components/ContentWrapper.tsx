import { type ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-24">
      <div className="w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem]">{children}</div>
    </div>
  );
};

export default ContentWrapper;
