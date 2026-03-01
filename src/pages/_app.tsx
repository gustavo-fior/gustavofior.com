/* eslint-disable @next/next/no-page-custom-font */
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import Head from "next/head";
import BackButton from "~/components/back-button";
import ContentWrapper from "~/components/content-wrapper";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Analytics />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6f872615-95f7-4efa-bd8f-4111ad56f0b9"
        ></script>
      </Head>
      <main className="firefox-scrollbar-fix min-h-screen bg-neutral-100 text-neutral-900">
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
