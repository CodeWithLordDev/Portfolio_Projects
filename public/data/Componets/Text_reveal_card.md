---
title: "Interactive Text Reveal Card with Mouse and Touch Animation using Pure JavaScript and CSS"
description: "Create an eye-catching text reveal animation card using pure HTML, CSS, and JavaScript — no libraries needed. This interactive card smoothly reveals text as users move their mouse or swipe, with a glowing divider and twinkling star effects in the background."
image: "/Assets/data/images/Text_reveal_card.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-10-24"
---



## 🧠 Description
This fun interactive **To-Do List** animates a hand-drawn SVG line across each task whenever you check its box.  
It combines **HTML structure**, **CSS transitions**, and **JavaScript DOM manipulation** to create a smooth, satisfying animation effect — making your task list feel alive.  
You can use it for **daily planner UIs**, **interactive learning projects**, or **creative portfolio demos**.


<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Text Reveal Card — Pure JS</title>
  <!-- <style>Paste The Css code here</style> -->
  
</head>
<body>

  <div class="text-reveal-card" id="card">
    <h3 class="card-head">Text Reveal Card Title</h3>
    <p class="card-desc">Move pointer (or touch) left/right to reveal the upper text and hide the lower text below it.</p>

    <div class="text-container" id="textContainer">
      <div class="stars" id="stars"></div>

      <!-- base text (dark) -->
      <p class="text-base" id="baseText">Original Text That Sits Underneath</p>

      <!-- reveal text (white gradient) - will be clipped to reveal portion -->
      <p class="text-reveal" id="revealText">Revealed Text Appears Here</p>

      <!-- divider -->
      <div class="divider" id="divider"></div>
    </div>
  </div>

  <!-- <script> "Paste the following script code inside this "<script> -->
</body>
</html>

