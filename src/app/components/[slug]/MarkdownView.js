"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

// ✅ CodeBlock Component
function CodeBlock({ inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  const codeString = String(children).replace(/\n$/, "");
  const lines = codeString.split("\n").length;
  const isLong = lines > 15;

  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div className="relative my-4 rounded-xl overflow-hidden bg-[#1e1e1e]">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`absolute top-2 right-2 text-xs text-white px-3 py-1 rounded-md z-20 transition-all duration-300 
            ${
              copied
                ? "bg-emerald-600 scale-110 shadow-[0_0_8px_2px_rgba(16,185,129,0.5)]"
                : "bg-gray-800/90 hover:bg-gray-700 hover:scale-105"
            } 
          `}
        >
          <span
            className={`inline-block transition-all duration-300 ${
              copied ? "opacity-100 scale-100" : "opacity-100 scale-100"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </span>
        </button>

        {/* Code area with smooth expand/collapse */}
        <div
          className="transition-[max-height] duration-500 ease-in-out"
          style={{
            maxHeight: expanded ? "1000px" : isLong ? "400px" : "none",
            overflow: "hidden",
            borderRadius: "0.75rem",
          }}
        >
          <SyntaxHighlighter
            language={match[1]}
            style={atomOneDark}
            showLineNumbers
            PreTag="div"
            customStyle={{
              margin: 0,
              borderRadius: "0.75rem",
              background: "#1e1e1e",
            }}
            {...props}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        {/* Blur overlay when collapsed */}
        {isLong && !expanded && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1e1e1e] to-transparent backdrop-blur-sm flex justify-center items-end pb-3">
            <button
              onClick={() => setExpanded(true)}
              className="text-xs text-white bg-gray-800/90 hover:bg-gray-700 px-3 py-1 rounded-md backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Show More ▼
            </button>
          </div>
        )}

        {/* Show Less button when expanded */}
        {isLong && expanded && (
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-3 bg-gradient-to-t from-[#1e1e1e]/90 to-transparent">
            <button
              onClick={() => setExpanded(false)}
              className="text-xs text-white bg-gray-800/90 hover:bg-gray-700 px-3 py-1 rounded-md backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Show Less ▲
            </button>
          </div>
        )}
      </div>
    );
  }

  // Inline code fallback
  return (
    <code className="bg-gray-800 text-white px-1 py-0.5 rounded" {...props}>
      {children}
    </code>
  );
}

// ✅ Main Markdown Component
export default function MarkdownView({ content }) {
  return (
    <article className="prose prose-invert max-w-none prose-h2:text-center prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-4 prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-300 prose-p:text-center">

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img({ src, alt }) {
            return (
              <img
                src={src}
                alt={alt}
                className="mx-auto my-6 rounded-xl shadow-lg border border-gray-700"
              />
            );
          },
          code: CodeBlock,
          a({ href, children, ...props }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
