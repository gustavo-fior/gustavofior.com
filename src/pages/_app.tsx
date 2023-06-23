import { type AppType } from "next/app";
import GradientCanvas from "~/components/GradientCanvas";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <main className="flex max-h-screen min-h-screen flex-col text-white">
        <GradientCanvas />
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
