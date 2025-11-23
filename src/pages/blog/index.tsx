import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import path from "path";
import PostPreview from "~/components/posts/post-preview";

export interface BlogPageProps {
  postsMetadata: PostMetadata[];
}

export interface PostMetadata {
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

  return (
    <>
      <Head>
        <title>Gustavo Fior</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Just some thoughts" />
        <meta property="og:title" content="Gustavo's posts" />
        <meta property="og:description" content="Just some thoughts" />
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
        <meta property="twitter:description" content="Blog" />
      </Head>
      <div className="flex flex-col">
        <motion.ul className="flex flex-col pb-48">
          {sortedPostsMetadata.map((post) => {
            return (
              <motion.li key={post.slug}>
                <PostPreview
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  slug={post.slug}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
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
