import { type ReactNode } from "react";
import { motion } from "framer-motion";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.07 }}
      className="flex w-full flex-col items-center justify-center pb-24"
    >
      <div className="mx-8 sm:mx-0 sm:w-[30rem] md:w-[40rem] lg:w-[45rem]">
        {children}
      </div>
    </motion.div>
  );
};

export default ContentWrapper;
