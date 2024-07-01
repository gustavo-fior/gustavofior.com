/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { useEffect } from "react";
import { RxEnvelopeOpen, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import ContentWrapper from "~/components/ContentWrapper";
import PostPreview from "~/components/PostPreview";
import LinkText from "~/components/md/LinkText";
import { animateAtom } from "~/utils/atoms";
import { type BlogPageProps, type PostMetadata } from "./blog";

const Home: NextPage<BlogPageProps> = ({ postsMetadata }) => {
  const [shouldAnimate, setShouldAnimate] = useAtom(animateAtom);
  const stiffness = 490;
  const mass = 8;
  const damping = 100;


  useEffect(() => {
    setTimeout(() => {
      setShouldAnimate(false);
    }, 2000);

    console.log(`
    ..####...##..##...####...######...####...##..##...####..
    .##......##..##..##........##....##..##..##..##..##..##.
    .##.###..##..##...####.....##....######..##..##..##..##.
    .##..##..##..##......##....##....##..##...####...##..##.
    ..####....####....####.....##....##..##....##.....####..
    ........................................................    
`);
  });

  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const initialAnimation = shouldAnimate ? { opacity: 0 } : { opacity: 1 };
  const animateAnimation = { opacity: 1 };
  const initialYAnimation = shouldAnimate ? { y: 15 } : { y: 0 };
  const animateYAnimation = { y: 0 };

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
        <motion.span
          initial={initialAnimation}
          animate={animateAnimation}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div
            initial={initialYAnimation}
            animate={animateYAnimation}
            transition={{
              delay: 0.1,
              damping: damping,
              mass: mass,
              stiffness: stiffness,
              type: "spring",
            }}
          >
            <div className="flex items-center justify-between pt-16 sm:pb-4 sm:pt-24">
              <h1 className={`text-lg font-semibold text-neutral-200`}>
                Gustavo Fior
              </h1>
              {/* <div className={`flex gap-8 sm:gap-5`}>
                <Link target="_blank" href="mailto:hey@gustavofior.com">
                  <motion.div className="transition duration-200 ease-in-out">
                    <HiEnvelope
                      className={`h-5 w-5 text-neutral-200 hover:text-[${primaryOrange}] transition-colors duration-200`}
                    />
                  </motion.div>
                </Link>
                <Link target="_blank" href="https://github.com/gustavo-fior">
                  <motion.div className="transition duration-200 ease-in-out">
                    <RxGithubLogo
                      className={`h-5 w-5 text-neutral-200 hover:text-[${primaryOrange}] transition-colors duration-200`}
                    />
                  </motion.div>
                </Link>
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/gustavo-fior-a910781b4/"
                >
                  <motion.div className="transition duration-200 ease-in-out">
                    <RxLinkedinLogo
                      className={`h-5 w-5 text-neutral-200 hover:text-[${primaryOrange}] transition-colors duration-200`}
                    />
                  </motion.div>
                </Link>
              </div> */}
            </div>
            <p className="mt-4 pb-12 text-base text-neutral-500 sm:mt-0">
              Just a brazilian software engineer who loves to code, surf, and
              learn new things.
            </p>
            {/* <p className="mt-1 pb-12 text-base text-neutral-400 sm:mt-0">
              If you want to know more about me, I keep a list of{" "}
              <LinkText href="https://www.vayo.cc/bookmarks/public/cltpx1nq70001jw1tc90e4ht6">
                articles
              </LinkText>
              ,{" "}
              <LinkText href="https://www.vayo.cc/bookmarks/public/cltsyb5020005usxztdabvof5">
                videos
              </LinkText>{" "}
              and{" "}
              <LinkText href="https://www.vayo.cc/bookmarks/public/clublk9rh000113g5qf4tj038">
                cool stuff
              </LinkText>{" "}
              that I like.
            </p> */}
          </motion.div>
        </motion.span>

        <motion.span
          initial={initialAnimation}
          animate={animateAnimation}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.div
            initial={initialYAnimation}
            animate={animateYAnimation}
            transition={{
              delay: 0.3,
              damping: damping,
              mass: mass,
              stiffness: stiffness,
              type: "spring",
            }}
          >
            <h2 className={`pb-6 text-sm text-neutral-500`}>Projects</h2>
            <div className="grid grid-cols-3 gap-8 pb-12">
              <div className="flex flex-col gap-2">
                <LinkText href="https://5devs.com.br/">5Devs</LinkText>
                <p className="text-sm text-neutral-500">
                  A website to get fake brazilian data for testing purposes.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LinkText href="https://vayo.cc">VAYØ</LinkText>
                <p className="text-sm text-neutral-500">
                  A bookmark tool where you can save, search and share your
                  links.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  <LinkText href="https://apps.apple.com/us/app/mind/id6467673373">
                    Mind
                  </LinkText>{" "}
                </p>
                <p className="text-sm text-neutral-500">
                  A mental health app that helps patients and therapists connect{" "}
                  <span className="italic">(failed)</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.span>

        <motion.div
          initial={initialAnimation}
          animate={animateAnimation}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <motion.div
            initial={initialYAnimation}
            animate={animateYAnimation}
            transition={{
              delay: 0.5,
              damping: damping,
              mass: mass,
              stiffness: stiffness,
              type: "spring",
            }}
          >
            <div className="flex justify-between pb-6 align-middle">
              <h2 className={`text-sm text-neutral-500`}>Writing</h2>
              <Link
                href="/blog"
                className={`text-sm text-neutral-200 underline decoration-neutral-500 transition duration-200 ease-in-out hover:decoration-[#e64100]`}
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
          </motion.div>
        </motion.div>
        <motion.div
          initial={initialAnimation}
          animate={animateAnimation}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <motion.div
            initial={initialYAnimation}
            animate={animateYAnimation}
            transition={{
              delay: 0.7,
              damping: damping,
              mass: mass,
              stiffness: stiffness,
              type: "spring",
            }}
          >
            <h2 className={`pb-6 pt-8 text-sm text-neutral-500`}>Connect</h2>
            <div className="flex gap-8">
              <motion.div className="flex items-center gap-2 transition duration-200 ease-in-out">
                <RxEnvelopeOpen
                  className={`h-4 w-4 text-neutral-500 transition-colors duration-200`}
                />
                <LinkText href="mailto:hey@gustavofior.com">
                  <p className="text-sm">Email</p>
                </LinkText>
              </motion.div>
              <motion.div className="flex items-center gap-2 transition duration-200 ease-in-out">
                <RxGithubLogo
                  className={`h-4 w-4 text-neutral-500 transition-colors duration-200`}
                />
                <LinkText href="https://github.com/gustavo-fior">
                  <p className="text-sm">GitHub</p>
                </LinkText>
              </motion.div>
              <motion.div className="flex items-center gap-2 transition duration-200 ease-in-out">
                <RxLinkedinLogo
                  className={`h-4 w-4 text-neutral-500 transition-colors duration-200`}
                />
                <LinkText href="https://linkedin.com/in/gustavo-fior-a910781b4/">
                  <p className="text-sm">LinkedIn</p>
                </LinkText>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
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
