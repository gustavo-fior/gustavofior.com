import { type ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen w-full pt-12 sm:pt-20 md:flex-col md:items-center">
      <div className="relative mx-6 flex h-full min-h-screen w-full flex-col sm:mx-0 sm:w-[30rem] md:w-[40rem]">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
