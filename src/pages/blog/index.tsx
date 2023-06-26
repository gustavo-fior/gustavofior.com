import { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import PostPreview from "~/components/PostPreview";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { useEffect, useState } from "react";
import ContentWrapper from "~/components/ContentWrapper";

interface BlogPageProps {
  posts: PostMetadata[];
}

interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
}

const Blog: NextPage<BlogPageProps> = () => {
  const [postsMetadata, setPostsMetadata] = useState<PostMetadata[]>([]);

  useEffect(() => {
    fetch("/api/metadata")
      .then((response) => response.json())
      .then((data: PostMetadata[]) => setPostsMetadata(data))
      .catch((error) => console.error(error));
  }, []);

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

export default Blog;
