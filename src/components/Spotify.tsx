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
    <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed bottom-4 left-4 z-50"
    >
      <Link href={song?.songUrl ?? ""} target="_blank">
        <div className="group rounded-lg bg-zinc-900 p-1 md:p-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 transition duration-300 group-hover:opacity-80 ">
              <Image
                className="rounded-full"
                src={song?.albumImageUrl ?? ""}
                alt="Album cover"
                priority
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 rounded-full bg-black opacity-70"></div>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                }}
              ></div>

              <div className="z-50 flex gap-2">
                <Image
                  className="rounded-full"
                  src={song?.albumImageUrl ?? ""}
                  alt="Album cover"
                  priority
                  width={36}
                  height={36}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <p className="truncate text-sm font-bold text-white">
                      {song?.title
                        ? song?.title.length > 25
                          ? song?.title.substring(0, 25) + "..."
                          : song?.title
                        : "Not Playing"}
                    </p>
                    <Image
                      src="/gifs/waveform.gif"
                      alt="Waveform"
                      width={480}
                      height={480}
                      priority
                      style={{
                        objectFit: "scale-down",
                        width: "1rem",
                        height: "1rem",
                      }}
                      className="flex-shrink-0"
                    />
                  </div>
                  <p className="truncate text-xs text-slate-300">
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Spotify;
