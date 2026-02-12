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

function makeSimple(title, subtitle, intro, codeA, codeB, tips, mistakes, practice) {
  return {
    title,
    subtitle,
    intro,
    steps: [
      { id: "s1", label: "Step 1", title: "Core usage", explain: tips[0], visual: v(tips[1]), code: codeA, why: tips[2] },
      { id: "s2", label: "Step 2", title: "Best practice", explain: tips[3], visual: v(tips[4]), code: codeB, why: tips[5] },
    ],
    deepDive: [tips[6], tips[7], tips[8]],
    commonMistakes: mistakes,
    practice,
  };
}

const codeTag = makeSimple(
  "Code Tag",
  "Inline and block code semantics",
  "Use code for inline snippets and pre+code for multiline examples.",
  `<p>Run <code>npm run dev</code> to start.</p>`,
  `<pre><code>\nconst app = init();\napp.start();\n</code></pre>`,
  [
    "Use code for short commands/tokens.",
    "Inline code helps users identify technical terms.",
    "Clear semantics improve readability.",
    "Use pre+code for multiline blocks.",
    "Preserved formatting is crucial for tutorials.",
    "Improves copy-paste reliability.",
    "Escape HTML entities inside code snippets.",
    "Add language classes for syntax highlighting.",
    "Keep examples short and relevant.",
  ],
  ["Using code tag for non-code text.", "Forgetting pre in multiline snippets."],
  { task: "Create one inline and one block code example.", solution: `<p>Install with <code>npm install</code>.</p>\n<pre><code>function greet(){\n  console.log('Hi');\n}\n</code></pre>` }
);

const semanticTags = makeSimple(
  "Semantic Tags",
  "Meaningful layout structure",
  "Semantic tags describe purpose: header, nav, main, section, article, aside, footer.",
  `<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>`,
  `<article>\n  <h2>Post title</h2>\n  <p>Content...</p>\n</article>`,
  [
    "Replace generic wrappers with semantic elements.",
    "Semantic landmarks improve navigation.",
    "Assistive tools benefit from structural intent.",
    "Use article for self-contained content.",
    "Use section for grouped thematic content.",
    "Better organization improves maintainability.",
    "Use one main region per page.",
    "Keep heading hierarchy consistent.",
    "Use nav only for major navigation blocks.",
  ],
  ["Using div for every section.", "Multiple unrelated main elements."],
  { task: "Refactor a div-based page into semantic layout tags.", solution: `<header>Brand</header>\n<nav>Menu</nav>\n<main><section>Content</section></main>\n<footer>Copyright</footer>` }
);

const canvasTag = makeSimple(
  "Canvas Tag",
  "Bitmap drawing with JavaScript",
  "Canvas provides a pixel drawing surface for charts, mini-games, and visual effects.",
  `<canvas id="board" width="400" height="160"></canvas>`,
  `const c = document.getElementById('board');\nconst ctx = c.getContext('2d');\nctx.fillRect(10, 10, 120, 50);`,
  [
    "Define explicit canvas width/height attributes.",
    "Attribute sizing avoids blur from CSS-only scaling.",
    "Provides predictable rendering area.",
    "Draw with 2D context API.",
    "Use redraw loop for dynamic animation.",
    "Interactive visuals become possible.",
    "Canvas content is not semantic by default.",
    "Provide alternate text/context around canvas.",
    "Use SVG for static vector graphics when suitable.",
  ],
  ["Only sizing canvas via CSS.", "Using canvas for text-heavy semantic content."],
  { task: "Draw one rectangle and one label in canvas.", solution: `const ctx = document.getElementById('board').getContext('2d');\nctx.fillStyle = '#22d3ee';\nctx.fillRect(10,10,120,50);\nctx.fillStyle = '#fff';\nctx.fillText('Canvas', 28, 40);` }
);

const globalAttributes = makeSimple(
  "Global Attributes",
  "Shared attributes on most tags",
  "Attributes such as id, class, title, lang, dir, and data-* work on most HTML elements.",
  `<section id="hero" class="card"></section>`,
  `<button title="Save" data-action="save">Save</button>`,
  [
    "Use id for unique targets and class for reusable styling.",
    "Consistent naming improves maintainability.",
    "Foundation for CSS and JS selection.",
    "Use title and data-* for metadata/interaction hints.",
    "data-* keeps custom metadata standards-compliant.",
    "Helps component behavior without invalid attributes.",
    "Avoid duplicate ids across page.",
    "Prefer class over inline style for scalable styling.",
    "Store only lightweight metadata in data-*.",
  ],
  ["Duplicate id values.", "Large JSON blobs in data-* attributes."],
  { task: "Create a card with id/class/title/data-price.", solution: `<div id="product-1" class="product-card" title="Wireless Mouse" data-price="999">Wireless Mouse</div>` }
);

