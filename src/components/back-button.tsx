import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownUpIcon,
  LanguagesIcon,
  ListFilterIcon,
  Redo2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useIsMobile } from "~/utils/is-mobile";
import Filters from "./books/filters";
import Sorts from "./books/sorts";
import Languages from "./books/languages";
import { useAtom } from "jotai";
import { isBooksFilterOpenAtom } from "~/utils/atoms";

const BackButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isFiltersOpen, setIsFiltersOpen] = useAtom(isBooksFilterOpenAtom);
  const [isSortsOpen, setIsSortsOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);

  const handleBackFromBooks = () => {
    // Close all menus and navigate immediately
    // Animations will play during the navigation transition
    setIsFiltersOpen(false);
    setIsSortsOpen(false);
    setIsLanguagesOpen(false);
    void router.push("/");
  };

  if (isMobile && pathname !== "/" && pathname !== "/books") {
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

  if (isMobile && pathname === "/books") {
    return (
      <div className="flex items-center gap-12 pb-4 pt-0">
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

  if (pathname === "/books") {
    return (
      <AnimatePresence>
        {pathname === "/books" && (
          <div className="sticky top-0 pb-4 pt-0 md:fixed md:left-[calc(50%-26rem)] md:top-[5.3rem] md:pb-0 md:pt-0 lg:left-[calc(50%-28rem)]">
            <motion.div
              initial={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <button
                onClick={handleBackFromBooks}
                className="group flex cursor-pointer items-center gap-1.5 text-neutral-300 transition-all duration-200 ease-in-out hover:text-neutral-400"
              >
                <Redo2Icon
                  className="mb-0.5 size-3 rotate-180 -scale-y-100 cursor-pointer text-xl"
                  strokeWidth={2.5}
                />
                <span className="text-sm">Back</span>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
              className="pt-6"
            >
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={`group flex cursor-pointer items-center gap-1.5 ${
                  isFiltersOpen ? "text-neutral-400" : "text-neutral-300"
                } transition-all duration-200 ease-in-out hover:text-neutral-400`}
              >
                <ListFilterIcon className="mb-0.5 size-3" strokeWidth={2.5} />
                <span className="text-sm">Filters</span>
              </button>
            </motion.div>
            <Filters />
            <motion.div
              initial={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
              className="pt-6"
            >
              <button
                onClick={() => setIsSortsOpen(!isSortsOpen)}
                className={`group flex cursor-pointer items-center gap-1.5 ${
                  isSortsOpen ? "text-neutral-400" : "text-neutral-300"
                } transition-all duration-200 ease-in-out hover:text-neutral-400`}
              >
                <ArrowDownUpIcon className="mb-0.5 size-3" strokeWidth={2.5} />
                <span className="text-sm">Sort</span>
              </button>
            </motion.div>
            <Sorts isOpen={isSortsOpen} />
            <motion.div
              initial={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 4, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
              className="pt-6"
            >
              <button
                onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
                className={`group flex cursor-pointer items-center gap-1.5 ${
                  isLanguagesOpen ? "text-neutral-400" : "text-neutral-300"
                } transition-all duration-200 ease-in-out hover:text-neutral-400`}
              >
                <LanguagesIcon className="mb-0.5 size-3" strokeWidth={2.5} />
                <span className="text-sm">Lang</span>
              </button>
            </motion.div>
            <Languages isOpen={isLanguagesOpen} />
          </div>
        )}
      </AnimatePresence>
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
          className="sticky top-0 pb-4 pt-0 md:fixed md:left-[calc(50%-26rem)] md:top-[5.3rem] md:pb-0 md:pt-0 lg:left-[calc(50%-28rem)]"
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
