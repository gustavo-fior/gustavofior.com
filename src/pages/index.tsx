import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import path from "path";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import ContentWrapper from "~/components/ContentWrapper";
import LinkText from "~/components/md/LinkText";
import { primaryOrange } from "~/utils/colors";
import PostPreview from "~/components/PostPreview";

interface BlogPageProps {
  postsMetadata: PostMetadata[];
}

interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
  emoji: string;
}

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

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
        <div className="flex flex-col items-center justify-between pb-8 pt-24 sm:flex-row">
          <h1
            className={`border-[${primaryOrange}] border-b-[0.2rem] text-3xl font-bold text-white md:pb-2`}
          >
            Gustavo Fior
          </h1>
          <div className={`mt-6 flex gap-10 sm:mt-0 sm:gap-5`}>
            <Link target="_blank" href="mailto:gustavo_fior@outlook.com">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className=" transition duration-200 ease-in-out"
              >
                <HiEnvelope
                  className={`h-6 w-6 text-white hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
            <Link target="_blank" href="https://github.com/gustavo-fior">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="transition duration-200 ease-in-out"
              >
                <RxGithubLogo
                  className={`h-6 w-6 text-white hover:text-[${primaryOrange}] transition-colors duration-200`}
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
                  className={`h-6 w-6 text-white hover:text-[${primaryOrange}] transition-colors duration-200`}
                />
              </motion.div>
            </Link>
          </div>
        </div>
        <p className="text-base text-white">
          A{" "}
          <span className="bg-gradient-to-tr from-green-500 to-yellow-300 to-60% bg-clip-text text-transparent">
            brazilian{" "}
          </span>
          software developer who loves to code, surf and learn new things.{" "}
          <span className="hidden text-zinc-400 sm:inline">
            Try <span className="rounded-md bg-zinc-800 p-0.5">⌘</span>{" "}
            <span className="rounded-md bg-zinc-800 px-1.5 py-0.5">k</span>
          </span>
        </p>
        <br />
        <ul className="mb-12 space-y-2 whitespace-pre text-base text-zinc-400">
          <li>📍 Curitiba, Brazil (UTC-3)</li>
          <li>
            💻 Software Engineer @{" "}
            <LinkText href="https://sbcash.com.br">SB Cash</LinkText>
          </li>
          <li>🎓 B.Sc Business @ FAE</li>
        </ul>
        <div className="flex flex-row items-center justify-between pb-8">
          <h2
            className={`border-[${primaryOrange}] border-b-[0.2rem] text-3xl font-bold text-white md:pb-2`}
          >
            Blog
          </h2>
          <div className={`mt-6 flex gap-10 sm:mt-0 sm:gap-5`}>
            <Link href="/blog">
              <div className="group">
                <div className="flex items-center gap-2">
                  <p
                    className={`underline transition duration-200 ease-in-out `}
                  >
                    Older posts
                  </p>
                  <div className="flex items-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <BsArrowRightShort size={24} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
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
