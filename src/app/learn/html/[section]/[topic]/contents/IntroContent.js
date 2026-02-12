"use client";

import { motion } from "framer-motion";

export default function IntroContent() {
  return (
    <div className="w-full mt-18 mx-auto space-y-16">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Introduction to HTML 🌐
        </h1>
        <p className="text-gray-400 leading-relaxed">
          HTML (HyperText Markup Language) is the backbone of the web.
          Every website you see is built using HTML.
        </p>
      </motion.section>

      {/* ================= WHAT IS HTML ================= */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">
          What is HTML?
        </h2>

        <p className="text-gray-300">
          HTML is a <span className="text-orange-400">markup language</span>
          used to structure content on the web like headings, paragraphs,
          images, links, forms, and more.
        </p>

        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <p className="text-gray-400 text-sm">
            🧠 Think of HTML as the <strong>skeleton</strong> of a website.
          </p>
        </div>
      </motion.section>

      {/* ================= HOW HTML WORKS ================= */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">
          How HTML Works ⚙️
        </h2>

        {/* Animated Flow */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "You write HTML code",
            "Browser reads the code",
            "Browser displays webpage",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <p className="text-white font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= HTML STRUCTURE ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white">
          Basic HTML Structure 🧱
        </h2>

        <div className="rounded-xl bg-black/40 border border-white/10 p-5">
          <pre className="text-sm text-green-400 overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
          </pre>
        </div>

        <p className="text-gray-300">
          The browser reads this file from top to bottom and creates
          a visual webpage from it.
        </p>
      </motion.section>

      {/* ================= VISUAL RENDERING ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">
          What Browser Displays 🖥️
        </h2>

        <div className="rounded-xl bg-white p-5 text-black">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <p>This is my first HTML page.</p>
        </div>
      </motion.section>

      {/* ================= SUMMARY ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20"
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          ✅ What You Learned
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>HTML structures web content</li>
          <li>Browsers read and render HTML</li>
          <li>HTML uses tags and elements</li>
          <li>Every webpage starts with basic HTML structure</li>
        </ul>
      </motion.section>

    </div>
  );
}
