"use client";

import AnimatedDetailedLesson from "./AnimatedDetailedLesson";

function v(text) {
  return <p className="text-sm text-gray-300">{text}</p>;
}

function build(config) {
  return function Topic() {
    return <AnimatedDetailedLesson {...config} />;
  };
}

const metaTag = {
  title: "Meta Tag",
  subtitle: "Metadata for rendering and SEO",
  intro: "Meta tags in head define encoding, viewport settings, and descriptive context.",
  steps: [
    { id: "m1", label: "Step 1", title: "Set charset and viewport", explain: "These are baseline requirements.", visual: v("UTF-8 + viewport prevents rendering/layout issues."), code: `<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />`, why: "Ensures text and mobile layout behave correctly." },
    { id: "m2", label: "Step 2", title: "Add description", explain: "Describe page purpose for search snippets.", visual: v("Keep it concise, useful, and page-specific."), code: `<meta name="description" content="Learn HTML with animated lessons." />`, why: "Supports discoverability." },
  ],
  deepDive: ["Use unique metadata per page.", "Add OG/Twitter metadata for sharing.", "Keep descriptions aligned with content."],
  commonMistakes: ["Missing viewport tag.", "Duplicate descriptions across pages."],
  practice: { task: "Write meta tags for a tutorial page.", solution: `<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<meta name="description" content="Interactive HTML tutorials for beginners." />` },
};

const linkScriptTag = {
  title: "Link & Script Tag",
  subtitle: "External CSS and JS",
  intro: "Use link for stylesheets and script for behavior. Prefer defer for scripts.",
  steps: [
    { id: "ls1", label: "Step 1", title: "Load stylesheet", explain: "Use link in head for CSS files.", visual: v("Stylesheet loading early avoids flash of unstyled content."), code: `<link rel="stylesheet" href="/styles/main.css" />`, why: "Keeps style modular and reusable." },
    { id: "ls2", label: "Step 2", title: "Load script safely", explain: "Use defer to avoid blocking parsing.", visual: v("Defer runs script after HTML parse completes."), code: `<script src="/scripts/main.js" defer></script>`, why: "Improves performance and avoids timing bugs." },
  ],
  deepDive: ["Use module scripts for modern JS architecture.", "Audit unused assets for performance.", "Use proper path/versioning strategy."],
  commonMistakes: ["Blocking scripts without defer.", "Wrong file paths."],
  practice: { task: "Create head snippet with one CSS and one deferred JS file.", solution: `<head>\n  <link rel="stylesheet" href="/css/site.css" />\n  <script src="/js/site.js" defer></script>\n</head>` },
};

const videoAudioTag = {
  title: "Video & Audio Tag",
  subtitle: "Native media playback",
  intro: "Use video and audio tags with source and controls for better learning content delivery.",
  steps: [
    { id: "va1", label: "Step 1", title: "Add controls and source", explain: "Media should include controls and proper type.", visual: v("Controls allow play/pause/seek/volume."), code: `<video controls>\n  <source src="lesson.mp4" type="video/mp4" />\n</video>`, why: "Users get direct playback control." },
    { id: "va2", label: "Step 2", title: "Add captions and fallback", explain: "Provide track captions and fallback message.", visual: v("Captions improve accessibility for all learners."), code: `<track kind="captions" src="lesson.vtt" srclang="en" />`, why: "Supports inclusive content consumption." },
  ],
  deepDive: ["Avoid autoplay with sound.", "Compress media assets.", "Use lazy-loading where possible."],
  commonMistakes: ["No controls.", "No caption support.", "Large media files."],
  practice: { task: "Embed a tutorial video with controls and captions.", solution: `<video controls width="640">\n  <source src="tutorial.mp4" type="video/mp4" />\n  <track kind="captions" src="tutorial.vtt" srclang="en" label="English" />\n</video>` },
};

const svgInHtml = {
  title: "SVG in HTML",
  subtitle: "Scalable vector graphics",
  intro: "Inline SVG gives sharp visuals and flexible styling/animation control.",
  steps: [
    { id: "s1", label: "Step 1", title: "Create SVG canvas", explain: "Define width/height and viewBox.", visual: <svg width="130" height="56" viewBox="0 0 130 56"><rect x="5" y="5" width="120" height="46" fill="#22d3ee" opacity="0.25" stroke="#67e8f9" /></svg>, code: `<svg width="130" height="56" viewBox="0 0 130 56">...</svg>`, why: "viewBox ensures scaling quality." },
    { id: "s2", label: "Step 2", title: "Draw shapes", explain: "Use circle, rect, line, and path.", visual: v("Inline SVG can be styled with CSS and animated."), code: `<circle cx="30" cy="30" r="20" />\n<rect x="70" y="12" width="35" height="35" />`, why: "Great for icons and diagrams." },
  ],
  deepDive: ["Use title/role for meaningful icons.", "Optimize exported SVG markup.", "Prefer currentColor for theme-aware icons."],
  commonMistakes: ["Missing viewBox.", "Heavy unoptimized SVG exports."],
  practice: { task: "Create SVG badge with circle and label.", solution: `<svg viewBox="0 0 120 40" width="120" height="40">\n  <circle cx="20" cy="20" r="10" fill="#06b6d4" />\n  <text x="40" y="25" fill="#fff">HTML</text>\n</svg>` },
};

const iframesInHtml = {
  title: "iFrames in HTML",
  subtitle: "Embed external content safely",
  intro: "Use iframe for maps, videos, and widgets with accessibility and security attributes.",
  steps: [
    { id: "if1", label: "Step 1", title: "Embed with responsive sizing", explain: "Use width=100% and controlled height.", visual: v("Responsive sizing prevents overflow on small screens."), code: `<iframe src="https://example.com" width="100%" height="320" loading="lazy"></iframe>`, why: "Improves mobile experience." },
    { id: "if2", label: "Step 2", title: "Add title and restrictions", explain: "Use title and sandbox/referrerpolicy when needed.", visual: v("Title helps screen reader context."), code: `<iframe title="Course map" sandbox="allow-scripts" referrerpolicy="no-referrer" src="..."></iframe>`, why: "Safer and more accessible embeds." },
  ],
  deepDive: ["Embed trusted sources only.", "Test keyboard focus with embedded content.", "Avoid fixed-width iframes."],
  commonMistakes: ["Missing iframe title.", "Unsafe unrestricted embeds."],
  practice: { task: "Embed map iframe with title and lazy loading.", solution: `<iframe title="Office map" src="https://maps.example" width="100%" height="300" loading="lazy"></iframe>` },
};

export const MetaTagContent = build(metaTag);
export const LinkScriptTagContent = build(linkScriptTag);
export const VideoAudioTagContent = build(videoAudioTag);
export const SvgInHtmlContent = build(svgInHtml);
export const IframesInHtmlContent = build(iframesInHtml);

