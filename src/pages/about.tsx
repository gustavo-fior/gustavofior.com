import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  BsEnvelopeFill,
  BsGithub,
  BsHouseFill,
  BsLinkedin,
} from "react-icons/bs";
import { Gradient } from "../utils/gradient/gradient";

const Home: NextPage = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen min-h-screen flex-col text-white">
        <canvas
          id="gradient-canvas"
          className="fixed inset-0"
          data-transition-in
        />
        <div className="flex w-full flex-grow items-center justify-center sm:px-24 py-12 md:py-16 sm:justify-between">
          <div className="pr-4">
            <Link href="/">
              <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
                <div className="flex items-center gap-2">
                  <BsHouseFill size={24} color="white" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/gustavo-fior">
              <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
                <div className="flex items-center gap-2">
                  <BsGithub size={24} color="white" />
                </div>
              </div>
            </Link>
            <Link href="https://linkedin.com/in/gustavo-fior-a910781b4/">
              <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
                <div className="flex items-center gap-2">
                  <BsLinkedin size={24} color="white" />
                </div>
              </div>
            </Link>
            <Link href="mailto:gustavo_fior@outlook.com">
              <div className="rounded-full bg-white bg-opacity-30 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-50">
                <div className="flex items-center gap-2">
                  <BsEnvelopeFill size={24} color="white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-grow flex-col px-16 md:px-96 pt-4 text-white">
          <h1 className="pb-6 text-4xl md:text-5xl font-bold">🙋🏼‍♂️ About me</h1>
          <p className="text-slate-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            est eros, auctor ut maximus non, imperdiet tempus dui. Cras
            efficitur arcu elit, et malesuada metus laoreet nec. In eget
            fringilla neque. Praesent fermentum accumsan libero, sed efficitur
            dui vestibulum in. Nunc bibendum, libero sit amet ullamcorper
            maximus, magna arcu efficitur lacus, eget luctus nulla nunc nec
            velit. Duis sodales dictum tellus in cursus. Duis finibus, urna eu
            hendrerit auctor, diam ligula tempus sem, sit amet finibus urna orci
            vel augue. Nullam viverra fringilla nibh, a varius justo accumsan
            quis. Nullam at nibh quis mauris tincidunt interdum. Sed arcu metus,
            ullamcorper non neque ac, mollis blandit dolor. Sed fermentum ligula
            ut sagittis efficitur. Integer luctus ullamcorper lorem at finibus.
            Donec scelerisque enim nec justo bibendum, non condimentum quam
            convallis. Etiam eu mi sed felis convallis lobortis eget nec nulla.
            Maecenas vehicula tempus vestibulum. Nam at facilisis eros. Donec a
            augue elit. Nunc convallis arcu risus, suscipit fringilla ante
            eleifend sed. Integer egestas tortor eu sapien dapibus, nec gravida
            felis pretium. Sed accumsan congue tortor, eget hendrerit magna
            iaculis non. Maecenas mattis sed tortor a commodo. Nam volutpat,
            turpis in posuere ultricies, nisl dui dignissim ex, vel sagittis
            ante orci ut metus. Vivamus laoreet, purus eget auctor tempus, velit
            elit facilisis nunc, a malesuada mi risus eu eros. Nunc lobortis
            sapien felis, eu tempor nulla hendrerit sed. Morbi pellentesque eu
            diam quis blandit. Integer sollicitudin aliquam tellus non viverra.
            Donec non ullamcorper felis, quis commodo dui. Donec fermentum
            lobortis suscipit. Suspendisse quis metus at ipsum vehicula
            elementum ac in justo. Proin dignissim posuere dui, venenatis
            ullamcorper risus dapibus quis. Nunc accumsan nulla eget magna
            luctus gravida. In at nisl velit. Etiam velit ex, consequat egestas
            tellus sit amet, blandit placerat erat. Suspendisse eget turpis nec
            tortor malesuada aliquet vitae sed nisl. Mauris pellentesque arcu
            rutrum risus pellentesque cursus. Aenean mollis sem vel justo luctus
            sollicitudin. Etiam ut suscipit odio. Quisque et libero condimentum,
            gravida neque at, rutrum ipsum. Vivamus id felis in massa pharetra
            blandit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Phasellus tempus
            placerat ex, eu dictum purus commodo quis. Nulla sed interdum lorem.
            Donec ut erat commodo, lacinia libero eget, auctor dolor. Vestibulum
            maximus mauris eu aliquet consequat. Nam ante mauris, hendrerit at
            ante at, faucibus rutrum nibh. Fusce blandit, quam in ultricies
            lacinia, elit purus imperdiet purus, eu euismod velit leo hendrerit
            lectus. Praesent porttitor dolor ut diam euismod viverra. Nunc
            auctor urna ac neque luctus, et iaculis est efficitur. Ut hendrerit
            sit amet urna in mollis. Nulla tristique arcu id aliquam vestibulum.
            Duis varius leo ut dui mattis hendrerit. Vivamus a magna in diam
            auctor cursus nec id risus. Integer laoreet quam velit. Praesent
            quis vehicula diam. Phasellus mollis magna ut placerat elementum.
            Integer fringilla ornare mi vel tempus. In maximus purus tristique
            hendrerit finibus. Integer ipsum ex, vehicula ac ligula semper,
            condimentum pellentesque orci. Sed nec eros at odio eleifend
            placerat. Integer et nunc lectus. Maecenas fermentum nisl in massa
            bibendum tempus. Mauris lectus diam, ullamcorper in viverra a,
            ultrices sed sapien. Aenean interdum, lacus in rutrum bibendum,
            metus eros luctus leo, eget sollicitudin urna est aliquet ipsum.
            Aliquam congue cursus turpis, sit amet auctor massa vestibulum quis.
            Nulla hendrerit tellus lorem, eu porta enim bibendum et.sad
          </p>
          <div className="rounded-lg bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
