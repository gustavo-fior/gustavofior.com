import fs from "fs";
import matter from "gray-matter";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Header from "~/components/Header";
import PostHeader from "~/components/PostHeader";
import ContentWrapper from "~/components/ContentWrapper";

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
      <Header />
      <ContentWrapper>
      <PostHeader title={metadata.title} date={metadata.date} readTime={metadata.readTime} emoji={metadata.emoji} />
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

  return {
    props: {
      metadata: data as PostMetadata,
      content: mdxSource as MDXRemoteSerializeResult,  
    },
  };
};

export default Post;
