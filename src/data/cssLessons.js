import { cssTopics } from "./cssTopics";

const lessonOverrides = {
  "introduction-to-css": {
    intro:
      "CSS is the style language of the web. HTML builds the structure, and CSS decides colors, spacing, layout, and visual personality.",
    why: "Without CSS, every site looks plain. CSS helps you guide attention and improve readability.",
    properties: ["color", "font-size", "background-color"],
    html: `<h1 class="title">Welcome to CSS</h1>\n<p class="tagline">Style makes structure meaningful.</p>`,
    css: `.title {\n  color: #2563eb;\n}\n\n.tagline {\n  color: #475569;\n  font-size: 1.05rem;\n}`,
    challenge:
      "Change the heading color and make the paragraph slightly larger so it is easier to read.",
    terms: [{ term: "cascading", tip: "Rules combine, and the more specific one can win." }],
  },
  "how-css-works": {
    intro:
      "A browser reads HTML, then applies matching CSS rules. The selector picks elements, and declarations change their appearance.",
    why: "When you know the pipeline, debugging becomes much easier.",
    properties: ["selector", "property", "value"],
    html: `<button class="cta">Buy Now</button>`,
    css: `.cta {\n  background: #0ea5e9;\n  color: white;\n  border: none;\n  padding: 0.65rem 1rem;\n  border-radius: 0.6rem;\n}`,
    challenge: "Try changing only the selector and see how styling scope changes.",
    terms: [{ term: "rule", tip: "A rule is selector + declaration block." }],
  },
  "syntax-of-css": {
    intro:
      "CSS syntax is simple: selector { property: value; }. Each declaration ends with a semicolon.",
    why: "Clean syntax prevents silent styling bugs.",
    properties: ["selector", "declaration", "semicolon"],
    html: `<p class="note">Syntax becomes easy with repetition.</p>`,
    css: `.note {\n  color: #334155;\n  background: #e2e8f0;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n}`,
    challenge: "Remove and add semicolons to learn why consistency matters.",
  },
  "ways-to-add-css": {
    intro:
      "You can add CSS inline, inside a <style> tag, or in external files. External CSS is best for scalable projects.",
    why: "Choosing the right method keeps projects maintainable.",
    properties: ["style attribute", "style tag", "external stylesheet"],
    html: `<link rel="stylesheet" href="styles.css">\n<h2 class="heading">Reusable styles win</h2>`,
    css: `.heading {\n  color: #1d4ed8;\n  letter-spacing: 0.02em;\n}`,
    challenge: "Move inline styles into a class rule.",
  },
  "your-first-css-website": {
    intro:
      "Build your first mini page by styling a heading, a card, and a button. Start small, then improve spacing and contrast.",
    why: "Small wins build confidence quickly.",
    properties: ["max-width", "padding", "border-radius"],
    html: `<div class="card">\n  <h2>My First CSS Site</h2>\n  <p>I can already style layouts.</p>\n  <button>Read More</button>\n</div>`,
    css: `.card {\n  max-width: 420px;\n  padding: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n\nbutton {\n  margin-top: 0.5rem;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.55rem 0.9rem;\n}`,
    challenge: "Add a hover state to the button.",
  },
  selectors: {
    intro:
      "Selectors tell CSS which elements to style. Think of them like labels on storage boxes.",
    why: "Good selectors make styles predictable and reusable.",
    properties: [".class", "#id", "element", "descendant"],
    html: `<article class="post">\n  <h3 id="mainTitle">Selectors</h3>\n  <p>Start with class selectors for reusable styles.</p>\n</article>`,
    css: `.post p {\n  color: #475569;\n}\n\n#mainTitle {\n  color: #0f172a;\n}\n\n.post {\n  border-left: 4px solid #0ea5e9;\n  padding-left: 0.75rem;\n}`,
    challenge: "Style only the paragraph inside .post, not all paragraphs.",
  },
  specificity: {
    intro:
      "Specificity decides which CSS rule wins when multiple rules target the same element.",
    why: "Knowing specificity stops the 'why is my style not applied?' problem.",
    properties: ["inline", "#id", ".class", "element"],
    html: `<p id="intro" class="lead">Specificity decides winners.</p>`,
    css: `p { color: #64748b; }\n.lead { color: #0ea5e9; }\n#intro { color: #1d4ed8; }`,
    challenge: "Add a new class and test if it can override #intro.",
    diagram: "specificity",
  },
  colors: {
    intro:
      "CSS colors can use names, HEX, RGB, or HSL. Choose combinations with strong contrast.",
    why: "Color affects readability and user trust.",
    properties: ["color", "background-color", "hsl()"],
    html: `<div class="palette">\n  <h3>Readable Colors</h3>\n  <p>Contrast matters more than decoration.</p>\n</div>`,
    css: `.palette {\n  background: hsl(217 91% 60%);\n  color: #eff6ff;\n  padding: 1rem;\n  border-radius: 12px;\n}`,
    challenge: "Try a dark background and keep text readable.",
  },
  backgrounds: {
    intro:
      "Backgrounds can be colors, gradients, or images. Keep content readable on top.",
    why: "A clean background guides focus instead of distracting users.",
    properties: ["background", "background-image", "background-size"],
    html: `<section class="hero">\n  <h2>Gradient Background</h2>\n</section>`,
    css: `.hero {\n  padding: 1.25rem;\n  border-radius: 14px;\n  background: linear-gradient(135deg, #2563eb, #7c3aed);\n  color: white;\n}`,
    challenge: "Create a soft gradient with two different colors.",
  },
  borders: {
    intro:
      "Borders define edges and visual grouping. They make cards and forms easier to scan.",
    why: "Grouping reduces cognitive load.",
    properties: ["border", "border-radius", "border-color"],
    html: `<div class="panel">Border helps separate this card.</div>`,
    css: `.panel {\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 1rem;\n}`,
    challenge: "Try different border styles like dashed and double.",
  },
  padding: {
    intro:
      "Padding is inner space between content and border.",
    why: "Good padding improves readability and touch friendliness.",
    properties: ["padding", "padding-inline", "padding-block"],
    html: `<button class="btn">Comfortable button</button>`,
    css: `.btn {\n  padding: 0.7rem 1rem;\n  border-radius: 0.6rem;\n  border: 1px solid #94a3b8;\n}`,
    challenge: "Give the button more horizontal than vertical padding.",
    diagram: "box-model",
  },
  margin: {
    intro:
      "Margin is outer space around an element. It controls distance from neighbors.",
    why: "Consistent spacing creates visual rhythm.",
    properties: ["margin", "margin-top", "margin-inline"],
    html: `<p class="one">First paragraph.</p>\n<p class="two">Second paragraph.</p>`,
    css: `.one { margin-bottom: 1rem; }\n.two { margin-top: 0.25rem; }`,
    challenge: "Center a card using margin and max-width.",
  },
  "box-model": {
    intro:
      "Every element is a box: content, padding, border, and margin.",
    why: "Box model mastery solves most layout confusion.",
    properties: ["box-sizing", "padding", "border", "margin"],
    html: `<div class="box">Box model demo</div>`,
    css: `* { box-sizing: border-box; }\n.box {\n  width: 220px;\n  padding: 16px;\n  border: 4px solid #0ea5e9;\n  margin: 16px;\n}`,
    challenge: "Switch to content-box and compare total rendered width.",
    diagram: "box-model",
  },
  "text-styling": {
    intro:
      "Text styling controls readability and tone. Focus on font size, line height, and contrast.",
    why: "Readable text keeps users engaged.",
    properties: ["font-size", "line-height", "font-weight", "letter-spacing"],
    html: `<p class="readable">Readable text feels effortless to scan.</p>`,
    css: `.readable {\n  font-size: 1rem;\n  line-height: 1.7;\n  letter-spacing: 0.01em;\n  color: #334155;\n}`,
    challenge: "Increase readability for mobile users.",
  },
  links: {
    intro:
      "Links should look clickable and stay readable in all states.",
    why: "Clear links improve navigation and trust.",
    properties: ["text-decoration", "color", ":visited"],
    html: `<a class="doc-link" href="#">Open CSS docs</a>`,
    css: `.doc-link {\n  color: #2563eb;\n  text-decoration: underline;\n}\n.doc-link:visited {\n  color: #7c3aed;\n}`,
    challenge: "Style normal, visited, and hover states differently.",
  },
  hover: {
    intro:
      "Hover styles provide feedback when users point at elements.",
    why: "Feedback makes interfaces feel responsive and clear.",
    properties: [":hover", "transition", "transform"],
    html: `<button class="lift">Hover me</button>`,
    css: `.lift {\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.lift:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.25);\n}`,
    challenge: "Create a hover style that changes both color and position.",
  },
  cursors: {
    intro:
      "Cursor styles hint what interaction is possible.",
    why: "Correct cursor cues improve usability.",
    properties: ["cursor: pointer", "cursor: not-allowed", "cursor: grab"],
    html: `<button class="action">Clickable</button>\n<button class="disabled" disabled>Disabled</button>`,
    css: `.action { cursor: pointer; }\n.disabled { cursor: not-allowed; }`,
    challenge: "Apply pointer only to interactive elements.",
  },
  "list-styles": {
    intro:
      "List styles control bullets, numbering, and marker position.",
    why: "Styled lists improve scan speed and hierarchy.",
    properties: ["list-style-type", "list-style-position", "::marker"],
    html: `<ul class="tips">\n  <li>Use clear labels</li>\n  <li>Keep spacing consistent</li>\n</ul>`,
    css: `.tips { list-style-type: square; }\n.tips li::marker { color: #2563eb; }`,
    challenge: "Create a clean checklist style using custom markers.",
  },
  images: {
    intro:
      "Image styling controls fit, shape, and responsiveness.",
    why: "Responsive images prevent broken layouts.",
    properties: ["max-width", "height: auto", "object-fit"],
    html: `<img class="avatar" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500" alt="Portrait" />`,
    css: `.avatar {\n  width: 180px;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 999px;\n  border: 3px solid #e2e8f0;\n}`,
    challenge: "Turn a rectangular image into a circle without stretching it.",
  },
  "video-embedding": {
    intro:
      "CSS helps embedded videos stay responsive.",
    why: "Video layouts should work well on every screen size.",
    properties: ["aspect-ratio", "width: 100%", "border-radius"],
    html: `<div class="video-wrap">\n  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo"></iframe>\n</div>`,
    css: `.video-wrap iframe {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border: 0;\n  border-radius: 12px;\n}`,
    challenge: "Make the video full width while preserving ratio.",
  },
  buttons: {
    intro:
      "Button styling should prioritize clarity, contrast, and feedback.",
    why: "Buttons drive key user actions.",
    properties: ["background", "border-radius", "transition", ":hover"],
    html: `<button class="primary">Save Changes</button>`,
    css: `.primary {\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.65rem 1rem;\n  transition: transform .15s ease, filter .15s ease;\n}\n.primary:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.05);\n}`,
    challenge: "Create primary and secondary button variants.",
  },
  overflow: {
    intro:
      "Overflow controls what happens when content is bigger than its container.",
    why: "Prevents layout breaks and unreadable interfaces.",
    properties: ["overflow", "overflow-x", "overflow-y"],
    html: `<div class="scroll-box">This is long content repeated. This is long content repeated. This is long content repeated. This is long content repeated.</div>`,
    css: `.scroll-box {\n  max-height: 72px;\n  overflow-y: auto;\n  padding: 0.75rem;\n  border: 1px solid #cbd5e1;\n}`,
    challenge: "Show horizontal scroll only when needed.",
  },
  float: {
    intro:
      "Float was used for text wrapping before modern layout tools.",
    why: "You still see float in legacy code.",
    properties: ["float", "clear"],
    html: `<img class="left" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300" alt="Sample" />\n<p>Text wraps around floated images.</p>`,
    css: `.left {\n  float: left;\n  width: 120px;\n  margin: 0 1rem 0.5rem 0;\n}\np { clear: none; }`,
    challenge: "Wrap text around an image and then clear the float below.",
  },
  positioning: {
    intro:
      "Positioning lets you place elements relative to normal flow or a parent container.",
    why: "Useful for badges, tooltips, sticky bars, and overlays.",
    properties: ["position", "top", "left", "relative", "absolute", "fixed", "sticky"],
    html: `<div class="card">\n  <span class="badge">NEW</span>\n  <p>Positioning demo</p>\n</div>`,
    css: `.card { position: relative; padding: 1rem; border: 1px solid #cbd5e1; }\n.badge { position: absolute; top: -10px; right: -10px; background: #2563eb; color: white; padding: 0.25rem 0.45rem; border-radius: 999px; }`,
    challenge: "Pin a badge to the top-right corner of a card.",
    diagram: "positioning",
  },
  "z-index": {
    intro:
      "z-index controls stacking order when elements overlap.",
    why: "Helps modals, menus, and tooltips appear above content.",
    properties: ["z-index", "position"],
    html: `<div class="layer a">A</div>\n<div class="layer b">B</div>`,
    css: `.layer { position: relative; width: 80px; height: 80px; }\n.a { background: #93c5fd; z-index: 1; }\n.b { background: #60a5fa; margin-top: -35px; margin-left: 30px; z-index: 3; }`,
    challenge: "Create three overlapping cards with controlled stack order.",
    diagram: "stacking",
  },
  units: {
    intro:
      "Units define size. Use rem for scalable text and % for fluid layouts.",
    why: "Correct units improve accessibility and responsiveness.",
    properties: ["px", "rem", "em", "%", "vw", "vh"],
    html: `<div class="wrapper"><p class="lead">Responsive sizing matters.</p></div>`,
    css: `.wrapper { width: min(90%, 42rem); }\n.lead { font-size: 1.125rem; }`,
    challenge: "Replace px text sizes with rem units.",
  },
  variables: {
    intro:
      "CSS variables (custom properties) store reusable values.",
    why: "They make themes and large design systems easier to maintain.",
    properties: ["--brand", "var(--brand)"],
    html: `<button class="cta">Use Variables</button>`,
    css: `:root {\n  --brand: #2563eb;\n  --radius: 10px;\n}\n.cta {\n  background: var(--brand);\n  border-radius: var(--radius);\n  color: white;\n  border: 0;\n  padding: .6rem 1rem;\n}`,
    challenge: "Create light and dark card themes using variables.",
  },
  "maths-functions": {
    intro:
      "Math functions like calc(), min(), max(), and clamp() create flexible sizing rules.",
    why: "They reduce media-query-heavy code.",
    properties: ["calc()", "min()", "max()", "clamp()"],
    html: `<h2 class="fluid-title">Fluid title</h2>`,
    css: `.fluid-title {\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  margin-inline: auto;\n  width: min(90%, 34rem);\n}`,
    challenge: "Use clamp() to create fluid typography.",
  },
  forms: {
    intro:
      "Form styling improves usability and helps users complete tasks faster.",
    why: "Forms are often where users convert or sign up.",
    properties: [":focus", "border", "outline", "accent-color"],
    html: `<label>Email <input class="field" type="email" placeholder="you@example.com" /></label>`,
    css: `.field {\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 0.55rem 0.7rem;\n}\n.field:focus {\n  outline: 3px solid #bfdbfe;\n  border-color: #2563eb;\n}`,
    challenge: "Style focus states so keyboard users can easily see active fields.",
  },
  "navigation-bar": {
    intro:
      "A navigation bar groups links and helps users move across pages.",
    why: "Navigation quality directly impacts usability.",
    properties: ["display: flex", "gap", "justify-content", "align-items"],
    html: `<nav class="nav"><a href="#">Home</a><a href="#">Docs</a><a href="#">Contact</a></nav>`,
    css: `.nav {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 0.8rem 1rem;\n  background: #0f172a;\n  border-radius: 10px;\n}\n.nav a { color: #e2e8f0; text-decoration: none; }`,
    challenge: "Create a responsive nav where links stack on small screens.",
  },
  display: {
    intro:
      "The display property controls how elements behave in layout.",
    why: "It is the first step in understanding layout behavior.",
    properties: ["block", "inline", "inline-block", "none"],
    html: `<span class="pill">Inline</span>\n<div class="panel">Block</div>`,
    css: `.pill { display: inline-block; padding: .2rem .5rem; background: #dbeafe; border-radius: 999px; }\n.panel { display: block; margin-top: .6rem; }`,
    challenge: "Compare inline, block, and inline-block visually.",
  },
  flexbox: {
    intro:
      "Flexbox is great for one-dimensional layouts like rows and columns.",
    why: "It makes alignment and spacing much easier.",
    properties: ["display: flex", "justify-content", "align-items", "gap"],
    html: `<div class="row"><div>A</div><div>B</div><div>C</div></div>`,
    css: `.row {\n  display: flex;\n  gap: 0.6rem;\n  justify-content: space-between;\n}\n.row > div { background: #dbeafe; padding: 0.6rem; border-radius: 8px; }`,
    challenge: "Center an item both vertically and horizontally with flexbox.",
    diagram: "flexbox",
  },
  grid: {
    intro:
      "CSS Grid is ideal for two-dimensional layouts with rows and columns.",
    why: "Grid makes complex page structures simple and readable.",
    properties: ["display: grid", "grid-template-columns", "gap"],
    html: `<section class="grid"><div>1</div><div>2</div><div>3</div><div>4</div></section>`,
    css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.6rem;\n}\n.grid > div { background: #e0e7ff; padding: 0.8rem; border-radius: 8px; }`,
    challenge: "Build a 3-column layout that collapses to 1 column on mobile.",
    diagram: "grid",
  },
  "media-queries": {
    intro:
      "Media queries apply styles based on screen size or user preferences.",
    why: "Responsive design keeps your site usable on phones, tablets, and desktops.",
    properties: ["@media", "min-width", "max-width"],
    html: `<div class="card">Resize the preview to test responsive CSS.</div>`,
    css: `.card { padding: 0.8rem; background: #dbeafe; }\n@media (min-width: 768px) {\n  .card { padding: 1.5rem; background: #bfdbfe; }\n}`,
    challenge: "Change font size at two breakpoints.",
  },
  combinators: {
    intro:
      "Combinators define relationships between elements, like parent-child or sibling.",
    why: "They let you style structure without adding extra classes.",
    properties: [">", "+", "~", "space"],
    html: `<div class="card"><p>One</p><p>Two</p></div><p>Outside</p>`,
    css: `.card > p { color: #1d4ed8; }\n.card + p { color: #7c3aed; }`,
    challenge: "Style only direct child paragraphs inside a container.",
  },
  "pseudo-classes": {
    intro:
      "Pseudo-classes style elements in specific states like hover, focus, or first-child.",
    why: "State-based styling improves interactivity and accessibility.",
    properties: [":hover", ":focus-visible", ":first-child"],
    html: `<ul class="menu"><li>Home</li><li>Docs</li><li>Blog</li></ul>`,
    css: `.menu li:first-child { font-weight: 700; }\n.menu li:hover { color: #2563eb; }`,
    challenge: "Create a focus-visible style for keyboard navigation.",
  },
  shadows: {
    intro:
      "Shadows add depth and hierarchy. Use subtle values for a modern look.",
    why: "Depth helps users understand clickability and structure.",
    properties: ["box-shadow", "text-shadow"],
    html: `<div class="card">Soft shadow card</div>`,
    css: `.card {\n  padding: 1rem;\n  border-radius: 12px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);\n}`,
    challenge: "Create a stronger hover shadow without making it too dark.",
  },
  "border-images": {
    intro:
      "Border images use images or gradients as borders.",
    why: "Useful for decorative UI accents.",
    properties: ["border-image-source", "border-image-slice"],
    html: `<div class="fancy">Decorative border</div>`,
    css: `.fancy {\n  border: 8px solid transparent;\n  border-image: linear-gradient(135deg, #2563eb, #7c3aed) 1;\n  padding: 0.9rem;\n}`,
    challenge: "Build a gradient border using border-image.",
  },
  gradients: {
    intro:
      "Gradients blend two or more colors smoothly.",
    why: "They add visual depth without extra image assets.",
    properties: ["linear-gradient()", "radial-gradient()"],
    html: `<div class="banner">Gradient Background</div>`,
    css: `.banner {\n  padding: 1rem;\n  border-radius: 12px;\n  color: white;\n  background: linear-gradient(90deg, #2563eb, #9333ea);\n}`,
    challenge: "Create a radial gradient badge.",
  },
  "2d-transform": {
    intro:
      "2D transforms move, scale, rotate, or skew elements.",
    why: "Great for interactive feedback without changing layout flow.",
    properties: ["transform", "translate", "scale", "rotate"],
    html: `<button class="chip">Transform me</button>`,
    css: `.chip {\n  transition: transform .2s ease;\n}\n.chip:hover {\n  transform: translateY(-2px) scale(1.02);\n}`,
    challenge: "Rotate an icon by 12 degrees on hover.",
  },
  transitions: {
    intro:
      "Transitions animate property changes smoothly over time.",
    why: "Micro-interactions make interfaces feel polished.",
    properties: ["transition", "duration", "timing-function"],
    html: `<div class="tile">Hover tile</div>`,
    css: `.tile {\n  padding: 1rem;\n  background: #dbeafe;\n  transition: background .2s ease, transform .2s ease;\n}\n.tile:hover {\n  background: #bfdbfe;\n  transform: translateY(-2px);\n}`,
    challenge: "Animate color and scale on hover.",
  },
  animations: {
    intro:
      "Keyframe animations let elements change style over multiple steps.",
    why: "Useful for loaders, attention cues, and storytelling.",
    properties: ["@keyframes", "animation", "animation-duration"],
    html: `<div class="dot"></div>`,
    css: `@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.2); opacity: .55; }\n}\n.dot {\n  width: 16px;\n  height: 16px;\n  border-radius: 999px;\n  background: #2563eb;\n  animation: pulse 1s infinite;\n}`,
    challenge: "Create a 3-dot loading animation using keyframes.",
  },
  masking: {
    intro:
      "Masking controls which parts of an element are visible.",
    why: "Great for creative reveal effects.",
    properties: ["mask-image", "mask-size", "mask-repeat"],
    html: `<div class="masked">Masked text effect</div>`,
    css: `.masked {\n  color: #0f172a;\n  background: linear-gradient(90deg, #2563eb, #7c3aed);\n  -webkit-background-clip: text;\n  color: transparent;\n}`,
    challenge: "Create a text reveal effect with clipping or masking.",
  },
  "tooltip-text": {
    intro:
      "Tooltips reveal extra info on hover or focus.",
    why: "Helpful for quick hints without cluttering the interface.",
    properties: ["position", "opacity", "visibility", ":hover"],
    html: `<button class="tip-wrap">Hover me<span class="tip">Helpful tooltip text</span></button>`,
    css: `.tip-wrap { position: relative; }\n.tip {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -36px;\n  background: #0f172a;\n  color: white;\n  padding: .35rem .5rem;\n  border-radius: 6px;\n  opacity: 0;\n  visibility: hidden;\n}\n.tip-wrap:hover .tip { opacity: 1; visibility: visible; }`,
    challenge: "Make tooltip visible on keyboard focus too.",
  },
  pagination: {
    intro:
      "Pagination splits long lists into smaller pages.",
    why: "Improves performance and navigation clarity.",
    properties: ["display: flex", "gap", "border-radius", ":active"],
    html: `<nav class="pager"><a>1</a><a class="active">2</a><a>3</a></nav>`,
    css: `.pager { display: flex; gap: .5rem; }\n.pager a { padding: .4rem .65rem; border: 1px solid #cbd5e1; border-radius: 8px; }\n.pager .active { background: #2563eb; color: white; }`,
    challenge: "Style current page and hover states differently.",
  },
  inherit: {
    intro:
      "The inherit keyword tells an element to use its parent value.",
    why: "Useful for consistent typography and color systems.",
    properties: ["inherit"],
    html: `<section class="theme"><p class="inner">Inherited color text</p></section>`,
    css: `.theme { color: #2563eb; }\n.inner { color: inherit; }`,
    challenge: "Use inherit for font-family and color in nested elements.",
  },
  "important-property": {
    intro:
      "!important forces a declaration to win, but it should be a last resort.",
    why: "Overusing !important makes CSS hard to maintain.",
    properties: ["!important"],
    html: `<p class="warning">Use !important carefully.</p>`,
    css: `.warning { color: #2563eb !important; }`,
    challenge: "Refactor a style conflict without using !important.",
    terms: [{ term: "specificity debt", tip: "Too many overrides make CSS fragile." }],
  },
  "advanced-media-queries": {
    intro:
      "Advanced media queries can react to user preferences like dark mode and reduced motion.",
    why: "Respects accessibility preferences and device conditions.",
    properties: ["prefers-color-scheme", "prefers-reduced-motion"],
    html: `<div class="panel">Preference-aware panel</div>`,
    css: `.panel { padding: 1rem; background: #f8fafc; color: #0f172a; }\n@media (prefers-color-scheme: dark) {\n  .panel { background: #0f172a; color: #e2e8f0; }\n}\n@media (prefers-reduced-motion: reduce) {\n  * { animation-duration: 0.01ms !important; }\n}`,
    challenge: "Add a reduced-motion fallback to an animated component.",
  },
  questions: {
    intro:
      "This FAQ section answers common beginner CSS questions with practical examples.",
    why: "FAQs help reinforce the concepts you learned across the course.",
    properties: ["debugging", "best practices", "responsive design"],
    html: `<details open>\n  <summary>Why are my styles not applying?</summary>\n  <p>Check selector match, specificity, and file import order.</p>\n</details>`,
    css: `details {\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 0.75rem;\n}\nsummary { cursor: pointer; font-weight: 600; }`,
    challenge: "Create two FAQ items and style open/closed states.",
  },
};

