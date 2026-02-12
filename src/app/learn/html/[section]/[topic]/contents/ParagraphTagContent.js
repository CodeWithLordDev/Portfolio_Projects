"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function ParagraphTagContent() {
  return (
    <BasicTagLesson
      title="Paragraph Tag"
      description="The paragraph tag defines blocks of text. Browsers add vertical spacing before and after each paragraph."
      tagInfo={{
        type: "Text Content",
        closingRule: "Requires opening and closing tags",
        primaryUse: "Normal body text",
      }}
      syntaxCode={`<p>This is a paragraph.</p>`}
      exampleCode={`<p>HTML is easy to learn when you practice every day.</p>
<p>Each paragraph appears on a new line with spacing.</p>`}
      outputPreview={
        <>
          <p>HTML is easy to learn when you practice every day.</p>
          <p>Each paragraph appears on a new line with spacing.</p>
        </>
      }
      useCases={[
        "Write body text under headings.",
        "Group related sentences into readable chunks.",
        "Present article or blog content with natural spacing.",
      ]}
      attributeGuide={[
        { name: "class", purpose: "Style groups of paragraphs similarly." },
        { name: "id", purpose: "Target a specific paragraph for links or scripts." },
      ]}
      commonMistakes={[
        "Using paragraph tags around large layout sections.",
        "Using many <br> tags instead of proper paragraph separation.",
        "Placing block elements in invalid nesting patterns.",
      ]}
      accessibilityNotes={[
        "Paragraphs improve reading flow for assistive technologies.",
        "Keep lines concise and content logically grouped.",
      ]}
      tips={[
        "Use <p> for normal text content, not headings.",
        "Avoid using <br> repeatedly for spacing; use CSS margins instead.",
        "Keep paragraphs short for better readability.",
      ]}
      practice={{
        task: "Create three short paragraphs for an About section: intro, skills, and goals.",
        solutionCode: `<p>I am a frontend developer focused on clean UI.</p>
<p>My core skills include HTML, CSS, JavaScript, and React.</p>
<p>My goal is to build fast and accessible web experiences.</p>`,
      }}
    />
  );
}
