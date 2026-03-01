import fs from "fs";
import matter from "gray-matter";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { type MDXComponents } from "mdx/types";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import Code from "~/components/md/Code";
import CustomImage from "~/components/md/CustomImage";
import H1 from "~/components/md/H1";
import H2 from "~/components/md/H2";
import H3 from "~/components/md/H3";
import Hr from "~/components/md/Hr";
import Li from "~/components/md/Li";
import LinkText from "~/components/md/LinkText";
import OrderedList from "~/components/md/Ol";
import P from "~/components/md/P";
import Quote from "~/components/md/Quote";
import Strong from "~/components/md/Strong";
import UnorderedList from "~/components/md/Ul";
import PostHeader from "~/components/posts/post-header";
import Italic from "~/components/md/Italic";

const mdComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  strong: Strong,
  italic: Italic,
  li: Li,
  p: P,
  a: LinkText,
  blockquote: Quote,
  ul: UnorderedList,
  ol: OrderedList,
  img: CustomImage,
  pre: Code,
  hr: Hr,
  em: Italic,
};

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

      <div className="flex flex-col pb-48">
        <PostHeader
          title={metadata.title}
          date={metadata.date}
          readTime={metadata.readTime}
          emoji={metadata.emoji}
        />
        <MDXRemote
          {...content}
          components={mdComponents as unknown as MDXComponents}
        />
      </div>
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
  const readTime = Math.ceil(content.split(" ").length / 150);
  data.readTime = `${readTime} min`;

  return {
    props: {
      metadata: data as PostMetadata,
      content: mdxSource as MDXRemoteSerializeResult,
    },
  };
};

export default Post;
