import { htmlTopics } from "./htmlTopics";

const sectionGuides = {
  introduction: {
    analogy: "Think of HTML like a building blueprint for your webpage.",
    defaultWhy: "Strong HTML basics make CSS and JavaScript easier later.",
  },
  "basic-tags": {
    analogy: "Basic tags are the core vocabulary of every web page.",
    defaultWhy: "These tags appear in almost every project.",
  },
  "inline-block-elements": {
    analogy: "Inline and block are like words vs paragraphs in a document.",
    defaultWhy: "Understanding display behavior prevents layout confusion.",
  },
  "lists-in-html": {
    analogy: "Lists organize information like checklists in real life.",
    defaultWhy: "Structured content is easier to scan and understand.",
  },
  "tables-in-html": {
    analogy: "Tables are spreadsheets for the web.",
    defaultWhy: "Useful for clear row/column data presentation.",
  },
  "forms-in-html": {
    analogy: "Forms are conversation points between user and website.",
    defaultWhy: "Forms drive signups, logins, and user input.",
  },
  "head-element": {
    analogy: "The head section is configuration, not visible content.",
    defaultWhy: "Metadata controls SEO, performance, and rendering.",
  },
  "html-media": {
    analogy: "Media tags are built-in players and drawing tools.",
    defaultWhy: "They add rich content without extra plugins.",
  },
  "miscellaneous-tags": {
    analogy: "These are practical utility tags for special use cases.",
    defaultWhy: "They improve semantics, accessibility, and clarity.",
  },
};

const lessonOverrides = {
  intro: {
    intro:
      "HTML stands for HyperText Markup Language. It gives structure to web pages using tags.",
    why: "Without HTML, browsers have no organized content to display.",
    properties: ["tags", "elements", "attributes"],
    html: `<h1>Welcome to HTML</h1>\n<p>This is my first structured webpage.</p>`,
    css: `h1 { color: #1d4ed8; }\np { color: #475569; }`,
    challenge: "Add a second paragraph and style it with a different color.",
    terms: [{ term: "markup", tip: "A way to structure content with tags." }],
  },
  working: {
    intro:
      "A browser reads HTML from top to bottom and builds the page structure (DOM).",
    why: "Knowing browser behavior helps debug layout and content issues.",
    properties: ["DOM", "parser", "elements"],
    html: `<header><h1>Site Title</h1></header>\n<main><p>Main content area</p></main>`,
    css: `header { border-bottom: 1px solid #cbd5e1; }\nmain { padding-top: 0.6rem; }`,
    challenge: "Create a simple header and main section structure.",
  },
  tags: {
    intro:
      "Tags are keywords wrapped in angle brackets, like <p> and <h1>.",
    why: "Using the right tag improves readability and accessibility.",
    properties: ["opening tag", "closing tag", "nested tags"],
    html: `<article>\n  <h2>Article heading</h2>\n  <p>Article text here.</p>\n</article>`,
    css: `article { border: 1px solid #e2e8f0; padding: 1rem; border-radius: 12px; }`,
    challenge: "Create a card using heading and paragraph tags.",
  },
  elements: {
    intro:
      "An HTML element is a complete unit: opening tag, content, and closing tag.",
    why: "Element thinking helps you compose clean page sections.",
    properties: ["block elements", "inline elements", "nesting"],
    html: `<p>This is a <strong>strong</strong> word inside a paragraph.</p>`,
    css: `p { color: #334155; }\nstrong { color: #1d4ed8; }`,
    challenge: "Use at least one inline and one block element together.",
  },
  attributes: {
    intro:
      "Attributes add extra information to tags, like href, src, alt, and id.",
    why: "Attributes control behavior, links, accessibility, and metadata.",
    properties: ["href", "src", "alt", "id", "class"],
    html: `<a href=\"https://example.com\" target=\"_blank\">Visit site</a>\n<img src=\"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600\" alt=\"Laptop on desk\" />`,
    css: `a { color: #2563eb; }\nimg { margin-top: 0.75rem; width: 100%; border-radius: 10px; }`,
    challenge: "Add an image with a meaningful alt attribute.",
  },
  comments: {
    intro:
      "HTML comments are notes for developers and are not shown on the page.",
    why: "Comments help explain sections during teamwork.",
    properties: ["<!-- comment -->", "documentation"],
    html: `<!-- Main hero section -->\n<section>\n  <h2>Hero</h2>\n</section>`,
    css: `section { border: 1px dashed #94a3b8; padding: 0.75rem; }`,
    challenge: "Add comments to label three parts of your HTML page.",
  },
  "id_classes": {
    intro:
      "Use id for one unique element and class for reusable styling groups.",
    why: "Correct use of id/class keeps CSS selectors clean and scalable.",
    properties: ["id", "class", "selector"],
    html: `<h2 id=\"mainTitle\">Welcome</h2>\n<p class=\"muted\">Reusable muted text style.</p>`,
    css: `#mainTitle { color: #1e40af; }\n.muted { color: #64748b; }`,
    challenge: "Style one unique title and two reusable paragraphs.",
  },
  "table-tag": {
    intro:
      "The table tag is used for tabular data with rows and columns.",
    why: "Tables make structured data easier to compare.",
    properties: ["table", "tr", "th", "td"],
    html: `<table>\n  <tr><th>Name</th><th>Score</th></tr>\n  <tr><td>Ana</td><td>92</td></tr>\n</table>`,
    css: `table, th, td { border: 1px solid #cbd5e1; border-collapse: collapse; }\nth, td { padding: 0.45rem 0.65rem; }`,
    challenge: "Add one more student row to the table.",
  },
  "form-tag": {
    intro:
      "Forms collect user input using fields like input, textarea, and select.",
    why: "Forms are core to logins, signups, and user feedback.",
    properties: ["form", "input", "label", "button"],
    html: `<form>\n  <label>Email <input type=\"email\" placeholder=\"you@example.com\" /></label>\n  <button type=\"submit\">Submit</button>\n</form>`,
    css: `input { border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.45rem 0.6rem; }\nbutton { margin-top: 0.5rem; }`,
    challenge: "Create a simple signup form with name and email fields.",
  },
  "meta-tag": {
    intro:
      "Meta tags provide metadata like charset, viewport, and description.",
    why: "Metadata improves rendering and search discoverability.",
    properties: ["charset", "viewport", "description"],
    html: `<meta charset=\"UTF-8\" />\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />`,
    css: `code { color: #1d4ed8; }`,
    challenge: "Write a meta description for a tutorial webpage.",
  },
  "video-audio-tag": {
    intro:
      "HTML supports native video and audio playback with built-in controls.",
    why: "Media tags improve learning experiences without external plugins.",
    properties: ["video", "audio", "source", "controls"],
    html: `<video controls width=\"260\">\n  <source src=\"sample.mp4\" type=\"video/mp4\" />\n</video>`,
    css: `video { border-radius: 10px; border: 1px solid #cbd5e1; }`,
    challenge: "Add captions support using the track element.",
  },
  "semantic-tags": {
    intro:
      "Semantic tags describe meaning, like header, nav, main, article, and footer.",
    why: "Semantic HTML improves accessibility and SEO.",
    properties: ["header", "main", "section", "article", "footer"],
    html: `<header>Top Nav</header>\n<main><article>Post Content</article></main>\n<footer>Footer Info</footer>`,
    css: `header, main, footer { padding: 0.6rem; border: 1px solid #e2e8f0; margin-bottom: 0.5rem; }`,
    challenge: "Refactor a div-only layout into semantic tags.",
  },
};

