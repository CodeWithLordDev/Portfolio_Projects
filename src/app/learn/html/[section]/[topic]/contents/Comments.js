// app/learn/html/comments/page.js
"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Eye, EyeOff, FileCode } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CodeBlock = ({ children, title }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-[#0f172a] rounded-lg overflow-hidden border border-white/10"
  >
    {title && (
      <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center gap-2">
        <FileCode className="w-4 h-4 text-blue-400" />
        <span className="text-sm text-white/70">{title}</span>
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-gray-300">{children}</code>
    </pre>
  </motion.div>
);

export default function CommentsPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-4xl"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <MessageSquare className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">HTML Comments</h1>
            <p className="text-white/60 mt-1">Learn how to add notes in your HTML code</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={fadeInUp} className="mb-12">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">What are HTML Comments?</h2>
          <p className="text-white/70 leading-relaxed">
            HTML comments are special tags that allow you to add notes, explanations, or temporarily hide code 
            in your HTML documents. Comments are not displayed in the browser and are only visible in the source code. 
            They&apos;re incredibly useful for documentation, debugging, and team collaboration.
          </p>
        </div>
      </motion.section>

      {/* Syntax */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-400" />
          Basic Syntax
        </h2>
        <p className="text-white/70 mb-4">
          HTML comments start with <code className="px-2 py-1 bg-white/10 rounded text-blue-300">&lt;!--</code> and 
          end with <code className="px-2 py-1 bg-white/10 rounded text-blue-300">--&gt;</code>
        </p>
        <CodeBlock title="comment-syntax.html">
{`<!-- This is a single-line comment -->

<!-- 
  This is a multi-line comment
  You can write multiple lines
  inside a comment block
-->

<p>This paragraph is visible</p>
<!-- <p>This paragraph is hidden</p> -->`}
        </CodeBlock>
      </motion.section>

      {/* Use Cases */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Common Use Cases</h2>
        <div className="grid gap-6">
          {/* Use Case 1 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded">
                <Eye className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Code Documentation</h3>
                <p className="text-white/60">Explain what sections of code do for better understanding</p>
              </div>
            </div>
            <CodeBlock>
{`<!-- Header Section -->
<header>
  <h1>My Website</h1>
  <!-- Navigation menu with main links -->
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>

<!-- Main Content Area -->
<main>
  <p>Welcome to my website!</p>
</main>`}
            </CodeBlock>
          </motion.div>

          {/* Use Case 2 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-yellow-500/10 rounded">
                <EyeOff className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Temporarily Hiding Code</h3>
                <p className="text-white/60">Disable code without deleting it during development</p>
              </div>
            </div>
            <CodeBlock>
{`<div class="container">
  <h2>Active Content</h2>
  
  <!-- Temporarily disabled for testing
  <div class="old-feature">
    <p>This feature is being redesigned</p>
  </div>
  -->
  
  <div class="new-feature">
    <p>New improved feature</p>
  </div>
</div>`}
            </CodeBlock>
          </motion.div>

          {/* Use Case 3 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded">
                <FileCode className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">3. TODO Notes & Reminders</h3>
                <p className="text-white/60">Leave notes for yourself or team members</p>
              </div>
            </div>
            <CodeBlock>
{`<!-- TODO: Add proper alt text to images -->
<img src="logo.png" alt="">

<!-- FIXME: This form validation needs improvement -->
<form>
  <input type="email" required>
</form>

<!-- NOTE: This section needs content from marketing team -->
<section class="coming-soon">
</section>`}
            </CodeBlock>
          </motion.div>
        </div>
      </motion.section>

      {/* Best Practices */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Best Practices</h2>
        <div className="space-y-4">
          <motion.div
            variants={fadeInUp}
            className="flex gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <div className="text-green-400 text-xl">✓</div>
            <div>
              <h4 className="text-white font-semibold mb-1">DO: Keep comments concise and relevant</h4>
              <p className="text-white/60 text-sm">Write clear, brief comments that add value</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <div className="text-green-400 text-xl">✓</div>
            <div>
              <h4 className="text-white font-semibold mb-1">DO: Update comments when code changes</h4>
              <p className="text-white/60 text-sm">Outdated comments are worse than no comments</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <div className="text-red-400 text-xl">✗</div>
            <div>
              <h4 className="text-white font-semibold mb-1">DON&apos;T: Leave sensitive information in comments</h4>
              <p className="text-white/60 text-sm">Comments are visible in source code - never include passwords or API keys</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <div className="text-red-400 text-xl">✗</div>
            <div>
              <h4 className="text-white font-semibold mb-1">DON&apos;T: Over-comment obvious code</h4>
              <p className="text-white/60 text-sm">Comments should explain &quot;why&quot;, not &quot;what&quot; when the code is self-explanatory</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Special Notes */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Important Notes</h2>
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 space-y-3">
          <div className="flex gap-3">
            <span className="text-yellow-400">⚠️</span>
            <p className="text-white/70">
              Comments cannot be nested. You cannot put a comment inside another comment.
            </p>
          </div>
          <CodeBlock>
{`<!-- This is valid -->

<!-- This is NOT valid 
  <!-- Nested comment --> 
-->

<!-- Correct way to comment multiple sections:
<div>Section 1</div>
-->
<!-- 
<div>Section 2</div>
-->`}
          </CodeBlock>
        </div>
      </motion.section>

      {/* Interactive Example */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Complete Example</h2>
        <CodeBlock title="example.html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Webpage</title>
</head>
<body>
  <!-- 
    ================================
    HEADER SECTION
    ================================
  -->
  <header>
    <h1>Welcome to My Site</h1>
    <!-- TODO: Add logo image here -->
  </header>

  <!-- Main content container -->
  <main>
    <article>
      <h2>Blog Post Title</h2>
      <p>This is the content of my blog post.</p>
      
      <!-- Commented out old content
      <p>Old paragraph that we're replacing</p>
      -->
    </article>
  </main>

  <!-- 
    Footer section
    Last updated: 2024
  -->
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`}
        </CodeBlock>
      </motion.section>

      {/* Key Takeaways */}
      <motion.section variants={fadeInUp}>
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Key Takeaways</h2>
          <ul className="space-y-2 text-white/70">
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              Comments are written as <code className="px-2 py-1 bg-white/10 rounded text-blue-300">&lt;!-- comment --&gt;</code>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              They are not displayed in the browser, only visible in source code
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              Use them for documentation, debugging, and temporarily hiding code
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              Never include sensitive information in comments
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              Keep comments up-to-date and relevant to the code
            </li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
}