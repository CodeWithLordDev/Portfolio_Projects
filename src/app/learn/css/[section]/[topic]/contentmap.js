import { cssTopics } from "@/data/cssTopics";
import { getLesson } from "@/data/cssLessons";

function GenericCSSTopicContent({ sectionTitle, topicTitle }) {
  const lesson = getLesson(
    sectionTitle.toLowerCase().replaceAll(" ", "-").replaceAll("&", ""),
    topicTitle.toLowerCase().replaceAll(" ", "-").replaceAll("?", "")
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold text-white mb-3">{topicTitle}</h2>
      <p className="text-gray-300 leading-relaxed">
        This lesson is part of <span className="text-cyan-300">{sectionTitle}</span>.
        {` ${lesson.intro}`}
      </p>
    </div>
  );
}

function buildTopic(sectionTitle, topicTitle) {
  return function TopicComponent() {
    return <GenericCSSTopicContent sectionTitle={sectionTitle} topicTitle={topicTitle} />;
  };
}

export const cssContentMap = cssTopics.reduce((acc, section) => {
  acc[section.slug] = section.children.reduce((topicAcc, topic) => {
    topicAcc[topic.slug] = buildTopic(section.title, topic.title);
    return topicAcc;
  }, {});
  return acc;
}, {});
