import { useKBar } from "kbar";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsArrowLeftShort,
  BsCommand,
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const Header: React.FC = () => {
  const router = useRouter();
  const { query } = useKBar();
  const { asPath } = router;

  return (
    <div
      className={`flex w-full ${
        asPath === "/" ? "absolute" : ""
      } items-center justify-center py-12 sm:justify-between sm:px-24 md:py-16`}
    >
      <div className={`${asPath === "/" ? "" : "pr-4"}`}>
        <Link href={asPath.includes("/blog/post/") ? "/blog" : "/"}>
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
        <div
          onClick={() => query.toggle()}
          className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:cursor-pointer hover:bg-opacity-50"
        >
          <div className="flex items-center gap-2">
            <BsCommand size={24} color="white" />
          </div>
        </div>
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
