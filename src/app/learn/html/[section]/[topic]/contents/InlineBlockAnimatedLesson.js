"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Pill({ children, tone = "blue" }) {
  const toneClass =
    tone === "violet"
      ? "bg-violet-500/15 border-violet-400/40 text-violet-200"
      : "bg-cyan-500/15 border-cyan-400/40 text-cyan-200";
  return (
    <span className={`inline-flex rounded-md border px-2.5 py-1 text-xs ${toneClass}`}>
      {children}
    </span>
  );
}

export default function InlineBlockAnimatedLesson({
  heading,
  intro,
  mode,
  steps,
  compareText,
  codeSample,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const currentStep = useMemo(() => steps[activeStep], [steps, activeStep]);

  useEffect(() => {
    if (!autoplay) return undefined;
    const t = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(t);
  }, [autoplay, steps.length]);

  return (
    <div className="w-full mt-16 mx-auto space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-gray-200">
          Animation Learning
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">{heading}</h1>
        <p className="text-gray-300 mt-3 max-w-3xl leading-relaxed">{intro}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`grid gap-6 ${
          mode === "block" ? "lg:grid-cols-[1.35fr_0.65fr]" : "lg:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        <div className="rounded-2xl border w-[20rem] border-white/10 bg-[#0b1220] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Live Behavior Demo</h2>
            <button
              type="button"
              onClick={() => setAutoplay((v) => !v)}
              className={`px-3 py-1.5 rounded-md border text-sm ${
                autoplay ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-100" : "border-white/25 text-white"
              }`}
            >
              {autoplay ? "Autoplay On" : "Autoplay Off"}
            </button>
          </div>

          <div
            className={`rounded-xl border border-white/10 bg-black/35 p-4 ${
              mode === "block" ? "min-h-[260px]" : "min-h-[220px]"
            }`}
          >
            <div className="text-xs text-gray-400 mb-3">Stage</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Pill tone={mode === "inline" ? "blue" : "violet"}>
                    {mode === "inline" ? "Inline Flow" : "Block Flow"}
                  </Pill>
                  <Pill>{currentStep.label}</Pill>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  {currentStep.visual}
                </div>
                <p className="text-gray-300 text-sm">{currentStep.explain}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={activeStep}
              initial={{ width: 0 }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.35 }}
              className={`h-full ${mode === "inline" ? "bg-cyan-400" : "bg-violet-400"}`}
            />
          </div>

          <div className="flex gap-2">
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
          <h2 className="text-white text-xl font-semibold">Compare Quickly</h2>
          <p className="text-gray-300">{compareText}</p>
          <div className="rounded-xl border border-white/10 bg-black/35 p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">{codeSample}</pre>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
