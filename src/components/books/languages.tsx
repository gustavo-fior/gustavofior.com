import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { HouseIcon, PlaneIcon } from "lucide-react";
import { languagesAtom } from "~/utils/atoms";

export default function Languages({ isOpen }: { isOpen: boolean }) {
  const [selectedLanguage, setSelectedLanguage] = useAtom(languagesAtom);
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
            onClick={() => setSelectedLanguage("PT")}
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-neutral-500 transition-opacity hover:opacity-70 ${
              selectedLanguage === "PT" || selectedLanguage === null
                ? "opacity-100"
                : "opacity-50"
            }`}
          >
            <HouseIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-neutral-200"
              strokeWidth={2.5}
            />
            PT
          </button>
          <button
            onClick={() => setSelectedLanguage("EN")}
            className={`flex w-fit select-none items-center gap-1.5 text-[12px] text-neutral-500 transition-opacity hover:opacity-70 ${
              selectedLanguage === "EN" || selectedLanguage === null
                ? "opacity-100"
                : "opacity-50"
            }`}
          >
            <PlaneIcon
              className="mb-[1px] ml-0.5 size-2.5 fill-neutral-200"
              strokeWidth={2.5}
            />
            EN
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
