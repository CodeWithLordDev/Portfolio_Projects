// app/learn/html/id-classes/page.js
"use client";

import { motion } from "framer-motion";
import { Hash, Layers, Target, Zap, BookOpen } from "lucide-react";

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
        <BookOpen className="w-4 h-4 text-blue-400" />
        <span className="text-sm text-white/70">{title}</span>
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-gray-300">{children}</code>
    </pre>
  </motion.div>
);

export default function IdClassesPage() {
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
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <Target className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">ID & Classes</h1>
            <p className="text-white/60 mt-1">Master the art of targeting and styling HTML elements</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.section variants={fadeInUp} className="mb-12">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">What are IDs and Classes?</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            IDs and Classes are HTML attributes that allow you to identify and style specific elements. 
            They&apos;re essential for CSS styling, JavaScript manipulation, and creating well-structured web pages.
          </p>
          <p className="text-white/70 leading-relaxed">
            Think of them as name tags: <span className="text-purple-400 font-semibold">IDs</span> are unique identifiers 
            (one per page), while <span className="text-pink-400 font-semibold">Classes</span> are group labels 
            (can be used multiple times).
          </p>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">ID vs Class: Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">Feature</th>
                <th className="px-6 py-3 text-left text-purple-400 font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-pink-400 font-semibold">Class</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-6 py-3 text-white/70">Syntax</td>
                <td className="px-6 py-3 text-white/90"><code className="text-purple-400">id=&quot;unique-name&quot;</code></td>
                <td className="px-6 py-3 text-white/90"><code className="text-pink-400">class=&quot;class-name&quot;</code></td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/70">CSS Selector</td>
                <td className="px-6 py-3 text-white/90"><code className="text-purple-400">#unique-name</code></td>
                <td className="px-6 py-3 text-white/90"><code className="text-pink-400">.class-name</code></td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/70">Usage</td>
                <td className="px-6 py-3 text-white/90">Once per page</td>
                <td className="px-6 py-3 text-white/90">Multiple times</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/70">Per Element</td>
                <td className="px-6 py-3 text-white/90">One ID only</td>
                <td className="px-6 py-3 text-white/90">Multiple classes</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/70">Specificity</td>
                <td className="px-6 py-3 text-white/90">Higher (more powerful)</td>
                <td className="px-6 py-3 text-white/90">Lower</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* ID Section */}
      <motion.section variants={fadeInUp} className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-500/10 rounded">
            <Hash className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white">ID Attribute</h2>
        </div>

        <div className="space-y-6">
          {/* ID Basics */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Basic Syntax</h3>
            <p className="text-white/70 mb-4">
              The ID attribute must be <span className="text-purple-400 font-semibold">unique</span> within 
              a page. Use it for elements that appear only once, like headers, main navigation, or specific sections.
            </p>
            <CodeBlock title="id-example.html">
{`<!-- HTML -->
<header id="main-header">
  <h1>My Website</h1>
</header>

<nav id="primary-nav">
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>

<section id="hero-section">
  <h2>Welcome!</h2>
</section>

<footer id="main-footer">
  <p>Copyright 2024</p>
</footer>`}
            </CodeBlock>
          </motion.div>

          {/* ID CSS Styling */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Styling with CSS</h3>
            <p className="text-white/70 mb-4">
              Use the <code className="px-2 py-1 bg-white/10 rounded text-purple-300">#</code> symbol 
              followed by the ID name to target elements in CSS.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <CodeBlock title="index.html">
{`<div id="logo">
  <h1>Brand Name</h1>
</div>

<div id="search-box">
  <input type="text">
</div>`}
              </CodeBlock>
              <CodeBlock title="style.css">
{`#logo {
  background: linear-gradient(
    to right, 
    purple, 
    pink
  );
  padding: 20px;
  text-align: center;
}

#search-box {
  border: 2px solid purple;
  border-radius: 8px;
  padding: 10px;
}`}
              </CodeBlock>
            </div>
          </motion.div>

          {/* ID JavaScript */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">JavaScript Targeting</h3>
            <p className="text-white/70 mb-4">
              IDs are perfect for JavaScript because they&apos;re unique and fast to access.
            </p>
            <CodeBlock title="script.js">
{`<!-- HTML -->
<button id="submit-btn">Click Me</button>
<div id="result"></div>

<script>
// Get element by ID
const button = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// Add event listener
button.addEventListener('click', function() {
  resultDiv.textContent = 'Button clicked!';
  resultDiv.style.color = 'green';
});
</script>`}
            </CodeBlock>
          </motion.div>

          {/* ID Anchor Links */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Anchor Links (Page Navigation)</h3>
            <p className="text-white/70 mb-4">
              IDs enable smooth scrolling to specific sections using anchor links.
            </p>
            <CodeBlock title="navigation.html">
{`<!-- Navigation with anchor links -->
<nav>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>

<!-- Sections with IDs -->
<section id="about">
  <h2>About Us</h2>
  <p>Learn more about our company...</p>
</section>

<section id="services">
  <h2>Our Services</h2>
  <p>We offer amazing services...</p>
</section>

<section id="contact">
  <h2>Contact Us</h2>
  <p>Get in touch...</p>
</section>

<!-- Clicking the links scrolls to the sections! -->`}
            </CodeBlock>
          </motion.div>
        </div>
      </motion.section>

      {/* Class Section */}
      <motion.section variants={fadeInUp} className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-pink-500/10 rounded">
            <Layers className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Class Attribute</h2>
        </div>

        <div className="space-y-6">
          {/* Class Basics */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Basic Syntax</h3>
            <p className="text-white/70 mb-4">
              Classes can be <span className="text-pink-400 font-semibold">reused multiple times</span> and 
              are perfect for styling groups of elements with similar designs.
            </p>
            <CodeBlock title="class-example.html">
{`<!-- Multiple elements can share the same class -->
<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>

<div class="card">
  <h3>Card 1</h3>
  <p>Some content here</p>
</div>

<div class="card">
  <h3>Card 2</h3>
  <p>More content here</p>
</div>`}
            </CodeBlock>
          </motion.div>

          {/* Multiple Classes */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Multiple Classes per Element</h3>
            <p className="text-white/70 mb-4">
              Elements can have multiple classes separated by spaces, allowing flexible styling combinations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <CodeBlock title="index.html">
{`<!-- Multiple classes -->
<button class="btn btn-primary">
  Save
</button>

<button class="btn btn-secondary">
  Cancel
</button>

<button class="btn btn-primary large">
  Submit
</button>

<div class="card featured shadow">
  <h3>Premium Card</h3>
</div>`}
              </CodeBlock>
              <CodeBlock title="style.css">
{`.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: purple;
  color: white;
}

.btn-secondary {
  background: gray;
  color: white;
}

.large {
  font-size: 18px;
  padding: 15px 30px;
}

.card {
  border: 1px solid #ddd;
  padding: 20px;
}

.featured {
  border-color: gold;
}

.shadow {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}`}
              </CodeBlock>
            </div>
          </motion.div>

          {/* Class JavaScript */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">JavaScript with Classes</h3>
            <p className="text-white/70 mb-4">
              Classes make it easy to select and manipulate multiple elements at once.
            </p>
            <CodeBlock title="script.js">
{`<!-- HTML -->
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
<button id="toggle-btn">Toggle Color</button>

<script>
// Get all elements with class "box"
const boxes = document.querySelectorAll('.box');
const toggleBtn = document.getElementById('toggle-btn');

// Add click event to button
toggleBtn.addEventListener('click', function() {
  // Loop through all boxes and toggle a class
  boxes.forEach(box => {
    box.classList.toggle('highlighted');
  });
});

// Add/Remove/Toggle classes
boxes[0].classList.add('new-class');
boxes[1].classList.remove('box');
boxes[2].classList.toggle('active');

// Check if element has a class
if (boxes[0].classList.contains('highlighted')) {
  console.log('Box is highlighted!');
}
</script>`}
            </CodeBlock>
          </motion.div>
        </div>
      </motion.section>

      {/* Best Practices */}
      <motion.section variants={fadeInUp} className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-500/10 rounded">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Naming Conventions & Best Practices</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* DO's */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400 mb-3">✓ DO</h3>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Use descriptive names</h4>
              <CodeBlock>
{`<!-- Good -->
<div id="user-profile">
<button class="submit-button">
<nav class="main-navigation">`}
              </CodeBlock>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Use kebab-case</h4>
              <CodeBlock>
{`<!-- Good -->
<div class="hero-section">
<button id="submit-form">
<p class="error-message">`}
              </CodeBlock>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Use classes for styling</h4>
              <CodeBlock>
{`<!-- Good - Reusable styling -->
<button class="btn btn-primary">
<button class="btn btn-danger">`}
              </CodeBlock>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Use IDs for unique elements</h4>
              <CodeBlock>
{`<!-- Good - Unique identifiers -->
<header id="site-header">
<nav id="main-nav">
<footer id="site-footer">`}
              </CodeBlock>
            </div>
          </motion.div>

          {/* DON'Ts */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400 mb-3">✗ DON&apos;T</h3>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Use generic names</h4>
              <CodeBlock>
{`<!-- Bad -->
<div id="div1">
<button class="button2">
<p class="text">`}
              </CodeBlock>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Use spaces or special characters</h4>
              <CodeBlock>
{`<!-- Bad -->
<div class="my button">
<button id="submit@form">
<p class="error!message">`}
              </CodeBlock>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Duplicate IDs</h4>
              <CodeBlock>
{`<!-- Bad - IDs must be unique! -->
<div id="content"></div>
<div id="content"></div>`}
              </CodeBlock>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Start with numbers</h4>
              <CodeBlock>
{`<!-- Bad -->
<div id="1st-section">
<button class="2-column">`}
              </CodeBlock>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Real-World Example */}
      <motion.section variants={fadeInUp} className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Complete Real-World Example</h2>
        <p className="text-white/70 mb-4">
          Here&apos;s a practical example showing how IDs and classes work together in a real webpage:
        </p>
        <div className="space-y-4">
          <CodeBlock title="index.html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Blog</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Unique header with ID -->
  <header id="site-header" class="container">
    <div id="logo" class="brand">My Blog</div>
    <nav id="main-nav">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#contact" class="nav-link">Contact</a>
    </nav>
  </header>

  <!-- Main content area -->
  <main id="main-content" class="container">
    <!-- Multiple cards using the same class -->
    <article class="card featured">
      <h2 class="card-title">Featured Post</h2>
      <p class="card-text">This is a featured blog post...</p>
      <button class="btn btn-primary">Read More</button>
    </article>

    <article class="card">
      <h2 class="card-title">Regular Post</h2>
      <p class="card-text">Another interesting post...</p>
      <button class="btn btn-secondary">Read More</button>
    </article>

    <article class="card">
      <h2 class="card-title">Another Post</h2>
      <p class="card-text">More great content...</p>
      <button class="btn btn-secondary">Read More</button>
    </article>
  </main>

  <!-- Unique footer with ID -->
  <footer id="site-footer" class="container">
    <p class="copyright">&copy; 2024 My Blog</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`}
          </CodeBlock>

          <CodeBlock title="style.css">
{`/* ID selectors - Unique elements */
#site-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
  position: sticky;
  top: 0;
}

#logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

#main-nav {
  display: flex;
  gap: 20px;
}

#main-content {
  padding: 40px 0;
  min-height: 70vh;
}

#site-footer {
  background: #1a202c;
  padding: 30px 0;
  text-align: center;
}

/* Class selectors - Reusable styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
}

.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card.featured {
  border-left: 4px solid #667eea;
  background: linear-gradient(to right, #f7f7ff, white);
}

.card-title {
  color: #2d3748;
  margin-bottom: 12px;
}

.card-text {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 16px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-secondary {
  background: #e2e8f0;
  color: #2d3748;
}

.copyright {
  color: #a0aec0;
  font-size: 14px;
}`}
          </CodeBlock>

          <CodeBlock title="script.js">
{`// Target unique elements with IDs
const header = document.getElementById('site-header');
const mainNav = document.getElementById('main-nav');

// Target multiple elements with classes
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.btn');
const navLinks = document.querySelectorAll('.nav-link');

// Add interactivity to all cards
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.3s';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Add click handlers to all buttons
buttons.forEach(button => {
  button.addEventListener('click', function() {
    alert('Button clicked!');
  });
});

// Active navigation link handling
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    this.classList.add('active');
  });
});`}
          </CodeBlock>
        </div>
      </motion.section>

      {/* Key Takeaways */}
      <motion.section variants={fadeInUp}>
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                IDs
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Must be unique on the page
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Used with # in CSS (#myId)
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Perfect for JavaScript targeting
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Enable anchor links for navigation
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Higher CSS specificity
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Classes
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-2">
                  <span className="text-pink-400">•</span>
                  Can be reused multiple times
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">•</span>
                  Used with . in CSS (.myClass)
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">•</span>
                  Elements can have multiple classes
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">•</span>
                  Ideal for styling similar elements
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">•</span>
                  More flexible and reusable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}