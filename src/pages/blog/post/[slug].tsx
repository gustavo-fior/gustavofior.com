import fs from "fs";
import matter from "gray-matter";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Header from "~/components/Header";
import PostHeader from "~/components/PostHeader";
import ContentWrapper from "~/components/ContentWrapper";
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PostMetadata {
  title: string;
  description: string;
  date: string;
  readTime: string;
  emoji: string;
}

interface PostProps {
  metadata: PostMetadata;
  content: MDXRemoteSerializeResult;
}

const postVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Post = ({ metadata, content }: PostProps) => {
  const [isPostOpen, setIsPostOpen] = useState(false);

  useEffect(() => {
    setIsPostOpen(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://www.gustavofior.com/api/post/og?title=${metadata.title}&description=${metadata.description}&emoji=${metadata.emoji}`}
        />
      </Head>
      <Header />
      <ContentWrapper>
        <motion.div
          initial={false}
          animate={isPostOpen ? "open" : "closed"}
          variants={postVariants}
        >
          <PostHeader
            title={metadata.title}
            date={metadata.date}
            readTime={metadata.readTime}
            emoji={metadata.emoji}
          />
          <MDXRemote {...content} />
        </motion.div>
      </ContentWrapper>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    `${slug as string}.mdx`
  );

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content, { scope: data });

  // add read time to metadata object
  const readTime = Math.ceil(content.split(" ").length / 180);
  data.readTime = `${readTime} min`;

  return {
    props: {
      metadata: data as PostMetadata,
      content: mdxSource as MDXRemoteSerializeResult,
    },
  };
};

export default Post;
