import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getGoogleFavicon } from "~/utils/google-favicon";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className={`group inline-block cursor-pointer underline transition-all duration-200 ease-in-out`}
    >
      {href.startsWith("http") && (
        <Image
          src={getGoogleFavicon(href || "")}
          alt=""
          width={256}
          height={256}
          className="my-0 mb-[3px] ml-[3px] mr-1.5 inline-block size-[13px] rounded-sm"
        />
      )}

      <p className="inline-block text-neutral-800 underline decoration-neutral-300 decoration-1 underline-offset-2 transition-all duration-200 ease-in-out group-hover:decoration-neutral-400">
        {children}
      </p>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, x: -4, filter: "blur(4px)", width: 0 }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)", width: "auto" }}
            exit={{ opacity: 0, x: -4, filter: "blur(4px)", width: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block"
          >
            <ArrowUpRight className="ml-0.5 size-3 translate-x-[1px] translate-y-[1px] text-neutral-400 transition-all duration-200 ease-in-out " />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default LinkText;
