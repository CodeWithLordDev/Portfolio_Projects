"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ current = 1, total = 1, theme = "dark" }) {
  const progress = Math.max(0, Math.min(100, (current / total) * 100));
  const track = theme === "dark" ? "bg-white/10" : "bg-slate-200";

  return (
    <div className={`sticky top-0 z-30 h-2 w-full overflow-hidden rounded-full ${track}`}>
      <motion.div
        key={`${current}-${total}`}
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}

