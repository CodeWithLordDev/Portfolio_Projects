"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function HrTagContent() {
  return (
    <BasicTagLesson
      title="Horizontal Line Tag"
      description="The hr tag inserts a thematic break between content sections."
      tagInfo={{
        type: "Semantic Separator",
        closingRule: "Void element (no closing tag)",
        primaryUse: "Section transition marker",
      }}
      syntaxCode={`<hr />`}
      exampleCode={`<h2>Chapter 1</h2>
<p>This chapter introduces core ideas.</p>
<hr />
<h2>Chapter 2</h2>
<p>This chapter continues with examples.</p>`}
      outputPreview={
        <>
          <h2 className="text-xl font-semibold">Chapter 1</h2>
          <p>This chapter introduces core ideas.</p>
          <hr className="my-3 border-gray-400" />
          <h2 className="text-xl font-semibold">Chapter 2</h2>
          <p>This chapter continues with examples.</p>
        </>
      }
      useCases={[
        "Separate major sections in articles.",
        "Mark a shift of topic within the same page.",
        "Break content in long text blocks without adding extra headings.",
      ]}
      attributeGuide={[
        { name: "class", purpose: "Style thickness, color, and spacing with CSS." },
        { name: "aria-hidden", purpose: "Hide decorative separators from assistive tech when needed." },
      ]}
      commonMistakes={[
        "Using hr repeatedly just to add vertical spacing.",
        "Adding closing tags like </hr> (invalid in HTML5).",
        "Using separators where heading structure is more appropriate.",
      ]}
      accessibilityNotes={[
        "Use hr for meaningful thematic breaks, not only decoration.",
        "Decorative separators can be hidden with aria-hidden=\"true\".",
      ]}
      tips={[
        "Use <hr> for section breaks, not just visual decoration.",
        "Style it with CSS when needed.",
        "Keep content hierarchy clear with headings around it.",
      ]}
      practice={{
        task: "Build an FAQ block with two questions separated by an hr thematic break.",
        solutionCode: `<h2>FAQ</h2>
<h3>What is HTML?</h3>
<p>HTML is the markup language for web pages.</p>
<hr />
<h3>Why use semantic tags?</h3>
<p>They improve structure, accessibility, and maintainability.</p>`,
      }}
    />
  );
}
