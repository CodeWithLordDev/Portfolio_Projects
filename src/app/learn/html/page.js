"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { htmlTopics } from "@/data/htmlTopics";

export default function HTMLHomePage() {
  const firstSection = htmlTopics[0];
  const firstTopic = firstSection.children[0];
  const totalTopics = htmlTopics.reduce((count, section) => count + section.children.length, 0);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-500/20 p-8 md:p-12"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-200/80">Foundations First</p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Learn HTML the right way</h1>
        <p className="max-w-3xl text-slate-200/90">
          Learn HTML with beginner-friendly lessons, interactive examples, and
          structured progression from basics to advanced topics.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/learn/html/${firstSection.slug}/${firstTopic.slug}`}
            className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start Learning
          </Link>
          <span className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200">
            {htmlTopics.length} sections · {totalTopics} topics
          </span>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {htmlTopics.map((section) => (
          <div
            key={section.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30"
          >
            <h2 className="mb-2 text-lg font-semibold text-white">{section.title}</h2>
            <p className="mb-4 text-sm text-slate-300">{section.children.length} topics</p>
            <div className="flex flex-wrap gap-2">
              {section.children.slice(0, 3).map((topic) => (
                <span
                  key={topic.slug}
                  className="rounded-lg border border-white/10 bg-slate-900/50 px-2.5 py-1 text-xs text-slate-300"
                >
                  {topic.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.section>
    </div>
  );
}
