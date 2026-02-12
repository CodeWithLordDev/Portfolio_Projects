"use client";

import BasicTagLesson from "./BasicTagLesson";

export default function PreTagContent() {
  return (
    <BasicTagLesson
      title="Pre Tag"
      description="The pre tag preserves spaces and line breaks exactly as written in the source code."
      tagInfo={{
        type: "Preformatted Text",
        closingRule: "Requires opening and closing tags",
        primaryUse: "Preserve whitespace",
      }}
      syntaxCode={`<pre>
Line 1
    Line 2 with spaces
Line 3
</pre>`}
      exampleCode={`<pre>
Roses are red,
  Violets are blue,
HTML is simple,
  And powerful too.
</pre>`}
      outputPreview={
        <pre className="font-mono text-sm whitespace-pre-wrap">
{`Roses are red,
  Violets are blue,
HTML is simple,
  And powerful too.`}
        </pre>
      }
      useCases={[
        "Display code snippets with indentation.",
        "Show console output or fixed-width text blocks.",
        "Render poems or ASCII-style formatted text.",
      ]}
      attributeGuide={[
        { name: "class", purpose: "Apply syntax highlighting or custom code styles." },
        { name: "aria-label", purpose: "Provide context for screen readers when content is technical." },
      ]}
      commonMistakes={[
        "Using pre for ordinary paragraphs, causing poor readability.",
        "Forgetting overflow handling on long code lines.",
        "Not combining with semantic code tag for code examples.",
      ]}
      accessibilityNotes={[
        "Wrap code snippets as <pre><code>...</code></pre> for better semantics.",
        "Ensure horizontal scrolling is possible on small screens.",
      ]}
      tips={[
        "Use <pre> when formatting and indentation must be preserved.",
        "Combine <pre> with <code> for programming snippets.",
        "Avoid using <pre> for normal paragraphs.",
      ]}
      practice={{
        task: "Create a code example block that preserves indentation for a small HTML snippet.",
        solutionCode: `<pre><code>
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
</code></pre>`,
      }}
    />
  );
}
