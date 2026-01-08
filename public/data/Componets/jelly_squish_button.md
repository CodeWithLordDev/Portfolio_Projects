---
title: "Jelly Squish Button – Interactive Drag & Squash Animation with GSAP"
description: "A premium jelly-like squish interaction built using HTML Canvas, GSAP Draggable, and inertia physics, featuring frame-by-frame image animation, smooth dampening, and optional mouse-follow behavior."
image: "/Assets/data/images/jelly_squish_button.png"
tags: ["GSAP", "Canvas Animation", "Draggable", "InertiaPlugin", "UI Interaction", "Creative Coding", "JavaScript"]
author: "CodewithLord"
date: "2025-12-18"
---

<br>

## 🧠 Description

<br>

This project recreates a **high-quality jelly squish interaction** using **HTML Canvas** and **GSAP Draggable**.  
The illusion of soft, elastic deformation is achieved through **frame-by-frame image animation**, controlled by **vertical drag input** and enhanced with **inertia, smoothing, and dampening physics**.

<br>

### Why This Interaction Feels Real

<br>

- Ultra-smooth drag-based squish effect
- 215 high-resolution image frames
- Inertia-powered elastic motion
- Realistic dampening & easing
- Optional mouse-follow mode
- Mobile-friendly touch support
- Premium UI polish & loader animation

<br>

### Core Concept

<br>

Instead of deforming vectors or meshes, this technique uses:
- **Pre-rendered image sequences**
- **GSAP Draggable Y-axis control**
- **Frame interpolation with smoothing**
- **Physics-based dampening**

The result feels soft, organic, and physically believable — perfect for buttons, product previews, or playful UI elements.

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
    <meta charset="UTF-8">
    <title>Jelly Squish Button</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#111317" />
<meta property="og:image" content="https://www.cerpow.com/jelly/jelly_00085.jpg" /><link rel="stylesheet" href="https://public.codepenassets.com/css/normalize-5.0.0.min.css">
<link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <main>
  <div class="bottom-controls">
    <h1>Drag vertically to squeeze</h1>

    <div class="controls-container">
      <label class="checkbox-label">
        <input type="checkbox" id="followMouseCheckbox" />
        <span class="checkmark-icon"></span>
        Follow mouse
      </label>
    </div>
  </div>

  <div class="canvas-wrapper">
    <canvas width="1280" height="960"></canvas>
    <div class="drag-trigger"></div>
  </div>
  <div class="loader"><span></span></div>
</main>
    <script src='https://unpkg.com/gsap@3/dist/gsap.min.js'></script>
<script src='https://unpkg.com/gsap@3/dist/Draggable.min.js'></script>
<script src='https://unpkg.com/gsap@3/dist/InertiaPlugin.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/ismobilejs@1/dist/isMobile.min.js'></script><script  src="./script.js"></script>

  </body>
  
