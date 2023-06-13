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
        <div className="relative flex justify-center px-12 pb-24 pt-4 text-white">
          <div className="flex w-[40rem] flex-col">
            <h1 className="pb-4 text-4xl font-bold md:text-5xl">🙋🏼‍♂️ About me</h1>
            <h3 className="pb-4 text-slate-400 md:text-lg">
              June 12, 2023 • <span className="italic">2 min read</span>
            </h3>
            <div className="text-lg text-slate-300">
              <p className="pb-4">
                Hello there! My name is Gustavo and I&apos;m a software engineer
                from Brazil. I really like coding, surfing, reading books, and
                learning new things.
                <br />
                <br />
                I&apos;m currently working as a backend software engineer at a
                fintech in Curitiba called{" "}
                <Link
                  className="text-[#0abd7c] underline"
                  href="https://bancosb.com.br"
                >
                  Banco SB
                </Link>
                . This is the tech stack I use on a daily basis:
              </p>
              <ul className="list-disc pl-8">
                <li>Java ☕</li>
                <li>Spring</li>
                <li>
                  Kafka (
                  <Link
                    href="https://developer.confluent.io/learn/kraft/"
                    className="text-[#0abd7c] underline"
                  >
                    KRaft
                  </Link>
                  )
                </li>
                <li>Docker</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>AWS</li>
              </ul>
              <br />
              <p>
                Like I said, I love to learn new things, so right now I&apos;m
                studying Next.js (what I&apos;m using to build this website),
                TypeScript, and{" "}
                <Link
                  href="https://expo.dev"
                  className="text-[#0abd7c] underline"
                >
                  Expo
                </Link>
                .
              </p>
              <br />
              <p>
                Besides that, I&apos;m also co-founder of a startup called{" "}
                <Link
                  href="https://getmind.app"
                  className="text-[#0abd7c] underline"
                >
                  Mind
                </Link>
                , where me and my friend{" "}
                <Link
                  href="https://abdulhdr.com"
                  className="text-[#0abd7c] underline"
                >
                  Abdul
                </Link>{" "}
                are building an app to make going to therapy a lot easier.
              </p>
              <br />
              <p>
                I keep a record of{" "}
                <Link
                  href="https://gustavofior.notion.site/Cool-Stuff-f4f54a6fe8fe4bc1bc34c588966fb631?pvs=4"
                  className="text-[#0abd7c] underline"
                >
                  cool stuff
                </Link>{" "}
                I see on the internet, and you can pretty much tell what
                I&apos;m interested in by looking at it.
              </p>
              <br />
              <p>
                That&apos;s it! If you want to talk to me, <Link
                  href="https://cal.com/gustavo-fior"
                  className="text-[#0abd7c] underline"
                >
                  schedule
                </Link> a meeting anytime or reach me out on the links in the top right!
              </p>
              <br/>

              <div className="rounded-lg bg-white bg-opacity-30 px-8 py-4 drop-shadow-lg backdrop-blur-lg">
                <p className="text-white">The life of every human being is a journey towards oneself.</p>
                <p className="italic">Herman Hesse, <Link
                  href="https://pt.wikipedia.org/wiki/Demian"
                  className="text-[#0abd7c] underline"
                >
                  Demian
                </Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
