"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { htmlTopics } from "../data/htmlTopics";
import { motion, AnimatePresence } from "framer-motion";

export default function TutorialSidebar({
  topics = htmlTopics,
  basePath = "/learn/html",
  title = "HTML Tutorial",
}) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState(null);

  return (
    <aside className="h-[100vh] hide-scrollbar overflow-y-auto bg-black/40 backdrop-blur-xl border-r border-white/10 p-5">
      <h2 className="text-xl  font-bold mt-14 mb-6">{title}</h2>

      <div className="space-y-2">
        {topics.map((topic, i) => {
          const isOpen = openSection === i;
          const isActiveParent = pathname.includes(topic.slug);

          return (
            <div key={i}>
              {/* Parent */}
              <button
                onClick={() => setOpenSection(isOpen ? null : i)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left
                ${
                  isActiveParent
                    ? "bg-purple-600/30 text-white"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                <span>{topic.title}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▶
                </motion.span>
              </button>

              {/* Children */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-2 space-y-1 overflow-hidden"
                  >
                    {topic.children.map((child, j) => {
                      const isActiveChild = pathname.endsWith(child.slug);

                      return (
                        <Link
                          key={j}
                          href={`${basePath}/${topic.slug}/${child.slug}`}
                        >
                          <div
                            className={`px-4 py-2 rounded-lg text-sm flex items-center justify-between
                            ${
                              isActiveChild
                                ? "bg-white/15 text-white"
                                : "text-white/60 hover:bg-white/5"
                            }`}
                          >
                            {child.title}
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
