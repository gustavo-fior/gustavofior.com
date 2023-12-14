import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

const Spotify = ({ song }: { song: Song }) => {

  useEffect(() => {
    const load = document.getElementsByClassName("load");
    if (load.length > 0) {
      for (let i = 0; i < load.length; i++) {
        load[i]?.classList.remove("-translate-y-3");
        load[i]?.classList.remove("opacity-0");
      }
    }
  }, []);

  return (
    <Link href={song?.songUrl ?? ""} target="_blank">
      <div className="rounded-full load -translate-y-3 opacity-0 bg-white bg-opacity-0 py-2 pl-6 pr-8 drop-shadow-lg backdrop-blur-lg duration-700 hover:bg-opacity-40">
        <div className="flex items-center gap-2">
          {song?.isPlaying ? <></> : <></>}

          <div className="flex items-center gap-3 transition-transform duration-500">
            <Image
              className="rounded-full bg-gradient-to-tr from-green-500  to-yellow-300 to-60% bg-clip-text text-transparent"
              src={song?.albumImageUrl ?? ""}
              alt="Album cover"
              priority
              fill
              sizes="100px"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="z-50 flex flex-col">
              <p className="truncate text-sm font-medium text-white">
                {song?.title ?? "Not Playing"}
              </p>
              <p className="truncate text-xs text-slate-300">
                {song?.artist ?? "Spotify"} • {song?.album ?? "Not Playing"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Spotify;
