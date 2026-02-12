"use client";
import { useState } from "react";
import { htmlTopics } from "@/data/htmlTopics";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileSidebar({
  topics = htmlTopics,
  basePath = "/learn/html",
  title = "HTML Tutorial",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-24 left-4 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
      >
        ☰ Topics
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed top-0 left-0 w-72 h-full bg-[#0f0f0f] z-50 p-6"
            >
              <h2 className="text-xl font-bold mb-6">{title}</h2>

              {topics.map((topic) =>
                topic.children.map((child) => (
                  <Link
                    key={`${topic.slug}-${child.slug}`}
                    href={`${basePath}/${topic.slug}/${child.slug}`}
                    onClick={() => setOpen(false)}
                  >
                    <div className="px-4 py-3 rounded-xl hover:bg-white/10">
                      {child.title}
                    </div>
                  </Link>
                ))
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
