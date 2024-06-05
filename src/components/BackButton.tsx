import Link from "next/link";
import { RxArrowLeft } from "react-icons/rx";

const BackButton = ({ href }: { href: string }) => {
  return (
    <div className="pb-6 pt-12">
      <Link href={href}>
        <RxArrowLeft
          className={`cursor-pointer text-xl transition duration-200 ease-in-out hover:text-[#e64100]`}
        />
      </Link>
    </div>
  );
};

export default BackButton;
