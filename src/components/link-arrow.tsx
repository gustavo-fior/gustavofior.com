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
      target={`${
        href.startsWith("http") || href.startsWith("mailto") ? "_blank" : ""
      }`}
      className={`group flex items-center transition-all duration-[150] ease-in-out hover:text-neutral-500 ${
        className ?? ""
      }`}
    >
      {children}

      {href.startsWith("http") || href.startsWith("mailto") ? (
        <ArrowUpRight className="arrow-reveal h-2.5" strokeWidth={2.6} />
      ) : (
        <ArrowRight
          className="arrow-reveal h-2.5 text-neutral-400"
          strokeWidth={2.6}
        />
      )}
    </Link>
  );
};

export default LinkArrow;
