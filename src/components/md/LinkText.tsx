import Link from "next/link";
import { primaryOrange } from "~/utils/colors";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  return (
    <Link
      href={href}
      className={`text-[${primaryOrange}] underline transition duration-200 ease-in-out hover:text-[#e64100a9]`}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default LinkText;
