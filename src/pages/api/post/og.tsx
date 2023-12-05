import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  try {
    const { searchParams: s } = new URL(request.url);

    const hasTitle = s.has("title");
    const title = hasTitle ? s.get("title")?.slice(0, 100) : "Post";

    const hasDescription = s.has("description");
    const description = hasDescription
      ? s.get("description")?.slice(0, 100)
      : "Just some thoughts...";

    const hasEmoji = s.has("emoji");
    const emoji = hasEmoji ? s.get("emoji") : "🦖";

    return new ImageResponse(
      (
        <div style={{ display: "flex", background: "#f6f6f6", width: "100%", height: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <img src={await fetch(new URL("./bg.png", import.meta.url)).then((res) => res.arrayBuffer()) as unknown as string} width={1200} height={630} style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
            <div
              style={{
                fontSize: 96,
                fontStyle: "normal",
                padding: "0 120px",
                whiteSpace: "pre-wrap",
              }}
            >
              {emoji}
            </div>
            <div
              style={{
                fontSize: 96,
                fontStyle: "Inter",
                fontWeight: 700,
                marginTop: 8,
                padding: "0 120px",
                color: "white",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 30,
                fontStyle: "Inter",
                fontWeight: 400,
                marginTop: 8,
                padding: "0 120px",
                color: "white",
              }}
            >
              {description}
            </div>
          </img>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { data: await fetch(new URL("../../../../assets/Inter-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer()), name: "Inter", style: "normal", weight: 700 },
          { data: await fetch(new URL("../../../../assets/Inter-Regular.ttf", import.meta.url)).then((res) => res.arrayBuffer()), name: "Inter", style: "normal", weight: 400 },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
