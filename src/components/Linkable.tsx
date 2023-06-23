import Link from "next/link";

type LinkTextProps = {
  link: string;
  children: React.ReactNode;
};

const LinkText: React.FC<LinkTextProps> = ({ link, children }) => {
  return (
    <Link href={link} className="text-[#0abd7c] underline" target="_blank">
      {children}
    </Link>
  );
};

export default LinkText;
