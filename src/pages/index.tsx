/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import {
  ArrowUpRight,
  BookCheckIcon,
  BookOpen,
  BookXIcon,
  LibraryBigIcon,
  ShoppingBag,
} from "lucide-react";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useEffect, useRef, useState } from "react";
import LinkArrow from "~/components/link-arrow";
import PostPreview from "~/components/posts/post-preview";
import { books } from "~/data/books";
import {
  animateAtom,
  expandedProjectsAtom,
  languagesAtom,
} from "~/utils/atoms";
import { type BlogPageProps, type PostMetadata } from "./blog";
import { useIsMobile } from "~/utils/is-mobile";

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const [shouldAnimate, setShouldAnimate] = useAtom(animateAtom);
  const [language] = useAtom(languagesAtom);
  const [showMoreProjects, setShowMoreProjects] = useAtom(expandedProjectsAtom);
  const isMobile = useIsMobile();
  const wasExpandedOnMount = useRef(showMoreProjects);

  useEffect(() => {
    // Reset after initial render so future expand/collapse will animate
    wasExpandedOnMount.current = false;
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(false);
      }, 2000);
    }

    console.log(`                                       ___-------___
                                   _-~~             ~~-_
                                _-~                    /~-_
             /^\\__/^\\         /~  \\                   /    \\
           /|  O|| O|        /      \\_______________/        \\
          | |___||__|      /       /                \\          \\
          |          \\    /      /                    \\          \\
          |   (_______) /______/                        \\_________ \\
          |         / /         \\                      /            \\
           \\         \\^\\\\         \\                  /               \\     /
             \\         ||           \\______________/      _-_       //\\__//
               \\       ||------_-~~-_ ------------- \\ --/~   ~\\    || __/
                 ~-----||====/~     |==================|       |/~~~~~
                  (_(__/  ./     /                    \\_\\      \\.
                         (_(___/                         \\_____)_)`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const sortedBooks = books
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
    .slice(0, isMobile ? 3 : 4);

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
      {/* MAIN CONTENT */}
      <div className="flex flex-col gap-2">
        {/* BIO */}
        <div className={`${shouldAnimate ? "animate-10" : ""}`}>
          <div className="flex items-center justify-between sm:pb-3">
            <h1 className={`font-serif text-2xl font-medium tracking-[0.01em]`}>
              Gustavo Fior
            </h1>
          </div>
          <p className="pb-8 text-sm font-normal tracking-[0.01em] text-neutral-400">
            Brazilian software engineer who loves to code, surf, and learn new
            things.
          </p>
        </div>

        {/* PROJECTS */}
        <div className={`${shouldAnimate ? "animate-15" : ""}`}>
          <h2
            className={`flex items-center justify-between pb-1 text-sm tracking-[0.01em] text-neutral-400`}
          >
            Projects
            <button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="flex w-fit text-sm text-neutral-400"
            >
              {showMoreProjects ? "Less" : "More"}
            </button>
          </h2>
          <div className="grid grid-cols-1 pb-8">
            <ProjectPreview
              title="Option"
              description="The best GEO platform for marketing teams."
              link="https://tryoption.ai/"
              logo="/logos/option.png"
            />
            <ProjectPreview
              title="CCC"
              description="A coding (but not only) club in Curitiba."
              link="https://curitibacodingclub.com"
              logo="/logos/ccc-black-bold.png"
            />
            <ProjectPreview
              title="VAYØ"
              description="Bookmark tool to keep and share links."
              link="https://vayo.me/"
              logo="/logos/vayo.png"
            />
            <AnimatePresence>
              {showMoreProjects && (
                <motion.div
                  initial={
                    wasExpandedOnMount.current
                      ? false
                      : {
                          opacity: 0,
                          filter: "blur(4px)",
                          height: 0,
                        }
                  }
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(4px)",
                    height: 0,
                  }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0 }}
                  className="grid grid-cols-1"
                >
                  <ProjectPreview
                    title="Itzam"
                    description="AI integration has never been so easy."
                    link="https://itz.am/"
                    logo="/logos/itzam.svg"
                  />
                  <ProjectPreview
                    title="Aello"
                    description="AI that knows your company."
                    link="https://aello.chat/"
                    logo="/logos/aello.png"
                  />
                  <ProjectPreview
                    title="5Devs"
                    description="Fake data for testing purposes."
                    link="https://5devs.com.br/"
                    logo="/logos/5devs.png"
                  />

                  <ProjectPreview
                    title="Rafa Resumos"
                    description="My girlfriend's med-school writings."
                    link="https://rafaresumos.com.br/"
                    logo="/logos/rafa.png"
                  />
                  <ProjectPreview
                    title="Ache o Pet"
                    description="Lost & found for dogs and cats."
                    link="https://acheopet.vercel.app/"
                    logo="/logos/ache-o-pet.png"
                  />
                  <ProjectPreview
                    title="Censorfy"
                    description="AI content moderation API."
                    link="https://censorfy.vercel.app/"
                    logo="/logos/censorfy.png"
                  />
                  <ProjectPreview
                    title="Mind"
                    description="Connecting patients and therapists."
                    link="https://mind.abdulhdr.com/"
                    logo="/logos/mind.png"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* WRITING */}
        <div className={`${shouldAnimate ? "animate-20" : ""}`}>
          <div className="flex justify-between pb-4 align-middle text-sm tracking-[0.01em] text-neutral-400">
            Writing
            <LinkArrow
              href="/blog"
              className="flex w-fit text-sm text-neutral-400"
            >
              Older
            </LinkArrow>
          </div>
          <ul className="flex flex-col pb-8">
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

        {/* BOOKS */}
        <div className={`${shouldAnimate ? "animate-20" : ""}`}>
          <div className="flex justify-between pb-6 align-middle text-sm tracking-[0.01em] text-neutral-400">
            Books
            <LinkArrow
              href="/books"
              className="flex w-fit text-sm text-neutral-400"
            >
              More
            </LinkArrow>
          </div>
          <ul className="grid grid-cols-3 grid-rows-1 gap-x-8 pb-20 md:grid-cols-4">
            {sortedBooks.map((book) => (
              <div key={book.name} className="flex flex-col gap-4">
                <div className="book book-fade book-hover-open group relative w-fit select-none rounded-sm rounded-r-none">
                  <Image
                    src={book.coverImageUrl}
                    alt={language === "PT" ? book.name : book.englishName}
                    width={1000}
                    height={1000}
                    className="pointer-events-none block h-[75px] w-[50px] border-r-[2px] border-amber-50 object-cover transition-all duration-100 ease-in-out"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL={book.coverImageUrl}
                  />
                  <div className="absolute inset-0 left-0.5 w-[calc(100%-99%)] bg-neutral-800/20"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="pointer-events-none line-clamp-2 text-sm">
                    {language === "PT" ? book.name : book.englishName}
                  </p>
                  <p className="pointer-events-none mb-1 text-xs tracking-wide text-neutral-400">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* OTHERS */}
        <div className={`${shouldAnimate ? "animate-25" : ""}`}>
          <div className="flex gap-4 tracking-[0.01em] md:gap-6">
            <LinkArrow
              href="https://x.com/heyimgustavo"
              className="text-sm text-neutral-400"
            >
              X
            </LinkArrow>
            <LinkArrow
              href="mailto:hey@gustavofior.com"
              className="text-sm text-neutral-400"
            >
              Email
            </LinkArrow>
            <LinkArrow
              href="https://vayo.me/bookmarks/cltpx1nq70001jw1tc90e4ht6"
              className="text-sm text-neutral-400"
            >
              Bookmarks
            </LinkArrow>
            <LinkArrow
              href="https://vayo.me/bookmarks/clublk9rh000113g5qf4tj038"
              className="text-sm text-neutral-400"
            >
              Cool <span className="hidden md:inline">Stuff</span>
            </LinkArrow>
          </div>
        </div>
        <footer
          className={`flex items-center justify-center pb-24 pt-24 ${
            shouldAnimate ? "animate-25" : ""
          }`}
        >
          <p className="font-serif text-xs font-medium tracking-[0.01em] text-neutral-200">
            The life of every human being is a journey towards oneself.
          </p>
        </footer>
      </div>
    </>
  );
};

const ProjectPreview = ({
  title,
  description,
  link,
  logo,
}: {
  title: string;
  description: string;
  link: string;
  logo: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group flex w-fit cursor-pointer flex-col gap-1 py-3"
    >
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt={title}
          width={14}
          height={14}
          className="mb-0.5 h-3.5 w-3.5"
        />
        <div
          className={`flex items-center transition-all duration-200 ease-in-out group-hover:text-neutral-500 `}
        >
          {title}

          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, width: 0, marginLeft: 0, scale: 0.95 }}
                animate={{ opacity: 1, width: "auto", marginLeft: 4, scale: 1 }}
                exit={{ opacity: 0, width: 0, marginLeft: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ArrowUpRight className={`h-2.5 w-2.5`} strokeWidth={2.6} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <p className="text-sm tracking-[0.01em] text-neutral-400">
        {description}
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
