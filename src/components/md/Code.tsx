import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, type ReactNode } from "react";

hljs.registerLanguage("js", javascript);
hljs.registerLanguage("java", java);

interface CodeProps {
  lang: string;
  children: ReactNode;
}

export default function Code({ lang, children }: CodeProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="my-4 w-full rounded-lg bg-white bg-opacity-20 p-4 drop-shadow-lg backdrop-blur-lg">
      <code lang={lang}>{children}</code>
    </pre>
  );
}
