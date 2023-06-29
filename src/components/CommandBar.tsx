import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";
import { type ReactNode } from "react";
import {
  BsEnvelopeFill,
  BsFillFilePersonFill,
  BsGithub,
  BsLinkedin,
  BsPenFill,
} from "react-icons/bs";

type CommandBarProps = {
  children: ReactNode;
};

const CommandBar: React.FC<CommandBarProps> = ({ children }) => {
  const router = useRouter();

  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "blog",
      icon: <BsPenFill size={16} />,
      perform: () => router.push("/blog"),
    },
    {
      id: "about",
      name: "About me",
      shortcut: ["a"],
      keywords: "about",
      icon: <BsFillFilePersonFill size={16} />,
      perform: () => router.push("/about"),
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["i"],
      keywords: "github",
      icon: <BsGithub size={16} />,
      section: "Socials",
      perform: () => router.push("https://github.com/gustavo-fior"),
    },
    {
      id: "email",
      name: "Email",
      shortcut: ["e"],
      keywords: "contact",
      icon: <BsEnvelopeFill size={16} />,
      section: "Socials",
      perform: () => router.push("mailto:gustavo_fior@outlook.com"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["l"],
      keywords: "linkedin",
      icon: <BsLinkedin size={16} />,
      section: "Socials",
      perform: () =>
        router.push("https://linkedin.com/in/gustavo-fior-a910781b4/"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-md backdrop-filter">
          <KBarAnimator className="w-full max-w-2xl overflow-hidden rounded-lg">
            <KBarSearch
              className="w-full border-none bg-white bg-opacity-20 px-6
         py-4 text-lg text-white outline-none drop-shadow-lg backdrop-blur-lg"
              placeholder="Search..."
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

function RenderResults(): JSX.Element {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="bg-white bg-opacity-20 px-6 py-4 text-lg font-bold text-white">
            {item}
          </div>
        ) : (
          <div
            className={`flex justify-between bg-white px-6 py-4
            text-lg text-white ${active ? "bg-opacity-40" : "bg-opacity-20"}`}
          >
            <div className="flex items-center gap-4">
              <span>{item.icon}</span>
              {item.name}
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-slate-400 bg-opacity-10 px-2 py-0.5 text-white drop-shadow-lg backdrop-blur-lg">
                g
              </span>
              <span className="rounded-md bg-slate-400 bg-opacity-10 px-2 py-0.5 text-white drop-shadow-lg backdrop-blur-lg">
                {item.shortcut}
              </span>
            </div>
          </div>
        )
      }
    />
  );
}

export default CommandBar;
