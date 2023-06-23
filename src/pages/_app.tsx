import { MDXProvider } from "@mdx-js/react";
import { type AppType } from "next/app";
import GradientCanvas from "~/components/GradientCanvas";
import MyHeading from "~/components/Text";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  const components = {
    h1: MyHeading,
  };

  return (
    <main className="flex max-h-screen min-h-screen flex-col overflow-auto text-white scrollbar-hide">
      <MDXProvider components={components}>
        <GradientCanvas />
        <div className="z-10">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
