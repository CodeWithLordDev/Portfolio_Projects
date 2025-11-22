---
title: "Interactive Multicolor Gradient Text Reveal Effect Using SVG and Pure JavaScript"
description: "Create a stunning hover-based text reveal effect using pure HTML, CSS, SVG, and JavaScript — no external libraries required."
image: "/Assets/data/images/Text-hover-effect.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---


## Description
Create a stunning hover-based text reveal effect using pure HTML, CSS, SVG, and JavaScript — no external libraries required. This project displays a glowing multicolor gradient that follows your mouse cursor, revealing the text “CodewithLord” only when hovered. Perfect for modern portfolio websites, animated headers, or creative logo reveals with smooth transitions and interactive gradients.
<br>

## Html code
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CodewithLord</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="text-hover-container">
    <svg id="text-hover-svg" width="100%" height="100%" viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Multicolor gradient for the text -->
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stop-color="#eab308" />
          <stop offset="25%" stop-color="#ef4444" />
          <stop offset="50%" stop-color="#3b82f6" />
          <stop offset="75%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>

        <!-- Circular mask that follows the cursor -->
        <radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="15%">
          <stop offset="0%" stop-color="white" />
          <stop offset="100%" stop-color="black" />
        </radialGradient>

        <mask id="textMask">
          <rect width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <!-- Outline text for subtle background -->
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
        class="outline-text">
        CodewithLord
      </text>

      <!-- Gradient text revealed by mask -->
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
        stroke="url(#textGradient)" stroke-width="0.3"
        mask="url(#textMask)" class="gradient-text">
                CodewithLord
      </text>
    </svg>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
<br>

The text is rendered inside an SVG for precise control over gradients, strokes, and masking.

The (defs) block defines:

linearGradient → Creates a rainbow-like color transition for the text.

radialGradient → Used as a mask that follows the mouse cursor.

mask → Determines which part of the gradient text is visible based on the cursor position.

There are two (text) elements:

.outline-text → A faint gray outline (visible all the time).

.gradient-text → A colorful gradient text that only appears when hovered.

<br>

## Css code
<br>

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0a0a;
  overflow: hidden;
}

.text-hover-container {
  width: 100%;
  max-width: 700px;
  user-select: none;
}

.outline-text {
  fill: transparent;
  stroke: #444;
  stroke-width: 0.3;
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.2;
}

.gradient-text {
  fill: transparent;
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  opacity: 0; /* hidden until hover */
  transition: opacity 0.3s ease;
}

.text-hover-container:hover .gradient-text {
  opacity: 1;
}
```
<br>

The entire screen centers the text with a dark background for contrast.

.outline-text
Gives the background text a soft gray stroke, adding depth even when the gradient is hidden.
.gradient-text
The main interactive layer — hidden by default (opacity: 0) and fades in on hover.
On hover, the gradient text becomes visible
This creates a smooth reveal transition when the user hovers over the SVG.
<br>

## Javascript Code
<br>

```js
const svg = document.getElementById("text-hover-svg");
const revealMask = document.getElementById("revealMask");

let hovered = false;

// Update mask position when moving mouse
svg.addEventListener("mousemove", (e) => {
  if (!hovered) return;

  const rect = svg.getBoundingClientRect();
  const cx = ((e.clientX - rect.left) / rect.width) * 100;
  const cy = ((e.clientY - rect.top) / rect.height) * 100;

  // Smoothly move the reveal mask
  revealMask.setAttribute("cx", `${cx}%`);
  revealMask.setAttribute("cy", `${cy}%`);
});

// On hover start
svg.addEventListener("mouseenter", () => {
  hovered = true;
  revealMask.innerHTML = `
    <stop offset="0%" stop-color="white"/>
    <stop offset="100%" stop-color="black"/>
  `;
});

// On hover leave
svg.addEventListener("mouseleave", () => {
  hovered = false;
  // reset the mask to hide text again
  revealMask.innerHTML = `
    <stop offset="0%" stop-color="black"/>
    <stop offset="100%" stop-color="black"/>
  `;
});
```

<br>

🖱️ Mouse Tracking
Calculates the cursor’s position relative to the SVG.
Moves the radial gradient center (cx, cy) so the reveal mask follows the mouse smoothly.

✨ Hover Events
When you hover over the SVG
The mask becomes visible and white at the center, revealing the gradient text.
The word “CodewithLord” appears as a gray outline by default.

On hover, a vivid multicolor gradient is revealed, following the cursor’s position dynamically.

The effect looks clean, professional, and futuristic — ideal for branding or interactive headers.