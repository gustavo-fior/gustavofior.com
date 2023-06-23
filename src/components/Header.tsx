import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsArrowLeftShort,
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const Header: React.FC = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="flex w-full items-center justify-center py-12 sm:justify-between sm:px-24 md:py-16">
      <div className="pr-4">
        <Link href="/">
          {asPath !== "/" ? (
            <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
              <div className="flex items-center gap-2">
                <BsArrowLeftShort size={24} color="white" />
              </div>
            </div>
          ) : null}
        </Link>
      </div>
      <div className={`flex gap-4`}>
        <Link href="https://github.com/gustavo-fior">
          <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
            <div className="flex items-center gap-2">
              <BsGithub size={24} color="white" />
            </div>
          </div>
        </Link>
        <Link href="https://linkedin.com/in/gustavo-fior-a910781b4/">
          <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
            <div className="flex items-center gap-2">
              <BsLinkedin size={24} color="white" />
            </div>
          </div>
        </Link>
        <Link href="mailto:gustavo_fior@outlook.com">
          <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
            <div className="flex items-center gap-2">
              <BsEnvelopeFill size={24} color="white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
