"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PaginationClient({ currentPage, totalPages }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 flex justify-center items-center gap-4 mt-16 mb-12"
    >
      {currentPage > 1 && (
        <Link
          href={`/components?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-mono text-gray-400 border border-gray-800/50 hover:border-gray-700 hover:text-white transition-all duration-300 rounded"
        >
          ← prev
        </Link>
      )}

      <span className="text-xs text-gray-600 font-mono">
        {currentPage} / {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`/components?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-mono text-gray-400 border border-gray-800/50 hover:border-gray-700 hover:text-white transition-all duration-300 rounded"
        >
          next →
        </Link>
      )}
    </motion.div>
  );
}
