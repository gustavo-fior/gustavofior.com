import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

const Spotify = ({ song }: { song: Song }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center"
    >
      <Link href={song?.songUrl ?? ""} target="_blank">
        <div className="transition duration-200 hover:opacity-80 fixed bottom-12 left-0 right-0 bg-zinc-400 mx-auto flex flex-col">
          <div className="flex gap-4">
            <Image
              className="rounded-lg"
              src={song?.albumImageUrl ?? ""}
              alt="Album cover"
              priority
              width={36}
              height={36}
              style={{
                objectFit: "cover",
              }}
            />

            <div className="flex flex-col gap-1">
              <div className="flex gap-3">
                <p className="truncate text-sm font-medium text-neutral-200">
                  {song?.title
                    ? song?.title.length > 25
                      ? song?.title.substring(0, 25) + "..."
                      : song?.title
                    : "Not Playing"}
                </p>
                <Image
                  src="/gifs/waveform.gif"
                  alt="Waveform"
                  width={400}
                  height={400}
                  priority
                  style={{
                    objectFit: "scale-down",
                    width: "1rem",
                    height: "1rem",
                  }}
                  className="flex-shrink-0"
                />
              </div>
              <p className="truncate text-xs text-neutral-500">
                {song?.artist
                  ? song?.artist.length > 25
                    ? song?.artist.substring(0, 25) + "..."
                    : song?.artist
                  : "Spotify"}{" "}
                • {song?.album ?? "Not Playing"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.footer>
  );
};

export default Spotify;
