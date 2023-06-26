import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  return (
    <Link href={href} className="text-[#0abd7c] underline" target="_blank">
      {children}
    </Link>
  );};

export default LinkText;