import { notFound } from "next/navigation";
import { htmlTopics } from "@/data/htmlTopics";
import { flattenHtmlTopics, getHtmlLesson } from "@/data/htmlLessons";
import HTMLTopicPageClient from "../../[...slug]/TopicPageClient";

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
      title: "HTML Lesson Not Found",
      description: "Requested HTML lesson could not be found.",
    };
  }

  const sectionData = htmlTopics.find((item) => item.slug === section);
  const topicData = sectionData?.children.find((item) => item.slug === topic);

  if (!sectionData || !topicData) {
    return {
      title: "HTML Lesson Not Found",
      description: "Requested HTML lesson could not be found.",
    };
  }

  const title = `${topicData.title} | ${sectionData.title} | HTML Course`;
  const description = `Learn ${topicData.title} with beginner-friendly explanations, interactive examples, and practical HTML exercises.`;

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

export default async function HTMLLegacyTopicPage({ params }) {
  const resolved = await resolveParams(params);
  const section = resolved?.section;
  const topic = resolved?.topic;
  if (!section || !topic) notFound();

  const sectionData = htmlTopics.find((item) => item.slug === section);
  const topicData = sectionData?.children.find((item) => item.slug === topic);
  if (!sectionData || !topicData) notFound();

  const allTopics = flattenHtmlTopics();
  const currentIndex = allTopics.findIndex(
    (item) => item.sectionSlug === section && item.topicSlug === topic
  );
  if (currentIndex === -1) notFound();

  const lesson = getHtmlLesson(section, topic, topicData.title);
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <article>
      <header className="sr-only">
        <h1>{topicData.title}</h1>
      </header>
      <HTMLTopicPageClient
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