function buildFallbackLesson(sectionSlug, topicSlug, topicTitle) {
  const sectionGuide = sectionGuides[sectionSlug];
  return {
    intro: `${topicTitle} teaches a practical HTML concept. Build it with small examples and inspect output.`,
    why:
      sectionGuide?.defaultWhy ||
      "This topic helps you create cleaner and more meaningful page structure.",
    properties: ["semantic structure", "accessibility", "readability"],
    html: `<section class=\"demo\">\n  <h3>${topicTitle}</h3>\n  <p>Practice this concept with simple markup first.</p>\n</section>`,
    css: `.demo {\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 1rem;\n  background: #f8fafc;\n}\n.demo h3 {\n  color: #1d4ed8;\n}`,
    challenge: `Create a small ${topicTitle.toLowerCase()} example using meaningful tags.`,
    takeaways: [
      `${topicTitle} is easier when practiced in small steps.`,
      "Use semantic tags where possible.",
      "Keep HTML readable and well-indented.",
    ],
    terms: [{ term: "semantic", tip: "Tags that describe meaning, not just style." }],
    analogy: sectionGuide?.analogy,
  };
}

export function getHtmlLesson(sectionSlug, topicSlug, topicTitle) {
  const override = lessonOverrides[topicSlug];
  const base = override || buildFallbackLesson(sectionSlug, topicSlug, topicTitle);

  return {
    intro: base.intro,
    why: base.why,
    properties: base.properties || [],
    html: base.html,
    css: base.css,
    js: "",
    solutionHtml: base.solutionHtml || base.html,
    solutionCss:
      base.solutionCss ||
      `${base.css}\n\n.demo {\n  box-shadow: 0 10px 22px rgba(30, 64, 175, 0.14);\n}`,
    solutionJs: "",
    challenge: base.challenge,
    takeaways:
      base.takeaways || [
        `${topicTitle} becomes clear with short practical examples.`,
        "Semantic tags improve structure and maintainability.",
        "Clean HTML makes collaboration easier.",
      ],
    terms: base.terms || [],
    diagram: base.diagram || null,
    analogy:
      base.analogy ||
      sectionGuides[sectionSlug]?.analogy ||
      "Think of HTML as the structure plan of a webpage.",
  };
}

export function flattenHtmlTopics() {
  return htmlTopics.flatMap((section) =>
    section.children.map((topic) => ({
      sectionSlug: section.slug,
      sectionTitle: section.title,
      topicSlug: topic.slug,
      topicTitle: topic.title,
    }))
  );
}

