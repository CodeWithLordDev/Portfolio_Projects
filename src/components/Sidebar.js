"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar({
  topics,
  basePath,
  courseTitle,
}) {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const currentSection = pathParts[2] || null;
  const currentTopic = pathParts[3] || null;

  const sectionIndex = useMemo(
    () => topics.findIndex((section) => section.slug === currentSection),
    [topics, currentSection]
  );

  const [openSection, setOpenSection] = useState(sectionIndex >= 0 ? sectionIndex : 0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (sectionIndex >= 0) {
      setOpenSection(sectionIndex);
    }
  }, [sectionIndex]);

  const sidebarClass = "bg-[#071025]/90 border-white/10 text-slate-100";

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-24 z-30 rounded-xl border border-blue-400/30 bg-blue-600/15 px-4 py-2 text-sm md:hidden"
      >
        Topics
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close sidebar"
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.24 }}
              className={`fixed left-0 top-0 z-50 h-full w-80 border-r p-4 md:hidden ${sidebarClass}`}
            >
              <SidebarContent
                topics={topics}
                basePath={basePath}
                courseTitle={courseTitle}
                openSection={openSection}
                setOpenSection={setOpenSection}
                currentSection={currentSection}
                currentTopic={currentTopic}
                onNavigate={() => setMobileOpen(false)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <aside className={`sticky top-0 hidden h-screen w-80 border-r p-4 md:block ${sidebarClass}`}>
        <SidebarContent
          topics={topics}
          basePath={basePath}
          courseTitle={courseTitle}
          openSection={openSection}
          setOpenSection={setOpenSection}
          currentSection={currentSection}
          currentTopic={currentTopic}
          onNavigate={() => {}}
        />
      </aside>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

function SidebarContent({
  topics,
  basePath,
  courseTitle,
  openSection,
  setOpenSection,
  currentSection,
  currentTopic,
  onNavigate,
}) {
  const titleClass = "text-sky-200";
  const muted = "text-slate-300";

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 mt-18 flex items-center justify-between">
        <h2 className={`text-lg font-semibold ${titleClass}`}>{courseTitle}</h2>
      </div>

      <div className="mb-3 text-xs uppercase tracking-wider text-indigo-400">
        Sections
      </div>

      <div className="scrollbar-hide space-y-1 overflow-y-auto pb-8">
        {topics.map((section, index) => {
          const isOpen = openSection === index;
          const activeSection = section.slug === currentSection;

          return (
            <div key={section.slug} className="rounded-xl">
              <button
                type="button"
                onClick={() => setOpenSection(isOpen ? -1 : index)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm ${
                  activeSection ? "bg-blue-500/20 text-blue-300" : muted
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{section.title}</span>
                  <motion.span animate={{ rotate: isOpen ? 90 : 0 }}>{">"}</motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-2 mt-1 overflow-hidden border-l border-blue-400/20 pl-2"
                  >
                    {section.children.map((child) => {
                      const active = activeSection && currentTopic === child.slug;
                      return (
                        <Link
                          key={child.slug}
                          href={`${basePath}/${section.slug}/${child.slug}`}
                          onClick={onNavigate}
                          className={`relative mb-1 block rounded-lg px-3 py-1.5 text-sm ${
                            active
                              ? "bg-gradient-to-r from-blue-600/35 to-indigo-600/35 text-white"
                              : muted
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="activeTopicIndicator"
                              className="absolute inset-y-1 left-1 w-1 rounded-full bg-blue-400"
                            />
                          )}
                          <span className="ml-2">{child.title}</span>
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
    </div>
  );
}
