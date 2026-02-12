import { javascriptTopics } from "./javascriptTopics";

const sectionGuides = {
  "getting-started": {
    analogy: "Think of JavaScript as the electricity that makes your web page respond.",
    defaultWhy: "This foundation helps you run and test JavaScript correctly.",
  },
  "javascript-fundamentals": {
    analogy: "Fundamentals are your alphabet before writing full sentences in code.",
    defaultWhy: "These rules appear in almost every JavaScript file.",
  },
  "working-with-data-structures": {
    analogy: "Data structures are containers, and methods are the tools to open and organize them.",
    defaultWhy: "Strong data skills make your code shorter and easier to maintain.",
  },
  "javascript-objects": {
    analogy: "Built-in objects are ready-made toolkits from the language itself.",
    defaultWhy: "You use these APIs in calculations, formatting, and daily app logic.",
  },
  "dom-bom": {
    analogy: "DOM and BOM are the control panel for browser behavior and page updates.",
    defaultWhy: "This is how JavaScript manipulates what users see and do.",
  },
  oops: {
    analogy: "OOP is a way to organize code into reusable blueprints.",
    defaultWhy: "It helps larger codebases stay predictable and scalable.",
  },
};

const specificLessons = {
  introduction: {
    intro:
      "JavaScript adds behavior to web pages. If HTML is structure and CSS is design, JavaScript is interaction.",
    why: "Without JavaScript, buttons, forms, and dynamic UI feel static.",
    properties: ["variables", "functions", "events"],
    html: `<button id="helloBtn">Say Hello</button>\n<p id="msg"></p>`,
    js: `const btn = document.getElementById(\"helloBtn\");\nconst msg = document.getElementById(\"msg\");\n\nbtn.addEventListener(\"click\", () => {\n  msg.textContent = \"Hello from JavaScript!\";\n});`,
    challenge: "Change the button message and update text color on click.",
    terms: [{ term: "runtime", tip: "The environment where your JS code executes." }],
    diagram: "flowchart",
  },
  execution: {
    intro:
      "JavaScript can run in the browser and in Node.js. Browser JS handles UI; Node.js handles server and tools.",
    why: "Knowing execution context prevents confusion while debugging.",
    properties: ["script tag", "console.log", "Node.js"],
    html: `<h3>Open browser console</h3>`,
    js: `console.log(\"Running in browser\");\nconst now = new Date();\nconsole.log(\"Current time:\", now.toLocaleTimeString());`,
    challenge: "Log your name and current date in the console.",
  },
  "nodejs-installation": {
    intro:
      "Node.js lets you run JavaScript outside the browser. It powers tools, APIs, and build pipelines.",
    why: "Most modern JavaScript workflows depend on Node.js.",
    properties: ["node -v", "npm -v", "package.json"],
    html: `<h3>Node.js Check</h3>\n<p id="status">Use terminal: node -v</p>`,
    js: `document.getElementById(\"status\").textContent = \"Install Node.js from nodejs.org and restart terminal.\";`,
    challenge: "Install Node.js and verify both node and npm versions.",
  },
  functions: {
    intro:
      "Functions package reusable logic. Write once, call many times with different inputs.",
    why: "Functions reduce repetition and make code easier to test.",
    properties: ["function", "return", "parameters", "arguments"],
    html: `<p id=\"result\"></p>`,
    js: `function add(a, b) {\n  return a + b;\n}\n\ndocument.getElementById(\"result\").textContent = \"2 + 3 = \" + add(2, 3);`,
    challenge: "Write a function that multiplies two numbers.",
  },
  "map-filter-and-reduce": {
    intro:
      "map, filter, and reduce are common array tools for transforming data.",
    why: "They make data processing expressive and clean.",
    properties: ["map()", "filter()", "reduce()"],
    html: `<pre id=\"out\"></pre>`,
    js: `const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map((n) => n * 2);\nconst even = numbers.filter((n) => n % 2 === 0);\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\n\ndocument.getElementById(\"out\").textContent = JSON.stringify({ doubled, even, sum }, null, 2);`,
    challenge: "Create a list of odd numbers and their square values.",
  },
  "window-object": {
    intro:
      "The window object is the global browser object. It exposes dialogs, location, timers, and more.",
    why: "Many browser APIs start from window.",
    properties: ["window", "setTimeout", "location"],
    html: `<button id=\"timerBtn\">Start Timer</button>\n<p id=\"timerMsg\"></p>`,
    js: `document.getElementById(\"timerBtn\").addEventListener(\"click\", () => {\n  document.getElementById(\"timerMsg\").textContent = \"Waiting...\";\n  window.setTimeout(() => {\n    document.getElementById(\"timerMsg\").textContent = \"Timer complete\";\n  }, 800);\n});`,
    challenge: "Show a message after 2 seconds using setTimeout.",
  },
  class: {
    intro:
      "A class is a blueprint for creating objects with shared behavior.",
    why: "Classes help organize code when building larger features.",
    properties: ["class", "constructor", "method"],
    html: `<pre id=\"classOut\"></pre>`,
    js: `class User {\n  constructor(name) {\n    this.name = name;\n  }\n\n  greet() {\n    return \"Hello \" + this.name;\n  }\n}\n\nconst u = new User(\"Ava\");\ndocument.getElementById(\"classOut\").textContent = u.greet();`,
    challenge: "Create a Product class with name and price fields.",
  },
};

