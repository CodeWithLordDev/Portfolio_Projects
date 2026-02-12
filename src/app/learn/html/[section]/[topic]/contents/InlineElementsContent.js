"use client";

import InlineBlockAnimatedLesson from "./InlineBlockAnimatedLesson";

const inlineSteps = [
  {
    id: "same-line",
    label: "Step 1",
    explain: "Inline elements stay in the same line and only take as much width as needed.",
    visual: (
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="bg-cyan-500/25 border border-cyan-300/40 rounded px-2 py-1">span</span>
        <a className="bg-cyan-500/25 border border-cyan-300/40 rounded px-2 py-1">a</a>
        <strong className="bg-cyan-500/25 border border-cyan-300/40 rounded px-2 py-1">strong</strong>
      </div>
    ),
  },
  {
    id: "width-ignored",
    label: "Step 2",
    explain: "Width and height usually do not behave like block layout on typical inline elements.",
    visual: (
      <div className="text-sm">
        <span className="inline bg-cyan-500/25 border border-cyan-300/40 px-2 py-1 w-56 h-20">
          inline span (content-sized)
        </span>
      </div>
    ),
  },
  {
    id: "flow-with-text",
    label: "Step 3",
    explain: "Inline elements flow naturally with text, making them ideal for styling words inside paragraphs.",
    visual: (
      <p className="text-sm text-gray-200 leading-relaxed">
        Learn <span className="text-cyan-300 font-semibold">HTML</span> by practicing
        <a className="text-cyan-300 underline ml-1">inline tags</a> daily.
      </p>
    ),
  },
];

export default function InlineElementsContent() {
  return (
    <InlineBlockAnimatedLesson
      heading="Inline Elements in HTML"
      intro="This animated lesson shows how inline elements behave inside text flow. Use the controls to observe each behavior step-by-step."
      mode="inline"
      steps={inlineSteps}
      compareText="Inline elements do not start on a new line. They are best for text-level semantics and partial styling inside sentences."
      codeSample={`<p>
  Learn <span>HTML</span> with
  <a href="/learn/html">practice</a> every day.
</p>

<!-- common inline elements -->
<span>...</span> <a>...</a> <strong>...</strong> <em>...</em>`}
    />
  );
}

