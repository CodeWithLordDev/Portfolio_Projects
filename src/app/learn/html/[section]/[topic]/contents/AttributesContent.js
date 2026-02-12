"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AttributesContent() {
  const [mounted, setMounted] = useState(false);
  const [activeAttribute, setActiveAttribute] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Attributes', icon: '🌐', color: 'from-purple-500 to-indigo-600' },
    { id: 'global', name: 'Global', icon: '🌍', color: 'from-blue-500 to-cyan-600' },
    { id: 'link', name: 'Link & Media', icon: '🔗', color: 'from-green-500 to-emerald-600' },
    { id: 'form', name: 'Form', icon: '📝', color: 'from-orange-500 to-red-600' },
    { id: 'meta', name: 'Metadata', icon: '📋', color: 'from-pink-500 to-rose-600' }
  ];

  const attributes = [
    // Global Attributes
    {
      name: 'id',
      category: 'global',
      description: 'Unique identifier for an element',
      syntax: 'id="unique-name"',
      usedIn: 'Any element',
      example: '<div id="header">Content</div>',
      rules: ['Must be unique on the page', 'No spaces allowed', 'Case-sensitive'],
      practical: 'Used for CSS styling, JavaScript targeting, and anchor links'
    },
    {
      name: 'class',
      category: 'global',
      description: 'One or more class names for styling',
      syntax: 'class="class1 class2"',
      usedIn: 'Any element',
      example: '<p class="highlight important">Text</p>',
      rules: ['Can be used on multiple elements', 'Multiple classes separated by spaces', 'Reusable'],
      practical: 'Primary way to apply CSS styles to elements'
    },
    {
      name: 'style',
      category: 'global',
      description: 'Inline CSS styles',
      syntax: 'style="property: value;"',
      usedIn: 'Any element',
      example: '<p style="color: red; font-size: 20px;">Text</p>',
      rules: ['CSS properties separated by semicolons', 'Overrides external CSS', 'Not recommended for production'],
      practical: 'Quick styling for testing, but external CSS is preferred'
    },
    {
      name: 'title',
      category: 'global',
      description: 'Tooltip text on hover',
      syntax: 'title="Tooltip text"',
      usedIn: 'Any element',
      example: '<button title="Click to submit">Submit</button>',
      rules: ['Shows on hover', 'Plain text only', 'Accessibility consideration'],
      practical: 'Provides additional information to users on hover'
    },
    {
      name: 'data-*',
      category: 'global',
      description: 'Custom data attributes',
      syntax: 'data-name="value"',
      usedIn: 'Any element',
      example: '<div data-user-id="123" data-role="admin">User</div>',
      rules: ['Must start with "data-"', 'Can store custom information', 'Accessible via JavaScript'],
      practical: 'Store custom data for JavaScript without affecting HTML validity'
    },
    // Link & Media Attributes
    {
      name: 'href',
      category: 'link',
      description: 'URL destination for links',
      syntax: 'href="url"',
      usedIn: '<a>, <link>',
      example: '<a href="https://example.com">Visit Site</a>',
      rules: ['Can be absolute or relative URL', 'Can link to page sections with #', 'Required for links to work'],
      practical: 'Defines where a link goes when clicked'
    },
    {
      name: 'src',
      category: 'link',
      description: 'Source URL for embedded content',
      syntax: 'src="url"',
      usedIn: '<img>, <script>, <iframe>, <video>, <audio>',
      example: '<img src="image.jpg" alt="Description">',
      rules: ['Can be absolute or relative path', 'Required for images and scripts', 'Points to file location'],
      practical: 'Specifies the file to load for images, videos, scripts, etc.'
    },
    {
      name: 'alt',
      category: 'link',
      description: 'Alternative text for images',
      syntax: 'alt="description"',
      usedIn: '<img>',
      example: '<img src="logo.png" alt="Company Logo">',
      rules: ['Required for accessibility', 'Shown if image fails to load', 'Describe the image content'],
      practical: 'Essential for screen readers and SEO'
    },
    {
      name: 'target',
      category: 'link',
      description: 'Where to open the linked document',
      syntax: 'target="_blank | _self | _parent | _top"',
      usedIn: '<a>',
      example: '<a href="page.html" target="_blank">Open in new tab</a>',
      rules: ['_blank opens in new tab', '_self opens in same frame (default)', 'Use with security attributes'],
      practical: 'Controls link behavior, commonly used for external links'
    },
    {
      name: 'width & height',
      category: 'link',
      description: 'Dimensions of media elements',
      syntax: 'width="500" height="300"',
      usedIn: '<img>, <video>, <iframe>',
      example: '<img src="photo.jpg" width="400" height="300" alt="Photo">',
      rules: ['Can be in pixels or percentage', 'Helps prevent layout shift', 'Maintains aspect ratio'],
      practical: 'Improves page load performance and user experience'
    },
    // Form Attributes
    {
      name: 'type',
      category: 'form',
      description: 'Type of input field',
      syntax: 'type="text | email | password | number | ..."',
      usedIn: '<input>, <button>',
      example: '<input type="email" placeholder="Enter email">',
      rules: ['Many types available', 'Determines input behavior', 'Enables mobile keyboards'],
      practical: 'Controls input validation and mobile keyboard type'
    },
    {
      name: 'placeholder',
      category: 'form',
      description: 'Hint text in input fields',
      syntax: 'placeholder="Hint text"',
      usedIn: '<input>, <textarea>',
      example: '<input type="text" placeholder="Enter your name">',
      rules: ['Disappears when user types', 'Should not replace labels', 'Helpful hint only'],
      practical: 'Provides example or format guidance to users'
    },
    {
      name: 'value',
      category: 'form',
      description: 'Default or current value',
      syntax: 'value="default value"',
      usedIn: '<input>, <button>, <option>',
      example: '<input type="text" value="John Doe">',
      rules: ['Sets initial value', 'Can be changed by user', 'Submitted with form'],
      practical: 'Pre-fills form fields or sets button values'
    },
    {
      name: 'required',
      category: 'form',
      description: 'Field must be filled before submit',
      syntax: 'required',
      usedIn: '<input>, <select>, <textarea>',
      example: '<input type="email" required>',
      rules: ['Boolean attribute (no value needed)', 'Prevents form submission if empty', 'Shows browser validation'],
      practical: 'Enforces mandatory fields in forms'
    },
    {
      name: 'disabled',
      category: 'form',
      description: 'Disables the element',
      syntax: 'disabled',
      usedIn: '<input>, <button>, <select>, <textarea>',
      example: '<button disabled>Cannot Click</button>',
      rules: ['Boolean attribute', 'Element cannot be interacted with', 'Not submitted with form'],
      practical: 'Prevents user interaction with form elements'
    },
    {
      name: 'name',
      category: 'form',
      description: 'Name for form data',
      syntax: 'name="field-name"',
      usedIn: '<input>, <select>, <textarea>',
      example: '<input type="text" name="username">',
      rules: ['Used as key when submitting form', 'Required for form submission', 'Groups radio buttons'],
      practical: 'Identifies form data on server side'
    },
    // Metadata Attributes
    {
      name: 'charset',
      category: 'meta',
      description: 'Character encoding',
      syntax: 'charset="UTF-8"',
      usedIn: '<meta>',
      example: '<meta charset="UTF-8">',
      rules: ['UTF-8 is standard', 'Should be in <head>', 'Affects text rendering'],
      practical: 'Ensures proper display of special characters'
    },
    {
      name: 'content',
      category: 'meta',
      description: 'Value for meta tags',
      syntax: 'content="value"',
      usedIn: '<meta>',
      example: '<meta name="description" content="Page description">',
      rules: ['Works with name or http-equiv', 'Important for SEO', 'Defines metadata value'],
      practical: 'Sets description, keywords, viewport settings, etc.'
    },
    {
      name: 'rel',
      category: 'meta',
      description: 'Relationship to linked resource',
      syntax: 'rel="stylesheet | icon | ..."',
      usedIn: '<link>, <a>',
      example: '<link rel="stylesheet" href="style.css">',
      rules: ['Defines relationship type', 'Required for <link>', 'Multiple values possible'],
      practical: 'Tells browser how to use the linked resource'
    },
    {
      name: 'lang',
      category: 'meta',
      description: 'Language of element content',
      syntax: 'lang="en"',
      usedIn: '<html>, any element',
      example: '<html lang="en">',
      rules: ['ISO language codes', 'Helps screen readers', 'Important for SEO'],
      practical: 'Improves accessibility and search engine understanding'
    }
  ];

  const filteredAttributes = selectedCategory === 'all' 
    ? attributes 
    : attributes.filter(attr => attr.category === selectedCategory);

  return (
    <div className="w-full space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          ⚙️ <span className="text-transparent">HTML Attributes</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Attributes provide additional information about HTML elements and control their behavior.
        </p>
      </motion.section>

      {/* What are Attributes */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          What are Attributes? 🤔
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Attributes are special words inside the opening tag that control the element&apos;s behavior or provide additional information.
          </p>

          <div className="bg-black/40 rounded-lg p-6 overflow-x-auto">
            <code className="text-lg md:text-xl whitespace-nowrap">
              <span className="text-red-400">&lt;</span>
              <span className="text-blue-400">a</span>
              <span className="text-green-400"> href</span>
              <span className="text-yellow-400">=</span>
              <span className="text-orange-400">&quot;https://example.com&quot;</span>
              <span className="text-purple-400"> target</span>
              <span className="text-yellow-400">=</span>
              <span className="text-orange-400">&quot;_blank&quot;</span>
              <span className="text-red-400">&gt;</span>
              <span className="text-gray-300">Link</span>
              <span className="text-red-400">&lt;/a&gt;</span>
            </code>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🏷️</div>
              <h4 className="text-green-400 font-semibold mb-2">Attribute Name</h4>
              <code className="text-green-400 text-sm">href</code>
              <p className="text-gray-400 text-xs mt-2">What you&apos;re setting</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🟰</div>
              <h4 className="text-yellow-400 font-semibold mb-2">Equals Sign</h4>
              <code className="text-yellow-400 text-sm">=</code>
              <p className="text-gray-400 text-xs mt-2">Connects name to value</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="text-orange-400 font-semibold mb-2">Attribute Value</h4>
              <code className="text-orange-400 text-sm">&quot;value&quot;</code>
              <p className="text-gray-400 text-xs mt-2">The setting itself</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Attribute Syntax Rules */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Syntax Rules 📏
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2 text-lg">
              ✅ Correct Syntax
            </h3>
            <div className="space-y-3">
              <div className="bg-black/40 rounded p-3">
                <code className="text-green-400 text-sm">class=&quot;my-class&quot;</code>
                <p className="text-gray-400 text-xs mt-1">Double quotes</p>
              </div>
              <div className="bg-black/40 rounded p-3">
                <code className="text-green-400 text-sm">class=&apos;my-class&apos;</code>
                <p className="text-gray-400 text-xs mt-1">Single quotes (also valid)</p>
              </div>
              <div className="bg-black/40 rounded p-3">
                <code className="text-green-400 text-sm">required</code>
                <p className="text-gray-400 text-xs mt-1">Boolean attribute (no value)</p>
              </div>
              <div className="bg-black/40 rounded p-3">
                <code className="text-green-400 text-sm">data-id=&quot;123&quot;</code>
                <p className="text-gray-400 text-xs mt-1">Custom data attribute</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2 text-lg">
              ❌ Incorrect Syntax
            </h3>
            <div className="space-y-3">
              <div className="bg-black/40 rounded p-3">
                <code className="text-red-400 text-sm">class=my-class</code>
                <p className="text-gray-400 text-xs mt-1">Missing quotes</p>
              </div>
              <div className="bg-black/40 rounded p-3">
                <code className="text-red-400 text-sm">class = &quot;my-class&quot;</code>
                <p className="text-gray-400 text-xs mt-1">Spaces around =</p>
              </div>
              <div className="bg-black/40 rounded p-3">
                <code className="text-red-400 text-sm">Class=&quot;my-class&quot;</code>
                <p className="text-gray-400 text-xs mt-1">Uppercase attribute name</p>
              </div>
              <div className="bg-black/40 rounded p-3">
                <code className="text-red-400 text-sm">id=&quot;same&quot; id=&quot;same&quot;</code>
                <p className="text-gray-400 text-xs mt-1">Duplicate attributes</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Attributes Categories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Common Attributes 📚
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
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
                ({category.id === 'all' ? attributes.length : attributes.filter(a => a.category === category.id).length})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Attributes List */}
        <div className="space-y-4">
          {filteredAttributes.map((attr, idx) => (
            <motion.div
              key={attr.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveAttribute(activeAttribute === attr.name ? null : attr.name)}
              className={`bg-white/5 backdrop-blur-sm border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                activeAttribute === attr.name
                  ? 'border-white/30 shadow-lg bg-white/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/8'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <code className="text-2xl font-bold text-yellow-400">{attr.name}</code>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      attr.category === 'global' ? 'bg-blue-500/20 text-blue-400' :
                      attr.category === 'link' ? 'bg-green-500/20 text-green-400' :
                      attr.category === 'form' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-pink-500/20 text-pink-400'
                    }`}>
                      {attr.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{attr.description}</p>
                  <code className="text-purple-400 text-sm bg-white/5 px-3 py-1 rounded inline-block">
                    {attr.syntax}
                  </code>
                  <p className="text-gray-500 text-sm mt-2">Used in: <span className="text-cyan-400">{attr.usedIn}</span></p>
                </div>
                <span className="text-2xl ml-4">
                  {activeAttribute === attr.name ? '🔽' : '▶️'}
                </span>
              </div>

              {activeAttribute === attr.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/10 space-y-4"
                >
                  {/* Example */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span>💡</span> Example:
                    </h4>
                    <div className="bg-black/40 rounded-lg p-4">
                      <pre className="text-sm text-green-400 overflow-x-auto">{attr.example}</pre>
                    </div>
                  </div>

                  {/* Rules */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span>📋</span> Rules:
                    </h4>
                    <ul className="space-y-2">
                      {attr.rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Use */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <span>🎯</span> Practical Use:
                    </h4>
                    <p className="text-gray-300 text-sm">{attr.practical}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Boolean Attributes */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Boolean Attributes ⚡
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Boolean attributes don&apos;t need a value. Their presence means &quot;true&quot;, their absence means &quot;false&quot;.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { attr: 'required', desc: 'Field is mandatory', example: '<input required>' },
              { attr: 'disabled', desc: 'Element is disabled', example: '<button disabled>' },
              { attr: 'checked', desc: 'Checkbox is checked', example: '<input type="checkbox" checked>' },
              { attr: 'readonly', desc: 'Field is read-only', example: '<input readonly>' },
              { attr: 'selected', desc: 'Option is selected', example: '<option selected>' },
              { attr: 'multiple', desc: 'Multiple selections allowed', example: '<select multiple>' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4"
              >
                <code className="text-blue-400 font-bold text-lg">{item.attr}</code>
                <p className="text-gray-300 text-sm my-2">{item.desc}</p>
                <div className="bg-black/40 rounded p-2">
                  <code className="text-green-400 text-xs">{item.example}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Best Practices 💡
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Always use lowercase',
              desc: 'Attribute names should be lowercase for consistency',
              icon: '🔤',
              color: 'blue'
            },
            {
              title: 'Quote attribute values',
              desc: 'Always use quotes around values, even for single words',
              icon: '""',
              color: 'green'
            },
            {
              title: 'Use semantic attributes',
              desc: 'Use alt for images, aria-* for accessibility',
              icon: '♿',
              color: 'purple'
            },
            {
              title: 'Avoid inline styles',
              desc: 'Prefer external CSS over style attribute',
              icon: '🎨',
              color: 'orange'
            },
            {
              title: 'Unique IDs',
              desc: 'Each id must be unique on the page',
              icon: '🆔',
              color: 'pink'
            },
            {
              title: 'Meaningful names',
              desc: 'Use descriptive class and id names',
              icon: '📝',
              color: 'cyan'
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
                  <h4 className={`text-${item.color}-400 font-semibold mb-1`}>{item.title}</h4>
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
        className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
      >
        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          🎯 Key Takeaways
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 leading-relaxed">
          <li>Attributes provide extra information about elements</li>
          <li>Format: name=&quot;value&quot; inside opening tag</li>
          <li>Global attributes work on any element (id, class, style, etc.)</li>
          <li>Some attributes are specific to certain elements</li>
          <li>Boolean attributes don&apos;t need values (required, disabled, etc.)</li>
          <li>Always use quotes and lowercase for attribute names</li>
          <li>Custom data-* attributes store custom information</li>
        </ul>
      </motion.section>
    </div>
  );
}