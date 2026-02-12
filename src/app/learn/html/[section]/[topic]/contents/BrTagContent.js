"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function BrTagContent() {
  return (
    <BasicTagLesson
      title="Line Break Tag"
      description="The br tag creates a single line break inside text, often used in poems, addresses, or short formatted lines."
      tagInfo={{
        type: "Inline Formatting",
        closingRule: "Void element (no closing tag)",
        primaryUse: "Single line break",
      }}
      syntaxCode={`Line one<br />
Line two`}
      exampleCode={`<p>
Name: Alex Doe<br />
Email: alex@example.com<br />
City: New York
</p>`}
      outputPreview={
        <p>
          Name: Alex Doe
          <br />
          Email: alex@example.com
          <br />
          City: New York
        </p>
      }
      useCases={[
        "Postal addresses where each line has meaning.",
        "Poetry or song lyrics that need fixed line breaks.",
        "Compact label/value lines in very short text snippets.",
      ]}
      attributeGuide={[
        { name: "class", purpose: "Useful when styling special line breaks in custom layouts." },
      ]}
      commonMistakes={[
        "Using many br tags to create vertical spacing between sections.",
        "Using br where separate paragraphs are semantically better.",
        "Trying to close br with </br> in HTML5.",
      ]}
      accessibilityNotes={[
        "Use paragraph and list tags for real structure.",
        "Reserve br for line-level meaning, not layout hacks.",
      ]}
      tips={[
        "Use <br> for meaningful line breaks inside the same paragraph.",
        "Do not use many <br> tags for layout spacing.",
        "Prefer CSS margins/padding for layout control.",
      ]}
      practice={{
        task: "Write an address block using one paragraph and br tags for each new line.",
        solutionCode: `<p>
Code With Lord Academy<br />
42 Developer Street<br />
Bengaluru, India
</p>`,
      }}
    />
  );
}
