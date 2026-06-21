import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["Amiri", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
