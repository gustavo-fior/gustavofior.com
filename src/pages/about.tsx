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
          <h1 className="pb-6 text-4xl font-bold md:text-5xl">🙋🏼‍♂️ About me</h1>
          <div className="text-lg text-slate-300">
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
              eros, auctor ut maximus non, imperdiet tempus dui. Cras efficitur
              arcu elit, et malesuada metus laoreet nec. In eget fringilla
              neque. Praesent fermentum accumsan libero, sed efficitur dui
              vestibulum in. Nunc bibendum, libero sit amet ullamcorper maximus,
              magna arcu efficitur lacus, eget luctus nulla nunc nec velit. Duis
              sodales dictum tellus in cursus. Duis finibus, urna eu hendrerit
              auctor, diam ligula tempus sem, sit amet finibus urna orci vel
              augue. Nullam viverra fringilla nibh, a varius justo accumsan
              quis. Nullam at nibh quis mauris tincidunt interdum. Sed arcu
              metus, ullamcorper non neque ac, mollis blandit dolor. Sed
              fermentum ligula ut sagittis efficitur. Integer luctus ullamcorper
              lorem at finibus.
            </p>
            <div className="rounded-lg bg-white bg-opacity-30 py-4 px-8 drop-shadow-lg backdrop-blur-lg">
              <p className="text-white">
                This is a quote
              </p>
              <p className="italic">
                Ernest Hemingway
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
