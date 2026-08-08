import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import BackButton from "~/components/back-button";
import ContentWrapper from "~/components/content-wrapper";
import "~/styles/globals.css";

const inter = localFont({
  src: [
    {
      path: "../../node_modules/inter-ui/variable/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "../../node_modules/inter-ui/variable/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Analytics />
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6f872615-95f7-4efa-bd8f-4111ad56f0b9"
        ></script>
      </Head>
      <main
        className={`${inter.variable} firefox-scrollbar-fix min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased`}
      >
        {/* <Header /> */}
        <ContentWrapper>
          <BackButton />
          <Component {...pageProps} />
        </ContentWrapper>
      </main>
    </>
  );
};

export default MyApp;
