/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import path from "path";
import { useEffect } from "react";
import ContentWrapper from "~/components/ContentWrapper";
import { animateAtom } from "~/utils/atoms";
import { type BlogPageProps, type PostMetadata } from "./blog";
import LinkText from "~/components/md/LinkText";
import PostPreview from "~/components/PostPreview";
import Link from "next/link";
import { RxEnvelopeOpen, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const [shouldAnimate, setShouldAnimate] = useAtom(animateAtom);

  useEffect(() => {
    if (shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(false);
      }, 2000);
    }

    console.log(`
    ..####...##..##...####...######...####...##..##...####..
    .##......##..##..##........##....##..##..##..##..##..##.
    .##.###..##..##...####.....##....######..##..##..##..##.
    .##..##..##..##......##....##....##..##...####...##..##.
    ..####....####....####.....##....##..##....##.....####..
    ........................................................    
`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>Gustavo Fior</title>
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

        <meta
          property="twitter:image"
          content="https://www.gustavofior.com/api/og"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Gustavo Fior" />
        <meta property="twitter:description" content="Software engineer" />
      </Head>
      <ContentWrapper>
        {/* BIO */}
        <div className="animate-5">
          <h1
            className={`pt-16 text-lg font-semibold text-neutral-200 sm:pb-4 sm:pt-24`}
          >
            Gustavo Fior
          </h1>
          <p className="mt-4 pb-12 text-base text-neutral-500 sm:mt-0">
            Just a brazilian software engineer who loves to code, surf, and
            learn new things.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="animate-7">
          <h2 className={`pb-6 text-sm text-neutral-500`}>Projects</h2>
          <div className="grid grid-cols-3 gap-8 pb-12">
            <div className="flex flex-col gap-2">
              <LinkText href="https://5devs.com.br/">5Devs</LinkText>
              <p className="text-sm text-neutral-500">
                A website to get fake brazilian data for testing purposes.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <LinkText href="https://vayo.cc">VAYØ</LinkText>
              <p className="text-sm text-neutral-500">
                A bookmark tool where you can save, search and share your links.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <LinkText href="https://apps.apple.com/us/app/mind/id6467673373">
                  Mind
                </LinkText>{" "}
              </p>
              <p className="text-sm text-neutral-500">
                A mental health app that helps patients and therapists connect{" "}
                <span className="italic">(failed)</span>.
              </p>
            </div>
          </div>
        </div>

        {/* WRITING */}
        <div className="animate-10">
          <div className="flex justify-between pb-6 align-middle">
            <h2 className={`text-sm text-neutral-500`}>Writing</h2>
            <Link
              href="/blog"
              className={`text-sm text-neutral-200 underline decoration-neutral-500 transition duration-200 ease-in-out hover:decoration-[#e64100]`}
            >
              Older...
            </Link>
          </div>
          <ul className="flex flex-col">
            {sortedPostsMetadata.map((postMetadata) => (
              <motion.li key={postMetadata.slug}>
                <PostPreview
                  title={postMetadata.title}
                  description={postMetadata.description}
                  date={postMetadata.date}
                  slug={postMetadata.slug}
                />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div className="animate-15">
          <h2 className={`pb-6 pt-8 text-sm text-neutral-500`}>Connect</h2>
          <div className="flex gap-8">
            <motion.div className="flex items-center gap-2 transition duration-200 ease-in-out">
              <RxEnvelopeOpen
                className={`h-4 w-4 text-neutral-500 transition-colors duration-200`}
              />
              <LinkText href="mailto:hey@gustavofior.com">
                <p className="text-sm">Email</p>
              </LinkText>
            </motion.div>
            <motion.div className="flex items-center gap-2 transition duration-200 ease-in-out">
              <RxGithubLogo
                className={`h-4 w-4 text-neutral-500 transition-colors duration-200`}
              />
              <LinkText href="https://github.com/gustavo-fior">
                <p className="text-sm">GitHub</p>
              </LinkText>
            </motion.div>
            <motion.div className="flex items-center gap-2 transition duration-200 ease-in-out">
              <RxLinkedinLogo
                className={`h-4 w-4 text-neutral-500 transition-colors duration-200`}
              />
              <LinkText href="https://linkedin.com/in/gustavo-fior-a910781b4/">
                <p className="text-sm">LinkedIn</p>
              </LinkText>
            </motion.div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogPageProps> = () => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const mdxFiles = fileNames.filter(
    (fileName) => path.extname(fileName) === ".mdx"
  );

  const postsMetadata: PostMetadata[] = mdxFiles.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as PostMetadata;
  });

  return {
    props: {
      postsMetadata,
    },
  };
};

export default Home;
