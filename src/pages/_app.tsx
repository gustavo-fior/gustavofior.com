import { MDXProvider } from "@mdx-js/react";
import { type Components } from "@mdx-js/react/lib";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import { type AppType } from "next/app";
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

  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "blog"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <MDXProvider components={components as unknown as Components}>
        <main className="flex max-h-screen min-h-screen flex-col overflow-auto text-white scrollbar-hide">
          <GradientCanvas />
          <div className="z-10">
            <KBarPortal>
              <KBarPositioner className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm backdrop-filter">
                <KBarAnimator className="w-full max-w-2xl overflow-hidden rounded-lg">
                  <KBarSearch
                    className="w-full p-4 drop-shadow-lg text-lg
                     backdrop-blur-lg text-white bg-white bg-opacity-20"
                    placeholder="Search..."
                  />

                  <RenderResults />
                </KBarAnimator>
              </KBarPositioner>
            </KBarPortal>
            <Component {...pageProps} />
          </div>
        </main>
      </MDXProvider>
    </KBarProvider>
  );
};

function RenderResults(): JSX.Element {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({
        item,
        active,
      }: {
        item: string | { name: string };
        active: boolean;
      }): JSX.Element =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "transparent",
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

export default api.withTRPC(MyApp);
