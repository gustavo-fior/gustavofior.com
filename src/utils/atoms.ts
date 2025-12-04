import { atom } from "jotai";

export const animateAtom = atom(true);
export const filtersAtom = atom<
  "READ" | "READING" | "BUY" | "WILL_READ" | "LOST" | null
>(null);
export const sortsAtom = atom<"BEST" | "WORST" | "ABC" | "ZXY" | null>(null);
export const languagesAtom = atom<"PT" | "EN">("PT");
export const expandedProjectsAtom = atom(false);
export const isBooksFilterOpenAtom = atom(false);
