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
      className={`text-neutral-200 underline decoration-neutral-600 transition duration-200 ease-in-out hover:decoration-orange-600 hover:decoration-[1.5px]`}
    >
      {children}
    </Link>
  );
};

export default LinkText;
