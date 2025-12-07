---
title: GSAP Text Scroll & Hover Clip Effect – Full Code Explanation  
description: Detailed breakdown of the HTML, CSS, and JavaScript used to create a smooth GSAP-powered scroll animation combined with a clipping hover reveal effect.  
image: "/Assets/data/images/Text_Scroll_hover_Effect.png"
tags: [gsap, animation, css, javascript, scrolltrigger, clipping, frontend]  
author: Ayush Rajesh Temkar  
date: 2025-12-07  
---

# 🔥 GSAP Text Scroll & Hover Clip Effect – Complete Explanation

This document explains the full HTML, CSS, and JavaScript setup for the scroll-animated gradient text combined with a hover-activated clipping reveal effect.

---

# 🟧 HTML Explanation

The HTML defines the full structure of the animation elements.

### **1. Fonts & Styles**
- Loads **Poppins 900** from Google Fonts for bold, impactful headings.
- Links an external `style.css` file for visual styling.

### **2. Container Layout**
- A `.container` div wraps all animated text elements.
- Each line of text is created using an `<h1>` tag that contains:
  - Main text
  - A `<span>` element that appears on hover using clip-path
  - Optional links inside spans for external references

### **3. Multiple Animated Text Blocks**
Each line looks like:

<br>

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Text scroll and hover effect with GSAP and clip</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet"><link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <div class="container">
  <h1 class="text">TEXT EFFECT<span>WOAH</span></h1>
  <h1 class="text">GSAP<span>AND CLIPPING</span></h1>
  <h1 class="text">CRAZYYY<span>CRAZYYY</span></h1>
  <h1 class="text">HOVER ON ME<span><a href="https://stacksorted.com/text-effects/minh-pham" target="_blank">SOURCE</a></span></h1>
  <h1 class="text">LIKE THIS?<span><a href="https://twitter.com/juxtopposed" target="_blank">LET'S CONNECT</a></span></h1>
</div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollToPlugin.min.js'></script><script  src="./script.js"></script>

  </body>
  
</html>
```

### 🟦 CSS Explanation

The CSS handles layout, typography, clipping effects, and hover states.

1. Page Setup

Dark background (#0D0D0D)

10% page margin for a centered modern layout

Poppins font for bold headings

2. Container Styling

Vertical column layout

200vh height to enable long scroll interaction

Left-aligned text elements

3. Text Block Styling

Every .text element is styled to achieve the animated effect:

Font size: 10vw for responsive typography

Color: Transparent gray using background-clip

Gradient Reveal:

Background is a horizontal linear gradient

background-size: 0% initially

On scroll, GSAP animates it to 100%

Layout:

Flex column layout

Border-bottom for separation

Positioned relative to hold the span overlay

4. Hover Span Clip Effect

The <span> acts as the hidden layer:

Fully covers the text

Starts with a thin middle line using:

clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);


On hover, transforms into a full rectangle:

clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);


Uses a smooth cubic-bezier easing

Has a blue background (#4246ce) and dark text for contrast

5. Link Styling

Links inherit the text color

No underline

They animate as part of the span hover reveal

```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #0D0D0D;
  margin: 10%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200vh;
}

.text {
  font-size: 10vw;
  letter-spacing: -.01em;
  line-height: 100%;
  margin: 0;
  
  width: 100%;
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
  

  border-bottom: 1px solid #2F2B28;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #4246ce;
  color: #0D0D0D;
  
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text:hover > span {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

a {
  text-decoration: none;
  color: inherit;
}
```

### JavaScript Explanation

The JavaScript controls the scroll-based text gradient animation.

1. Register ScrollTrigger

GSAP’s ScrollTrigger plugin is registered at the top.

2. Select All Text Elements
const textElements = gsap.utils.toArray('.text');


This collects all .text <h1> elements.

3. Loop Through Each Text Block

For each text line:

GSAP animates backgroundSize from 0% to 100%

ScrollTrigger ties the animation to scroll movement

4. ScrollTrigger Settings

trigger: text: the animation begins when each text block enters viewport

start: 'center 80%': animation starts early for smooth effect

end: 'center 20%': animation ends before the text leaves view

scrub: true: ties scroll position directly to animation progress

5. Final Result

As the user scrolls, each text block fills with gradient

Hovering reveals the clipped span layer

Smooth, modern, GSAP-powered scrolling animation

```javascript
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});
```