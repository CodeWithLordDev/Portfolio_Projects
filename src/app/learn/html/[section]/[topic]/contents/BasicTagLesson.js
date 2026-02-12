"use client";

import { motion } from "framer-motion";

export default function BasicTagLesson({
  title,
  description,
  tagInfo = null,
  syntaxTitle = "Syntax",
  syntaxCode,
  exampleTitle = "Example",
  exampleCode,
  outputTitle = "What Browser Shows",
  outputPreview,
  useCases = [],
  attributeGuide = [],
  commonMistakes = [],
  accessibilityNotes = [],
  tips = [],
  practice = null,
}) {
  return (
    <div className="w-full mt-18 mx-auto space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        {tagInfo && (
          <div className="grid md:grid-cols-3 gap-3 pt-2">
            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
              <p className="text-xs text-gray-400">Tag Type</p>
              <p className="text-white font-medium">{tagInfo.type}</p>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
              <p className="text-xs text-gray-400">Closing Rule</p>
              <p className="text-white font-medium">{tagInfo.closingRule}</p>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
              <p className="text-xs text-gray-400">Primary Use</p>
              <p className="text-white font-medium">{tagInfo.primaryUse}</p>
            </div>
          </div>
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">{syntaxTitle}</h2>
        <div className="rounded-xl bg-black/40 border border-white/10 p-5">
          <pre className="text-sm text-green-400 overflow-x-auto">{syntaxCode}</pre>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">{exampleTitle}</h2>
        <div className="rounded-xl bg-black/40 border border-white/10 p-5">
          <pre className="text-sm text-green-400 overflow-x-auto">{exampleCode}</pre>
        </div>
      </motion.section>

      {useCases.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.57 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">When To Use</h2>
          <div className="grid gap-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-lg bg-white/5 border border-white/10 p-4 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {attributeGuide.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">Attribute Guide</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-3 text-white">Attribute</th>
                  <th className="p-3 text-white">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-white/5">
                {attributeGuide.map((attr) => (
                  <tr key={attr.name}>
                    <td className="p-3 text-cyan-300 font-mono text-sm">{attr.name}</td>
                    <td className="p-3 text-gray-300 text-sm">{attr.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      )}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">{outputTitle}</h2>
        <div className="rounded-xl bg-white border border-white/20 p-5 text-black">
          {outputPreview}
        </div>
      </motion.section>

      {commonMistakes.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">Common Mistakes</h2>
          <div className="space-y-3">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {accessibilityNotes.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.64 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">Accessibility Notes</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            {accessibilityNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {tips.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Quick Tips</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {practice && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68 }}
          className="p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-500/20 space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Practice Task</h3>
          <p className="text-gray-300">{practice.task}</p>
          {practice.solutionCode && (
            <div className="rounded-xl bg-black/40 border border-white/10 p-5">
              <p className="text-sm text-gray-400 mb-2">Sample Solution</p>
              <pre className="text-sm text-green-400 overflow-x-auto">{practice.solutionCode}</pre>
            </div>
          )}
        </motion.section>
      )}
    </div>
  );
}
