/* eslint-disable @next/next/no-page-custom-font */
import { MDXProvider } from "@mdx-js/react";
import { type Components } from "@mdx-js/react/lib";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import Head from "next/head";
import BackButton from "~/components/back-button";
import ContentWrapper from "~/components/content-wrapper";
import Code from "~/components/md/Code";
import CustomImage from "~/components/md/CustomImage";
import H1 from "~/components/md/H1";
import H2 from "~/components/md/H2";
import H3 from "~/components/md/H3";
import Hr from "~/components/md/Hr";
import Li from "~/components/md/Li";
import LinkText from "~/components/md/LinkText";
import OrderedList from "~/components/md/Ol";
import P from "~/components/md/P";
import Quote from "~/components/md/Quote";
import Strong from "~/components/md/Strong";
import UnorderedList from "~/components/md/Ul";
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
