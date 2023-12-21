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
    <div className="load -translate-y-3 opacity-0 transition duration-700 ease-in-out">
      <Link href={song?.songUrl ?? ""} target="_blank">
        <div className="group  rounded-full   py-2 pl-2 pr-5 backdrop-blur-lg ">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 transition duration-300 group-hover:opacity-80 ">
              <Image
                className="rounded-full"
                src={song?.albumImageUrl ?? ""}
                alt="Album cover"
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
    </div>
  );
};

export default Spotify;
