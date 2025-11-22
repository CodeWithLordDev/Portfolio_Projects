---
title: "Magnetic Button Hover Effect Using HTML, CSS & GSAP | Interactive Cursor Animation"
description: "This project demonstrates a creative magnetic button hover effect built using HTML, CSS, and GSAP (GreenSock Animation Platform)."
image: "/Assets/data/images/magnetic_hover_effect.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-10-19"
---



## 🧠 Description
This project demonstrates a creative magnetic button hover effect built using HTML, CSS, and GSAP (GreenSock Animation Platform).
The design replaces the default cursor with a custom animated cursor that dynamically reacts when hovering over a target button.
As the user moves their mouse, the cursor smoothly follows the movement, rotates continuously, and expands or contracts based on hover interactions — creating a magnetic attraction effect.
This effect enhances UI interactivity, making it perfect for modern websites, portfolios, and creative interfaces where smooth animations improve user engagement.


<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Magnetic Button Hover Effect | @coding.stella</title>
  <link rel="stylesheet" href="./style.css">
</head>
    
<body>
  <div id="cursor"></div>
  <div id="cursorPt"></div>
  <div id="target">Hover me</div>

  <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
  <script src="./script.js"></script>
</body>
  
</html>
```

<br>

The HTML defines the basic structure of the animation.
It includes:

Two divs (#cursor and #cursorPt) that act as the custom cursor elements.

A third div (#target) labeled “Hover me”, which serves as the interactive button.
The GSAP library is imported via CDN to handle all motion and animation logic.
Finally, an external CSS and JavaScript file are linked to style and animate the elements respectively.
In short, the HTML provides the skeleton for the visual and interactive components.

<br>

## CSS Code
<br>

```css
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(#111, #000);
  display: flex;
  cursor: none;
}

#cursorPt {
  position: fixed;
  width: 7px;
  height: 7px;
  pointer-events: none;
  z-index: 9999;
  background: #beffcb;
  border-radius: 50%;
  visibility: hidden;
}

#cursor {
  --color: #68fd85;
  position: fixed;
  width: 30px;
  height: 30px;
  pointer-events: none;
  z-index: 9999;
  visibility: hidden;

  background-image: linear-gradient(to right, var(--color) 10px, transparent 0),
    linear-gradient(to bottom, var(--color) 10px, transparent 0),
    linear-gradient(to left, var(--color) 10px, transparent 0),
    linear-gradient(to bottom, var(--color) 10px, transparent 0),
    linear-gradient(to right, var(--color) 10px, transparent 0),
    linear-gradient(to top, var(--color) 10px, transparent 0),
    linear-gradient(to left, var(--color) 10px, transparent 0),
    linear-gradient(to top, var(--color) 10px, transparent 0);

  background-repeat: no-repeat;
  background-position: top left, top left, top right, top right, bottom left,
    bottom left, bottom right, bottom right;
  background-size: 20px 2px, 2px 20px, 20px 2px, 2px 20px, 20px 2px, 2px 20px,
    20px 2px, 2px 20px;
}

#target {
  position: relative;
  width: 150px;
  height: 80px;
  margin: auto;
  border: 2px solid #888;
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  text-transform: uppercase;
  font-family: sans-serif;
  user-select: none;
}

#target:hover {
  border-color: #ccc;
  color: #ddd;
}
```
<br>

The CSS styles the page and defines the cursor visuals and hover behavior.

The body is styled with a dark gradient background, full-screen layout (height: 100vh), and cursor: none to hide the default cursor.

#cursorPt creates a small circular dot that precisely follows the mouse pointer.

#cursor forms the animated magnetic frame, styled with multiple linear gradients to give a neon-border-like look.

Both cursors are set to position: fixed and pointer-events: none to ensure smooth movement without blocking interactions.

The #target button is centered using Flexbox, styled with a gray border, and changes color on hover for visual feedback.
Overall, the CSS defines the sleek, futuristic look and positioning of all visual elements.

<br>

## Javascipt Code
<br>

```javascript
const cursor = document.getElementById("cursor");
const cursorPt = document.getElementById("cursorPt");
const target = document.getElementById("target");

const CURSOR_WIDTH = cursor.getBoundingClientRect().width;
const CURSOR_PT_WIDTH = cursorPt.getBoundingClientRect().width;

let isOverTarget = false;
let rotationTween;
let exitTween = null;
let enterTween = null;

function startRotation() {
  gsap.set(cursor, { rotation: 0 });
  rotationTween = gsap.to(cursor, {
    rotation: 180,
    duration: 1.2,
    repeat: -1,
    ease: "linear",
    transformOrigin: "center center"
  });
}

function stopRotation() {
  if (rotationTween) rotationTween.kill();
}

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {autoAlpha: 1});
    gsap.to(cursorPt, {autoAlpha: 1});
  if (!isOverTarget) {
    gsap.to(cursor, {
      x: e.clientX - CURSOR_WIDTH / 2,
      y: e.clientY - CURSOR_WIDTH / 2,
      duration: 0.1,
      ease: "expo.out"
    });
  }
  gsap.to(cursorPt, {
    x: e.clientX - CURSOR_PT_WIDTH/2,
    y: e.clientY- CURSOR_PT_WIDTH/2,
    duration: 0.1,
    ease: "expo.out"
  });
});

target.addEventListener("mouseenter", () => {
  isOverTarget = true;
  stopRotation();

  const rect = target.getBoundingClientRect();
  
  if (exitTween) exitTween.kill();
  enterTween = gsap.to(cursor, {
    width: rect.width,
    height: rect.height,
    borderColor: "red",
    rotation: 360,
    duration: 0.2,
    ease: "easeOut"
  });
});

target.addEventListener("mousemove", (e) => {
  const rect = target.getBoundingClientRect();

  const targetWidth = rect.width;
  const targetHeight = rect.height;

  const cx = rect.left + targetWidth / 2;
  const cy = rect.top + targetHeight / 2;

  const dx = e.clientX - cx;
  const dy = e.clientY - cy;

  gsap.to(cursor, {
    x: rect.left + dx * 0.09,
    y: rect.top + dy * 0.09,
    scale: 1.1,
    duration: 0.1,
    ease: "power2.out"
  });
});

target.addEventListener("mouseleave", () => {
  isOverTarget = false;
  
  exitTween = gsap.to(cursor, {
    width: 30,
    height: 30,
    duration: 0.5,
    ease: "elastic.out(1, .9)"
  });

  startRotation();
});

startRotation();
```
<br>

The JavaScript file (using GSAP) controls the animations and cursor interactions.
Here’s how it works:

It captures references to #cursor, #cursorPt, and #target.

A continuous rotation animation is started using gsap.to() to rotate the cursor frame infinitely.

On mousemove, both cursor elements (cursor and cursorPt) follow the mouse coordinates smoothly using GSAP transitions, making movement feel natural.

When the mouse enters the target button, the cursor expands to match the button’s size, rotation stops, and a subtle animation enlarges the frame — simulating a magnetic pull.

During movement inside the target, the cursor slightly follows the mouse direction inside the button using offset calculations.

When the mouse leaves the target, the cursor returns to its original size with an elastic animation and resumes rotation.
These combined animations create a highly interactive and magnetic cursor effect, powered entirely by GSAP’s smooth motion engine.