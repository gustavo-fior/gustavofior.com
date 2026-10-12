import { type ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen w-full pt-12 md:flex-col md:items-center md:pt-20">
      <div className="relative mx-6 flex h-full min-h-screen w-full flex-col sm:w-[30rem] md:mx-0 md:w-[40rem]">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
