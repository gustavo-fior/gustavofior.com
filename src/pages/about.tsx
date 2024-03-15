import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import ContentWrapper from "~/components/ContentWrapper";
import LinkText from "~/components/md/LinkText";

const About: NextPage = () => {
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
        <h1 className="pt-24 text-2xl font-bold md:text-3xl">About me</h1>
        <div className="mb-12 mt-1 w-24 rounded-full border-[0.1rem] border-[#e64100]" />
        <motion.ul className="flex flex-col gap-4"></motion.ul>
        <h1 className="pb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          🙋🏼‍♂️
        </h1>
        <div className="pt-4 text-lg text-slate-300">
          <p className="pb-4">
            Hello there! My name is Gustavo and I&apos;m a software engineer
            from Brazil. I really like coding, surfing, reading books, and
            learning new things.
            <br />
            <br />
            I&apos;m currently working as a backend software engineer at a
            fintech in Curitiba called{" "}
            <LinkText href="https://bancosb.com.br">SB Cash</LinkText>. This is
            the tech stack I use on a daily basis:
          </p>
          <ul className="list-disc pl-8">
            <li>Java ☕</li>
            <li>Spring</li>
            <li>
              Kafka (
              <LinkText href="https://developer.confluent.io/learn/kraft/">
                KRaft
              </LinkText>
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
            TypeScript, and <LinkText href="https://expo.dev">Expo</LinkText>.
          </p>
          <br />
          <p>
            Besides that, I&apos;m also co-founder of a startup called{" "}
            <LinkText href="https://getmind.app">Mind</LinkText>, where me and
            my friend <LinkText href="https://abdulhdr.com">Abdul</LinkText> are
            building an app to make going to therapy a lot easier.
          </p>
          <br />
          <p>
            I keep a record of{" "}
            <LinkText href="https://bookmarks.gustavofior.com/bookmarks/public/clnkrbko900011151mn3ah1bd">
              cool stuff
            </LinkText>{" "}
            I see on the internet, and you can pretty much tell what I&apos;m
            interested in by looking at it. Btw, this a tool I built to organize
            my bookmarks,{" "}
            <LinkText href="https://github.com/gustavo-fior/bookmarks">
              it&apos;s open source
            </LinkText>{" "}
            and{" "}
            <LinkText href="https://bookmarks.gustavofior.com">free</LinkText>!
          </p>
          <br />
          <p>
            That&apos;s it! If you want to talk to me,{" "}
            <LinkText href="https://cal.com/gustavo-fior">schedule</LinkText> a
            meeting anytime or reach me out on the links in the top right!
          </p>
          <br />

          <div className="rounded-lg bg-white bg-opacity-20 px-6 py-4 drop-shadow-lg backdrop-blur-lg">
            <p className="text-white">
              The life of every human being is a journey towards oneself.
            </p>
            <p className="italic">
              Herman Hesse,{" "}
              <LinkText href="https://en.wikipedia.org/wiki/Demian">
                Demian
              </LinkText>
            </p>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default About;
