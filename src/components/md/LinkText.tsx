import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`group relative flex items-center gap-0.5 text-neutral-600 transition-all duration-100 ease-in-out hover:text-neutral-800`}
    >
      {children}
      <ArrowUpRight className="h-2.5 w-2.5 opacity-0 transition-all duration-100 ease-in-out group-hover:h-3 group-hover:w-3 group-hover:translate-x-1 group-hover:text-neutral-400 group-hover:opacity-100" />
    </Link>
  );
};

export default LinkText;
