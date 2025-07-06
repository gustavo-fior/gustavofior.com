import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`group cursor-pointer underline decoration-neutral-300 decoration-1 underline-offset-2 transition-all duration-200 ease-in-out hover:decoration-neutral-400`}
    >
      {children}

      <ArrowUpRight className="ml-0.5 inline-block h-2.5 w-2.5 text-neutral-400 transition-all duration-200 ease-in-out group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-neutral-500" />
    </Link>
  );
};

export default LinkText;