function snippetForSlug(topicSlug, topicTitle) {
  const titleText = topicTitle.replaceAll("\"", "\\\"");

  const map = {
    "variables-in-javascript": {
      properties: ["let", "const", "scope"],
      js: `let score = 10;\nconst max = 100;\nscore += 5;\nconsole.log({ score, max });`,
    },
    "variable-naming-rules": {
      properties: ["camelCase", "letters", "_", "$"],
      js: `const firstName = \"Lina\";\nconst _privateValue = 42;\nconst $price = 99;\nconsole.log(firstName, _privateValue, $price);`,
    },
    "var-vs-let-vs-const": {
      properties: ["hoisting", "block scope", "reassignment"],
      js: `var oldWay = \"var\";\nlet modern = \"let\";\nconst fixed = \"const\";\nmodern = \"updated\";\nconsole.log(oldWay, modern, fixed);`,
    },
    "data-types-primitives-and-objects": {
      properties: ["string", "number", "boolean", "object"],
      js: `const user = { name: \"Sam\", age: 21 };\nconst active = true;\nconst count = 3;\nconsole.log(typeof user, typeof active, typeof count);`,
    },
    "type-conversion-and-coercion": {
      properties: ["Number()", "String()", "Boolean()"],
      js: `console.log(Number(\"42\"));\nconsole.log(String(99));\nconsole.log(Boolean(\"hello\"));`,
    },
    "operators-and-expressions": {
      properties: ["+", "===", "&&", "||"],
      js: `const total = 9 + 4;\nconst isMatch = total === 13;\nconsole.log(total, isMatch);`,
    },
    "conditional-statements": {
      properties: ["if", "else", "condition"],
      js: `const age = 18;\nif (age >= 18) {\n  console.log(\"Adult\");\n} else {\n  console.log(\"Minor\");\n}`,
      diagram: "flowchart",
    },
    "if-else-ladder": {
      properties: ["if else ladder", "branching"],
      js: `const marks = 82;\nif (marks >= 90) console.log(\"A\");\nelse if (marks >= 75) console.log(\"B\");\nelse if (marks >= 60) console.log(\"C\");\nelse console.log(\"D\");`,
      diagram: "flowchart",
    },
    "ternary-operator": {
      properties: ["condition ? a : b"],
      js: `const isLoggedIn = true;\nconst label = isLoggedIn ? \"Logout\" : \"Login\";\nconsole.log(label);`,
    },
    "switch-case": {
      properties: ["switch", "case", "break"],
      js: `const day = 2;\nswitch (day) {\n  case 1:\n    console.log(\"Monday\");\n    break;\n  case 2:\n    console.log(\"Tuesday\");\n    break;\n  default:\n    console.log(\"Other day\");\n}`,
    },
    "loops-in-js": {
      properties: ["for", "break", "continue"],
      js: `for (let i = 1; i <= 5; i += 1) {\n  console.log(\"Count\", i);\n}`,
    },
    "while-loop": {
      properties: ["while", "counter", "update"],
      js: `let i = 1;\nwhile (i <= 3) {\n  console.log(\"Step\", i);\n  i += 1;\n}`,
    },
    "strings-and-string-methods": {
      properties: ["length", "slice()", "toUpperCase()"],
      js: `const text = \"javascript\";\nconsole.log(text.length);\nconsole.log(text.slice(0, 4));\nconsole.log(text.toUpperCase());`,
    },
    "template-literals": {
      properties: ["`string`", "${value}"],
      js: `const name = \"Riya\";\nconst score = 91;\nconsole.log(\`Student \${name} scored \${score}\`);`,
    },
    "arrays-and-array-methods": {
      properties: ["push()", "pop()", "includes()"],
      js: `const fruits = [\"apple\", \"banana\"];\nfruits.push(\"mango\");\nconsole.log(fruits.includes(\"banana\"), fruits);`,
    },
    "loops-with-arrays": {
      properties: ["for...of", "forEach()"],
      js: `const skills = [\"HTML\", \"CSS\", \"JS\"];\nfor (const skill of skills) {\n  console.log(skill);\n}`,
    },
    "objects-in-js": {
      properties: ["key-value", "dot notation", "bracket notation"],
      js: `const user = { name: \"Ari\", role: \"Student\" };\nconsole.log(user.name);\nuser.city = \"Delhi\";\nconsole.log(user);`,
    },
    "destructuring-arrays-and-objects": {
      properties: ["destructuring", "rest", "default values"],
      js: `const [first, second] = [10, 20, 30];\nconst { name } = { name: \"Dev\", age: 25 };\nconsole.log(first, second, name);`,
    },
    "working-with-json": {
      properties: ["JSON.parse()", "JSON.stringify()"],
      js: `const json = '{\"theme\":\"dark\"}';\nconst obj = JSON.parse(json);\nobj.layout = \"grid\";\nconsole.log(JSON.stringify(obj));`,
    },
    date: {
      properties: ["new Date()", "toLocaleDateString()"],
      js: `const now = new Date();\nconsole.log(now.toLocaleDateString());`,
    },
    math: {
      properties: ["Math.round()", "Math.max()", "Math.random()"],
      js: `console.log(Math.round(4.6));\nconsole.log(Math.max(3, 9, 1));\nconsole.log(Math.random());`,
    },
    number: {
      properties: ["toFixed()", "Number.isNaN()"],
      js: `const price = 19.987;\nconsole.log(price.toFixed(2));\nconsole.log(Number.isNaN(Number(\"abc\")));`,
    },
    boolean: {
      properties: ["true", "false", "Boolean()"],
      js: `console.log(Boolean(0));\nconsole.log(Boolean(\"hello\"));`,
    },
    "history-object": {
      properties: ["history.length", "back()", "forward()"],
      js: `console.log(\"History length:\", history.length);`,
    },
    "navigator-object": {
      properties: ["navigator.userAgent", "navigator.language"],
      js: `console.log(navigator.userAgent);\nconsole.log(navigator.language);`,
    },
    "screen-object": {
      properties: ["screen.width", "screen.height"],
      js: `console.log(screen.width, screen.height);`,
    },
    "document-object": {
      properties: ["document.title", "querySelector()"],
      js: `document.title = \"Learning JS\";\nconsole.log(document.title);`,
    },
    getelementbyid: {
      properties: ["document.getElementById()"],
      js: `const el = document.getElementById(\"demo\");\nif (el) el.textContent = \"Updated by ID\";`,
    },
    getelementsbyclassname: {
      properties: ["getElementsByClassName()"],
      js: `const items = document.getElementsByClassName(\"item\");\nconsole.log(items.length);`,
    },
    getelementsbyname: {
      properties: ["getElementsByName()"],
      js: `const fields = document.getElementsByName(\"email\");\nconsole.log(fields.length);`,
    },
    getelementsbytagname: {
      properties: ["getElementsByTagName()"],
      js: `const paragraphs = document.getElementsByTagName(\"p\");\nconsole.log(paragraphs.length);`,
    },
    innerhtml: {
      properties: ["innerHTML", "markup injection caution"],
      js: `const box = document.getElementById(\"demo\");\nif (box) box.innerHTML = \"<strong>Bold text</strong>\";`,
    },
    outerhtml: {
      properties: ["outerHTML", "replace element"],
      js: `const box = document.getElementById(\"demo\");\nif (box) box.outerHTML = \"<section id='demo'>Replaced element</section>\";`,
    },
    objects: {
      properties: ["object literal", "properties", "methods"],
      js: `const car = {\n  brand: \"Tesla\",\n  start() { return \"Started\"; },\n};\nconsole.log(car.brand, car.start());`,
    },
    constructor: {
      properties: ["constructor()", "new keyword"],
      js: `class Student {\n  constructor(name) { this.name = name; }\n}\nconsole.log(new Student(\"Ana\"));`,
    },
    "static-method": {
      properties: ["static", "class-level method"],
      js: `class Calc {\n  static add(a, b) { return a + b; }\n}\nconsole.log(Calc.add(2, 3));`,
    },
    encapsulation: {
      properties: ["private fields", "getters", "setters"],
      js: `class Account {\n  #balance = 0;\n  deposit(v) { this.#balance += v; }\n  getBalance() { return this.#balance; }\n}\nconst a = new Account();\na.deposit(100);\nconsole.log(a.getBalance());`,
    },
    inheritance: {
      properties: ["extends", "super"],
      js: `class Animal { speak(){ return \"sound\"; } }\nclass Dog extends Animal { speak(){ return \"bark\"; } }\nconsole.log(new Dog().speak());`,
    },
    polymorphism: {
      properties: ["method override", "same interface"],
      js: `class Shape { area(){ return 0; } }\nclass Square extends Shape { constructor(s){ super(); this.s = s; } area(){ return this.s * this.s; } }\nconsole.log(new Square(4).area());`,
    },
    abstraction: {
      properties: ["hide complexity", "public interface"],
      js: `function makeCoffee() {\n  function boilWater() { return \"water ready\"; }\n  return boilWater() + \" + coffee\";\n}\nconsole.log(makeCoffee());`,
    },
  };

  const profile = map[topicSlug] || {};
  const html = `<section class=\"card\">\n  <h3>${titleText}</h3>\n  <p id=\"demo\">Open console and edit the code to explore.</p>\n</section>`;
  const css = `.card {\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 1rem;\n}\n.card h3 {\n  color: #1e3a8a;\n  margin-bottom: 0.35rem;\n}`;

  return {
    properties: profile.properties || ["syntax", "logic", "debugging"],
    html,
    css,
    js: profile.js || `console.log(\"Learning: ${titleText}\");`,
    diagram: profile.diagram || null,
  };
}