const sectionGuides = {
  "introduction-to-css": {
    analogy: "Think of HTML as a house frame and CSS as paint, furniture, and lighting.",
    defaultWhy: "You need this foundation before advanced layouts and animation.",
  },
  "css-basics": {
    analogy: "CSS basics are like learning kitchen tools before complex recipes.",
    defaultWhy: "These properties appear in almost every project.",
  },
  "intermediate-styling": {
    analogy: "Intermediate styling is where your UI starts feeling professional.",
    defaultWhy: "These patterns appear in cards, forms, media, and navigation.",
  },
  "layout-designing": {
    analogy: "Layout tools are your page architecture system.",
    defaultWhy: "Strong layout skills reduce responsive bugs.",
  },
  "advanced-css": {
    analogy: "Advanced CSS helps you polish details and improve scalability.",
    defaultWhy: "These skills make interfaces feel modern and robust.",
  },
  "css-faqs": {
    analogy: "FAQs are like quick repair notes when projects get stuck.",
    defaultWhy: "Debugging confidence helps you learn faster.",
  },
};

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => {
      if (part === "css") return "CSS";
      if (part === "2d") return "2D";
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function buildFallbackLesson(sectionSlug, topicSlug, topicTitle) {
  const sectionGuide = sectionGuides[sectionSlug];
  const humanTitle = topicTitle || titleFromSlug(topicSlug);

  return {
    intro: `${humanTitle} teaches a practical CSS concept you can use in real interfaces. Start with one clear rule, then test small changes.`,
    why: sectionGuide?.defaultWhy || "This concept supports clean, reliable UI development.",
    properties: ["color", "spacing", "layout"],
    html: `<section class="demo">\n  <h3>${humanTitle}</h3>\n  <p>Practice by editing values and watching the preview.</p>\n</section>`,
    css: `.demo {\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 1rem;\n  background: #f8fafc;\n}\n.demo h3 {\n  color: #1d4ed8;\n}`,
    challenge: `Adjust this example to better express ${humanTitle.toLowerCase()} in your own words.`,
    takeaways: [
      `${humanTitle} is easier when you iterate in small steps.`,
      "Readable spacing and contrast improve UI quality.",
      "Use reusable class patterns for maintainability.",
    ],
    terms: [{ term: "cascade", tip: "The cascade decides which style is used." }],
    analogy: sectionGuide?.analogy,
  };
}

export function getLesson(sectionSlug, topicSlug, topicTitle) {
  const override = lessonOverrides[topicSlug];
  const base = override || buildFallbackLesson(sectionSlug, topicSlug, topicTitle);

  return {
    intro: base.intro,
    why: base.why,
    properties: base.properties || [],
    html: base.html,
    css: base.css,
    js: base.js || "",
    solutionHtml: base.solutionHtml || base.html,
    solutionCss:
      base.solutionCss ||
      `${base.css}\n\n.demo {\n  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.18);\n}`,
    solutionJs: base.solutionJs || base.js || "",
    challenge: base.challenge,
    takeaways:
      base.takeaways || [
        `Understand ${topicTitle || titleFromSlug(topicSlug)} through small experiments.`,
        "Keep styles consistent with reusable class names.",
        "Check spacing, alignment, and contrast after every change.",
      ],
    terms: base.terms || [],
    diagram: base.diagram || null,
    analogy:
      base.analogy ||
      sectionGuides[sectionSlug]?.analogy ||
      "Think of CSS as a set of reusable visual instructions.",
  };
}

export function flattenTopics() {
  return cssTopics.flatMap((section) =>
    section.children.map((topic) => ({
      sectionSlug: section.slug,
      sectionTitle: section.title,
      topicSlug: topic.slug,
      topicTitle: topic.title,
    }))
  );
}
