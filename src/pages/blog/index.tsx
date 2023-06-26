import { type NextPage } from "next";
import Head from "next/head";
import ContentWrapper from "~/components/ContentWrapper";
import Header from "~/components/Header";
import PostPreview from "~/components/PostPreview";
import { getPostsMetadata } from "./postMetadata";

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

export function getServerSideProps() {
  const postsMetadata = getPostsMetadata();

  return {
    props: {
      postsMetadata,
    },
  };
}


export default Blog;
