import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), "src", "posts");

export const getPostsMetadata = (): PostMetadata[] => {
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

  return postsMetadata;
};
