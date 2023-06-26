import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import ContentWrapper from "~/components/ContentWrapper";
import Header from "~/components/Header";
import PostPreview from "~/components/PostPreview";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface BlogPageProps {
  postsMetadata: PostMetadata[];
}

interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
}


const Blog: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContentWrapper>
        <h1 className="pb-12 text-4xl font-bold md:text-5xl">Posts</h1>
        <div className="flex flex-col gap-4">
          {postsMetadata.map((post) => {
            return (
              <PostPreview
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                slug={post.slug}
              />
            );
          })}
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


export default Blog;
