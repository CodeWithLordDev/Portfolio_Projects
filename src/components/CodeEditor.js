"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function buildSrcDoc(htmlCode, cssCode, jsCode, theme) {
  const bodyBg = theme === "dark" ? "#0b1220" : "#ffffff";
  const bodyColor = theme === "dark" ? "#e2e8f0" : "#0f172a";

  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    :root { color-scheme: ${theme === "dark" ? "dark" : "light"}; }
    body {
      margin: 0;
      padding: 16px;
      font-family: Inter, Segoe UI, Arial, sans-serif;
      background: ${bodyBg};
      color: ${bodyColor};
    }
    * { box-sizing: border-box; }
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    try {
      ${jsCode}
    } catch (err) {
      const pre = document.createElement("pre");
      pre.style.marginTop = "12px";
      pre.style.color = "#ef4444";
      pre.textContent = "Runtime error: " + err.message;
      document.body.appendChild(pre);
    }
  </script>
</body>
</html>`;
}

export default function CodeEditor({
  exampleHtml,
  exampleCss,
  exampleJs = "",
  solutionHtml,
  solutionCss,
  solutionJs = "",
  theme = "dark",
  htmlLabel = "HTML",
  cssLabel = "CSS",
  jsLabel = "JavaScript",
}) {
  const showJs = Boolean(exampleJs || solutionJs);
  const [mode, setMode] = useState("example");
  const [htmlCode, setHtmlCode] = useState(exampleHtml);
  const [cssCode, setCssCode] = useState(exampleCss);
  const [jsCode, setJsCode] = useState(exampleJs);
  const [copied, setCopied] = useState(false);

  const srcDoc = useMemo(
    () => buildSrcDoc(htmlCode, cssCode, jsCode, theme),
    [htmlCode, cssCode, jsCode, theme]
  );

  const cardClass =
    theme === "dark"
      ? "border-white/10 bg-slate-900/60 text-slate-100"
      : "border-slate-200 bg-white text-slate-900";
  const fieldClass =
    theme === "dark"
      ? "border-white/10 bg-slate-950/80 text-sky-100"
      : "border-slate-200 bg-slate-50 text-slate-900";

  function loadMode(nextMode) {
    setMode(nextMode);
    if (nextMode === "example") {
      setHtmlCode(exampleHtml);
      setCssCode(exampleCss);
      setJsCode(exampleJs);
    } else {
      setHtmlCode(solutionHtml);
      setCssCode(solutionCss);
      setJsCode(solutionJs);
    }
  }

  async function handleCopy() {
    const full = showJs
      ? `/* HTML */\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n/* JavaScript */\n${jsCode}`
      : `/* HTML */\n${htmlCode}\n\n/* CSS */\n${cssCode}`;
    await navigator.clipboard.writeText(full);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className={`rounded-2xl border p-4 md:p-5 shadow-xl ${cardClass}`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-lg border border-blue-400/30 bg-blue-500/10 p-1">
          <button
            type="button"
            onClick={() => loadMode("example")}
            className={`rounded-md px-3 py-1.5 text-sm transition ${
              mode === "example" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Example
          </button>
          <button
            type="button"
            onClick={() => loadMode("solution")}
            className={`rounded-md px-3 py-1.5 text-sm transition ${
              mode === "solution" ? "bg-indigo-500 text-white" : ""
            }`}
          >
            Solution
          </button>
        </div>

        <motion.button
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={handleCopy}
          className="rounded-lg border border-blue-400/40 bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 text-sm text-white"
        >
          {copied ? "Copied" : "Copy Code"}
        </motion.button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-blue-400">{htmlLabel}</label>
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              className={`h-40 w-full rounded-xl border p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-blue-500/40 ${fieldClass}`}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-indigo-400">{cssLabel}</label>
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              className={`h-40 w-full rounded-xl border p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 ${fieldClass}`}
            />
          </div>
          {showJs && (
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-violet-400">{jsLabel}</label>
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className={`h-40 w-full rounded-xl border p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-violet-500/40 ${fieldClass}`}
              />
            </div>
          )}
        </div>

        <div className={`rounded-xl border ${fieldClass} overflow-hidden`}>
          <div className="border-b border-blue-400/20 px-3 py-2 text-xs uppercase tracking-wide text-blue-400">
            Live Preview
          </div>
          <iframe title="CSS preview" srcDoc={srcDoc} className="h-[342px] w-full" />
        </div>
      </div>
    </div>
  );
}
