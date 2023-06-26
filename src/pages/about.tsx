import { type NextPage } from "next";
import Head from "next/head";
import ContentWrapper from "~/components/ContentWrapper";
import Header from "~/components/Header";
import LinkText from "~/components/md/LinkText";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContentWrapper>
        <h1 className="pb-4 text-4xl font-bold md:text-5xl">🙋🏼‍♂️ About me</h1>
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
            <LinkText href="https://gustavofior.notion.site/Cool-Stuff-f4f54a6fe8fe4bc1bc34c588966fb631?pvs=4">
              cool stuff
            </LinkText>{" "}
            I see on the internet, and you can pretty much tell what I&apos;m
            interested in by looking at it.
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
