import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import {
  BookmarkCheckIcon,
  BookmarkIcon,
  BookmarkPlusIcon,
  BookmarkXIcon,
  XIcon,
} from "lucide-react";
import { filtersAtom } from "~/utils/atoms";

export default function Filters({ isOpen }: { isOpen: boolean }) {
  const [selectedStatus, setSelectedStatus] = useAtom(filtersAtom);
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
          className="flex w-40 flex-col gap-2 overflow-hidden"
        >
          <button
            onClick={() =>
              selectedStatus === "READ"
                ? setSelectedStatus(null)
                : setSelectedStatus("READ")
            }
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-emerald-500 transition-opacity hover:opacity-70 ${
              selectedStatus === "READ" || selectedStatus === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <BookmarkCheckIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-emerald-100"
              strokeWidth={2.5}
            />
            Read
            <AnimatePresence>
              {selectedStatus === "READ" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-px size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedStatus === "READING"
                ? setSelectedStatus(null)
                : setSelectedStatus("READING")
            }
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-orange-500 transition-opacity hover:opacity-70 ${
              selectedStatus === "READING" || selectedStatus === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <BookmarkIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-orange-100"
              strokeWidth={2.5}
            />
            Reading
            <AnimatePresence>
              {selectedStatus === "READING" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-px size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedStatus === "BUY"
                ? setSelectedStatus(null)
                : setSelectedStatus("BUY")
            }
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-sky-500 transition-opacity hover:opacity-70 ${
              selectedStatus === "BUY" || selectedStatus === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <BookmarkPlusIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-sky-100"
              strokeWidth={2.5}
            />
            Buy
            <AnimatePresence>
              {selectedStatus === "BUY" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-px size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedStatus === "WILL_READ"
                ? setSelectedStatus(null)
                : setSelectedStatus("WILL_READ")
            }
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-amber-500 transition-opacity hover:opacity-70 ${
              selectedStatus === "WILL_READ" || selectedStatus === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <BookmarkIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-amber-100"
              strokeWidth={2.5}
            />
            Will Read
            <AnimatePresence>
              {selectedStatus === "WILL_READ" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-px size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() =>
              selectedStatus === "LOST"
                ? setSelectedStatus(null)
                : setSelectedStatus("LOST")
            }
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-red-500 transition-opacity hover:opacity-70 ${
              selectedStatus === "LOST" || selectedStatus === null
                ? "opacity-100"
                : "opacity-50 "
            }`}
          >
            <BookmarkXIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-red-100"
              strokeWidth={2.5}
            />
            Dropped
            <AnimatePresence>
              {selectedStatus === "LOST" && (
                <motion.div
                  initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <XIcon className="ml-px size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
