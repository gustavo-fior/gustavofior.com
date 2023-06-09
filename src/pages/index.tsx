import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  BsArrowRightShort,
  BsTextIndentLeft,
  BsPerson,
  BsGithub,
  BsLinkedin,
  BsSpeaker,
  BsEnvelope,
} from "react-icons/bs";
import { Gradient } from "../utils/gradient/gradient";
import Link from "next/link";

const Home: NextPage = () => {
  const [showHome, setShowHome] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [showContact, setShowContact] = useState(false);

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
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <canvas
          id="gradient-canvas"
          className="fixed inset-0"
          data-transition-in
        />
        <div className="relative text-white">
          <div className="flex flex-col items-center gap-4 align-middle">
            <div className="flex space-x-4">
              <h1 className="md:text-8xl text-5xl font-bold ">Hi! I&apos;m</h1>
              <h1 className="md:text-8xl text-5xl font-bold mix-blend-difference">
                Gustavo
              </h1>
            </div>
            <div className="flex space-x-1.5">
              <p className="text-2xl">A</p>
              <p className="bg-gradient-to-tr from-green-500 to-yellow-300 bg-clip-text text-2xl text-transparent">
                brazilian
              </p>
              <p className="text-2xl">software developer</p>
            </div>
            
          </div>
        </div>
        <div className="absolute bottom-8 ">
            <div className="flex items-center gap-8 rounded-full bg-black bg-opacity-60 bg-clip-padding px-8 py-4 shadow-lg backdrop-blur">
              <div
                className={`duration-400 transition ease-in-out hover:text-white ${
                  showHome ? "text-white" : "text-gray-400"
                } `}
              >
                <BsPerson size={32} />
              </div>
              <div
                className={`duration-400 transition ease-in-out hover:text-white ${
                  showBlog ? "text-white" : "text-gray-400"
                } `}

              >
                <BsTextIndentLeft size={32} />
              </div>
              <div
                className={`duration-400 transition ease-in-out hover:text-white ${
                  showContact ? "text-white" : "text-gray-400"
                } `}
                onClick={() => setShowContact(!showContact)}
              >
                <BsEnvelope size={32} />
              </div>
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;