</html>
```
<br>

## HTML Breakdown
<br>

***``<canvas>``*** → Renders the jelly animation frames

**.drag-trigger** → Invisible drag hit-area

**.bottom-controls** → UI instructions & toggle

**.loader** → Preload progress feedback

GSAP plugins loaded via CDN

<br>
<br>

## 🎨 Step 2: CSS – Layout & Visual Polish
<br>

## CSS Code
<br>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* background-color: #111317; */
  background-color: #b1b3c0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  min-height: 100svh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  overflow: hidden;
  text-align: center;
  line-height: 1.8;
  min-width: 380px;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  min-height: 100svh;
  width: 100%;
  margin: 0 auto;
  /* padding: 20px; */
}

h1 {
  position: relative;
  font-size: 17px;
  font-weight: 450;
  /* text-transform: uppercase; */
  /* letter-spacing: 1.6px; */
  letter-spacing: -0.01em;
  color: #464e60;
}

h1 span {
  display: inline-flex;
}

.canvas-wrapper {
  position: relative;
  width: 100%;
  max-width: 640px;
  min-width: 380px;
  aspect-ratio: 4/3;
  /* margin-bottom: -2vw */
  /* margin-bottom: clamp(20px, 5vw, 40px); */
}

canvas {
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
  transition: opacity 1.1s ease, transform 1.3s ease;
  transform: translate3d(0px, 0px, 0px) scale3d(0.92, 0.92, 1) !important;
  border-radius: clamp(22px, 6vw, 42px);
  opacity: 0;
}

.drag-trigger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -49%);
  width: 56%;
  height: 52%;
  border-radius: 999px;
  cursor: -webkit-grab;
  cursor: grab;
  z-index: 101;
  /* background-color: rgba(255, 0, 0, 0.3); */
}

.drag-trigger:active {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

canvas.fadeIn {
  opacity: 1;
  transform: scale3d(1, 1, 1) !important;
}

.loader {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  width: 90%;
  max-width: 150px;
  height: 2px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 500ms ease, visibility 500ms ease;
}

.loader.hide {
  opacity: 0 !important;
  visibility: 0 !important;
}

.loader span {
  display: flex;
  background-color: white;
  height: 100%;
  -webkit-animation: loader 1.3s infinite alternate ease-in-out;
  animation: loader 1.3s infinite alternate ease-in-out;
  width: 25%;
}

@-webkit-keyframes loader {
  0% {
    opacity: 0;
    transform: translateX(0%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(300%);
  }
}
@keyframes loader {
  0% {
    opacity: 0;
    transform: translateX(0%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(300%);
  }
}
.bottom-controls {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 14px;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.3s ease;
  transition-delay: 400ms;
}

.bottom-controls.fadeIn {
  opacity: 1;
}

.controls-container {
  display: flex;
  align-items: center;
  pointer-events: auto;
}

@media (hover: none) and (pointer: coarse) {
  .controls-container {
    display: none !important;
  }
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 450;
  letter-spacing: -0.01em;
  color: #464e60;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark-icon {
  position: relative;
  height: 16px;
  width: 16px;
  border: 1.5px solid #464e60;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, border-color 0.2s;
}

.checkmark-icon:after {
  content: "";
  position: absolute;
  display: none;
  left: 3px;
  top: 0px;
  width: 5px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-label input:checked ~ .checkmark-icon {
  background-color: #464e60;
}

.checkbox-label input:checked ~ .checkmark-icon:after {
  display: block;
}

```

<br>

## CSS Breakdown
<br>

**Aspect-ratio: 4/3** → Matches animation frames

**Rounded corners** → Soft, tactile feel

**Fade-in animation** → Premium loading experience

**Hidden overflow** → Prevents layout jitter

**Pointer control zones** → UX-focused interaction

<br>
<br>

## ⚙️ Step 3: JavaScript – Canvas, Drag & Physics
<br>

## Image Sequence Setup
<br>
let totalFrames = 215;
let startFrame = 70;
let images = new Array();


Uses 215 pre-rendered images

Starts from a neutral squish state

Images are loaded dynamically

<br>

## Preloading System
<br>

```javascript

function preloadImages(callback) {
  let loaded = 0;

  for (let i = 0; i < totalFrames; i++) {
    const img = new Image();
    img.src = `https://www.cerpow.com/jelly/jelly_${i
      .toString()
      .padStart(5, "0")}.jpg`;
    img.onload = () => {
      if (++loaded === totalFrames) callback();
    };
    images[i] = img;
  }
}
```

<br>

## GSAP Draggable Control
<br>

```javascript
Draggable.create(canvas, {
  trigger: ".drag-trigger",
  type: "y",
  inertia: true,
  bounds: { minY: 0, maxY: (totalFrames - 1) / dragSensitivity },
  onDrag: function () {
    dragFrame = this.y * dragSensitivity;
  },
  onThrowUpdate: function () {
    dragFrame = this.y * dragSensitivity;
  }
});
```
<br>

## Physics & Dampening Logic
<br>

``const dampening = 1.0 - Math.exp(-smoothing * 60 * dt);``
``displayFrame += (dragFrame - displayFrame) * dampening;``

<br>

Why This Works:

Simulates soft elastic resistance

Prevents jitter

Creates natural jelly motion

Adapts smoothly to fast or slow input

<br>

## Canvas Rendering Loop
<br>

```javascript
ctx.drawImage(
  images[newFrame],
  0,
  0,
  canvas.clientWidth,
  canvas.clientHeight
);
```

Only redraws when frame changes

Optimized for performance

Image smoothing enabled for realism

<br>
<br>

### 🖱️ Interaction Modes
<br>
Drag Mode

Vertical drag controls squish

Inertia continues motion

Resistance feels physical

<br>
Follow Mouse Mode

Frame follows cursor Y-position

Draggable disabled automatically

Great for demos & hero interactions

<br>