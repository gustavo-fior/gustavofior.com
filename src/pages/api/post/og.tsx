import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(
      new URL("../../../../assets/EBGaramond-Medium.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Some blog post by";

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
              marginLeft: 96,
            }}
          >
            <div
              style={{
                fontSize: 96,
                fontFamily: "EB Garamond",
                color: "#000000",
                whiteSpace: "pre-wrap",
                marginTop: title && title.length > 30 ? 280 : 380,
                marginRight: 96,
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
            name: "EB Garamond",
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
