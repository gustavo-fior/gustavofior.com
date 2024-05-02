import fs from "fs";
import matter from "gray-matter";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import BackButton from "~/components/BackButton";
import ContentWrapper from "~/components/ContentWrapper";
import PostHeader from "~/components/PostHeader";

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

const Post = ({ metadata, content }: PostProps) => {
  return (
    <div>
      <Head>
        <title>{metadata.title} | Gustavo Fior</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gustavofior.com" />
        <meta property="og:site_name" content="Gustavo Fior" />
        <meta
          property="og:image"
          content={`https://www.gustavofior.com/api/post/og?title=${metadata.title}&emoji=${metadata.emoji}`}
        />
        <meta
          property="twitter:image"
          content={`https://www.gustavofior.com/api/post/og?title=${metadata.title}&emoji=${metadata.emoji}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
      </Head>

      <ContentWrapper>
        <BackButton />
        <PostHeader
          title={metadata.title}
          date={metadata.date}
          readTime={metadata.readTime}
          emoji={metadata.emoji}
        />
        <MDXRemote {...content} />
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
