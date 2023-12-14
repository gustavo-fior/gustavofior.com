/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextApiRequest, type NextApiResponse } from "next";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id || !client_secret || !refresh_token) {
  throw new Error("Missing environment variables for Spotify API");
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

const getLastSong = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access_token } = await getAccessToken();

  const currentPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  let song = null;
  let isPlaying = false;
  let title = null;
  let artist = null;
  let album = null;
  let albumImageUrl = null;
  let songUrl = null;

  if (currentPlaying.status === 204 || currentPlaying.status > 400) {
    const lastPlayed = await fetch(LAST_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    song = await lastPlayed.json();
    isPlaying = false;
    title = song.items[0].track.name;
    artist = song.items[0].track.artists
      .map((_artist: { name: unknown; }) => _artist.name)
      .join(", ");
    album = song.items[0].track.album.name;
    albumImageUrl = song.items[0].track.album.images[0].url;
    songUrl = song.items[0].track.external_urls.spotify;
  } else {
    song = await currentPlaying.json();
    isPlaying = song.is_playing;
    title = song.item.name;
    artist = song.item.artists.map((_artist: { name: unknown; }) => _artist.name).join(", ");
    album = song.item.album.name;
    albumImageUrl = song.item.album.images[0].url;
    songUrl = song.item.external_urls.spotify;
  }

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};

export default getLastSong;

const getAccessToken = async (): Promise<{ access_token: string }> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};