const entitiesInHtml = makeSimple(
  "Entities in HTML",
  "Reserved and special characters",
  "Entities let you display reserved characters and symbols safely.",
  `&lt;div&gt;Hello&lt;/div&gt;\nTom &amp; Jerry`,
  `&copy; 2026\n&rarr; Next\n&#8377; 999`,
  [
    "Escape characters that conflict with HTML parser.",
    "Use entities in code examples and mixed text content.",
    "Prevents malformed markup.",
    "Use symbol entities for copyright/arrows/currency.",
    "Useful when keyboard entry is inconvenient.",
    "Ensures consistent display.",
    "Prefer UTF-8 encoding as baseline.",
    "Avoid using &nbsp; as layout system.",
    "Keep entity usage purposeful and readable.",
  ],
  ["Unescaped ampersands in text/URLs.", "Overusing non-breaking spaces."],
  { task: "Write copyright line with arrow CTA using entities.", solution: `&copy; 2026 CodewithLord &mdash; Start Learning &rarr;` }
);

const quotationTags = makeSimple(
  "Quotation Tags",
  "q, blockquote, and cite",
  "Use quote tags for semantic quoted text and proper source attribution.",
  `<p>She said, <q>Keep shipping.</q></p>`,
  `<blockquote cite="https://example.com">Learning never exhausts the mind.</blockquote>\n<cite>Study Journal</cite>`,
  [
    "Use q for short inline quotes.",
    "Inline quote semantics improve readability.",
    "Meaning is preserved in assistive contexts.",
    "Use blockquote for longer citations and cite for source.",
    "Clear attribution increases credibility.",
    "Readers understand quote context immediately.",
    "Do not use blockquote for indentation.",
    "Include citation source where possible.",
    "Style quotes for better visual distinction.",
  ],
  ["Using blockquote for layout spacing.", "No source reference for major quotes."],
  { task: "Create one q and one blockquote+citation example.", solution: `<p>Mentor said <q>Ship often.</q></p>\n<blockquote cite="https://example.com/post">Great design is transparent.</blockquote>\n<cite>Design Notes</cite>` }
);

const obsoleteTags = makeSimple(
  "Obsolete Tags",
  "Deprecated HTML elements to avoid",
  "Legacy tags like font and center should be replaced by CSS and semantic tags.",
  `<!-- avoid --> <font color="red">Text</font>\n<!-- use --> <span class="text-red">Text</span>`,
  `<!-- avoid --> <center>Welcome</center>\n<!-- use --> <h1 class="text-center">Welcome</h1>`,
  [
    "Avoid presentational tags and move style to CSS.",
    "Structure and presentation should stay separated.",
    "Easier long-term maintenance.",
    "Use modern semantic alternatives with classes.",
    "Improves compatibility across modern browsers.",
    "More accessible and future-proof code.",
    "Validate HTML to catch deprecated markup.",
    "Refactor copied legacy snippets proactively.",
    "Document coding standards for team consistency.",
  ],
  ["Copying outdated tutorial snippets.", "Mixing deprecated and modern patterns."],
  { task: "Rewrite a font+center legacy snippet in modern HTML/CSS.", solution: `<!-- old -->\n<center><font color="blue">Welcome</font></center>\n<!-- new -->\n<h1 class="text-center text-blue">Welcome</h1>` }
);

const characterSets = makeSimple(
  "Character Sets",
  "Text encoding correctness",
  "Character encoding defines how byte data becomes readable characters.",
  `<meta charset="UTF-8" />`,
  `Content-Type: text/html; charset=UTF-8`,
  [
    "Set UTF-8 in head for multilingual compatibility.",
    "UTF-8 supports broad script and symbol coverage.",
    "Prevents mojibake/garbled text.",
    "Match server charset header with document encoding.",
    "Consistency across pipeline avoids rendering issues.",
    "Ensures predictable output in all browsers.",
    "Keep charset declaration near top of head.",
    "Avoid mixing encodings across files.",
    "Test with multilingual content samples.",
  ],
  ["Missing charset meta tag.", "Server response charset mismatch."],
  { task: "Write safe head markup for multilingual page.", solution: `<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Multilingual Page</title>\n</head>` }
);

export const CodeTagContent = build(codeTag);
export const SemanticTagsContent = build(semanticTags);
export const CanvasTagContent = build(canvasTag);
export const GlobalAttributesContent = build(globalAttributes);
export const EntitiesInHtmlContent = build(entitiesInHtml);
export const QuotationTagsContent = build(quotationTags);
export const ObsoleteTagsContent = build(obsoleteTags);
export const CharacterSetsContent = build(characterSets);

