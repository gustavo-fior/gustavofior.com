import { atom } from "jotai";

export const animateAtom = atom(true);
export const filtersAtom = atom<
  "READ" | "READING" | "BUY" | "WILL_READ" | "LOST" | null
>(null);
export const sortsAtom = atom<"BEST" | "WORST" | "ABC" | "ZXY" | null>(null);
