"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedDetailedLesson({
  title,
  subtitle,
  intro,
  steps = [],
  deepDive = [],
  commonMistakes = [],
  practice,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const currentStep = useMemo(() => steps[activeStep], [steps, activeStep]);

  useEffect(() => {
    if (!autoplay || steps.length <= 1) return undefined;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [autoplay, steps.length]);

  return (
    <div className="w-full mt-16 mx-auto space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-3"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-200">
          Animated Learning
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-cyan-200/90 text-lg">{subtitle}</p>}
        <p className="text-gray-300 leading-relaxed max-w-4xl">{intro}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
      >
        <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl font-semibold">Interactive Walkthrough</h2>
            <button
              type="button"
              onClick={() => setAutoplay((v) => !v)}
              className={`px-3 py-1.5 rounded-md border text-sm ${
                autoplay
                  ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-100"
                  : "border-white/25 text-white"
              }`}
            >
              {autoplay ? "Autoplay On" : "Autoplay Off"}
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/35 p-4 min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="inline-flex rounded-md border border-cyan-400/40 bg-cyan-500/15 px-2.5 py-1 text-xs text-cyan-200">
                  {currentStep.label}
                </div>
                <h3 className="text-white font-semibold">{currentStep.title}</h3>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  {currentStep.visual}
                </div>
                <p className="text-gray-300 text-sm">{currentStep.explain}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={activeStep}
              initial={{ width: 0 }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.35 }}
              className="h-full bg-cyan-400"
            />
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setActiveStep((s) => (s - 1 + steps.length) % steps.length)}
              className="px-3 py-1.5 rounded-md border border-white/20 text-gray-200 hover:bg-white/10"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((s) => (s + 1) % steps.length)}
              className="px-3 py-1.5 rounded-md border border-white/20 text-gray-200 hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
          <h2 className="text-white text-xl font-semibold">Step Code</h2>
          <div className="rounded-xl border border-white/10 bg-black/35 p-4">
            <pre className="text-sm text-green-400 overflow-x-auto">{currentStep.code}</pre>
          </div>
          <div className="rounded-lg border border-amber-400/30 bg-amber-500/10 p-3 text-amber-100 text-sm">
            <span className="font-semibold">Why it matters: </span>
            {currentStep.why}
          </div>
        </div>
      </motion.section>

      {deepDive.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-white text-2xl font-semibold mb-4">Detailed Explanation</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {deepDive.map((point) => (
              <div key={point} className="rounded-lg border border-white/10 bg-black/25 p-4 text-gray-300">
                {point}
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {commonMistakes.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6"
        >
          <h2 className="text-red-100 text-2xl font-semibold mb-3">Common Mistakes</h2>
          <ul className="list-disc ml-6 text-red-100/95 space-y-1">
            {commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {practice && (
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border border-indigo-400/25 bg-indigo-500/10 p-6"
        >
          <h2 className="text-indigo-100 text-2xl font-semibold mb-2">Practice Task</h2>
          <p className="text-indigo-100/95 mb-4">{practice.task}</p>
          <div className="rounded-xl border border-white/10 bg-black/35 p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">{practice.solution}</pre>
          </div>
        </motion.section>
      )}
    </div>
  );
}

