import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackButton = ({ href }: { href: string }) => {
  return (
    <div className="pb-10 pt-12">
      <Link href={href}>
        <ArrowLeft
          className={`h-4 w-4 cursor-pointer text-xl text-neutral-400 transition duration-200 ease-in-out hover:-translate-x-0.5 hover:text-neutral-500`}
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );
};

export default BackButton;