```

<br>

The HTML defines a single .text-reveal-card containing:

A title and description explaining the interaction.

A .text-container that houses:

A stars layer for background animation.

Two overlapping text elements — text-base (bottom) and text-reveal (top).

A vertical divider line that moves with the cursor or touch.

This clean structure allows the top text to be “clipped” dynamically, showing only a portion of it based on user interaction.
<br>

## CSS Code
<br>

```css
<style>>
    :root {
      --card-bg: #1d1c20;
      --card-border: rgba(255,255,255,0.08);
      --card-width: 40rem;
      --card-radius: 12px;
      --reveal-gradient: linear-gradient(to bottom, #ffffff, #d4d4d4);
      --base-gradient: linear-gradient(to bottom, #323238, #1f1f22);
    }

    html,body{
      height:100%;
      margin:0;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0b0b0b;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color: #fff;
      padding: 2rem;
    }

    .text-reveal-card {
      width: var(--card-width);
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--card-radius);
      padding: 2rem;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }

    .card-head {
      margin-bottom: 0.6rem;
    }

    .card-desc {
      color: #a9a9a9;
      font-size: 0.95rem;
      margin-bottom: 1.2rem;
    }

    .text-container {
      height: 10rem;               /* same as original h-40 (approx) */
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
    }

    /* Both texts share identical layout so they sit exactly on top of each other */
    .text-base,
    .text-reveal {
      font-weight: 800;
      font-size: 2rem;
      line-height: 1;
      white-space: nowrap;
      margin: 0;
      padding: 1rem 0;
      position: absolute;
      left: 2rem;                 /* small horizontal padding inside card */
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      pointer-events: none;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    /* base text: darker background gradient */
    .text-base {
      background-image: var(--base-gradient);
      z-index: 10; /* underneath reveal but above stars */
      filter: none;
      /* mask gradient similar to original */
      -webkit-mask-image: linear-gradient(to bottom, transparent, white, transparent);
      mask-image: linear-gradient(to bottom, transparent, white, transparent);
    }

    /* reveal text sits above base and is clipped to show only the portion we want */
    .text-reveal {
      background-image: var(--reveal-gradient);
      z-index: 30;
      /* start fully hidden by clip-path (covering from the right) */
      clip-path: inset(0 100% 0 0); /* top right bottom left — 100% hides all */
      transition: clip-path .08s linear; /* quick smoothing while moving */
      text-shadow: 4px 4px 15px rgba(0,0,0,0.5);
    }

    /* vertical divider line */
    .divider {
      position: absolute;
      top: 0;
      height: 100%;
      width: 8px;
      z-index: 40;
      pointer-events: none;
      transform-origin: center;
      opacity: 0;
      transition: left .08s linear, transform .08s linear, opacity .2s ease;
      background: linear-gradient(to bottom, transparent, rgba(150,150,150,0.9), transparent);
    }

    /* stars layer */
    .stars {
      position: absolute;
      inset: 0;
      z-index: 5;
      overflow: hidden;
      pointer-events: none;
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: white;
      opacity: 0.8;
      transform-origin: center;
      animation: twinkle linear infinite;
      z-index: 5;
    }

    @keyframes twinkle {
      0%   { opacity: 0; transform: scale(1); }
      50%  { opacity: 1; transform: scale(1.2); }
      100% { opacity: 0; transform: scale(0); }
    }

    /* small responsive tweak */
    @media (max-width:640px){
      :root { --card-width: calc(100% - 2rem); }
      .text-base, .text-reveal { font-size: 1.6rem; left: 1rem; right:1rem; }
      .text-container { height: 6.5rem; }
    }
  </style>
```
<br>

The CSS handles the layout, gradients, and animation effects:

:root defines theme variables like colors, gradients, and card size.

.text-reveal-card styles the card with padding, rounded corners, and dark background.

.text-base and .text-reveal sit directly on top of each other with transparent text and gradient backgrounds.

text-base uses a darker gradient.

text-reveal uses a lighter gradient and a clip-path that hides or reveals parts of the text dynamically.

.divider is a glowing vertical line that moves with the cursor, marking the reveal boundary.

.stars and .star elements create twinkling particles using CSS keyframes for subtle motion.

The result is a futuristic card design with elegant motion and lighting effects.
<br>

## Javascipt Code
<br>

The JavaScript adds all the interactivity

It dynamically fills the text using:
<br>

```js
const BASE_TEXT_CONTENT = "Programer Devloper";
const REVEAL_TEXT_CONTENT = "CodewithLord Devloper";
```
<br>


It generates 80 stars at random positions for the animated background.

Mouse and touch events (mousemove, touchmove) calculate how far the pointer has moved across the container and adjust:

clip-path: inset(0 ${rightInset}% 0 0)
This determines how much of the text-reveal layer is visible.

The divider follows this movement, rotating slightly and fading in/out for smooth visual feedback.

When the user leaves the area or lifts their finger, the reveal resets.
<br>

```js

<script>
    // CONFIG: change these to set the displayed strings
    const BASE_TEXT_CONTENT = "Programer Devloper";
    const REVEAL_TEXT_CONTENT = "CodewithLord Devloper";

    // DOM references
    const card = document.getElementById("card");
    const container = document.getElementById("textContainer");
    const baseText = document.getElementById("baseText");
    const revealText = document.getElementById("revealText");
    const divider = document.getElementById("divider");
    const stars = document.getElementById("stars");

    // set texts from config
    baseText.textContent = BASE_TEXT_CONTENT;
    revealText.textContent = REVEAL_TEXT_CONTENT;

    // Create stars (like original ~80)
    for (let i = 0; i < 80; i++) {
      const s = document.createElement("span");
      s.className = "star";
      // random placement + slight pixel offset for natural look
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      const dur = 15 + Math.random() * 25; // random duration
      s.style.animationDuration = dur + "s";
      s.style.opacity = Math.random() * 0.9;
      // small transform offset so animation appears to move a little
      s.style.transform = `translate(${(Math.random()*4-2).toFixed(2)}px, ${(Math.random()*4-2).toFixed(2)}px)`;
      stars.appendChild(s);
    }

    let isActive = false;    // whether pointer/touch is active inside
    let rectLeft = 0;
    let rectWidth = 0;

    function refreshRect() {
      const rect = container.getBoundingClientRect();
      rectLeft = rect.left;
      rectWidth = rect.width;
    }

    // Calculate percent (0..100) then apply via clip-path on reveal text
    function applyPercentFromClientX(clientX) {
      refreshRect();
      let rel = clientX - rectLeft;
      // clamp
      if (rel < 0) rel = 0;
      if (rel > rectWidth) rel = rectWidth;
      const pct = (rel / rectWidth) * 100;

      // clip-path inset: top right bottom left
      // we want to show the left portion up to 'pct' => hide the remainder (right side)
      const rightInset = (100 - pct).toFixed(2) + "%";
      revealText.style.clipPath = `inset(0 ${rightInset} 0 0)`;
      revealText.style.webkitClipPath = `inset(0 ${rightInset} 0 0)`;

      // place divider at the boundary
      divider.style.left = pct + "%";
      // rotate slightly based on pct (replicates rotateDeg)
      const rotateDeg = (pct - 50) * 0.1;   // same formula as original
      divider.style.transform = `rotate(${rotateDeg}deg)`;
      divider.style.opacity = pct > 0 ? "1" : "0";
    }

    // Mouse events
    container.addEventListener("mouseenter", (e) => {
      isActive = true;
      refreshRect();
    });

    container.addEventListener("mousemove", (e) => {
      if (!isActive) return;
      applyPercentFromClientX(e.clientX);
    });

    container.addEventListener("mouseleave", () => {
      isActive = false;
      // hide reveal smoothly
      revealText.style.clipPath = "inset(0 100% 0 0)";
      revealText.style.webkitClipPath = "inset(0 100% 0 0)";
      divider.style.opacity = 0;
    });

    // Touch events (mobile)
    container.addEventListener("touchstart", (e) => {
      isActive = true;
      refreshRect();
      // prevent native scrolling while interacting
      e.preventDefault();
      applyPercentFromClientX(e.touches[0].clientX);
    }, {passive:false});

    container.addEventListener("touchmove", (e) => {
      if (!isActive) return;
      applyPercentFromClientX(e.touches[0].clientX);
      e.preventDefault();
    }, {passive:false});

    container.addEventListener("touchend", () => {
      isActive = false;
      revealText.style.clipPath = "inset(0 100% 0 0)";
      revealText.style.webkitClipPath = "inset(0 100% 0 0)";
      divider.style.opacity = 0;
    });

    // Recompute positions on resize
    window.addEventListener("resize", refreshRect);

    // initialize rect
    refreshRect();

    // OPTIONAL: If you want reveal to show a little when tapping quickly, you can
    // keep it visible for a short timeout on touchend — currently it hides immediately.
  </script>
```