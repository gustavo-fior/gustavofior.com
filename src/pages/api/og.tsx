import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};
//

export default async function handler() {
  try {
    const fontData = await fetch(
      new URL("../../../assets/Inter-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            background: "#111112",
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
              marginLeft: 180,
              marginTop: 420,
            }}
          >
            <div
              tw="font-bold"
              style={{
                fontSize: 128,
                fontFamily: "Inter",
                color: "#e5e5e5",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                fontWeight: 200,
              }}
            >
              Gustavo Fior
            </div>
            <div
              tw="font-bold"
              style={{
                fontSize: 72,
                fontFamily: "Inter",
                color: "#737373",
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