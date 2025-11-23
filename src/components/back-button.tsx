import { AnimatePresence, motion } from "framer-motion";
import { Redo2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "~/utils/is-mobile";

const BackButton = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (isMobile && pathname !== "/") {
    return (
      <div className="pb-4 pt-0">
        <Link
          href={pathname.includes("/blog/post/") ? "/blog" : "/"}
          className="group flex items-center gap-1.5 text-neutral-300 transition-all duration-200 ease-in-out hover:text-neutral-400"
        >
          <Redo2Icon
            className="mb-0.5 size-3 rotate-180 -scale-y-100 cursor-pointer text-xl"
            strokeWidth={2.5}
          />
          <span className="text-sm">Back</span>
        </Link>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {pathname !== "/" && (
        <motion.div
          initial={{ opacity: 0, x: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 4, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="top-0 pb-4 pt-0 md:absolute md:-left-24 md:pb-0 md:pt-2 lg:-left-32"
        >
          <Link
            href={pathname.includes("/blog/post/") ? "/blog" : "/"}
            className="group flex items-center gap-1.5 text-neutral-300 transition-all duration-200 ease-in-out hover:text-neutral-400"
          >
            <Redo2Icon
              className="mb-0.5 size-3 rotate-180 -scale-y-100 cursor-pointer text-xl"
              strokeWidth={2.5}
            />
            <span className="text-sm">Back</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackButton;
