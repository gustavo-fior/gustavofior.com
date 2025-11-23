/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { ArrowUpRight } from "lucide-react";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { useEffect, useState } from "react";
import LinkArrow from "~/components/link-arrow";
import PostPreview from "~/components/posts/post-preview";
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
      {/* MAIN CONTENT */}
      <div className="flex flex-col gap-2">
        {/* BIO */}
        <div className={`${shouldAnimate ? "animate-5" : ""}`}>
          <div className="flex items-center justify-between sm:pb-2">
            <h1 className={`font-serif text-2xl font-medium`}>Gustavo Fior</h1>
          </div>
          <p className="mt-4 pb-12 text-sm font-normal text-neutral-400 sm:mt-0">
            Brazilian software engineer who loves to code, surf, and learn new
            things.
          </p>
        </div>

        {/* PROJECTS */}
        <div className={`${shouldAnimate ? "animate-7" : ""}`}>
          <h2 className={`pb-1 text-sm text-neutral-400`}>Projects</h2>
          <div className="grid grid-cols-1 pb-12">
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
              title="Aello"
              description="AI that knows your company."
              link="https://aello.chat/"
              logo="/logos/aello.png"
            />
            <ProjectPreview
              title="CCC"
              description="A coding (but not only) club in Curitiba."
              link="https://curitibacodingclub.com"
              logo="/logos/ccc-black-bold.png"
            />
            <ProjectPreview
              title="5Devs"
              description="Fake data for testing purposes."
              link="https://5devs.com.br/"
              logo="/logos/5devs.png"
            />
            <ProjectPreview
              title="VAYØ"
              description="Bookmark tool to keep and share links."
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
              title="Ache o Pet"
              description="Lost & found for dogs and cats."
              link="https://acheopet.vercel.app/"
              logo="/logos/ache-o-pet.png"
              tag="inactive"
            />
            <ProjectPreview
              title="Censorfy"
              description="AI content moderation API."
              link="https://censorfy.vercel.app/"
              logo="/logos/censorfy.png"
              tag="failed"
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
            <LinkArrow
              href="/blog"
              className="-mr-3.5 text-sm text-neutral-400"
            >
              Writing
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
          <div className="flex gap-4 md:gap-6">
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
              href="https://www.vayo.me/bookmarks/cltpx1nq70001jw1tc90e4ht6"
              className="text-sm text-neutral-400"
            >
              Bookmarks
            </LinkArrow>
            <LinkArrow
              href="https://vayo.me/bookmarks/clublk9rh000113g5qf4tj038"
              className="text-sm text-neutral-400"
            >
              Cool Stuff
            </LinkArrow>
            <LinkArrow href="/books" className="text-sm text-neutral-400">
              Books
            </LinkArrow>
          </div>
        </div>
        <footer
          className={`flex items-center justify-center pb-8 pt-24 ${
            shouldAnimate ? "animate-25" : ""
          }`}
        >
          <p className="font-serif text-xs text-neutral-200">
            The life of every human being is a journey towards oneself.
          </p>
        </footer>
      </div>

      {/* <div className="flex items-center justify-center">
            <pre className="text-xs leading-tight text-neutral-400">
              {`                                       ___-------___
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
                         (_(___/                         \\_____)_)`}
            </pre>
          </div> */}
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
          className="h-3.5 w-3.5"
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
                <ArrowUpRight className={`h-2.5 w-2.5`} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
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
