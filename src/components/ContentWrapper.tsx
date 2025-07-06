import { type ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen w-full md:flex-col md:items-center">
      <div className="mx-6 flex h-full min-h-screen w-full flex-col sm:mx-0 sm:w-[30rem] md:w-[40rem]">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
