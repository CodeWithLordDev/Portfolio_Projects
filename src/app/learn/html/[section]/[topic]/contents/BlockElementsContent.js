"use client";

import InlineBlockAnimatedLesson from "./InlineBlockAnimatedLesson";

const blockSteps = [
  {
    id: "new-line",
    label: "Step 1",
    explain: "Block elements always start on a new line and stack vertically.",
    visual: (
      <div className="space-y-2 text-sm">
        <div className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">div block 1</div>
        <div className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">div block 2</div>
        <div className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">div block 3</div>
      </div>
    ),
  },
  {
    id: "full-width",
    label: "Step 2",
    explain: "By default, block elements use full available width of their container.",
    visual: (
      <div className="space-y-2 text-sm">
        <p className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">paragraph is full width</p>
        <section className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">section is full width</section>
      </div>
    ),
  },
  {
    id: "layout-building",
    label: "Step 3",
    explain: "Block elements are used to build page layout structure like sections, cards, and containers.",
    visual: (
      <div className="space-y-2 text-sm">
        <header className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">header</header>
        <main className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">main</main>
        <footer className="bg-violet-500/25 border border-violet-300/40 rounded px-3 py-2">footer</footer>
      </div>
    ),
  },
];

export default function BlockElementsContent() {
  return (
    <InlineBlockAnimatedLesson
      heading="Block Elements in HTML"
      intro="This animated lesson helps users see why block elements are used for structure and layout. Watch how each block takes its own row."
      mode="block"
      steps={blockSteps}
      compareText="Block elements start on a new line and usually take full width. They are the base of page sections and structural grouping."
      codeSample={`<div>Card Container</div>
<p>Paragraph text</p>
<section>Feature section</section>

<!-- common block elements -->
<div>...</div> <p>...</p> <section>...</section> <article>...</article>`}
    />
  );
}

