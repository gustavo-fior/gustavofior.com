import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LinkArrowProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkArrow = ({ children, href, className }: LinkArrowProps) => {
  return (
    <Link
      href={href}
      target={`${href.startsWith("http") ? "_blank" : ""}`}
      className={`group flex items-center gap-1 transition-all duration-200 ease-in-out hover:text-neutral-500 ${
        className ?? ""
      }`}
    >
      {children}

      {href.startsWith("http") ? (
        <ArrowUpRight
          className={`h-2.5 w-2.5 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:text-neutral-400 group-hover:opacity-100`}
          strokeWidth={1.5}
        />
      ) : (
        <ArrowRight
          className={`h-2.5 w-2.5 text-neutral-400 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:opacity-100`}
          strokeWidth={1.5}
        />
      )}
    </Link>
  );
};

export default LinkArrow;
