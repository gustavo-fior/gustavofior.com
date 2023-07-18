import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(): Promise<ImageResponse> {
  const imageData: ArrayBuffer = await fetch(new URL('./og.jpeg', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img width="960" height="540" src={URL.createObjectURL(new Blob([imageData]))} />
      </div>
    ),
    {
      width: 960,
      height: 540,
    },
  );
}
