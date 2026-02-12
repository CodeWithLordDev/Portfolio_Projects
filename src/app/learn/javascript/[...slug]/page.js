import { notFound } from "next/navigation";
import { javascriptTopics } from "@/data/javascriptTopics";
import {
  flattenJavaScriptTopics,
  getJavaScriptLesson,
} from "@/data/javascriptLessons";
import JavaScriptTopicPageClient from "./TopicPageClient";

function findTopic(sectionSlug, topicSlug) {
  const section = javascriptTopics.find((item) => item.slug === sectionSlug);
  if (!section) return null;
  const topic = section.children.find((item) => item.slug === topicSlug);
  if (!topic) return null;
  return { section, topic };
}

async function resolveParams(paramsLike) {
  if (paramsLike && typeof paramsLike.then === "function") {
    return await paramsLike;
  }
  return paramsLike || {};
}

export function generateStaticParams() {
  return javascriptTopics.flatMap((section) =>
    section.children.map((topic) => ({
      slug: [section.slug, topic.slug],
    }))
  );
}

export async function generateMetadata({ params }) {
  const resolved = await resolveParams(params);
  const [sectionSlug, topicSlug] = resolved?.slug || [];
  const found = findTopic(sectionSlug, topicSlug);

  if (!found) {
    return {
      title: "JavaScript Lesson Not Found",
      description: "Requested JavaScript lesson could not be found.",
    };
  }

  const title = `${found.topic.title} | ${found.section.title} | JavaScript Course`;
  const description = `Learn ${found.topic.title} with beginner-friendly explanations, interactive examples, and practical JavaScript exercises.`;

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

export default async function JavaScriptSlugPage({ params }) {
  const resolved = await resolveParams(params);
  const [sectionSlug, topicSlug] = resolved?.slug || [];
  if (!sectionSlug || !topicSlug) notFound();

  const found = findTopic(sectionSlug, topicSlug);
  if (!found) notFound();

  const allTopics = flattenJavaScriptTopics();
  const currentIndex = allTopics.findIndex(
    (item) => item.sectionSlug === sectionSlug && item.topicSlug === topicSlug
  );
  if (currentIndex === -1) notFound();

  const lesson = getJavaScriptLesson(sectionSlug, topicSlug, found.topic.title);
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <article>
      <header className="sr-only">
        <h1>{found.topic.title}</h1>
        <p>{found.section.title}</p>
      </header>

      <JavaScriptTopicPageClient
        sectionTitle={found.section.title}
        topicTitle={found.topic.title}
        lesson={lesson}
        index={currentIndex + 1}
        total={allTopics.length}
        prev={prev}
        next={next}
      />
    </article>
  );
}

