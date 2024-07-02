import { type ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-12">
      <div className="mx-8 sm:mx-0 sm:w-[30rem] md:w-[40rem]">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
