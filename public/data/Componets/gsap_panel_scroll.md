---
title: "GSAP ScrollTrigger Panels – Smooth Pin & Scale Scroll Animation"
description: "A modern GSAP ScrollTrigger animation where fullscreen panels pin, scale down, and fade smoothly on scroll using pure HTML, CSS, and JavaScript."
image: "/Assets/data/images/gsap_pane;_scroll.png_"
tags: ["GSAP", "ScrollTrigger", "JavaScript Animation", "Scroll Animation", "Frontend", "UI Animation"]
author: "CodewithLord"
date: "2025-12-20"
---

<br>

## 🧠 Description

<br>

This project demonstrates a **smooth scroll-based panel animation** using **GSAP ScrollTrigger**.  
Each fullscreen section **pins to the viewport**, then **scales down and fades out** as the user scrolls — creating a clean, cinematic transition between sections.

<br>

### Why This Animation Feels Premium

<br>

- Fullscreen panel-based layout
- Scroll-driven scale & opacity animation
- Smooth pinning without layout jumps
- Minimal and modern UI
- GPU-friendly transform animations
- Perfect for landing pages, portfolios, and storytelling websites

<br>

### Core Concept

<br>

Each `.panel`:
- Occupies **100vh**
- Pins itself when reaching the viewport bottom
- Scales down (`1 → 0.6`)
- Fades out (`opacity: 1 → 0`)
- Unpins smoothly so the next section can take over

All motion is controlled purely by scroll — no timelines required.

<br>

---

<br>

## 💻 Step 1: HTML Structure

<br>

### Complete HTML Code

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GSAP Panels</title>

  <!-- CSS -->
  <link rel="stylesheet" href="style.css" />

  <!-- GSAP -->
  <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
</head>

<body>
  <div class="slides-wrapper">
    <section class="panel">
      <h1>Section 1</h1>
      <img src="https://assets.codepen.io/16327/demo1.png" />
    </section>

    <section class="panel">
      <h1>Section 2</h1>
      <img src="https://assets.codepen.io/16327/demo2.png" />
    </section>

    <section class="panel">
      <h1>Section 3</h1>
      <img src="https://assets.codepen.io/16327/demo3.png" />
    </section>

    <section class="panel">
      <h1>Section 4</h1>
      <img src="https://assets.codepen.io/16327/demo4.png" />
    </section>

    <section class="panel">
      <h1>Section 5</h1>
      <img src="https://assets.codepen.io/16327/demo5.png" />
    </section>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

<br>

## HTML Breakdown
<br>

.slides-wrapper holds all scroll sections

Each .panel is a fullscreen slide

Headings + images create visual hierarchy

GSAP & ScrollTrigger loaded via CDN for simplicity

<br>
<br>

## 🎨 Step 2: CSS – Layout & Visual Styling
<br>

### CSS Code
<br>

```css
:root {
  --white: #ffffff;
  --black: #0b0b0b;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: var(--black);
  overflow-x: hidden;
}

.slides-wrapper {
  width: 100%;
}

.panel {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
  color: var(--white);
  text-align: center;
  position: relative;
  perspective: 1200px;
}

.panel h1 {
  font-size: clamp(3rem, 12vw, 10rem);
  margin: 0;
  text-transform: uppercase;
}

.panel img {
  width: 50%;
  max-width: 400px;
  margin-top: 40px;
}
```

<br>

## CSS Breakdown
<br>

CSS Variables → Easy theme control

100vh panels → Fullscreen experience

Flexbox centering → Perfect alignment

Clamp() typography → Responsive headings

Perspective → Prepares for future 3D effects

<br>
<br>

## ⚙️ Step 3: JavaScript – GSAP ScrollTrigger Logic
<br>

### JavaScript Code
<br>

```javascript
gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

panels.forEach((panel) => {
  gsap.fromTo(
    panel,
    {
      scale: 1,
      opacity: 1
    },
    {
      scale: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: panel,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false
      }
    }
  );
});
```

<br>

## JavaScript Breakdown
<br>

Key Concepts Used:

<br>

**ScrollTrigger.registerPlugin()**
→ Enables scroll-based animations

**gsap.utils.toArray()**
→ Converts NodeList into an array

**fromTo()**
→ Explicit start & end animation states

**scrub: true**
→ Smooth frame-by-frame scroll sync

**pin: true**
→ Locks panel in viewport

**pinSpacing: false**
→ Prevents extra space after pin

<br>

## Scroll Flow Explanation
<br>

Panel reaches bottom of viewport

Panel pins instantly

Scale + opacity animate on scroll

Panel releases smoothly

Next panel takes over

<br>