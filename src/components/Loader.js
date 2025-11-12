"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 3;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: progress === 100 ? 0.1 : 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      {/* CodewithLord Text Fill Animation */}
      <div className="relative">
        {/* Outline Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-transparent stroke-text">
          CodewithLord
        </h1>

        {/* White Fill Mask */}
        <motion.div
          className="absolute top-0 left-0 w-full overflow-hidden"
          style={{
            height: `${progress}%`,
            transition: "height 0.1s ease-in-out",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-white">
            CodewithLord
          </h1>
        </motion.div>
      </div>

      {/* Optional Loading Percentage */}
      <p className="mt-6 text-gray-400 text-lg font-medium">{progress}%</p>
    </motion.div>
  );
}
