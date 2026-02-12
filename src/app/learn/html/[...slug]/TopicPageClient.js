"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import TopicContent from "@/components/TopicContent";

export default function HTMLTopicPageClient({
  sectionTitle,
  topicTitle,
  lesson,
  index,
  total,
  prev,
  next,
}) {
  const router = useRouter();
  const cardClass = "border-white/10 bg-slate-900/60 text-slate-100";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-5xl"
    >
      <ProgressBar current={index} total={total} />
      <div className="mt-4 space-y-6">
        <TopicContent
          sectionTitle={sectionTitle}
          topicTitle={topicTitle}
          lesson={lesson}
          index={index}
          total={total}
          conceptHeading="Important HTML Concepts"
          editorTitle="Interactive Markup Example"
          htmlLabel="HTML"
          cssLabel="CSS Preview Style"
          jsLabel="JavaScript"
        />

        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <button
              type="button"
              onClick={() => router.push(`/learn/html/${prev.sectionSlug}/${prev.topicSlug}`)}
              className={`rounded-xl border px-4 py-2 transition hover:-translate-y-0.5 ${cardClass}`}
            >
              {"<-"} {prev.topicTitle}
            </button>
          ) : (
            <div />
          )}

          {next && (
            <button
              type="button"
              onClick={() => router.push(`/learn/html/${next.sectionSlug}/${next.topicSlug}`)}
              className={`rounded-xl border px-4 py-2 transition hover:-translate-y-0.5 ${cardClass}`}
            >
              {next.topicTitle} {"->"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
