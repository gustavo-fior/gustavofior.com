import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Header from "~/components/Header";
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
        <Header />
        <div className="relative flex justify-center px-12 pb-24 pt-4 text-white">
          <div className="flex w-[40rem] flex-col">
            <h1 className="pb-4 text-4xl font-bold md:text-5xl">
              🚀 Some day...
            </h1>
            <h3 className="pb-4 text-slate-400 md:text-lg">
              June 21, 2023 • <span className="italic">1 min read</span>
            </h3>
            <div className="text-lg text-slate-300">
              <p>Sorry, I promise that I&#39;ll code this soon.</p>
              <br />
              <p>
                Remind me to do it reaching me out on{" "}
                <Link href="https://instagram.com/gustavo.fior">
                  <span className="text-[#0abd7c] underline">Instagram</span>
                </Link>
                ! :)
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
