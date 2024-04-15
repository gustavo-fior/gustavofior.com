import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};


export default async function handler() {
  try {
    const fontData = await fetch(
      new URL("../../../assets/Inter-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

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
              marginLeft: 240,
              marginTop: 96,
            }}
          >
            <div
              tw="font-bold"
              style={{
                fontSize: 128,
                letterSpacing: "-0.025em",
                fontFamily: "Inter",
                color: "#e5e5e5",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                fontWeight: 500,
              }}
            >
              Gustavo Fior
            </div>
            <div
              tw="font-bold"
              style={{
                fontSize: 128,
                letterSpacing: "-0.025em",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                fontWeight: 200,
                fontStyle: "italic",
              }}
            >
              Software Engineer
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