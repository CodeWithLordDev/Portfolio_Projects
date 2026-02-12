"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TagsContent() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tagCategories = [
    { id: 'all', name: 'All Tags', icon: '🌐', color: 'from-purple-500 to-indigo-600' },
    { id: 'text', name: 'Text', icon: '📝', color: 'from-blue-500 to-cyan-600' },
    { id: 'structure', name: 'Structure', icon: '🏗️', color: 'from-green-500 to-emerald-600' },
    { id: 'media', name: 'Media', icon: '🎨', color: 'from-pink-500 to-rose-600' },
    { id: 'interactive', name: 'Interactive', icon: '📋', color: 'from-orange-500 to-red-600' }
  ];

  const htmlTags = [
    // Text Tags
    {
      tag: '<h1> to <h6>',
      name: 'Headings',
      category: 'text',
      description: 'Define headings from largest (h1) to smallest (h6)',
      example: '<h1>Main Heading</h1>\n<h2>Subheading</h2>',
      output: 'Main Heading (large)\nSubheading (smaller)',
      color: 'blue'
    },
    {
      tag: '<p>',
      name: 'Paragraph',
      category: 'text',
      description: 'Defines a paragraph of text',
      example: '<p>This is a paragraph.</p>',
      output: 'This is a paragraph.',
      color: 'cyan'
    },
    {
      tag: '<strong>',
      name: 'Bold Text',
      category: 'text',
      description: 'Makes text bold and indicates importance',
      example: '<strong>Important text</strong>',
      output: 'Important text (bold)',
      color: 'blue'
    },
    {
      tag: '<em>',
      name: 'Italic Text',
      category: 'text',
      description: 'Makes text italic and adds emphasis',
      example: '<em>Emphasized text</em>',
      output: 'Emphasized text (italic)',
      color: 'cyan'
    },
    {
      tag: '<br>',
      name: 'Line Break',
      category: 'text',
      description: 'Creates a line break (self-closing tag)',
      example: 'Line 1<br>Line 2',
      output: 'Line 1\nLine 2',
      color: 'blue'
    },
    {
      tag: '<span>',
      name: 'Inline Container',
      category: 'text',
      description: 'Inline container for styling text',
      example: '<span style="color: red;">Red text</span>',
      output: 'Red text (colored)',
      color: 'cyan'
    },
    // Structure Tags
    {
      tag: '<div>',
      name: 'Division',
      category: 'structure',
      description: 'Block-level container for grouping elements',
      example: '<div>\n  <p>Content here</p>\n</div>',
      output: 'Container with content inside',
      color: 'green'
    },
    {
      tag: '<header>',
      name: 'Header',
      category: 'structure',
      description: 'Defines a header section',
      example: '<header>\n  <h1>Site Title</h1>\n</header>',
      output: 'Header section at top of page',
      color: 'emerald'
    },
    {
      tag: '<nav>',
      name: 'Navigation',
      category: 'structure',
      description: 'Defines navigation links',
      example: '<nav>\n  <a href="#">Home</a>\n</nav>',
      output: 'Navigation menu section',
      color: 'green'
    },
    {
      tag: '<main>',
      name: 'Main Content',
      category: 'structure',
      description: 'Defines main content area',
      example: '<main>\n  <h1>Main Content</h1>\n</main>',
      output: 'Primary content area',
      color: 'emerald'
    },
    {
      tag: '<footer>',
      name: 'Footer',
      category: 'structure',
      description: 'Defines a footer section',
      example: '<footer>\n  <p>&copy; 2024</p>\n</footer>',
      output: 'Footer section at bottom',
      color: 'green'
    },
    {
      tag: '<section>',
      name: 'Section',
      category: 'structure',
      description: 'Defines a section in a document',
      example: '<section>\n  <h2>Section Title</h2>\n</section>',
      output: 'Thematic grouping of content',
      color: 'emerald'
    },
    // Media Tags
    {
      tag: '<img>',
      name: 'Image',
      category: 'media',
      description: 'Embeds an image (self-closing)',
      example: '<img src="image.jpg" alt="Description">',
      output: '🖼️ Displays an image',
      color: 'pink'
    },
    {
      tag: '<video>',
      name: 'Video',
      category: 'media',
      description: 'Embeds a video file',
      example: '<video src="video.mp4" controls></video>',
      output: '🎥 Video player with controls',
      color: 'rose'
    },
    {
      tag: '<audio>',
      name: 'Audio',
      category: 'media',
      description: 'Embeds an audio file',
      example: '<audio src="audio.mp3" controls></audio>',
      output: '🎵 Audio player with controls',
      color: 'pink'
    },
    {
      tag: '<a>',
      name: 'Anchor/Link',
      category: 'media',
      description: 'Creates a hyperlink',
      example: '<a href="https://example.com">Click here</a>',
      output: 'Click here (clickable link)',
      color: 'rose'
    },
    // Interactive Tags
    {
      tag: '<button>',
      name: 'Button',
      category: 'interactive',
      description: 'Creates a clickable button',
      example: '<button>Click Me</button>',
      output: '🔘 Clickable button',
      color: 'orange'
    },
    {
      tag: '<input>',
      name: 'Input Field',
      category: 'interactive',
      description: 'Creates an input field (self-closing)',
      example: '<input type="text" placeholder="Enter text">',
      output: '📝 Text input box',
      color: 'red'
    },
    {
      tag: '<textarea>',
      name: 'Text Area',
      category: 'interactive',
      description: 'Creates a multi-line text input',
      example: '<textarea rows="3"></textarea>',
      output: '📄 Multi-line text box',
      color: 'orange'
    },
    {
      tag: '<select>',
      name: 'Dropdown',
      category: 'interactive',
      description: 'Creates a dropdown selection list',
      example: '<select>\n  <option>Option 1</option>\n</select>',
      output: '📋 Dropdown menu',
      color: 'red'
    },
    {
      tag: '<label>',
      name: 'Label',
      category: 'interactive',
      description: 'Defines a label for an input element',
      example: '<label for="name">Name:</label>',
      output: 'Name: (label text)',
      color: 'orange'
    }
  ];

  const filteredTags = selectedCategory === 'all' 
    ? htmlTags 
    : htmlTags.filter(tag => tag.category === selectedCategory);

  return (
    <div className="w-full space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text ">
          🏷️ <span className="text-transparent">HTML Tags</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          HTML tags are the building blocks of web pages. They define the structure and content of your website.
        </p>
      </motion.section>

      {/* What are Tags */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          What are HTML Tags? 🤔
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            HTML tags are special keywords enclosed in angle brackets <code className="text-purple-400 bg-white/10 px-2 py-1 rounded">&lt; &gt;</code>. 
            Most tags come in pairs with an opening tag and a closing tag.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-5">
              <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📖</span> Opening Tag
              </h3>
              <code className="text-green-400 text-lg block bg-black/40 p-3 rounded">
                &lt;tagname&gt;
              </code>
              <p className="text-gray-400 text-sm mt-2">Marks the beginning of an element</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-5">
              <h3 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📕</span> Closing Tag
              </h3>
              <code className="text-green-400 text-lg block bg-black/40 p-3 rounded">
                &lt;/tagname&gt;
              </code>
              <p className="text-gray-400 text-sm mt-2">Marks the end of an element</p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-5 mt-4">
            <h3 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span> Self-Closing Tags
            </h3>
            <p className="text-gray-300 mb-2">Some tags don&apos;t need a closing tag:</p>
            <code className="text-green-400 text-sm block bg-black/40 p-3 rounded">
              &lt;img src=&quot;image.jpg&quot; /&gt;<br/>
              &lt;br /&gt;<br/>
              &lt;input type=&quot;text&quot; /&gt;
            </code>
          </div>
        </div>
      </motion.section>

      {/* Tag Anatomy */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Tag Anatomy 🔍
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="bg-black/40 rounded-lg p-6 mb-6 overflow-x-auto">
            <code className="text-lg md:text-xl whitespace-nowrap">
              <span className="text-red-400">&lt;</span>
              <span className="text-blue-400">p</span>
              <span className="text-green-400"> class</span>
              <span className="text-yellow-400">=</span>
              <span className="text-orange-400">&quot;intro&quot;</span>
              <span className="text-red-400">&gt;</span>
              <span className="text-gray-300">Hello World</span>
              <span className="text-red-400">&lt;/</span>
              <span className="text-blue-400">p</span>
              <span className="text-red-400">&gt;</span>
            </code>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <div className="text-3xl mb-2">🏷️</div>
              <p className="text-blue-400 font-semibold">Tag Name</p>
              <p className="text-gray-400 text-sm mt-1">Defines element type</p>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="text-3xl mb-2">⚙️</div>
              <p className="text-green-400 font-semibold">Attribute</p>
              <p className="text-gray-400 text-sm mt-1">Adds properties</p>
            </div>
            <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
              <div className="text-3xl mb-2">💎</div>
              <p className="text-orange-400 font-semibold">Value</p>
              <p className="text-gray-400 text-sm mt-1">Attribute value</p>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <div className="text-3xl mb-2">📝</div>
              <p className="text-purple-400 font-semibold">Content</p>
              <p className="text-gray-400 text-sm mt-1">Element content</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Common HTML Tags 📚
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3">
          {tagCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white border-white/30 shadow-lg`
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-2 text-xs opacity-75">
                ({category.id === 'all' ? htmlTags.length : htmlTags.filter(t => t.category === category.id).length})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Tags Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredTags.map((tagItem, idx) => (
            <motion.div
              key={tagItem.tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveTag(activeTag === tagItem.tag ? null : tagItem.tag)}
              className={`bg-white/5 backdrop-blur-sm border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                activeTag === tagItem.tag
                  ? 'border-white/30 shadow-lg bg-white/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/8'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <code className={`text-lg font-bold text-${tagItem.color}-400`}>
                    {tagItem.tag}
                  </code>
                  <p className="text-white font-semibold mt-1">{tagItem.name}</p>
                </div>
                <span className="text-2xl">
                  {activeTag === tagItem.tag ? '🔽' : '▶️'}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-3">{tagItem.description}</p>

              {activeTag === tagItem.tag && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 pt-3 border-t border-white/10"
                >
                  {/* Code Example */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-semibold">CODE:</p>
                    <div className="bg-black/40 rounded-lg p-3 overflow-x-auto">
                      <pre className="text-sm text-green-400">{tagItem.example}</pre>
                    </div>
                  </div>

                  {/* Output */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-semibold">OUTPUT:</p>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <p className="text-gray-300">{tagItem.output}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tag Rules */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Tag Rules & Best Practices 📏
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              rule: 'Tags are case-insensitive',
              desc: 'But lowercase is recommended: <p> not <P>',
              icon: '🔤',
              color: 'blue'
            },
            {
              rule: 'Proper nesting required',
              desc: 'Close tags in reverse order: <p><strong>text</strong></p>',
              icon: '🪆',
              color: 'green'
            },
            {
              rule: 'Close all tags',
              desc: 'Every opening tag needs a closing tag (except self-closing)',
              icon: '🔒',
              color: 'purple'
            },
            {
              rule: 'Use semantic tags',
              desc: 'Use <header>, <nav>, <main> instead of just <div>',
              icon: '🎯',
              color: 'orange'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-600/10 border border-${item.color}-500/30 rounded-lg p-5`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className={`text-${item.color}-400 font-semibold mb-1`}>{item.rule}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
      >
        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          🎯 Key Takeaways
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 leading-relaxed">
          <li>Tags define the structure and meaning of content</li>
          <li>Most tags have opening and closing pairs</li>
          <li>Some tags are self-closing (img, br, input)</li>
          <li>Tags can have attributes for additional properties</li>
          <li>Always close tags in proper order (proper nesting)</li>
          <li>Use semantic tags for better accessibility and SEO</li>
        </ul>
      </motion.section>
    </div>
  );
}