import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};


export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(
      new URL("../../../../assets/Inter-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);
 
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Some blog post by';

    const hasEmoji = searchParams.has('emoji');
    const emoji = hasEmoji
      ? searchParams.get('emoji')?.slice(0, 100)
      : '👋';

    return new ImageResponse(
      (
        <div
          style={{
            background: "#171717",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 128,
            }}
          >
            <div
              tw="font-bold"
              style={{
                fontSize: 168,
                letterSpacing: "-0.025em",
                fontFamily: "Inter",
                color: "#e5e5e5",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                fontWeight: 500,
              }}
            >
              {emoji}
            </div>
            <div
              tw="font-bold"
              style={{
                fontSize: 96,
                letterSpacing: "-0.025em",
                fontFamily: "Inter",
                color: "#ffffff",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                fontWeight: 200,
                fontStyle: "italic",
                marginLeft: 16,
                marginTop: 32,
              }}
            >
              {title}
            </div>
            <div
              tw="font-bold"
              style={{
                fontSize: 96,
                letterSpacing: "-0.025em",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                fontWeight: 200,
                fontStyle: "italic",
                marginLeft: 16,
              }}
            >
              Gustavo Fior
            </div>
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
        fonts: [
          {
            name: "Inter",
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