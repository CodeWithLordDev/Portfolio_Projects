import { notFound } from "next/navigation";
import { cssTopics } from "@/data/cssTopics";
import { flattenTopics, getLesson } from "@/data/cssLessons";
import TopicPageClient from "../../[...slug]/TopicPageClient";

async function resolveParams(paramsLike) {
  if (paramsLike && typeof paramsLike.then === "function") {
    return await paramsLike;
  }
  return paramsLike || {};
}

export async function generateMetadata({ params }) {
  const resolved = await resolveParams(params);
  const section = resolved?.section;
  const topic = resolved?.topic;

  if (!section || !topic) {
    return {
      title: "CSS Lesson Not Found",
      description: "Requested CSS lesson could not be found.",
    };
  }

  const sectionData = cssTopics.find((item) => item.slug === section);
  const topicData = sectionData?.children.find((item) => item.slug === topic);

  if (!sectionData || !topicData) {
    return {
      title: "CSS Lesson Not Found",
      description: "Requested CSS lesson could not be found.",
    };
  }

  const title = `${topicData.title} | ${sectionData.title} | CSS Course`;
  const description = `Learn ${topicData.title} with beginner-friendly explanations, interactive examples, and practical CSS exercises.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function LegacyTopicPage({ params }) {
  const resolved = await resolveParams(params);
  const section = resolved?.section;
  const topic = resolved?.topic;
  if (!section || !topic) notFound();

  const sectionData = cssTopics.find((item) => item.slug === section);
  const topicData = sectionData?.children.find((item) => item.slug === topic);
  if (!sectionData || !topicData) notFound();

  const allTopics = flattenTopics();
  const currentIndex = allTopics.findIndex(
    (item) => item.sectionSlug === section && item.topicSlug === topic
  );
  if (currentIndex === -1) notFound();

  const lesson = getLesson(section, topic, topicData.title);
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <article>
      <header className="sr-only">
        <h1>{topicData.title}</h1>
      </header>
      <TopicPageClient
        sectionTitle={sectionData.title}
        topicTitle={topicData.title}
        lesson={lesson}
        index={currentIndex + 1}
        total={allTopics.length}
        prev={prev}
        next={next}
      />
    </article>
  );
}
