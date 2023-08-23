import { type Variants, motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import path from "path";
import { useEffect, useState } from "react";
import ContentWrapper from "~/components/ContentWrapper";
import Header from "~/components/Header";
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

const Blog: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  // Sort the postsMetadata array by date in descending order
  const sortedPostsMetadata = postsMetadata.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [isOpen, setIsOpen] = useState(false);

  const itemVariants: Variants = {
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
        <meta
          property="og:image"
          content="https://www.gustavofior.com/api/og"
        />
      </Head>
      <Header />
      <ContentWrapper>
        <h1 className="pb-12 pl-6 text-4xl font-bold md:text-5xl">Posts</h1>
        <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
          <motion.ul
            className="flex flex-col gap-4"
            variants={{
              open: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
          >
            {sortedPostsMetadata.map((post) => {
              return (
                <motion.li key={post.slug} variants={itemVariants}>
                  <PostPreview
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    slug={post.slug}
                    emoji={post.emoji}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
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

export default Blog;
