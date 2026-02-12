"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function ImageTagContent() {
  return (
    <BasicTagLesson
      title="Image Tag"
      description="The image tag embeds images in a page. It uses src for file path and alt for accessible fallback text."
      tagInfo={{
        type: "Embedded Media",
        closingRule: "Void element (no closing tag)",
        primaryUse: "Display images",
      }}
      syntaxCode={`<img src="image.jpg" alt="Description" />`}
      exampleCode={`<img
  src="/Assets/Images/CodewithLord1.png"
  alt="CodewithLord logo"
  width="180"
/>

<img
  src="https://picsum.photos/300/180"
  alt="Random placeholder"
/>`}
      outputPreview={
        <div className="space-y-3">
          <img
            src="https://picsum.photos/300/180"
            alt="Random placeholder"
            className="rounded-md border border-gray-300"
          />
          <p className="text-sm text-gray-700">
            Example preview image rendered with the <code>img</code> tag.
          </p>
        </div>
      }
      useCases={[
        "Display product photos, avatars, logos, and banners.",
        "Provide visual context for tutorials and documentation.",
        "Use responsive images for different screen sizes.",
      ]}
      attributeGuide={[
        { name: "src", purpose: "Path or URL of the image resource." },
        { name: "alt", purpose: "Text alternative for accessibility and fallback." },
        { name: "width / height", purpose: "Reserve layout space to reduce cumulative layout shift." },
        { name: "loading", purpose: "Use lazy to defer off-screen images." },
      ]}
      commonMistakes={[
        "Leaving alt empty for meaningful images.",
        "Using huge raw files that slow down page load.",
        "Setting only width or height and distorting aspect ratio.",
      ]}
      accessibilityNotes={[
        "Use descriptive alt text that conveys image meaning.",
        "Use alt=\"\" for purely decorative images.",
      ]}
      tips={[
        "Always provide useful alt text for accessibility.",
        "Use CSS for responsive image sizing (max-width: 100%).",
        "Prefer optimized image formats and dimensions for performance.",
      ]}
      practice={{
        task: "Add a profile image with meaningful alt text, fixed dimensions, and lazy loading.",
        solutionCode: `<img
  src="/images/profile.jpg"
  alt="Rahul smiling in front of a laptop"
  width="240"
  height="240"
  loading="lazy"
/>`,
      }}
    />
  );
}
