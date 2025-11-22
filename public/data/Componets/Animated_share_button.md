---
title: "Animated Social Share Button | Interactive Hover Effects using HTML, CSS & JavaScript"
description: "Experience a modern and interactive share button that smoothly transitions to reveal social media icons on hover. Built with HTML, CSS, and JavaScript, this elegant UI component uses Lucide icons and animations to create a clean, responsive, and visually engaging sharing experience."
image: "/Assets/data/images/Animated_share_button.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-10-9"
---



## 🧠 Description
Experience a modern and interactive share button that smoothly transitions to reveal social media icons on hover. Built with HTML, CSS, and JavaScript, this elegant UI component uses Lucide icons and animations to create a clean, responsive, and visually engaging sharing experience.


<br>



## 💻 HTML Code
<br>


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated Share Button (Large)</title>
  <link rel="stylesheet" href="style.css" />
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
  <div class="center">
    <button class="share-button large" id="shareBtn">
      <div class="share-content">
        <i data-lucide="share-2" class="icon"></i>
        <span>Share</span>
      </div>

      <div class="share-icons">
        <div class="icon github" data-platform="github" title="GitHub">
          <i data-lucide="github"></i>
        </div>
        <div class="icon x" data-platform="x" title="X">
          <i data-lucide="twitter"></i>
        </div>
        <div class="icon facebook" data-platform="facebook" title="Facebook">
          <i data-lucide="facebook"></i>
        </div>
      </div>
    </button>
  </div>

  <script src="script.js"></script>
</body>
</html>

```
<br>



The HTML file sets up the structure of the animated share button.

Head Section

Defines the page’s metadata and loads the external CSS file (style.css) and the Lucide icon library (used for SVG icons).

Body

Contains a centered div with a single button (share-button large).

The button has two parts:

.share-content — the default visible part of the button showing the “Share” text and share icon.

.share-icons — hidden initially; contains social media icons (GitHub, X, and Facebook), which appear when hovering over the button.

Each icon uses data-platform attributes to identify which platform it represents.

The script file (script.js) is linked at the bottom to handle functionality.




<br>



## CSS Code
<br>


```css
body {
  background: #f3f4f6;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Base Share Button */
.share-button {
  position: relative;
  background: #2563eb;
  color: white;
  border: none;
  outline: none;
  border-radius: 14px;
  padding: 14px 38px;
  font-size: 18px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s ease, transform 0.2s ease;
  min-width: 200px;
  min-height: 60px;
}

.share-button:hover {
  background: #1e40af;
  transform: scale(1.03);
}

/* Larger version */
.share-button.large {
  font-size: 20px;
  padding: 18px 48px;
  min-width: 240px;
  min-height: 70px;
  border-radius: 18px;
}

/* CONTENT (text + icon) */
.share-content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}

/* SOCIAL ICONS SECTION */
.share-icons {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.4s ease;
}

/* Individual icons */
.share-icons .icon {
  background: transparent;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.share-icons .icon:hover {
  transform: translateY(-8px);
  color: #93c5fd;
}

/* Hover effect to swap content */
.share-button:hover .share-content {
  opacity: 0;
  transform: translateY(-28px);
}

.share-button:hover .share-icons {
  opacity: 1;
  transform: translateY(2);
  top: 0;
}

/* Icon sizing */
.icon svg {
  width: 28px;
  height: 28px;
}

```
<br>



The CSS controls the design, layout, and animation of the button.

Page Layout

The body is centered vertically and horizontally using flex.

Uses a light gray background and Poppins font for a clean modern style.

Button Styling (.share-button)

The button is blue (#2563eb), rounded, and slightly enlarges (scale(1.03)) when hovered.

It’s positioned relative so its inner content can be absolutely positioned for animation.

transition is added to create smooth hover animations.

Button Variants

.large adds bigger padding, font size, and radius for a large version.

.share-content

This is the part showing the text “Share” and the share icon by default.

It’s centered absolutely inside the button.

It fades and moves upward when hovered (opacity: 0; transform: translateY(-28px)).

.share-icons

Initially hidden (opacity: 0, placed below view using top: 100% and translateY(25px)).

When hovered, it moves into view (top: 0) and becomes visible (opacity: 1).

.icon

Each icon is clickable and changes color/position slightly on hover (translateY(-8px) and color: #93c5fd).

Smooth Transitions

Both .share-content and .share-icons use transitions for smooth animations.


<br>


## Javascipt Code
<br>


```javascript
lucide.createIcons();

document.querySelectorAll(".share-icons .icon").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const platform = e.currentTarget.getAttribute("data-platform");
    if (platform === "github") {
      window.open("https://github.com/", "_blank");
    } else if (platform === "x") {
      window.open("https://x.com/", "_blank");
    } else if (platform === "facebook") {
      window.open("https://facebook.com/", "_blank");
    }
  });
});


```
<br>



The JavaScript file (script.js) controls the behavior when users click on any social media icon.

lucide.createIcons()

This line replaces all <i data-lucide="..."> tags with SVG icons provided by the Lucide library.

Icon Click Functionality

The script selects all icons inside .share-icons.

For each icon, it listens for a click event.

When clicked:

It reads the data-platform attribute to know which platform was clicked.

Depending on the platform, it opens the corresponding website (GitHub, X, or Facebook) in a new browser tab using window.open().