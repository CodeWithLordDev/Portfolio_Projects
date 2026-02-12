"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import CodeEditor from "./CodeEditor";

function Term({ item, theme }) {
  return (
    <span
      className={`rounded-md border px-2 py-1 text-xs ${
        theme === "dark"
          ? "border-blue-300/30 bg-blue-500/10 text-blue-200"
          : "border-blue-200 bg-blue-50 text-blue-700"
      }`}
      title={item.tip}
    >
      {item.term}
    </span>
  );
}

function PropertyChip({ property, theme }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
        theme === "dark"
          ? "border-indigo-300/30 bg-indigo-500/15 text-indigo-200"
          : "border-indigo-200 bg-indigo-50 text-indigo-700"
      }`}
    >
      {property}
    </span>
  );
}

function Diagram({ type, theme }) {
  const cardClass =
    theme === "dark"
      ? "border-white/10 bg-slate-900/60 text-slate-100"
      : "border-slate-200 bg-white text-slate-900";

  if (type === "box-model") {
    return (
      <div className={`rounded-2xl border p-5 ${cardClass}`}>
        <h3 className="mb-3 text-lg font-semibold">Box Model Visual</h3>
        <div className="rounded-xl border border-yellow-400/40 bg-yellow-300/10 p-4 text-center">
          Margin
          <div className="mt-3 rounded-lg border border-blue-400/40 bg-blue-300/10 p-4">
            Border
            <div className="mt-3 rounded-lg border border-indigo-400/40 bg-indigo-300/10 p-4">
              Padding
              <div className="mt-3 rounded-lg border border-emerald-400/40 bg-emerald-300/10 p-4">
                Content
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "specificity") {
    return (
      <div className={`rounded-2xl border p-5 ${cardClass}`}>
        <h3 className="mb-3 text-lg font-semibold">Specificity Ladder</h3>
        <ol className="space-y-2 text-sm">
          <li className="rounded-lg border border-red-400/30 bg-red-500/10 p-2">1. Inline style (strongest)</li>
          <li className="rounded-lg border border-orange-400/30 bg-orange-500/10 p-2">2. ID selector</li>
          <li className="rounded-lg border border-blue-400/30 bg-blue-500/10 p-2">3. Class / attribute / pseudo-class</li>
          <li className="rounded-lg border border-slate-400/30 bg-slate-500/10 p-2">4. Element selector</li>
        </ol>
      </div>
    );
  }

  if (type === "flexbox") {
    return (
      <div className={`rounded-2xl border p-5 ${cardClass}`}>
        <h3 className="mb-3 text-lg font-semibold">Flexbox Axis Visual</h3>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="mb-2 text-sm">Main axis controls horizontal flow.</p>
          <p className="mb-3 text-sm">Cross axis controls vertical alignment.</p>
          <div className="flex gap-2 rounded-lg bg-blue-500/10 p-3">
            <div className="rounded bg-blue-500/35 px-3 py-1">A</div>
            <div className="rounded bg-blue-500/35 px-3 py-1">B</div>
            <div className="rounded bg-blue-500/35 px-3 py-1">C</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className={`rounded-2xl border p-5 ${cardClass}`}>
        <h3 className="mb-3 text-lg font-semibold">Grid Visual</h3>
        <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded bg-indigo-500/20 p-2 text-center text-sm">
              Cell {i + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "positioning" || type === "stacking") {
    return (
      <div className={`rounded-2xl border p-5 ${cardClass}`}>
        <h3 className="mb-3 text-lg font-semibold">Layering Visual</h3>
        <div className="relative h-40 rounded-xl border border-white/10 p-3">
          <div className="absolute left-8 top-8 rounded-lg bg-blue-500/30 px-4 py-3">Layer 1</div>
          <div className="absolute left-16 top-14 rounded-lg bg-indigo-500/40 px-4 py-3">Layer 2</div>
          <div className="absolute left-24 top-20 rounded-lg bg-violet-500/45 px-4 py-3">Layer 3</div>
        </div>
      </div>
    );
  }

  if (type === "flowchart") {
    return (
      <div className={`rounded-2xl border p-5 ${cardClass}`}>
        <h3 className="mb-3 text-lg font-semibold">Execution Flow</h3>
        <div className="space-y-2">
          <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 p-3">Input</div>
          <div className="rounded-lg border border-indigo-400/30 bg-indigo-500/10 p-3">Condition / Logic</div>
          <div className="rounded-lg border border-violet-400/30 bg-violet-500/10 p-3">Output</div>
        </div>
      </div>
    );
  }

  return null;
}

export default function TopicContent({
  sectionTitle,
  topicTitle,
  lesson,
  index,
  total,
  theme,
  conceptHeading = "Important CSS Properties",
  editorTitle = "Interactive Code Example",
  htmlLabel = "HTML",
  cssLabel = "CSS",
  jsLabel = "JavaScript",
}) {
  const [openWhy, setOpenWhy] = useState(true);
  const [openAnalogy, setOpenAnalogy] = useState(true);
  const [openPractice, setOpenPractice] = useState(true);

  const cardClass =
    theme === "dark"
      ? "border-white/10 bg-slate-900/60 text-slate-100"
      : "border-slate-200 bg-white text-slate-900";
  const muted = theme === "dark" ? "text-slate-300" : "text-slate-600";

  const levelLabel = useMemo(() => {
    if (index / total < 0.35) return "Beginner";
    if (index / total < 0.7) return "Intermediate";
    return "Advanced";
  }, [index, total]);

  return (
    <div className="space-y-6">
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-violet-600/20 p-7 md:p-10">
        <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
        <p className="mb-2 text-sm text-blue-200">
          {sectionTitle} - Lesson {index}/{total} - {levelLabel}
        </p>
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">{topicTitle}</h1>
        <p className={`max-w-3xl ${muted}`}>{lesson.intro}</p>
      </AnimatedSection>

      <AnimatedSection delay={0.05} className={`rounded-2xl border p-5 ${cardClass}`}>
        <button
          type="button"
          onClick={() => setOpenWhy((v) => !v)}
          className="mb-2 flex w-full items-center justify-between text-left text-xl font-semibold"
        >
          Why This Matters
          <span>{openWhy ? "-" : "+"}</span>
        </button>
        {openWhy && <p className={muted}>{lesson.why}</p>}
      </AnimatedSection>

      <AnimatedSection delay={0.1} className={`rounded-2xl border p-5 ${cardClass}`}>
        <button
          type="button"
          onClick={() => setOpenAnalogy((v) => !v)}
          className="mb-2 flex w-full items-center justify-between text-left text-xl font-semibold"
        >
          Simple Analogy
          <span>{openAnalogy ? "-" : "+"}</span>
        </button>
        {openAnalogy && <p className={muted}>{lesson.analogy}</p>}
      </AnimatedSection>

      <AnimatedSection delay={0.15} className={`rounded-2xl border p-5 ${cardClass}`}>
        <h2 className="mb-3 text-xl font-semibold">{conceptHeading}</h2>
        <div className="flex flex-wrap gap-2">
          {(lesson.properties || []).map((property) => (
            <PropertyChip key={property} property={property} theme={theme} />
          ))}
        </div>
        {(lesson.terms || []).length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {lesson.terms.map((item) => (
              <Term key={item.term} item={item} theme={theme} />
            ))}
          </div>
        )}
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="mb-3 text-xl font-semibold">{editorTitle}</h2>
        <CodeEditor
          exampleHtml={lesson.html}
          exampleCss={lesson.css}
          exampleJs={lesson.js}
          solutionHtml={lesson.solutionHtml}
          solutionCss={lesson.solutionCss}
          solutionJs={lesson.solutionJs}
          htmlLabel={htmlLabel}
          cssLabel={cssLabel}
          jsLabel={jsLabel}
          theme={theme}
        />
      </AnimatedSection>

      {lesson.diagram && (
        <AnimatedSection delay={0.25}>
          <Diagram type={lesson.diagram} theme={theme} />
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.3} className={`rounded-2xl border p-5 ${cardClass}`}>
        <button
          type="button"
          onClick={() => setOpenPractice((v) => !v)}
          className="mb-2 flex w-full items-center justify-between text-left text-xl font-semibold"
        >
          Mini Practice Challenge
          <span>{openPractice ? "-" : "+"}</span>
        </button>
        {openPractice && <p className={muted}>{lesson.challenge}</p>}
      </AnimatedSection>

      <AnimatedSection delay={0.35} className={`rounded-2xl border p-5 ${cardClass}`}>
        <h2 className="mb-3 text-xl font-semibold">Key Takeaways</h2>
        <ul className={`list-disc space-y-2 pl-5 ${muted}`}>
          {(lesson.takeaways || []).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </AnimatedSection>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pb-2 text-center text-xs uppercase tracking-wider text-indigo-400"
      >
        Keep editing the example until the idea feels natural.
      </motion.div>
    </div>
  );
}
