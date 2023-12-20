import { motion } from "framer-motion";
import { useKBar } from "kbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  BsArrowLeftShort,
  BsCommand,
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import Spotify from "./Spotify";

type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

const Header = () => {
  const router = useRouter();
  const { query } = useKBar();
  const { asPath } = router;

  const [showSong, setShowSong] = useState<boolean>(false);
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    const apiUrl = "/api/spotify/song";

    if (asPath === "/") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSong(data as Song);
          setShowSong(true);
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  }, [asPath]);

  return (
    <div
      className={`flex w-full ${
        asPath === "/" ? "absolute" : ""
      } h-48 items-center justify-center py-12 sm:justify-between sm:px-24 md:py-16`}
    >

<div className="sm:block hidden">

      {showSong && asPath === "/" && song && <Spotify song={song} />}
</div>

      <div className={`${asPath === "/" ? "" : "pr-4"}`}>
        <Link href={asPath.includes("/blog/post/") ? "/blog" : "/"}>
          {asPath !== "/" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-300 ease-in-out hover:bg-opacity-50"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-300 ease-in-out hover:cursor-pointer hover:bg-opacity-50"
        >
          <div className="flex items-center gap-2">
            <BsCommand size={24} color="white" />
          </div>
        </motion.div>
        <Link target="_blank" href="https://github.com/gustavo-fior">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-300 ease-in-out hover:bg-opacity-50"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-300 ease-in-out hover:bg-opacity-50"
          >
            <div className="flex items-center gap-2">
              <BsLinkedin size={24} color="white" />
            </div>
          </motion.div>
        </Link>
        <Link target="_blank" href="mailto:gustavo_fior@outlook.com">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-300 ease-in-out hover:bg-opacity-50"
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
