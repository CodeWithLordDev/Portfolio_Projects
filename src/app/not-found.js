// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white z-[9999]">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl md:text-9xl font-extrabold tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 text-lg mb-8 px-6 text-center max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/")}
        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-500 transition-all"
      >
        Go Home
      </motion.button>
    </div>
  );
}
