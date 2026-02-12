"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const codeLines = [
  "<!DOCTYPE html>",
  '<html lang="en">',
  "  <head>",
  '    <meta charset="UTF-8" />',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  "    <title>My Page</title>",
  "  </head>",
  "  <body>",
  "    <h1>Welcome</h1>",
  "    <p>This is visible content.</p>",
  "  </body>",
  "</html>",
];

const learningSteps = [
  {
    id: "doctype",
    title: "1) DOCTYPE",
    codeLine: 1,
    tag: "<!DOCTYPE html>",
    explanation:
      "Tells the browser to use modern HTML5 standards mode so layout and CSS behave predictably.",
    whyItMatters:
      "Without it, browsers can enter quirks mode and render your UI inconsistently.",
    tips: [
      "Always keep it as the very first line.",
      "No closing tag is needed.",
    ],
    gradient: "from-rose-500 to-orange-500",
  },
  {
    id: "html",
    title: "2) HTML Root",
    codeLine: 2,
    tag: "<html lang=\"en\">",
    explanation:
      "Wraps the entire document. The lang attribute helps screen readers and search engines understand language.",
    whyItMatters:
      "Language metadata improves accessibility and SEO quality.",
    tips: ["Use a valid language code like en or hi.", "Only one html root per page."],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "head",
    title: "3) Head Section",
    codeLine: 3,
    tag: "<head>...</head>",
    explanation:
      "Contains metadata: charset, viewport, title, stylesheets, scripts, and SEO information.",
    whyItMatters:
      "This data controls how your page is interpreted, indexed, and rendered.",
    tips: [
      "Keep meta tags near the top.",
      "Put user-visible content in body, not head.",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "title",
    title: "4) Title",
    codeLine: 6,
    tag: "<title>",
    explanation:
      "Sets the browser tab title and is often used as the main title in search results.",
    whyItMatters:
      "A clear title helps users identify the page instantly.",
    tips: [
      "Write short and specific titles.",
      "Each page should have a unique title.",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "body",
    title: "5) Body Section",
    codeLine: 8,
    tag: "<body>...</body>",
    explanation:
      "Contains all visible elements: headings, text, images, links, forms, and UI components.",
    whyItMatters:
      "Everything users interact with lives here.",
    tips: [
      "Structure content with semantic tags.",
      "Keep heading hierarchy clean for readability.",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

function StepCard({ step, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-xl border p-4 transition-all duration-300 ${
        active
          ? "bg-white/10 border-white/30 shadow-lg shadow-black/30"
          : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
      }`}
    >
      <p className="text-white font-semibold">{step.title}</p>
      <p className="text-gray-300 text-sm mt-1 font-mono">{step.tag}</p>
    </button>
  );
}

export default function PageStructureContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const currentStep = useMemo(() => learningSteps[activeStep], [activeStep]);

  useEffect(() => {
    if (!autoplay) return undefined;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % learningSteps.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [autoplay]);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % learningSteps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + learningSteps.length) % learningSteps.length);
  };

  return (
    <div className="w-full mt-16 mx-auto space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-cyan-300 text-sm">
          Interactive Learning Mode
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">HTML Page Structure</h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Learn by animation: play the lesson and watch each part of the HTML document get highlighted with an explanation.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
      >
        <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl font-semibold">Animated Code Walkthrough</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevStep}
                className="px-3 py-1.5 rounded-md border border-white/20 text-gray-200 hover:bg-white/10"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-3 py-1.5 rounded-md border border-white/20 text-gray-200 hover:bg-white/10"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => setAutoplay((v) => !v)}
                className={`px-3 py-1.5 rounded-md border text-gray-100 ${
                  autoplay ? "border-emerald-400/60 bg-emerald-500/15" : "border-white/20"
                }`}
              >
                {autoplay ? "Autoplay On" : "Autoplay Off"}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/35 p-4 font-mono text-sm leading-7 overflow-x-auto">
            {codeLines.map((line, idx) => {
              const lineNo = idx + 1;
              const active = lineNo === currentStep.codeLine;
              return (
                <motion.div
                  key={lineNo}
                  layout
                  className={`grid grid-cols-[2rem_1fr] gap-3 px-2 rounded-md ${
                    active ? "bg-cyan-500/15 text-cyan-200" : "text-gray-300"
                  }`}
                >
                  <span className="text-gray-500 select-none">{lineNo}</span>
                  <span>{line}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={activeStep}
              initial={{ width: 0 }}
              animate={{ width: `${((activeStep + 1) / learningSteps.length) * 100}%` }}
              transition={{ duration: 0.35 }}
              className={`h-full bg-gradient-to-r ${currentStep.gradient}`}
            />
          </div>
        </div>

        <div className="space-y-3">
          {learningSteps.map((step, idx) => (
            <StepCard
              key={step.id}
              step={step}
              active={idx === activeStep}
              onClick={() => setActiveStep(idx)}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className={`inline-block rounded-md bg-gradient-to-r ${currentStep.gradient} px-3 py-1 text-white text-sm font-semibold`}>
              {currentStep.title}
            </div>
            <p className="text-gray-200 leading-relaxed">{currentStep.explanation}</p>
            <div className="rounded-lg border border-amber-400/30 bg-amber-500/10 p-4 text-amber-100">
              <span className="font-semibold">Why this matters: </span>
              {currentStep.whyItMatters}
            </div>
            <div>
              <p className="text-white font-medium mb-2">Remember:</p>
              <ul className="list-disc ml-6 text-gray-300 space-y-1">
                {currentStep.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="grid md:grid-cols-3 gap-4"
      >
        {[
          {
            title: "Watch",
            desc: "Let autoplay run and observe which code line is highlighted.",
          },
          {
            title: "Pause",
            desc: "Turn off autoplay and move step-by-step with Prev/Next.",
          },
          {
            title: "Practice",
            desc: "Write the same skeleton from memory and compare with highlighted lines.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
}
