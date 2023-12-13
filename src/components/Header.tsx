import { useKBar } from "kbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  BsArrowLeftShort,
  BsCommand,
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { motion } from "framer-motion";
import Spotify from "./Spotify";

const Header = () => {
  const router = useRouter();
  const { query } = useKBar();
  const { asPath } = router;

  const [showSong, setShowSong] = useState<boolean>(false);

  useEffect(() => {
    if (asPath === "/") {
      setTimeout(() => {
        setShowSong(true);
      }, 1000);
    }
  }, [asPath]);

  return (
    <div
      className={`flex w-full ${
        asPath === "/" ? "absolute" : ""
      } items-center justify-center py-12 sm:justify-between sm:px-24 md:py-16`}
    >
      {showSong && <Spotify />}

      <div className={`${asPath === "/" ? "" : "pr-4"}`}>
        <Link href={asPath.includes("/blog/post/") ? "/blog" : "/"}>
          {asPath !== "/" ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50"
            >
              <div className="flex items-center gap-2">
                <BsArrowLeftShort size={24} color="white" />
              </div>
            </motion.div>
          ) : null}
        </Link>
      </div>
      <div className={`flex gap-4`}>
        <motion.div
          onClick={() => query.toggle()}
          whileHover={{ scale: 1.05 }}
          className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:cursor-pointer hover:bg-opacity-50"
        >
          <div className="flex items-center gap-2">
            <BsCommand size={24} color="white" />
          </div>
        </motion.div>
        <Link target="_blank" href="https://github.com/gustavo-fior">
          <motion.div
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50"
          >
            <div className="flex items-center gap-2">
              <BsGithub size={24} color="white" />
            </div>
          </motion.div>
        </Link>
        <Link
          target="_blank"
          href="https://linkedin.com/in/gustavo-fior-a910781b4/"
        >
          <motion.div
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50"
          >
            <div className="flex items-center gap-2">
              <BsLinkedin size={24} color="white" />
            </div>
          </motion.div>
        </Link>
        <Link target="_blank" href="mailto:gustavo_fior@outlook.com">
          <motion.div
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50"
          >
            <div className="flex items-center gap-2">
              <BsEnvelopeFill size={24} color="white" />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
