/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { Mail, PencilLine } from "lucide-react";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useEffect } from "react";
import ContentWrapper from "~/components/ContentWrapper";
import LinkText from "~/components/md/LinkText";
import PostPreview from "~/components/PostPreview";
import { animateAtom } from "~/utils/atoms";
import { type BlogPageProps, type PostMetadata } from "./blog";
import X from "~/components/x";
import GitHub from "~/components/github";

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const [shouldAnimate, setShouldAnimate] = useAtom(animateAtom);

  useEffect(() => {
    if (shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(false);
      }, 2000);
    }

    console.log(`
    ..####...##..##...####...######...####...##..##...####..
    .##......##..##..##........##....##..##..##..##..##..##.
    .##.###..##..##...####.....##....######..##..##..##..##.
    .##..##..##..##......##....##....##..##...####...##..##.
    ..####....####....####.....##....##..##....##.....####..
    ........................................................    
`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>Gustavo Fior</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Brazilian software engineer" />
        <meta property="og:title" content="Gustavo Fior" />
        <meta property="og:description" content="Brazilian software engineer" />
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
        <meta property="twitter:description" content="Software engineer" />
      </Head>
      <ContentWrapper>
        {/* BIO */}
        <div className={`${shouldAnimate ? "animate-5" : ""}`}>
          <h1 className={`pt-16 font-serif text-2xl sm:pb-4 sm:pt-20`}>
            Gustavo Fior
          </h1>
          <p className="mt-4 pb-12 text-sm font-normal text-neutral-400 sm:mt-0">
            Brazilian software engineer who loves to code, surf, and learn new
            things.
          </p>
        </div>

        {/* PROJECTS */}
        <div className={`${shouldAnimate ? "animate-7" : ""}`}>
          <h2 className={`pb-6 text-sm text-neutral-400`}>Projects</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 pb-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/itzam.svg"
                  alt="Itzam"
                  width={16}
                  height={16}
                />
                <LinkText href="https://itz.am/">Itzam</LinkText>
              </div>
              <p className="text-sm text-neutral-500">
                AI integration has never been so easy.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src="/logos/ccc.png" alt="CCC" width={16} height={16} />
                <LinkText href="https://ccc.com.br/">CCC</LinkText>
              </div>
              <p className="text-sm text-neutral-500">Curitiba Coding Club.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/5devs.png"
                  alt="5Devs"
                  width={16}
                  height={16}
                />
                <LinkText href="https://5devs.com.br/">5Devs</LinkText>
              </div>

              <p className="text-sm text-neutral-500">
                Fake data for testing purposes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/vayo.png"
                  alt="VAYØ"
                  width={16}
                  height={16}
                />
                <LinkText href="https://vayo.me">VAYØ</LinkText>
              </div>

              <p className="text-sm text-neutral-500">
                My favorite bookmark tool.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/rafa.png"
                  alt="Rafa Resumos"
                  width={16}
                  height={16}
                />
                <LinkText href="https://rafaresumos.com.br">
                  Rafa Resumos
                </LinkText>
              </div>

              <p className="text-sm text-neutral-500">
                My girlfriend&apos;s med-school writings.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/censorfy.png"
                  alt="Censorfy"
                  width={16}
                  height={16}
                />
                <LinkText href="https://censorfy.com">Censorfy</LinkText>
              </div>
              <p className="text-sm text-neutral-500">
                AI content moderation API.{" "}
                <span className="italic text-neutral-600">(failed)</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/ache-o-pet.png"
                  alt="Ache o Pet"
                  width={16}
                  height={16}
                />
                <LinkText href="https://acheopet.com/">Ache o Pet</LinkText>
              </div>
              <p className="text-sm text-neutral-500">
                Lost & found for dogs and cats.{" "}
                <span className="italic text-neutral-600">(inactive)</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/mind.png"
                  alt="Mind"
                  width={16}
                  height={16}
                  className="rounded-sm p-[1px]"
                />
                <LinkText href="https://mind.abdulhdr.com">Mind</LinkText>
              </div>
              <p className="text-sm text-neutral-500">
                Connecting patients and therapists.{" "}
                <span className="italic text-neutral-600">(failed)</span>
              </p>
            </div>
          </div>
        </div>

        {/* WRITING */}
        <div className={`${shouldAnimate ? "animate-10" : ""}`}>
          <div className="flex justify-between pb-6 align-middle">
            <div className="flex items-center gap-2">
              <PencilLine className={`h-3.5 w-3.5 text-neutral-200`} />
              <h2 className={`text-sm text-neutral-500`}>Writing</h2>
            </div>
            <Link
              href="/blog"
              className={`text-sm text-neutral-200 underline decoration-neutral-500 transition duration-200 ease-in-out hover:decoration-orange-600 hover:decoration-[1.5px]`}
            >
              Older...
            </Link>
          </div>
          <ul className="flex flex-col">
            {sortedPostsMetadata.map((postMetadata) => (
              <motion.li key={postMetadata.slug}>
                <PostPreview
                  title={postMetadata.title}
                  description={postMetadata.description}
                  date={postMetadata.date}
                  slug={postMetadata.slug}
                />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div className={`${shouldAnimate ? "animate-15" : ""}`}>
          <div className="flex items-center justify-center gap-4 pt-0">
            <Link href="https://x.com/heyimgustavo">
              <X
                className={`h-3 w-3 text-neutral-500 transition-colors duration-200 hover:text-neutral-400`}
              />
            </Link>
            <Link href="mailto:hey@gustavofior.com">
              <Mail
                className={`h-4 w-4 text-neutral-500 transition-colors duration-200 hover:text-neutral-400`}
              />
            </Link>
          </div>
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

export default Home;
