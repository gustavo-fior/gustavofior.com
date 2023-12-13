import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

const Spotify = () => {
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    const apiUrl = "/api/spotify/song";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSong(data as Song);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <Link href={song?.songUrl ?? ""}>
      <div className="rounded-full bg-white bg-opacity-20 py-2 pl-3 pr-5 drop-shadow-lg backdrop-blur-lg duration-200 hover:bg-opacity-40">
        <div className="flex items-center gap-2">
          {song?.isPlaying ? <></> : <></>}

          <div className="flex items-center gap-3 transition-transform duration-500">
            <Image
            // image with opacity gradient from tl to br
              className="rounded-full bg-gradient-to-tr from-green-500  to-yellow-300 to-60% bg-clip-text text-transparent"
              src={song?.albumImageUrl ?? ""}
              alt="Album cover"
              priority
              fill
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
