---
title: "Interactive Text Pressure Effect Using Pure JavaScript and Variable Fonts"
description: Create an eye-catching “Text Pressure” animation using pure JavaScript, CSS, and variable fonts. This effect dynamically adjusts font weight, width, and italics based on mouse movement, giving the illusion of text responding to user interaction."
image: "/Assets/data/images/Text_pressure.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---


## Description
Create an eye-catching “Text Pressure” animation using pure JavaScript, CSS, and variable fonts. This effect dynamically adjusts font weight, width, and italics based on mouse movement, giving the illusion of text responding to user interaction. No external libraries required — just HTML, CSS, and JavaScript. Perfect for interactive web headers, hero sections, and modern typography experiments.

## Html Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Pressure (Pure JS)</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="text-container">
    <h1 id="textPressure" class="text-pressure-title stroke"></h1>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
The HTML sets up a minimal structure:

A container (.text-container) centers the animated text.

The <h1> tag (#textPressure) holds the animated letters, which are generated dynamically by JavaScript.

External CSS (style.css) and JS (script.js) files handle the styling and animation logic.


## Css Code

```css
@font-face {
  font-family: "CompressaVF";
  src: url("https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2")
    format("woff2");
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #050505, #000);
  overflow: hidden;
  color: #fff;
}

.text-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-pressure-title {
  font-family: "CompressaVF", sans-serif;
  text-transform: uppercase;
  font-size: 8vw;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  font-weight: 100;
  width: 100%;
  color: #ffffff;
  transition: transform 0.2s ease;
}

/* Flex version (optional) */
.flex {
  display: flex;
  justify-content: space-between;
}

/* Stroke effect */
.stroke span {
  position: relative;
  color: #ffffff;
}
.stroke span::after {
  content: attr(data-char);
  position: absolute;
  left: 0;
  top: 0;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #00ffff;
  z-index: -1;
}
```

Key parts of the CSS:

Custom Font (@font-face)
Loads CompressaVF, a variable font that supports width (wdth), weight (wght), and italic (ital) variations.

Background & Centering:
The background uses a dark radial gradient, and Flexbox centers the text in the viewport.

Text Styling:
Each character can be given a glowing stroke outline

This adds a cyberpunk-style neon glow beneath each letter.

Responsive Scaling:
The font-size uses viewport width (8vw) for scalability across devices.



## Javascript code

```js
// =================== CONFIG ===================
const config = {
  text: "Hello!",
  fontFamily: "CompressaVF",
  width: true,
  weight: true,
  italic: true,
  alpha: false,
  flex: false,
  stroke: true,
  scale: true,
  textColor: "#FFFFFF",
  strokeColor: "#00FFFF",
  minFontSize: 24,
};

// =================== SETUP ===================
const container = document.querySelector(".text-container");
const title = document.getElementById("textPressure");

const chars = config.text.split("");
title.innerHTML = chars
  .map((char) => `<span data-char="${char}">${char}</span>`)
  .join("");

const spans = title.querySelectorAll("span");

let mouse = { x: 0, y: 0 };
let cursor = { x: 0, y: 0 };

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

// =================== RESIZE HANDLER ===================
function setSize() {
  const containerRect = container.getBoundingClientRect();
  const newFontSize = Math.max(containerRect.width / (chars.length / 2), config.minFontSize);
  title.style.fontSize = `${newFontSize}px`;

  if (config.scale) {
    requestAnimationFrame(() => {
      const textRect = title.getBoundingClientRect();
      const yRatio = containerRect.height / textRect.height;
      title.style.transform = `scale(1, ${yRatio})`;
      title.style.lineHeight = yRatio;
    });
  }
}

window.addEventListener("resize", setSize);
setSize();

// =================== MOUSE TRACKING ===================
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

window.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  cursor.x = t.clientX;
  cursor.y = t.clientY;
});

// =================== ANIMATION LOOP ===================
function animate() {
  mouse.x += (cursor.x - mouse.x) / 15;
  mouse.y += (cursor.y - mouse.y) / 15;

  const titleRect = title.getBoundingClientRect();
  const maxDist = titleRect.width / 2;

  spans.forEach((span) => {
    const rect = span.getBoundingClientRect();
    const charCenter = {
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2,
    };

    const d = dist(mouse, charCenter);

    const getAttr = (distance, minVal, maxVal) => {
      const val = maxVal - Math.abs((maxVal * distance) / maxDist);
      return Math.max(minVal, val + minVal);
    };

    const wdth = config.width ? Math.floor(getAttr(d, 5, 200)) : 100;
    const wght = config.weight ? Math.floor(getAttr(d, 100, 900)) : 400;
    const italVal = config.italic ? getAttr(d, 0, 1).toFixed(2) : 0;
    const alphaVal = config.alpha ? getAttr(d, 0, 1).toFixed(2) : 1;

    span.style.opacity = alphaVal;
    span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
  });

  requestAnimationFrame(animate);
}

animate();
```


The config object defines customizable parameters
You can easily change the displayed text, font style, or animation behavior here.
Dynamic Text Creation
Each letter of "Hello!" is split and wrapped in a <span>

Responsive Font Resizing

The setSize() function ensures that text resizes proportionally with the window size
Text Pressure Effect

The animate() function calculates how far each character is from the cursor and changes its variable font attributes
Continuous Animation

requestAnimationFrame(animate); ensures a smooth and efficient animation loop, running at 60fps.