function buildFallbackLesson(sectionSlug, topicSlug, topicTitle) {
  const sectionGuide = sectionGuides[sectionSlug];
  const snippet = snippetForSlug(topicSlug, topicTitle);

  return {
    intro: `${topicTitle} is a core JavaScript concept. Learn it in small steps, test examples, and observe output carefully.`,
    why: sectionGuide?.defaultWhy || "This concept helps you write cleaner and more reliable JavaScript.",
    properties: snippet.properties,
    html: snippet.html,
    css: snippet.css,
    js: snippet.js,
    solutionHtml: snippet.html,
    solutionCss: `${snippet.css}\n\n.card {\n  box-shadow: 0 12px 24px rgba(30, 64, 175, 0.16);\n}`,
    solutionJs: `${snippet.js}\n\nconsole.log(\"Done exploring ${topicTitle}\");`,
    challenge: `Edit the code to explain ${topicTitle} in your own words and print a meaningful result.`,
    takeaways: [
      `${topicTitle} becomes easier with hands-on practice.`,
      "Use console output to verify your logic step by step.",
      "Keep your code small and readable while learning.",
    ],
    terms: [{ term: "debugging", tip: "Finding and fixing issues in code." }],
    analogy: sectionGuide?.analogy || "Think of JavaScript as instructions for browser behavior.",
    diagram: snippet.diagram || null,
  };
}

