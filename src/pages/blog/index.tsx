import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
import PostPreview from "~/components/PostPreview";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative flex justify-center px-12 pb-24 pt-4 text-white">
        <div className="flex w-[40rem] flex-col">
          <h1 className="pb-12 text-4xl font-bold md:text-5xl">📜 Posts</h1>
          <div className="flex flex-col gap-4">
            <PostPreview
              title="Wish you were here"
              emoji="🌊"
              description="This is a dummy description!"
              date="June 21, 2032"
              slug="/"
            />
            <hr className="mx-6 border-slate-500" />
            <PostPreview
              title="The surface"
              emoji="🦀"
              description="This is a dummy description!"
              date="June 21, 2032"
              slug="/"
            />
            <hr className="mx-6 border-slate-500" />
            <PostPreview
              title="LLMs"
              emoji="🖥️"
              description="This is a dummy description!"
              date="June 21, 2032"
              slug="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
