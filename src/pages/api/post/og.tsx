import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(
      new URL("../../../../assets/InstrumentSerif-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Some blog post by";

    const hasEmoji = searchParams.has("emoji");
    const emoji = hasEmoji ? searchParams.get("emoji")?.slice(0, 100) : "👋";

    return new ImageResponse(
      (
        <div
          style={{
            background: "#f5f5f5",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 64,
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontFamily: "Instrument Serif",
                color: "#000000",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                marginTop: 64,
              }}
            >
              {emoji}
            </div>
            <div
              style={{
                fontSize: 96,
                fontFamily: "Instrument Serif",
                color: "#000000",
                whiteSpace: "pre-wrap",
                marginTop: 180,
                marginRight: 64,
              }}
            >
              {title && title.length > 60 ? title.slice(0, 60) + "..." : title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Instrument Serif",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    console.log(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
