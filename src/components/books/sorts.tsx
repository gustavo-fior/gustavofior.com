import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import {
  ArrowDownAzIcon,
  ArrowDownZaIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  XIcon,
} from "lucide-react";
import { sortsAtom } from "~/utils/atoms";

export default function Sorts({ isOpen }: { isOpen: boolean }) {
  const [selectedSort, setSelectedSort] = useAtom(sortsAtom);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -4,
            filter: "blur(4px)",
            height: 0,
            marginTop: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            height: "auto",
            marginTop: 12,
          }}
          exit={{
            opacity: 0,
            y: -4,
            filter: "blur(4px)",
            height: 0,
            marginTop: 0,
          }}
          transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          className="flex flex-col gap-2"
        >
          <button
            onClick={() =>
              selectedSort === "BEST"
                ? setSelectedSort(null)
                : setSelectedSort("BEST")
            }
            className={`flex w-fit select-none items-center gap-[5px] text-[12px] text-neutral-400 transition-opacity hover:opacity-70 ${
              selectedSort === "BEST" || selectedSort === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <ThumbsUpIcon
              className="mb-[1px] mr-px size-3 fill-neutral-200"
              strokeWidth={2.5}
            />
            Best
            <AnimatePresence>
              {selectedSort === "BEST" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className=" size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedSort === "WORST"
                ? setSelectedSort(null)
                : setSelectedSort("WORST")
            }
            className={`flex w-fit select-none items-center gap-[5px] text-[12px] text-neutral-400 transition-opacity hover:opacity-70 ${
              selectedSort === "WORST" || selectedSort === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <ThumbsDownIcon
              className="mb-[1px] mr-px size-3 fill-neutral-200"
              strokeWidth={2.5}
            />
            Worst
            <AnimatePresence>
              {selectedSort === "WORST" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-0.5 size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedSort === "ABC"
                ? setSelectedSort(null)
                : setSelectedSort("ABC")
            }
            className={`flex w-fit select-none items-center gap-[5px] text-[12px] text-neutral-400 transition-opacity hover:opacity-70 ${
              selectedSort === "ABC" || selectedSort === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <ArrowDownAzIcon
              className="mb-[1px] mr-px size-3 "
              strokeWidth={2.5}
            />
            ABC
            <AnimatePresence>
              {selectedSort === "ABC" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-0.5 size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedSort === "ZXY"
                ? setSelectedSort(null)
                : setSelectedSort("ZXY")
            }
            className={`flex w-fit select-none items-center gap-[5px] text-[12px] text-neutral-400 transition-opacity hover:opacity-70 ${
              selectedSort === "ZXY" || selectedSort === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <ArrowDownZaIcon className="mb-px mr-px size-3" strokeWidth={2.3} />
            ZXY
            <AnimatePresence>
              {selectedSort === "ZXY" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className=" size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
