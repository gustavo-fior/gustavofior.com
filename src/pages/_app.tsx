import { MDXProvider } from "@mdx-js/react";
import { type Components } from "@mdx-js/react/lib";
import { type AppType } from "next/app";
import CommandBar from "~/components/CommandBar";
import GradientCanvas from "~/components/GradientCanvas";
import Code from "~/components/md/Code";
import CustomImage from "~/components/md/CustomImage";
import H1 from "~/components/md/H1";
import H2 from "~/components/md/H2";
import H3 from "~/components/md/H3";
import Li from "~/components/md/Li";
import LinkText from "~/components/md/LinkText";
import OrderedList from "~/components/md/OrderedList";
import P from "~/components/md/P";
import Quote from "~/components/md/Quote";
import Strong from "~/components/md/Strong";
import UnorderedList from "~/components/md/UnorderedList";
import "~/styles/globals.css";
import { api } from "~/utils/api";

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
  };

  return (
    <CommandBar>
      <MDXProvider components={components as unknown as Components}>
        <main className="flex max-h-screen min-h-screen flex-col overflow-auto text-white scrollbar-hide">
          <GradientCanvas />
          <div className="z-10">
            <Component {...pageProps} />
          </div>
        </main>
      </MDXProvider>
    </CommandBar>
  );
};

export default api.withTRPC(MyApp);
