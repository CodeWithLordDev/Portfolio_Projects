import { notFound } from "next/navigation";
import { htmlTopics } from "@/data/htmlTopics";
import { flattenHtmlTopics, getHtmlLesson } from "@/data/htmlLessons";
import HTMLTopicPageClient from "./TopicPageClient";

function findTopic(sectionSlug, topicSlug) {
  const section = htmlTopics.find((item) => item.slug === sectionSlug);
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
  return htmlTopics.flatMap((section) =>
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
      title: "HTML Lesson Not Found",
      description: "Requested HTML lesson could not be found.",
    };
  }

  const title = `${found.topic.title} | ${found.section.title} | HTML Course`;
  const description = `Learn ${found.topic.title} with beginner-friendly explanations, interactive examples, and practical HTML exercises.`;

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

export default async function HTMLSlugPage({ params }) {
  const resolved = await resolveParams(params);
  const [sectionSlug, topicSlug] = resolved?.slug || [];
  if (!sectionSlug || !topicSlug) notFound();

  const found = findTopic(sectionSlug, topicSlug);
  if (!found) notFound();

  const allTopics = flattenHtmlTopics();
  const currentIndex = allTopics.findIndex(
    (item) => item.sectionSlug === sectionSlug && item.topicSlug === topicSlug
  );
  if (currentIndex === -1) notFound();

  const lesson = getHtmlLesson(sectionSlug, topicSlug, found.topic.title);
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <article>
      <header className="sr-only">
        <h1>{found.topic.title}</h1>
        <p>{found.section.title}</p>
      </header>

      <HTMLTopicPageClient
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

