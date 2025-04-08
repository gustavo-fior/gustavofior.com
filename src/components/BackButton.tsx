import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackButton = ({ href }: { href: string }) => {
  return (
    <div className="pb-6 pt-12">
      <Link href={href}>
        <ArrowLeft
          className={`cursor-pointer text-xl h-4 w-4 transition duration-200 ease-in-out hover:text-orange-600`}
        />
      </Link>
    </div>
  );
};

export default BackButton;
