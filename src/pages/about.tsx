import { motion, type Variants } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ContentWrapper from "~/components/ContentWrapper";
import LinkText from "~/components/md/LinkText";

const About: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to my house" />
        <meta property="og:title" content="Gustavo's home" />
        <meta property="og:description" content="Welcome to my house" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gustavofior.com" />
        <meta property="og:site_name" content="Gustavo Fior" />
        <meta
          property="og:image"
          content="https://www.gustavofior.com/api/og"
        />
      </Head>
      <ContentWrapper>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <h1 className="pb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            🙋🏼‍♂️
          </h1>
          <h1 className="pb-4 text-4xl font-bold md:text-5xl">About me</h1>
          <h3 className="pb-4 text-slate-400 md:text-lg">
            June 12, 2023 • <span className="italic">2 min read</span>
          </h3>
          <div className="pt-4 text-lg text-slate-300">
            <p className="pb-4">
              Hello there! My name is Gustavo and I&apos;m a software engineer
              from Brazil. I really like coding, surfing, reading books, and
              learning new things.
              <br />
              <br />
              I&apos;m currently working as a backend software engineer at a
              fintech in Curitiba called{" "}
              <LinkText href="https://bancosb.com.br">SB Cash</LinkText>. This
              is the tech stack I use on a daily basis:
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
              my friend <LinkText href="https://abdulhdr.com">Abdul</LinkText>{" "}
              are building an app to make going to therapy a lot easier.
            </p>
            <br />
            <p>
              I keep a record of{" "}
              <LinkText href="https://bookmarks.gustavofior.com/bookmarks/public/clnkrbko900011151mn3ah1bd">
                cool stuff
              </LinkText>{" "}
              I see on the internet, and you can pretty much tell what I&apos;m
              interested in by looking at it. Btw, this a tool I built to
              organize my bookmarks,{" "}
              <LinkText href="https://github.com/gustavo-fior/bookmarks">
                it&apos;s open source
              </LinkText>{" "}
              and{" "}
              <LinkText href="https://bookmarks.gustavofior.com">free</LinkText>
              !
            </p>
            <br />
            <p>
              That&apos;s it! If you want to talk to me,{" "}
              <LinkText href="https://cal.com/gustavo-fior">schedule</LinkText>{" "}
              a meeting anytime or reach me out on the links in the top right!
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
        </motion.div>
      </ContentWrapper>
    </>
  );
};

export default About;
