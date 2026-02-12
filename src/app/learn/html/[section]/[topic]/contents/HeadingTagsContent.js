"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function HeadingTagsContent() {
  return (
    <BasicTagLesson
      title="Heading Tags"
      description="HTML headings range from h1 to h6. Use them to define document hierarchy and improve readability."
      tagInfo={{
        type: "Semantic Content",
        closingRule: "Requires opening and closing tags",
        primaryUse: "Defines content hierarchy",
      }}
      syntaxCode={`<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>`}
      exampleCode={`<h1>My Blog</h1>
<h2>Latest Articles</h2>
<h3>How to Learn HTML Fast</h3>
<p>Start by practicing tags daily.</p>`}
      outputPreview={
        <>
          <h1 className="text-3xl font-bold">My Blog</h1>
          <h2 className="text-2xl font-semibold mt-2">Latest Articles</h2>
          <h3 className="text-xl font-semibold mt-2">How to Learn HTML Fast</h3>
          <p className="mt-2">Start by practicing tags daily.</p>
        </>
      }
      useCases={[
        "Use h1 for the main page/topic heading.",
        "Use h2-h3 for sections and sub-sections.",
        "Build a clear outline for users and search engines.",
      ]}
      attributeGuide={[
        { name: "Global attributes", purpose: "Headings support id, class, style, and other global attributes." },
        { name: "id", purpose: "Useful for anchor links, e.g., href=\"#faq\"." },
      ]}
      commonMistakes={[
        "Using multiple unrelated h1 tags on a single page.",
        "Skipping levels purely for visual size (h1 then h4).",
        "Using headings only for styling instead of structure.",
      ]}
      accessibilityNotes={[
        "Screen readers use heading levels to navigate quickly.",
        "Keep heading text descriptive and concise.",
      ]}
      tips={[
        "Use one primary <h1> per page for the main topic.",
        "Do not skip heading levels for structure.",
        "Headings are important for accessibility and SEO.",
      ]}
      practice={{
        task: "Write a mini article structure with one h1, two h2 sections, and one h3 subsection under the second h2.",
        solutionCode: `<h1>JavaScript Basics</h1>
<h2>What is JavaScript?</h2>
<p>It is a programming language for the web.</p>
<h2>Core Concepts</h2>
<h3>Variables</h3>
<p>Variables store data values.</p>`,
      }}
    />
  );
}
