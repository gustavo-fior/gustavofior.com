import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  return (
    <Link
      href={href}
      className={`underline transition duration-200 ease-in-out text-neutral-200 decoration-neutral-500 hover:decoration-[#00e645]`}
    >
      {children}
    </Link>
  );
};

export default LinkText;
