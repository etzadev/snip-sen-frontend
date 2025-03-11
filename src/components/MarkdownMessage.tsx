import { useEffect } from "react";
import PrismJs from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "../styles/prism-holi.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-go";
import "prismjs/components/prism-asm6502";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-css";
import MarkdownIt from "markdown-it";
import { Loader } from "./Loader";

type MarkdownMessageProps = {
  ia_input: string;
  ia_output: string;
  isLoading?: boolean;
};

export default function MarkdownMessage(props: MarkdownMessageProps) {
  const markdown = MarkdownIt({
    highlight: (str, lang) => {
      if (lang && PrismJs.languages[lang]) {
        try {
          return PrismJs.highlight(str, PrismJs.languages[lang], lang);
        } catch (error) {
          console.error(`Error highlighting code block: ${error}`);
        }
      }
      return "";
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      PrismJs.highlightAll();
    }, 1000);
    return () => clearTimeout(timer);
  }, [props.ia_output]);

  useEffect(() => {
    PrismJs.highlightAll();
  }, []);

  if (props.isLoading) return <Loader />;

  return (
    <>
      <div className="py-4">
        {props.ia_input && (
          <h1 className="text-3xl font-bold text-gray-300">
            Prompt: {props.ia_input}
          </h1>
        )}
      </div>

      <article
        className="prose-dark max-w-full"
        dangerouslySetInnerHTML={{ __html: markdown.render(props.ia_output) }}
      ></article>
    </>
  );
}
