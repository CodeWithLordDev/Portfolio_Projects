---
title: "Dynamic Text Flip Animation | Modern Typing & Blur Transition Effect using HTML, CSS & JavaScript"
description: "Create a smooth and modern text flipping animation that dynamically changes words with a subtle blur and vertical slide effect. This project uses HTML, CSS, and vanilla JavaScript to rotate multiple phrases seamlessly."
image: "/Assets/data/images/Layout_tooltip_animation.jpg"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-10-19"
---



## 🧠 Description
Create a smooth and modern text flipping animation that dynamically changes words with a subtle blur and vertical slide effect. This project uses HTML, CSS, and vanilla JavaScript to rotate multiple phrases seamlessly — perfect for hero sections, landing pages, and portfolios. The elegant animation enhances user engagement by displaying changing text like “Landing Pages,” “Component Blocks,” and more in a visually appealing manner.


<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodewithLord - Text Flip Effect</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="layout-text-flip">
    <span class="static-text">Build Amazing</span>
    <span class="rotating-text-container">
      <span class="rotating-text">Landing Pages</span>
    </span>
  </div>

  <script src="script.js"></script>
</body>
</html>

```
<br>

The HTML provides the structure of the animation.
It contains:

A main div with the class layout-text-flip, which holds two text parts:

A static text — “Build Amazing”

A rotating text container that wraps around the changing text — “Landing Pages”

The script tag at the end links to the JavaScript file that controls the animation.

The link tag connects the CSS file for styling.
In short, HTML sets up the skeleton for displaying the static and animated parts of the text.


<br>


## CSS Code
<br>

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #111;
  font-family: sans-serif;
}

.layout-text-flip {
  display: flex;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

.static-text {
  drop-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.rotating-text-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
  height: 2.5rem; /* adjust for font-size */
}

.rotating-text {
  display: inline-block;
  transform: translateY(0);
  filter: blur(0px);
  transition: transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease;
  white-space: nowrap;
  color: #000;
  background: #fff;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
}


```
<br>

The CSS defines the look and animation style of the text:

The body uses flexbox to center the content vertically and horizontally, with a dark background for contrast.

The .layout-text-flip class arranges the static and rotating text side by side with bold, white text styling.

The .rotating-text-container hides overflowing text and defines the area where the animation occurs.

The .rotating-text uses transition effects like translate, blur, and opacity to create a smooth sliding and fading motion when the text changes.
Overall, CSS gives the animation a clean, modern, and glowing effect.

<br>


## Javascipt Code
<br>

```javascript
const words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"];
const duration = 3000; // 3 seconds per word
let currentIndex = 0;

const rotatingText = document.querySelector(".rotating-text");

function showNextWord() {
  // Animate current word up & blur
  rotatingText.style.transform = "translateY(-40px)";
  rotatingText.style.filter = "blur(10px)";
  rotatingText.style.opacity = "0";

  setTimeout(() => {
    // Change text
    currentIndex = (currentIndex + 1) % words.length;
    rotatingText.textContent = words[currentIndex];

    // Reset position below
    rotatingText.style.transform = "translateY(50px)";
    rotatingText.style.filter = "blur(10px)";
    rotatingText.style.opacity = "0";

    // Animate into view
    setTimeout(() => {
      rotatingText.style.transform = "translateY(0)";
      rotatingText.style.filter = "blur(0px)";
      rotatingText.style.opacity = "1";
    }, 50);
  }, 500); // match transition duration
}

// Start interval
setInterval(showNextWord, duration);


```
<br>

The JavaScript adds interactivity and animation control:

It stores multiple words (Landing Pages, Component Blocks, etc.) in an array.

It uses setInterval() to automatically switch the displayed word every 3 seconds.

When changing words, it applies transitions such as upward movement, blur, and fade-out — then updates the text and brings it back smoothly into view.
Essentially, JavaScript controls the timing and logic behind the text transitions, making the effect dynamic and continuous.