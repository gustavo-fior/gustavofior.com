/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { ArrowUpRight, Mail } from "lucide-react";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useEffect } from "react";
import ContentWrapper from "~/components/ContentWrapper";
import LinkArrow from "~/components/LinkArrow";
import PostPreview from "~/components/PostPreview";
import X from "~/components/x";
import { animateAtom } from "~/utils/atoms";
import { type BlogPageProps, type PostMetadata } from "./blog";

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
        {/* MAIN CONTENT */}
        <div className="flex-1">
          {/* BIO */}
          <div className={`${shouldAnimate ? "animate-5" : ""}`}>
            <div className="flex items-center justify-between pt-16 sm:pb-4 sm:pt-20">
              <h1 className={`font-serif text-3xl`}>Gustavo Fior</h1>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="https://x.com/heyimgustavo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X
                    className={`h-3 w-3 transition-opacity duration-200 hover:opacity-80`}
                  />
                </Link>
                <Link href="mailto:hey@gustavofior.com">
                  <Mail
                    className={`h-4 w-4 text-neutral-500 transition-opacity duration-200 hover:opacity-80`}
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
            <p className="mt-4 pb-12 text-sm font-normal text-neutral-400 sm:mt-0">
              Brazilian software engineer who loves to code, surf, and learn new
              things.
            </p>
          </div>

          {/* PROJECTS */}
          <div className={`${shouldAnimate ? "animate-7" : ""}`}>
            <h2 className={`pb-4 text-sm text-neutral-400`}>Projects</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 pb-12 sm:grid-cols-2">
              <ProjectPreview
                title="Itzam"
                description="AI integration has never been so easy."
                link="https://itz.am/"
                logo="/logos/itzam.svg"
              />
              <ProjectPreview
                title="CCC"
                description="Curitiba Coding Club."
                link="https://lu.ma/-ccc"
                logo="/logos/ccc.png"
              />
              <ProjectPreview
                title="5Devs"
                description="Fake data for testing purposes."
                link="https://5devs.com.br/"
                logo="/logos/5devs.png"
              />
              <ProjectPreview
                title="VAYØ"
                description="My favorite bookmark tool."
                link="https://vayo.me/"
                logo="/logos/vayo.png"
              />
              <ProjectPreview
                title="Rafa Resumos"
                description="My girlfriend's med-school writings."
                link="https://rafaresumos.com.br/"
                logo="/logos/rafa.png"
              />
              <ProjectPreview
                title="Censorfy"
                description="AI content moderation API."
                link="https://censorfy.com/"
                logo="/logos/censorfy.png"
                tag="failed"
              />
              <ProjectPreview
                title="Ache o Pet"
                description="Lost & found for dogs and cats."
                link="https://acheopet.vercel.app/"
                logo="/logos/ache-o-pet.png"
                tag="inactive"
              />
              <ProjectPreview
                title="Mind"
                description="Connecting patients and therapists."
                link="https://mind.abdulhdr.com/"
                logo="/logos/mind.png"
                tag="failed"
              />
            </div>
          </div>

          {/* WRITING */}
          <div className={`${shouldAnimate ? "animate-10" : ""}`}>
            <div className="flex justify-between pb-4 align-middle">
              <h2 className={`text-sm text-neutral-400`}>Writing</h2>
              <LinkArrow
                href="/blog"
                className="-mr-3.5 text-sm text-neutral-400"
              >
                Older...
              </LinkArrow>
            </div>
            <ul className="flex flex-col pb-12">
              {sortedPostsMetadata.map((postMetadata) => (
                <motion.li key={postMetadata.slug}>
                  <PostPreview
                    title={postMetadata.title}
                    description={postMetadata.description}
                    date={postMetadata.date}
                    slug={postMetadata.slug}
                    showDate={false}
                  />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* OTHERS */}
          <div className={`${shouldAnimate ? "animate-15" : ""}`}>
            <div className="flex gap-4">
              <LinkArrow
                href="https://www.vayo.me/bookmarks/public/cltpx1nq70001jw1tc90e4ht6"
                className="text-sm text-neutral-400"
              >
                Bookmarks
              </LinkArrow>
              <LinkArrow
                href="https://gustavofior.notion.site/Books-dad36ee3ac9f4e8486029f9b2fccb478"
                className="text-sm text-neutral-400"
              >
                Books
              </LinkArrow>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer
          className={`flex items-center justify-center pb-8 pt-16 ${
            shouldAnimate ? "animate-25" : ""
          }`}
        >
          <p className="font-serif text-xs text-neutral-200">
            The life of every human being is a journey towards oneself.
          </p>
        </footer>
      </ContentWrapper>
    </>
  );
};

const ProjectPreview = ({
  title,
  description,
  link,
  logo,
  tag,
}: {
  title: string;
  description: string;
  link: string;
  logo: string;
  tag?: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group flex cursor-pointer flex-col gap-1.5"
    >
      <div className="flex items-center gap-1.5">
        <Image
          src={logo}
          alt={title}
          width={14}
          height={14}
          className="h-3.5 w-3.5 transition-all duration-200 ease-in-out group-hover:scale-[1.03]"
        />
        <div
          className={`flex items-center gap-1 transition-all duration-200 ease-in-out group-hover:text-neutral-500`}
        >
          {title}

          <ArrowUpRight
            className={`h-2.5 w-2.5 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:text-neutral-400 group-hover:opacity-100`}
            strokeWidth={1.5}
          />
        </div>
      </div>
      <p className="text-sm text-neutral-400">
        {description}{" "}
        {tag && (
          <span className="font-light italic text-neutral-300">({tag})</span>
        )}
      </p>
    </Link>
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
