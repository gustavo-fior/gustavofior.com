import Image from "next/image";
import Link from "next/link";
import { getGoogleFavicon } from "~/utils/google-favicon";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText = ({ children, href }: LinkTextProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`group inline-block cursor-pointer transition-all duration-200 ease-in-out`}
    >
      {href.startsWith("http") && (
        <Image
          src={getGoogleFavicon(href || "")}
          alt=""
          width={256}
          height={256}
          className="my-0 mb-[3px] ml-[3px] mr-1.5 inline-block size-[13px] rounded-sm"
        />
      )}

      <p className="inline-block text-neutral-800 underline decoration-neutral-300 decoration-1 underline-offset-2 transition-all duration-200 ease-in-out group-hover:decoration-neutral-400">
        {children}
      </p>

      {/* {href.startsWith("http") ? (
        <ArrowUpRight className="ml-0.5 inline-block size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-neutral-500" />
      ) : (
        <ArrowRight className="ml-0.5 inline-block size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-neutral-500" />
      )} */}
    </Link>
  );
};

export default LinkText;
