/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import { useEffect, useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import ContentWrapper from "~/components/ContentWrapper";
import PostPreview from "~/components/PostPreview";
import { type Song } from "~/components/Spotify";
import LinkText from "~/components/md/LinkText";
import { primaryOrange } from "~/utils/colors";
import { type BlogPageProps, type PostMetadata } from "./blog";

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const [showSong, setShowSong] = useState<boolean>(false);
  const [song, setSong] = useState<Song | null>(null);
  const { asPath } = useRouter();
  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  useEffect(() => {
    const apiUrl = "/api/spotify/song";

    if (asPath === "/") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSong(data as Song);
          setShowSong(true);
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  }, [asPath]);

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
        <div className="flex items-center justify-between sm:pb-8 pt-16 sm:pt-32">
          <h1
            className={`text-lg font-semibold text-neutral-500`}
          >
            Gustavo Fior
          </h1>
          <div className={`flex gap-8 sm:gap-5`}>
            <Link target="_blank" href="mailto:gustavo_fior@outlook.com">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className=" transition duration-200 ease-in-out"
              >
                <HiEnvelope
                  className={`h-5 w-5 text-neutral-200 hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
            <Link target="_blank" href="https://github.com/gustavo-fior">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="transition duration-200 ease-in-out"
              >
                <RxGithubLogo
                  className={`h-5 w-5 text-neutral-200 hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/gustavo-fior-a910781b4/"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className=" transition duration-200 ease-in-out"
              >
                <RxLinkedinLogo
                  className={`h-5 w-5 text-neutral-200 hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
          </div>
        </div>
        <p className="mt-12 pb-6 text-base text-neutral-200 sm:mt-0">
          Just a brazilian guy who loves to code, surf and learn new things.
        </p>

        <p className="mt-1 pb-12 text-base text-neutral-200 sm:mt-0">
          Currently living in Curitiba, Brazil and working as a Software
          Engineer at <LinkText href="https://sbcash.com.br">SB Cash</LinkText>.
          I also have a B.Sc in Business from FAE.
        </p>
        <h2 className={`pb-8 text-lg font-semibold text-neutral-500`}>Blog</h2>
        <ul className="flex flex-col pb-4">
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
        <div className={`flex justify-end`}>
          {/* <Link href="/blog">
            <div className="group">
              <div className="flex items-center gap-1 align-middle text-neutral-500 group-hover:text-neutral-300">
                <p className={`underline transition duration-200 ease-in-out `}>
                  Older posts
                </p>
                <div className="hidden items-center transition-transform duration-300 group-hover:translate-x-0.5 sm:flex">
                  <BsArrowRightShort size={20} />
                </div>
              </div>
            </div>
          </Link> */}
          <Link
            href="/blog"
            className={`text-neutral-200 underline decoration-neutral-500 transition duration-200 ease-in-out hover:decoration-[#e64100]`}
          >
            Older posts
          </Link>
        </div>
        {/* {showSong && song && <Spotify song={song} />} */}
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