export function getJavaScriptLesson(sectionSlug, topicSlug, topicTitle) {
  const base = specificLessons[topicSlug] || buildFallbackLesson(sectionSlug, topicSlug, topicTitle);
  const fallback = snippetForSlug(topicSlug, topicTitle);

  return {
    intro: base.intro,
    why: base.why,
    properties: base.properties || fallback.properties || [],
    html: base.html || fallback.html,
    css: base.css || fallback.css,
    js: base.js || fallback.js || "",
    solutionHtml: base.solutionHtml || base.html || fallback.html,
    solutionCss:
      base.solutionCss ||
      `${base.css || fallback.css}\n\n.card {\n  box-shadow: 0 12px 24px rgba(30, 64, 175, 0.16);\n}`,
    solutionJs: base.solutionJs || `${base.js || fallback.js || ""}\n\nconsole.log(\"Lesson complete\");`,
    challenge: base.challenge,
    takeaways:
      base.takeaways || [
        `${topicTitle} is easier when tested with small examples.`,
        "Readable variable names improve understanding.",
        "Practice and repetition build JavaScript confidence.",
      ],
    terms: base.terms || [],
    analogy: base.analogy || sectionGuides[sectionSlug]?.analogy,
    diagram: base.diagram || fallback.diagram || null,
  };
}

export function flattenJavaScriptTopics() {
  return javascriptTopics.flatMap((section) =>
    section.children.map((topic) => ({
      sectionSlug: section.slug,
      sectionTitle: section.title,
      topicSlug: topic.slug,
      topicTitle: topic.title,
    }))
  );
}

