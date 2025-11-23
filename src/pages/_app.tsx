/* eslint-disable @next/next/no-page-custom-font */
import { MDXProvider } from "@mdx-js/react";
import { type Components } from "@mdx-js/react/lib";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import Head from "next/head";
import BackButton from "~/components/back-button";
import ContentWrapper from "~/components/content-wrapper";
import Code from "~/components/md/code";
import CustomImage from "~/components/md/custom-image";
import H1 from "~/components/md/h1";
import H2 from "~/components/md/h2";
import H3 from "~/components/md/h3";
import Hr from "~/components/md/hr";
import Li from "~/components/md/li";
import LinkText from "~/components/md/link-text";
import OrderedList from "~/components/md/ol";
import P from "~/components/md/p";
import Quote from "~/components/md/quote";
import Strong from "~/components/md/strong";
import UnorderedList from "~/components/md/ul";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    strong: Strong,
    li: Li,
    p: P,
    a: LinkText,
    blockquote: Quote,
    ul: UnorderedList,
    ol: OrderedList,
    img: CustomImage,
    pre: Code,
    hr: Hr,
  };

  return (
    <>
      <Analytics />
      <MDXProvider components={components as unknown as Components}>
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
      </MDXProvider>
    </>
  );
};

export default MyApp;
