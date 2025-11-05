---
title: "Animated 404 Error Page – Swinging Text and Cloak Effect using @property CSS"
description: "This creative 404 Error Page Concept combines advanced CSS features like the @property rule, custom variables, and keyframe animations to produce a smooth swinging 3D text effect and dynamic cloak lighting animation."
image: "/Assets/data/images/404_concept_error_page.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
This creative 404 Error Page Concept combines advanced CSS features like the @property rule, custom variables, and keyframe animations to produce a smooth swinging 3D text effect and dynamic cloak lighting animation.
It provides a futuristic “missing page” design that’s minimal yet visually stunning — no external JavaScript animation library required.
The effect gives the illusion of the “404” text swinging in space with light shadows moving behind it, representing the “lost” or “missing” theme of the page.


␣␣

## 💻 HTML Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>404 Concept Page @property</title>
    <link rel="stylesheet" href="https://public.codepenassets.com/css/normalize-5.0.0.min.css">
<link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <h1>404</h1>
<div class="cloak__wrapper">
  <div class="cloak__container">
    <div class="cloak"></div>
  </div>
</div>
<div class="info">
  <h2>We can't find that page</h2>
  <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p><a href="https://jhey.dev" target="_blank" rel="noreferrer noopener">Home</a>
</div>
    <script  src="./script.js"></script>

  </body>
  
</html>

```


The HTML provides a clean and simple layout for the 404 page:

The <h1> element displays the large “404” error code.

A div structure (.cloak__wrapper, .cloak__container, .cloak) creates the animated shadow cloak, which gives depth and movement behind the main text.

The .info section contains the error message, description, and a Home button (<a> link) to navigate back to the homepage.

This structure separates main visual content (404 animation) from informational content (message and navigation).



## CSS Code

```css
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Roboto:wght@100;300&display=swap");
:root {
  --button: #b3b3b3;
  --button-color: #0a0a0a;
  --shadow: #000;
  --bg: #737373;
  --header: #7a7a7a;
  --color: #fafafa;
  --lit-header: #e6e6e6;
  --speed: 2s;
}
* {
  box-sizing: border-box;
  transform-style: preserve-3d;
}
@property --swing-x {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
@property --swing-y {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
body {
  min-height: 100vh;
  display: flex;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  color: var(--color);
  perspective: 1200px;
}
a {
  text-transform: uppercase;
  text-decoration: none;
  background: var(--button);
  color: var(--button-color);
  padding: 1rem 4rem;
  border-radius: 4rem;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
}
p {
  font-weight: 100;
}
h1 {
  -webkit-animation: swing var(--speed) infinite alternate ease-in-out;
          animation: swing var(--speed) infinite alternate ease-in-out;
  font-size: clamp(5rem, 40vmin, 20rem);
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  margin-bottom: 1rem;
  letter-spacing: 1rem;
  transform: translate3d(0, 0, 0vmin);
  --x: calc(50% + (var(--swing-x) * 0.5) * 1%);
  background: radial-gradient(var(--lit-header), var(--header) 45%) var(--x) 100%/200% 200%;
  -webkit-background-clip: text;
  color: transparent;
}
h1:after {
  -webkit-animation: swing var(--speed) infinite alternate ease-in-out;
          animation: swing var(--speed) infinite alternate ease-in-out;
  content: "404";
  position: absolute;
  top: 0;
  left: 0;
  color: var(--shadow);
  filter: blur(1.5vmin);
  transform: scale(1.05) translate3d(0, 12%, -10vmin) translate(calc((var(--swing-x, 0) * 0.05) * 1%), calc((var(--swing-y) * 0.05) * 1%));
}
.cloak {
  animation: swing var(--speed) infinite alternate-reverse ease-in-out;
  height: 100%;
  width: 100%;
  transform-origin: 50% 30%;
  transform: rotate(calc(var(--swing-x) * -0.25deg));
  background: radial-gradient(40% 40% at 50% 42%, transparent, #000 35%);
}
.cloak__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.cloak__container {
  height: 250vmax;
  width: 250vmax;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.info {
  text-align: center;
  line-height: 1.5;
  max-width: clamp(16rem, 90vmin, 25rem);
}
.info > p {
  margin-bottom: 3rem;
}
@-webkit-keyframes swing {
  0% {
    --swing-x: -100;
    --swing-y: -100;
  }
  50% {
    --swing-y: 0;
  }
  100% {
    --swing-y: -100;
    --swing-x: 100;
  }
}
@keyframes swing {
  0% {
    --swing-x: -100;
    --swing-y: -100;
  }
  50% {
    --swing-y: 0;
  }
  100% {
    --swing-y: -100;
    --swing-x: 100;
  }
}

```

This is the core of the project — the animations, colors, and 3D illusion are entirely driven by modern CSS.

Here’s how it works:

Custom CSS Variables & @property:
The code defines --swing-x and --swing-y custom properties using the new @property feature, allowing smooth animation of CSS variables across keyframes.

Text Animation:
The <h1> “404” text uses:

radial-gradient for light reflection across the text.

Animated background shifting to simulate light moving.

A blurred duplicate (h1::after) acting as a shadow layer, slightly offset to create a glowing motion effect.

Cloak Animation:
The .cloak element rotates based on the --swing-x value, simulating a moving light cloak around the “404”.
The gradient background of the cloak darkens the edges and brightens the center to give a depth illusion.

Keyframes:
The @keyframes swing animation continuously updates --swing-x and --swing-y values, making both the text and cloak swing left-to-right and up-down in sync.

Typography & Layout:
The page uses flexbox for centering, Google Fonts for modern typography, and clamp() for responsive scaling of text and container sizes.

The result is a smooth swinging 3D animation entirely powered by CSS — no JavaScript motion required.
## Javascipt Code

```javascript
// 404

```

In this project, the JavaScript file (script.js) is included, but the animation itself is purely handled by CSS.
If used, the script may simply:

Handle navigation back to home.

Add interactivity (like showing extra messages or logging analytics).

Essentially, JavaScript is optional here — the main functionality relies on CSS-driven animations and @property transitions.