import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import plaintext from "highlight.js/lib/languages/plaintext";
import { useEffect, type ReactNode } from "react";

hljs.registerLanguage("js", javascript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("plaintext", plaintext);

interface CodeProps {
  lang: string;
  children: ReactNode;
}

export default function Code({ lang, children }: CodeProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre
      className="my-4 w-full whitespace-pre-wrap break-words rounded-xl bg-white p-5 text-[13px]"
      style={{
        outline: "1px solid rgba(0, 0, 0, 0.05)",
        outlineOffset: "-1px",
      }}
    >
      <code lang={lang}>{children}</code>
    </pre>
  );
}
