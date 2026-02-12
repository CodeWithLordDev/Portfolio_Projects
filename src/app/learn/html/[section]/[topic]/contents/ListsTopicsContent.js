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

const orderedList = {
  title: "Ordered List (<ol>)",
  subtitle: "When order matters",
  intro: "Use ordered lists for sequences like setup steps, workflows, and ranked items.",
  steps: [
    { id: "o1", label: "Step 1", title: "Create ordered items", explain: "Wrap li items inside ol.", visual: <ol className="list-decimal ml-6 text-sm text-gray-200"><li>Install</li><li>Build</li><li>Deploy</li></ol>, code: `<ol>\n  <li>Install</li>\n  <li>Build</li>\n  <li>Deploy</li>\n</ol>`, why: "Users understand clear progression." },
    { id: "o2", label: "Step 2", title: "Customize numbering", explain: "Use type/start/reversed for custom sequence style.", visual: v("Roman and alphabetic numbering are common in outlines."), code: `<ol type="I" start="3" reversed>\n  <li>Phase A</li>\n</ol>`, why: "Matches educational and legal structures." },
  ],
  deepDive: ["Use ol for instruction flow and ranking.", "Keep each li concise and action-oriented.", "Nest only where hierarchy adds clarity."],
  commonMistakes: ["Using ol for unordered feature lists.", "Adding plain text directly under ol."],
  practice: { task: "Write a 4-step installation guide with one nested sub-step.", solution: `<ol>\n  <li>Install tools</li>\n  <li>Configure project\n    <ol type="a"><li>Create .env</li></ol>\n  </li>\n  <li>Run app</li>\n  <li>Verify output</li>\n</ol>` },
};

const unorderedList = {
  title: "Unordered List (<ul>)",
  subtitle: "When order does not matter",
  intro: "Use unordered lists for grouped points like features, skills, and menu items.",
  steps: [
    { id: "u1", label: "Step 1", title: "Create bullet list", explain: "Group related items with ul + li.", visual: <ul className="list-disc ml-6 text-sm text-gray-200"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>, code: `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>`, why: "Bullets are quick to scan." },
    { id: "u2", label: "Step 2", title: "Nest sub-items", explain: "Add ul inside li for category grouping.", visual: v("Good for menu trees and topic categories."), code: `<ul>\n  <li>Frontend\n    <ul><li>React</li><li>Next.js</li></ul>\n  </li>\n</ul>`, why: "Clear hierarchy improves readability." },
  ],
  deepDive: ["Use ul inside nav for semantic menus.", "Use CSS for marker style customization.", "Avoid over-nesting."],
  commonMistakes: ["Using br instead of li.", "Too many nesting levels without headings."],
  practice: { task: "Create a skills list with 2 categories and nested tools.", solution: `<ul>\n  <li>Frontend<ul><li>HTML</li><li>CSS</li></ul></li>\n  <li>Backend<ul><li>Node.js</li><li>SQL</li></ul></li>\n</ul>` },
};

const definitionList = {
  title: "Definition List (<dl>)",
  subtitle: "Term and description pairs",
  intro: "Use dl, dt, dd for glossaries, FAQs, and metadata-style descriptions.",
  steps: [
    { id: "d1", label: "Step 1", title: "Build term-definition pair", explain: "Use dt for term and dd for definition.", visual: <dl className="text-sm"><dt className="text-cyan-200 font-semibold">API</dt><dd className="text-gray-300">Interface between systems.</dd></dl>, code: `<dl>\n  <dt>API</dt>\n  <dd>Interface between systems.</dd>\n</dl>`, why: "Semantic relation is explicit." },
    { id: "d2", label: "Step 2", title: "Add multiple entries", explain: "Repeat dt/dd blocks in same dl.", visual: v("Useful for small glossaries and documentation."), code: `<dl>\n  <dt>HTML</dt><dd>Markup language.</dd>\n  <dt>CSS</dt><dd>Styling language.</dd>\n</dl>`, why: "Compact and structured explanation format." },
  ],
  deepDive: ["Best for glossary and key-value style content.", "Avoid using dl for full tabular datasets.", "Keep dd descriptions focused."],
  commonMistakes: ["Using dl as layout container.", "Placing random paragraphs directly under dl."],
  practice: { task: "Create a glossary with 3 frontend terms.", solution: `<dl>\n  <dt>Semantic HTML</dt><dd>Meaningful page structure.</dd>\n  <dt>Viewport</dt><dd>Visible browser area.</dd>\n  <dt>Accessibility</dt><dd>Inclusive usability.</dd>\n</dl>` },
};

export const OrderedListContent = build(orderedList);
export const UnorderedListContent = build(unorderedList);
export const DefinitionListContent = build(definitionList);

