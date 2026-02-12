"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ElementsContent() {
  const [mounted, setMounted] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const elementTypes = [
    { id: 'all', name: 'All Elements', icon: '🌍', color: 'from-purple-500 to-indigo-600' },
    { id: 'block', name: 'Block Level', icon: '📦', color: 'from-blue-500 to-cyan-600' },
    { id: 'inline', name: 'Inline', icon: '📝', color: 'from-green-500 to-emerald-600' },
    { id: 'empty', name: 'Empty/Void', icon: '⚡', color: 'from-orange-500 to-red-600' }
  ];

  const elements = [
    // Block Level Elements
    {
      name: 'Paragraph Element',
      syntax: '<p>Content here</p>',
      type: 'block',
      parts: {
        opening: '<p>',
        content: 'Content here',
        closing: '</p>'
      },
      description: 'A complete paragraph element with opening tag, content, and closing tag',
      behavior: 'Takes full width, starts on new line',
      examples: [
        '<p>This is a paragraph.</p>',
        '<p>Another paragraph with more text.</p>'
      ]
    },
    {
      name: 'Heading Element',
      syntax: '<h1>Heading Text</h1>',
      type: 'block',
      parts: {
        opening: '<h1>',
        content: 'Heading Text',
        closing: '</h1>'
      },
      description: 'Heading element for page titles and sections',
      behavior: 'Takes full width, larger text, bold by default',
      examples: [
        '<h1>Main Title</h1>',
        '<h2>Subtitle</h2>',
        '<h3>Section Heading</h3>'
      ]
    },
    {
      name: 'Div Element',
      syntax: '<div>Content</div>',
      type: 'block',
      parts: {
        opening: '<div>',
        content: 'Content',
        closing: '</div>'
      },
      description: 'Generic container for grouping elements',
      behavior: 'Takes full width, used for layout and grouping',
      examples: [
        '<div>\n  <h1>Title</h1>\n  <p>Text</p>\n</div>',
        '<div class="container">Content</div>'
      ]
    },
    {
      name: 'List Element',
      syntax: '<ul><li>Item</li></ul>',
      type: 'block',
      parts: {
        opening: '<ul>',
        content: '<li>Item</li>',
        closing: '</ul>'
      },
      description: 'Unordered list containing list items',
      behavior: 'Takes full width, displays bullet points',
      examples: [
        '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>',
        '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>'
      ]
    },
    // Inline Elements
    {
      name: 'Link Element',
      syntax: '<a href="url">Link Text</a>',
      type: 'inline',
      parts: {
        opening: '<a href="url">',
        content: 'Link Text',
        closing: '</a>'
      },
      description: 'Hyperlink element with href attribute',
      behavior: 'Flows with text, only takes needed width',
      examples: [
        '<a href="https://example.com">Visit Site</a>',
        '<a href="#section">Jump to Section</a>'
      ]
    },
    {
      name: 'Strong Element',
      syntax: '<strong>Important</strong>',
      type: 'inline',
      parts: {
        opening: '<strong>',
        content: 'Important',
        closing: '</strong>'
      },
      description: 'Bold text with semantic importance',
      behavior: 'Flows inline with text, bold styling',
      examples: [
        '<strong>Important notice</strong>',
        'This is <strong>very important</strong> text.'
      ]
    },
    {
      name: 'Emphasis Element',
      syntax: '<em>Emphasized</em>',
      type: 'inline',
      parts: {
        opening: '<em>',
        content: 'Emphasized',
        closing: '</em>'
      },
      description: 'Italic text with semantic emphasis',
      behavior: 'Flows inline with text, italic styling',
      examples: [
        '<em>Emphasized text</em>',
        'The word <em>really</em> stands out.'
      ]
    },
    {
      name: 'Span Element',
      syntax: '<span>Text</span>',
      type: 'inline',
      parts: {
        opening: '<span>',
        content: 'Text',
        closing: '</span>'
      },
      description: 'Generic inline container for styling',
      behavior: 'Flows inline, used for styling portions of text',
      examples: [
        '<span style="color: red;">Red text</span>',
        'Price: <span class="price">$99</span>'
      ]
    },
    // Empty/Void Elements
    {
      name: 'Image Element',
      syntax: '<img src="image.jpg" alt="Description">',
      type: 'empty',
      parts: {
        opening: '<img src="..." alt="...">',
        content: 'No content',
        closing: 'Self-closing'
      },
      description: 'Embeds an image, no closing tag needed',
      behavior: 'Inline by default, displays image',
      examples: [
        '<img src="photo.jpg" alt="Photo">',
        '<img src="logo.png" alt="Logo" width="200">'
      ]
    },
    {
      name: 'Line Break Element',
      syntax: '<br>',
      type: 'empty',
      parts: {
        opening: '<br>',
        content: 'No content',
        closing: 'Self-closing'
      },
      description: 'Creates a line break in text',
      behavior: 'Forces text to next line',
      examples: [
        'Line 1<br>Line 2',
        'Address Line 1<br>City, State<br>ZIP'
      ]
    },
    {
      name: 'Input Element',
      syntax: '<input type="text">',
      type: 'empty',
      parts: {
        opening: '<input type="...">',
        content: 'No content',
        closing: 'Self-closing'
      },
      description: 'Creates an input field for user data',
      behavior: 'Inline, accepts user input',
      examples: [
        '<input type="text" placeholder="Name">',
        '<input type="email" required>',
        '<input type="checkbox">'
      ]
    },
    {
      name: 'Horizontal Rule Element',
      syntax: '<hr>',
      type: 'empty',
      parts: {
        opening: '<hr>',
        content: 'No content',
        closing: 'Self-closing'
      },
      description: 'Creates a horizontal line divider',
      behavior: 'Block level, creates visual separation',
      examples: [
        '<h1>Title</h1>\n<hr>\n<p>Content</p>',
        'Section 1<hr>Section 2'
      ]
    }
  ];

  const filteredElements = selectedType === 'all' 
    ? elements 
    : elements.filter(el => el.type === selectedType);

  return (
    <div className="w-full space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          🧩 <span className="text-transparent"> HTML Elements</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Understanding what HTML elements are and how they differ from tags.
        </p>
      </motion.section>

      {/* Tags vs Elements */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Tags vs Elements 🆚
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Many people use &quot;tags&quot; and &quot;elements&quot; interchangeably, but there&apos;s an important difference!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏷️</span>
                <h3 className="text-xl font-bold text-orange-400">HTML Tag</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Just the opening or closing marker enclosed in angle brackets.
              </p>
              <div className="bg-black/40 rounded-lg p-4">
                <code className="text-green-400 block mb-2">&lt;p&gt;</code>
                <code className="text-green-400 block">&lt;/p&gt;</code>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                These are individual tags
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🧩</span>
                <h3 className="text-xl font-bold text-blue-400">HTML Element</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The complete package: opening tag + content + closing tag.
              </p>
              <div className="bg-black/40 rounded-lg p-4">
                <code className="text-green-400">
                  &lt;p&gt;Hello World&lt;/p&gt;
                </code>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                This is a complete element
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Element Anatomy */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Anatomy of an Element 🔬
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="bg-black/40 rounded-lg p-6 mb-8 overflow-x-auto">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-blue-400 text-2xl font-mono">&lt;h1&gt;</span>
              <span className="text-green-400 text-2xl font-mono">Welcome to My Site</span>
              <span className="text-blue-400 text-2xl font-mono">&lt;/h1&gt;</span>
            </div>
            <div className="flex items-center justify-center gap-8 mt-6 text-sm flex-wrap">
              <div className="text-center">
                <div className="text-blue-400 font-semibold">↑</div>
                <div className="text-gray-400">Opening Tag</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-semibold">↑</div>
                <div className="text-gray-400">Content</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">↑</div>
                <div className="text-gray-400">Closing Tag</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <h4 className="text-blue-400 font-semibold mb-2">Opening Tag</h4>
              <p className="text-gray-300 text-sm">Starts the element</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <h4 className="text-green-400 font-semibold mb-2">Content</h4>
              <p className="text-gray-300 text-sm">The actual content</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <h4 className="text-purple-400 font-semibold mb-2">Closing Tag</h4>
              <p className="text-gray-300 text-sm">Ends the element</p>
            </div>
          </div>

          <div className="mt-6 p-5 bg-purple-500/10 border border-purple-500/30 rounded-lg">
            <p className="text-purple-400 font-semibold mb-2">💡 Together they form:</p>
            <p className="text-gray-300">A complete <strong className="text-white">HTML Element</strong> that the browser can understand and render.</p>
          </div>
        </div>
      </motion.section>

      {/* Element Types */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Types of Elements 📋
        </h2>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-3">
          {elementTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                selectedType === type.id
                  ? `bg-gradient-to-r ${type.color} text-white border-white/30 shadow-lg`
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
              }`}
            >
              <span className="mr-2">{type.icon}</span>
              {type.name}
            </motion.button>
          ))}
        </div>

        {/* Elements List */}
        <div className="space-y-4">
          {filteredElements.map((element, idx) => (
            <motion.div
              key={element.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveElement(activeElement === element.name ? null : element.name)}
              className={`bg-white/5 backdrop-blur-sm border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                activeElement === element.name
                  ? 'border-white/30 shadow-lg bg-white/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/8'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{element.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      element.type === 'block' ? 'bg-blue-500/20 text-blue-400' :
                      element.type === 'inline' ? 'bg-green-500/20 text-green-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {element.type.toUpperCase()}
                    </span>
                  </div>
                  <code className="text-purple-400 text-sm md:text-base block mb-2">
                    {element.syntax}
                  </code>
                  <p className="text-gray-400 text-sm">{element.description}</p>
                </div>
                <span className="text-2xl ml-4">
                  {activeElement === element.name ? '🔽' : '▶️'}
                </span>
              </div>

              {activeElement === element.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/10 space-y-4"
                >
                  {/* Element Parts */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Element Parts:</h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                        <p className="text-blue-400 text-xs font-semibold mb-1">OPENING TAG</p>
                        <code className="text-green-400 text-sm">{element.parts.opening}</code>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-green-400 text-xs font-semibold mb-1">CONTENT</p>
                        <code className="text-yellow-400 text-sm">{element.parts.content}</code>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                        <p className="text-purple-400 text-xs font-semibold mb-1">CLOSING TAG</p>
                        <code className="text-green-400 text-sm">{element.parts.closing}</code>
                      </div>
                    </div>
                  </div>

                  {/* Behavior */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">
                      <span className="text-cyan-400 font-semibold">Behavior:</span> {element.behavior}
                    </p>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Examples:</h4>
                    <div className="space-y-2">
                      {element.examples.map((example, i) => (
                        <div key={i} className="bg-black/40 rounded-lg p-3">
                          <pre className="text-sm text-green-400 overflow-x-auto">{example}</pre>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Nested Elements */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Nested Elements 🪆
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Elements can contain other elements. This is called <strong className="text-purple-400">nesting</strong>.
          </p>

          <div className="bg-black/40 rounded-lg p-6">
            <pre className="text-sm text-green-400 overflow-x-auto">
{`<div>
  <h1>Main Title</h1>
  <p>This paragraph is <strong>nested inside</strong> a div.</p>
  <ul>
    <li>List items are nested in ul</li>
    <li>Each li is also an element</li>
  </ul>
</div>`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
              <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                ✅ Correct Nesting
              </h4>
              <code className="text-green-400 text-sm block bg-black/40 p-3 rounded">
                &lt;p&gt;&lt;strong&gt;Bold&lt;/strong&gt;&lt;/p&gt;
              </code>
              <p className="text-gray-400 text-xs mt-2">Tags close in reverse order</p>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
              <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                ❌ Incorrect Nesting
              </h4>
              <code className="text-red-400 text-sm block bg-black/40 p-3 rounded">
                &lt;p&gt;&lt;strong&gt;Bold&lt;/p&gt;&lt;/strong&gt;
              </code>
              <p className="text-gray-400 text-xs mt-2">Tags overlap incorrectly</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Differences Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Quick Comparison 📊
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-6">
              <h3 className="text-2xl mb-4 text-orange-400 font-bold">🏷️ Tag</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Just the marker: <code className="text-purple-400">&lt;p&gt;</code> or <code className="text-purple-400">&lt;/p&gt;</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Individual piece of syntax</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Cannot work alone (usually)</span>
                </li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-4 text-blue-400 font-bold">🧩 Element</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Complete unit: <code className="text-purple-400">&lt;p&gt;Text&lt;/p&gt;</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Opening tag + content + closing tag</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Functional building block</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20"
      >
        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          🎯 Key Takeaways
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 leading-relaxed">
          <li>An element is the complete structure (opening tag + content + closing tag)</li>
          <li>Tags are just the markers that define elements</li>
          <li>Block-level elements take full width and start on new lines</li>
          <li>Inline elements flow with text and only take needed space</li>
          <li>Empty/void elements don&apos;t have content or closing tags</li>
          <li>Elements can be nested inside other elements</li>
          <li>Proper nesting is essential for valid HTML</li>
        </ul>
      </motion.section>
    </div>
  );
}