import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Post";

    const hasDescription = searchParams.has("description");
    const description = hasDescription
      ? searchParams.get("description")?.slice(0, 100)
      : "Just some thoughts...";

    const hasEmoji = searchParams.has("emoji");
    const emoji = hasEmoji ? searchParams.get("emoji") : "🦖";

    const imageData = await fetch(new URL("./bg.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    );

    const fontBold = await fetch(
      new URL("../../../../assets/Inter-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const fontRegular = await fetch(
      new URL("../../../../assets/Inter-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            background: "#f6f6f6",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            alt="Background image"
            src={imageData as unknown as string}
            width={1200}
            height={630}
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontSize: 96,
                fontStyle: "normal",
                letterSpacing: "-0.025em",
                color: "white",
                padding: "0 120px",
                lineHeight: 1.4,
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
                color: "white",
                marginTop: 8,
                padding: "0 120px",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 30,
                fontStyle: "Inter",
                fontWeight: 400,
                color: "white",
                marginTop: 8,
                padding: "0 120px",
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
          {
            data: fontBold,
            name: "Inter",
            style: "normal",
            weight: 700,
          },
          {
            data: fontRegular,
            name: "Inter",
            style: "normal",
            weight: 400,
          },
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
