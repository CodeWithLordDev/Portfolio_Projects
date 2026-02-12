import { htmlTopics } from "@/data/htmlTopics";

export function getNavigation(topicSlug, slug) {
  const allPages = htmlTopics.flatMap(section =>
    section.children.map(child => ({
      title: child.title,
      slug: child.slug,
      sectionSlug: section.slug,
      sectionTitle: section.title,
    }))
  );

  const currentIndex = allPages.findIndex(
    page =>
      page.sectionSlug === topicSlug &&
      page.slug === slug
  );

  const previous =
    currentIndex > 0 ? allPages[currentIndex - 1] : null;

  const next =
    currentIndex < allPages.length - 1
      ? allPages[currentIndex + 1]
      : null;

  return {
    current: allPages[currentIndex] || null,
    previous,
    next,
    progress: {
      current: currentIndex + 1,
      total: allPages.length,
    },
  };
}
