"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function SkeletalTagsContent() {
  return (
    <BasicTagLesson
      title="Skeletal Tags"
      description="Skeletal tags are the base structure of every HTML document: doctype, html, head, and body."
      tagInfo={{
        type: "Document Structure",
        closingRule: "Mixed (doctype has no closing tag)",
        primaryUse: "Defines page foundation",
      }}
      syntaxCode={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- visible content -->
  </body>
</html>`}
      exampleCode={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
    <p>This page follows the proper skeleton.</p>
  </body>
</html>`}
      outputPreview={
        <>
          <h1 className="text-2xl font-bold">Hello, HTML!</h1>
          <p>This page follows the proper skeleton.</p>
        </>
      }
      useCases={[
        "Start every HTML document with a valid HTML5 structure.",
        "Separate metadata in head and visible UI inside body.",
        "Set language and character encoding early for browser correctness.",
      ]}
      attributeGuide={[
        { name: "lang on <html>", purpose: "Declares document language for accessibility and SEO." },
        { name: "charset on <meta>", purpose: "Prevents text rendering issues with special characters." },
        { name: "name=viewport", purpose: "Makes layout scale correctly on mobile devices." },
      ]}
      commonMistakes={[
        "Missing <!DOCTYPE html>, which can trigger quirks mode rendering.",
        "Putting visible UI elements inside <head>.",
        "Forgetting charset or viewport metadata in modern pages.",
      ]}
      accessibilityNotes={[
        "Use a meaningful lang value like en, hi, or en-US.",
        "Keep page title specific so screen readers and browser tabs are informative.",
      ]}
      tips={[
        "Always start with <!DOCTYPE html> for standards mode.",
        "Place metadata inside <head> and visible content inside <body>.",
        "Use the lang attribute on <html> for accessibility and SEO.",
      ]}
      practice={{
        task: "Create a clean HTML skeleton for a portfolio page with proper doctype, lang, charset, viewport, title, and one heading in body.",
        solutionCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body>
    <h1>Welcome to My Portfolio</h1>
  </body>
</html>`,
      }}
    />
  );
}
