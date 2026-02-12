"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function AnchorTagContent() {
  return (
    <BasicTagLesson
      title="Anchor Tag"
      description="The anchor tag creates hyperlinks to another page, section, file, or URL."
      tagInfo={{
        type: "Interactive Element",
        closingRule: "Requires opening and closing tags",
        primaryUse: "Navigation and linking",
      }}
      syntaxCode={`<a href="https://example.com">Visit Website</a>`}
      exampleCode={`<a href="https://developer.mozilla.org/">Open MDN</a>
<a href="/learn/html">Go to HTML Course</a>
<a href="#contact">Jump to Contact Section</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in new tab
</a>`}
      outputPreview={
        <div className="flex flex-col gap-2">
          <a className="text-blue-700 underline" href="#">
            Open MDN
          </a>
          <a className="text-blue-700 underline" href="#">
            Go to HTML Course
          </a>
          <a className="text-blue-700 underline" href="#">
            Jump to Contact Section
          </a>
          <a className="text-blue-700 underline" href="#">
            Open in new tab
          </a>
        </div>
      }
      useCases={[
        "Navigate between pages in your app.",
        "Link users to external resources and references.",
        "Jump to sections in the same page using fragment IDs.",
      ]}
      attributeGuide={[
        { name: "href", purpose: "Destination URL or fragment target." },
        { name: "target", purpose: "Where to open the link, e.g., _blank." },
        { name: "rel", purpose: "Security/privacy relationship for external links." },
        { name: "download", purpose: "Prompts file download instead of navigation." },
      ]}
      commonMistakes={[
        "Using empty href values for interactive buttons.",
        "Opening new tabs without rel=\"noopener noreferrer\".",
        "Using vague link text like 'click here' everywhere.",
      ]}
      accessibilityNotes={[
        "Link text should describe the destination clearly.",
        "Do not remove focus styles unless you provide an accessible replacement.",
      ]}
      tips={[
        "Always add a meaningful href value.",
        "Use rel=\"noopener noreferrer\" with target=\"_blank\" for external links.",
        "Write descriptive link text instead of generic text like 'click here'.",
      ]}
      practice={{
        task: "Create three links: internal route, page section link, and secure external link opening in new tab.",
        solutionCode: `<a href="/learn/html">Learn HTML</a>
<a href="#contact">Jump to Contact</a>
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
  Open MDN
</a>`,
      }}
    />
  );
}
