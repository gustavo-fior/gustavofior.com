/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion, useInView } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useEffect, useRef, useState } from "react";
import LinkArrow from "~/components/link-arrow";
import PostPreview from "~/components/posts/post-preview";
import ScrambleIn, { type ScrambleInHandle } from "~/components/scramble-in";
import { books } from "~/data/books";
import {
  animateAtom,
  expandedProjectsAtom,
  languagesAtom,
} from "~/utils/atoms";
import { useIsMobile } from "~/utils/is-mobile";
import { type BlogPageProps, type PostMetadata } from "./blog";

// Staggered entrance animation. Each animated element gets a sequential index;
// `staggerDelay(i)` turns it into a delay so items cascade in one after another.
const STAGGER_STEP = 0.06;
const STAGGER_START = 0.1;
const staggerDelay = (index: number) => STAGGER_START + index * STAGGER_STEP;

const FadeIn = ({
  index,
  animate,
  as = "div",
  className,
  children,
}: {
  index: number;
  animate: boolean;
  as?: "div" | "li";
  className?: string;
  children: React.ReactNode;
}) => {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      initial={animate ? { opacity: 0, filter: "blur(6px)" } : false}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.35,
        delay: animate ? staggerDelay(index) : 0,
        ease: [0, -0.02, 0.49, 0.99],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const [shouldAnimate, setShouldAnimate] = useAtom(animateAtom);
  const [language] = useAtom(languagesAtom);
  const [showMoreProjects, setShowMoreProjects] = useAtom(expandedProjectsAtom);
  const isMobile = useIsMobile();
  const wasExpandedOnMount = useRef(showMoreProjects);

  // Footer phrase scrambles in only once it scrolls into view.
  const footerRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.6 });
  const scrambleRef = useRef<ScrambleInHandle>(null);

  useEffect(() => {
    if (footerInView) {
      scrambleRef.current?.start();
    }
  }, [footerInView]);

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
        <div className="pb-2">
          <FadeIn
            index={0}
            animate={shouldAnimate}
            className="flex items-center justify-between pb-1.5 sm:pb-2"
          >
            <h1 className={`font-serif text-[1.4rem] font-medium`}>
              Gustavo Fior
            </h1>
          </FadeIn>
          <FadeIn index={1} animate={shouldAnimate}>
            <p className="pb-8 text-sm tracking-[0.01em] text-neutral-400">
              Brazilian software engineer who loves to build, surf, and learn
              new things.
            </p>
          </FadeIn>
        </div>

        {/* PROJECTS */}
        <div>
          <FadeIn index={2} animate={shouldAnimate}>
            <h2
              className={`flex items-center justify-between pb-1 text-sm tracking-[0.01em] text-neutral-400`}
            >
              Projects
              <button
                onClick={() => setShowMoreProjects(!showMoreProjects)}
                className="group flex items-center gap-1 transition-all duration-200 ease-in-out hover:text-neutral-500"
              >
                {showMoreProjects ? "Less" : "More"}

                <ArrowUp
                  className={`h-2.5 w-2.5 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:opacity-100 ${
                    showMoreProjects ? "" : "rotate-180"
                  }`}
                  strokeWidth={2.6}
                />
              </button>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 pb-8">
            <FadeIn index={3} animate={shouldAnimate}>
              <ProjectPreview
                title="Foglamp"
                description="Open source tool to make better AI agents."
                link="https://foglamp.dev/"
                logo="/logos/foglamp.png"
              />
            </FadeIn>
            <FadeIn index={4} animate={shouldAnimate}>
              <ProjectPreview
                title="CCC"
                description="A coding (but not only) club in Curitiba."
                link="https://curitibacodingclub.com"
                logo="/logos/ccc-black-bold.png"
              />
            </FadeIn>
            <FadeIn index={5} animate={shouldAnimate}>
              <ProjectPreview
                title="VAYØ"
                description="A home for your best internet finds."
                link="https://vayo.me/"
                logo="/logos/vayo.png"
              />
            </FadeIn>
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
                  transition={{ duration: 0.3, type: "spring", bounce: 0 }}
                  className="grid grid-cols-1"
                >
                  <ProjectPreview
                    title="Olwen"
                    description="GEO agent for busy founders."
                    link="https://olwen.io"
                    logo="/logos/olwen.svg"
                  />
                  <ProjectPreview
                    title="5Devs"
                    description="Fake data for testing purposes."
                    link="https://5devs.com.br/"
                    logo="/logos/5devs.png"
                  />
                  <ProjectPreview
                    title="Option"
                    description="The best GEO platform for marketing teams."
                    link="https://tryoption.ai/"
                    logo="/logos/option.png"
                  />
                  <ProjectPreview
                    title="Itzam"
                    description="AI integration has never been so easy."
                    link="https://itz.am/"
                    logo="/logos/itzam.svg"
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
        <div>
          <FadeIn
            index={6}
            animate={shouldAnimate}
            className="flex justify-between pb-4 align-middle text-sm  tracking-[0.01em] text-neutral-400"
          >
            Writing
            <LinkArrow
              href="/blog"
              className="flex w-fit text-sm text-neutral-400"
            >
              Older
            </LinkArrow>
          </FadeIn>
          <ul className="flex flex-col pb-8">
            {sortedPostsMetadata.map((postMetadata, i) => (
              <FadeIn
                as="li"
                index={7 + i}
                animate={shouldAnimate}
                key={postMetadata.slug}
              >
                <PostPreview
                  title={postMetadata.title}
                  description={postMetadata.description}
                  date={postMetadata.date}
                  slug={postMetadata.slug}
                  showDate={false}
                />
              </FadeIn>
            ))}
          </ul>
        </div>

        {/* BOOKS */}
        <div>
          <FadeIn
            index={10}
            animate={shouldAnimate}
            className="flex justify-between pb-6 align-middle text-sm  tracking-[0.01em] text-neutral-400"
          >
            Books
            <LinkArrow
              href="/books"
              className="flex w-fit text-sm text-neutral-400"
            >
              More
            </LinkArrow>
          </FadeIn>
          <FadeIn index={11} animate={shouldAnimate}>
            <ul className="grid grid-cols-3 grid-rows-1 gap-x-8 pb-20 md:grid-cols-4">
              {sortedBooks.map((book) => (
                <div key={book.name} className="flex flex-col gap-5">
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
                    <p className="pointer-events-none mb-1 text-xs tracking-[0.01em] text-neutral-400">
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* OTHERS */}
        <div>
          <div className="flex gap-4  tracking-[0.01em] md:gap-6">
            <FadeIn index={12} animate={shouldAnimate}>
              <LinkArrow
                href="https://x.com/heyimgustavo"
                className="text-sm text-neutral-400"
              >
                X
              </LinkArrow>
            </FadeIn>
            <FadeIn index={13} animate={shouldAnimate}>
              <LinkArrow
                href="mailto:hey@gustavofior.com"
                className="text-sm text-neutral-400"
              >
                Email
              </LinkArrow>
            </FadeIn>
            <FadeIn index={14} animate={shouldAnimate}>
              <LinkArrow
                href="https://vayo.me/bookmarks/cltpx1nq70001jw1tc90e4ht6"
                className="text-sm text-neutral-400"
              >
                Bookmarks
              </LinkArrow>
            </FadeIn>
            <FadeIn index={15} animate={shouldAnimate}>
              <LinkArrow
                href="https://vayo.me/bookmarks/clublk9rh000113g5qf4tj038"
                className="text-sm text-neutral-400"
              >
                Cool <span className="hidden md:inline">Stuff</span>
              </LinkArrow>
            </FadeIn>
          </div>
        </div>
        <footer
          ref={footerRef}
          className="flex items-center justify-center pb-24 pt-24"
        >
          <p className="font-serif text-xs font-medium tracking-[0.01em] text-neutral-200">
            <ScrambleIn
              ref={scrambleRef}
              text="The life of every human being is a journey towards oneself."
              autoStart={false}
              scrambleSpeed={35}
              scrambledLetterCount={4}
              characters="abcdefghijklmnopqrstuvwxyz"
              scrambledClassName="text-neutral-300"
            />
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
          width={12}
          height={12}
          className=" h-3 w-3"
        />
        <div
          className={`flex items-center transition-all duration-[150] ease-in-out group-hover:text-neutral-500`}
        >
          {title}

          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, width: 0, marginLeft: 0, scale: 0.95 }}
                animate={{ opacity: 1, width: "auto", marginLeft: 6, scale: 1 }}
                exit={{ opacity: 0, width: 0, marginLeft: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <ArrowUpRight
                  className={`h-2.5 w-2.5 text-neutral-400`}
                  strokeWidth={2.6}
                />
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
