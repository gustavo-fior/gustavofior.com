import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ContentWrapper from "~/components/ContentWrapper";
import { primaryOrange } from "~/utils/colors";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Brazilian software engineer" />
        <meta property="og:title" content="Gustavo Fior" />
        <meta property="og:description" content="Brazilian software engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gustavofior.com" />
        <meta property="og:site_name" content="Gustavo Fior" />
        <meta
          property="og:image"
          content="https://www.gustavofior.com/api/og"
        />
      </Head>
      <ContentWrapper>
        <div className="flex flex-row items-center justify-between pb-8 pt-24">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Gustavo Fior</h1>
            <div
              className={`mt-1 border-[0.1rem] border-[${primaryOrange}] w-48 rounded-full`}
            />
          </div>
          <div className={`flex gap-5`}>
            <Link target="_blank" href="mailto:gustavo_fior@outlook.com">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className=" transition duration-200 ease-in-out"
              >
                <EnvelopeClosedIcon
                  className={`h-6 w-6 text-white hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
            <Link target="_blank" href="https://github.com/gustavo-fior">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="transition duration-200 ease-in-out"
              >
                <GitHubLogoIcon
                  className={`h-6 w-6 text-white hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/gustavo-fior-a910781b4/"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className=" transition duration-200 ease-in-out"
              >
                <LinkedInLogoIcon
                  className={`h-6 w-6 text-white hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
          </div>
        </div>
        <p className="text-base text-zinc-400">
          A{" "}
          <span className="bg-gradient-to-tr from-green-500  to-yellow-300 to-60% bg-clip-text text-transparent">
            brazilian{" "}
          </span>
          software developer who loves to code, surf and learn new things.{" "}
          <span className="hidden text-white sm:inline">
            Try{" "}
            <span className="rounded-md bg-white bg-opacity-20 p-0.5">⌘</span>{" "}
            <span className="rounded-md bg-white bg-opacity-20 px-1.5 py-0.5">
              k
            </span>
          </span>
        </p>
      </ContentWrapper>
      {/* <div className="flex h-screen flex-col justify-center px-8 align-middle text-white md:px-24">
        <div className="flex flex-col">
          <div className="load flex -translate-y-6 flex-wrap opacity-0 transition duration-1000 md:space-x-4">
            <h1 className="text-5xl font-bold lg:text-7xl">
              Hi! I&apos;m{" "}
              <span className=" top-20 text-white mix-blend-difference">
                Gustavo
              </span>
            </h1>
          </div>
          <div className="load -translate-y-6 pb-5 pt-3 opacity-0 transition duration-700">
            <p className=" text-xl text-slate-300">
              A{" "}
              <span className="bg-gradient-to-tr from-green-500  to-yellow-300 to-60% bg-clip-text text-transparent">
                brazilian{" "}
              </span>
              software developer who loves to code, surf and{" "}
              <br className="hidden md:inline" />
              learn new things.{" "}
              <span className="hidden text-white sm:inline">
                Try{" "}
                <span className="rounded-md bg-white bg-opacity-20 p-0.5">
                  ⌘
                </span>{" "}
                <span className="rounded-md bg-white bg-opacity-20 px-1.5 py-0.5">
                  k
                </span>
              </span>
            </p>
          </div>

          <div className="load flex -translate-y-6 items-center  gap-4 opacity-0 transition duration-500">
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.015 }}
                className="rounded-full bg-white px-4 py-1.5 transition duration-200 ease-in-out hover:bg-opacity-80"
              >
                <div className="flex items-center gap-2">
                  <p>🙋🏼‍♂️</p>
                  <p className="mix-blend-difference">About me</p>
                </div>
              </motion.div>
            </Link>
            <Link href="/blog">
              <div className="group rounded-full bg-white bg-opacity-20 px-4 py-1.5 drop-shadow-lg backdrop-blur-lg duration-200 hover:bg-opacity-40">
                <div className="flex items-center gap-2">
                  <p>My blog</p>
                  <div className="flex items-center transition-transform duration-500 group-hover:translate-x-1">
                    <BsArrowRightShort size={24} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
