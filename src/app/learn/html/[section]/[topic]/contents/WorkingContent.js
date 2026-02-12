"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Write HTML Code",
    desc: "Developer writes HTML using tags and elements.",
  },
  {
    title: "Browser Reads HTML",
    desc: "Browser reads HTML from top to bottom.",
  },
  {
    title: "DOM Tree Created",
    desc: "HTML is converted into a DOM (Document Object Model).",
  },
  {
    title: "Browser Renders Page",
    desc: "DOM is painted on screen as a webpage.",
  },
];

export default function WorkingContent() {
  return (
    <div className="w-full space-y-16">

      {/* ================= HEADER ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Working of HTML ⚙️
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Let’s understand what actually happens when you open an HTML file
          in a browser — step by step.
        </p>
      </motion.section>

      {/* ================= FLOW ANIMATION ================= */}
      <section className="grid md:grid-cols-4 gap-6 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative p-5 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="text-2xl font-bold text-orange-400 mb-2">
              {index + 1}
            </div>
            <h3 className="text-white font-semibold mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-gray-400">
              {step.desc}
            </p>

            {/* Arrow */}
            {index !== steps.length - 1 && (
              <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-500">
                →
              </span>
            )}
          </motion.div>
        ))}
      </section>

      {/* ================= CODE TO DOM ================= */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">
          HTML Code Example 📄
        </h2>

        <div className="rounded-xl bg-black/40 border border-white/10 p-5">
          <pre className="text-sm text-green-400 overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Working</title>
  </head>
  <body>
    <h1>Hello Browser</h1>
    <p>This is how HTML works.</p>
  </body>
</html>`}
          </pre>
        </div>
      </motion.section>

      {/* ================= DOM VISUAL ================= */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">
          DOM Tree Created 🌳
        </h2>

        <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-gray-300 text-sm leading-relaxed">
          &lt;html&gt;
          <br />
          ├── &lt;head&gt;
          <br />
          │   └── &lt;title&gt;
          <br />
          └── &lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;├── &lt;h1&gt;&nbsp;Hello Browser&nbsp;&lt;/h1&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;└── &lt;p&gt;&nbsp;This is how HTMl works&nbsp;&lt;/p&gt;
          <br />
          └──&lt;/body&gt;
          <br />
          └──&lt;/html&gt;
        </div>

        <p className="text-gray-400">
          Browser converts HTML into a tree-like structure called DOM,
          which helps it understand relationships between elements.
        </p>
      </motion.section>

      {/* ================= RENDER OUTPUT ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">
          Final Rendered Output 🖥️
        </h2>

        <div className="rounded-xl bg-white p-5 text-black">
          <h1 className="text-2xl font-bold">Hello Browser</h1>
          <p>This is how HTML works.</p>
        </div>
      </motion.section>

      {/* ================= IMPORTANT NOTES ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          💡 Important Points
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>HTML is parsed line by line</li>
          <li>Browser creates DOM from HTML</li>
          <li>DOM is used for rendering & JavaScript</li>
          <li>Errors don’t stop rendering (HTML is forgiving)</li>
        </ul>
      </motion.section>

    </div>
  );
}
