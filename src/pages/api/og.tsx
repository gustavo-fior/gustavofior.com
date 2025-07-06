import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};
//

export default async function handler() {
  try {
    const fontData = await fetch(
      new URL("../../../assets/InstrumentSerif-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            background: "#f5f5f5",
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
              marginLeft: 64,
              marginTop: 320,
            }}
          >
            <div
              style={{
                fontSize: 128,
                fontFamily: "Instrument Serif",
                color: "#000000",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              Gustavo Fior
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
