import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  BsArrowRightShort,
  BsEnvelope,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { Gradient } from "../utils/gradient/gradient";

const Home: NextPage = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen min-h-screen flex-col text-white">
        <canvas
          id="gradient-canvas"
          className="fixed inset-0"
          data-transition-in
        />
        <div className="absolute z-50 flex w-full items-center justify-end px-24 py-16">
          <div className="flex gap-4">
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
                  <BsEnvelope size={24} color="white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-grow flex-col items-center justify-center px-24 text-white">
          <h1 className="font-bold text-3xl">Still some work to do :/</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
