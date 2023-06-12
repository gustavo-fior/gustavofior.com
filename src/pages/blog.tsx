import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  BsEnvelopeFill,
  BsGithub,
  BsHouseFill,
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
        <div className="flex w-full items-center justify-center py-12 sm:justify-between sm:px-24 md:py-16">
          <div className="pr-4">
            <Link href="/">
              <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
                <div className="flex items-center gap-2">
                  <BsHouseFill size={24} color="white" />
                </div>
              </div>
            </Link>
          </div>
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
                  <BsEnvelopeFill size={24} color="white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-grow flex-col px-16 pb-24 pt-4 text-white md:px-96">
          <h1 className="pb-6 text-4xl font-bold md:text-5xl">
            🚀 Some day...
          </h1>
          <div className="pb-4 text-lg text-slate-300">
            <p>Sorry, I promise that I&#39;ll code this soon.</p>
            <br/>
            <p>
              Remind me to do it reaching me out on{" "}
              <Link href="https://instagram.com/gustavo.fior">
                <span className="underline">Instagram</span>
              </Link>
              ! :)
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
