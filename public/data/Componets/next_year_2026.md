---
title: "3D Year Flip Animation – CSS Hover Transition (2025 → 2026)"
description: "A pure HTML & CSS 3D hover animation that visually flips the year from 2025 to 2026 using perspective transforms, layered pseudo-elements, and cinematic hover effects."
image: "/Assets/data/images/next_year_2026.png"
tags: ["HTML", "CSS", "3D Animation", "Hover Effects", "Creative UI", "Pure CSS", "Typography"]
author: "CodewithLord"
date: "2026-01-04"
---

<br>

## 🧠 Description

<br>

This project is a **pure HTML + CSS interactive 3D year transition** that visually transforms **2025 → 2026** on hover.  
It uses **CSS perspective**, **3D transforms**, **pseudo-elements**, and **hover choreography** to create a tactile flip-card illusion — without JavaScript.

<br>

The animation feels:
- Physical 🧱  
- Cinematic 🎥  
- Playful ✨  

Perfect for:
- New Year landing pages  
- Hero animations  
- Creative portfolios  
- CSS experiments  

<br>

---

<br>

## ✨ Key Features

<br>

- 🎯 Pure HTML & CSS (no JavaScript)
- 🧊 3D perspective & depth illusion
- 🔄 Digit morphing using `::after` & `::before`
- 🖱️ Hover-triggered choreography
- 💥 Bounce micro-interaction
- 🌑 Full background takeover using `:has()`

<br>

---

<br>

## 🧱 HTML Structure

<br>

### Core Markup

<br>

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>next year --&gt; 2025 --&gt; 2026</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <ul>
  <li>2</li>
  <li>0</li>
  <li>2</li>
  <li>5</li>
</ul>
    
  </body>
  
</html>

```

<br>
HTML Breakdown
<br>

``<ul>`` → Container acting as a 3D stage

``<li>`` → Each digit as an independent 3D card

No wrappers, no scripts — minimal & semantic

<br>
<br>

## 🎨 CSS – Visual Design & Layout
<br>

### Base Styling
<br>

```css
body {
  height: 100%;
  margin: 0px;
  background: #222;
  color: #fff;
  font-family: "Google Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  position: relative;
  transition: all 0.3s ease;
}
body:after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  position: absolute;
  background: #111;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease, background 0.9s ease;
}

ul {
  display: flex;
  font: bold 270px/250px "Google Sans";
  margin: 5% auto 0px auto;
  width: auto;
  border: solid 20px transparent;
  max-width: 685px;
  cursor: pointer;
  position: relative;
  perspective: 2000px;
  z-index: 99;
}
ul * {
  transform-style: preserve-3d;
}
ul > li {
  z-index: inherit;
  list-style: none;
  background: #b30000;
  display: block;
  width: 150px;
  height: 100%;
  margin-right: -30px;
  position: relative;
  perspective: 300px;
  box-shadow: 0px 0px 30px #111;
  overflow: hidden;
  transform: rotateY(-10deg) translateZ(0px) rotate(-6deg);
  transition: all 0.3s ease;
}
ul > li:after {
  content: "2";
  background: #ff0505;
  position: absolute;
  top: -200px;
  left: 150px;
  display: block;
  width: 150px;
  height: 100%;
  transition: all 0.3s ease;
}
ul > li:nth-child(4) {
  overflow: Hidden;
}
ul > li:nth-child(4):before {
  content: "6";
  background: #ff0505;
  position: absolute;
  top: -200px;
  right: 150px;
  display: block;
  width: 150px;
  height: 100%;
  transition: all 0.3s ease;
  z-index: 999999;
}
ul > li:nth-child(even) {
  background: red;
  background: burgundy;
  transform: rotateY(-10deg) rotate(7deg);
}
ul > li:nth-child(even):after {
  background: #ff4d4d;
  text-shadow: 0px 0px 30px #ff3333;
}
ul > li:nth-child(2):after {
  content: "0";
}
ul > li:nth-child(4):after {
  mix-blend-mode: normal;
  content: "5";
}

ul:hover {
  transform: scale(1.08);
  transition: transform 0.3s ease-in;
}
ul:hover > li {
  margin-right: 15px;
  overflow: visible;
  box-shadow: 0px 0px 30px #9e0000;
  transform: rotateY(0deg) rotate(0deg);
  transition: all 0.2s ease, transform 0.3s ease-in;
  animation: bounce 0.1s linear;
  animation-iteration-count: 2;
}
ul:hover > li:after {
  top: 0px;
  left: 0px;
  transition: all 0.2s ease, left 0.3s ease;
}
ul:hover > li:nth-child(4) {
  overflow: hidden;
}
ul:hover > li:nth-child(4):before {
  top: 0px;
  right: 0px;
  background: #ff1a1a;
  transition: top 0.6s ease, right 0.3s ease;
  transition-delay: 0.25s;
}
ul:hover > li:nth-child(1) {
  animation-delay: 0.1s;
}
ul:hover > li:nth-child(1):after {
  transition-delay: 0.03s;
}
ul:hover > li:nth-child(2) {
  animation-delay: 0.2s;
}
ul:hover > li:nth-child(2):after {
  transition-delay: 0.05s;
}
ul:hover > li:nth-child(3) {
  animation-delay: 0.25s;
}
ul:hover > li:nth-child(3):after {
  transition-delay: 0.05s;
}
ul:hover > li:nth-child(4) {
  animation-delay: 0.3s;
}
ul:hover > li:nth-child(4):after {
  transition-delay: 0.08s;
}

body:has(ul:hover) {
  overflow: hidden;
}
body:has(ul:hover):after {
  width: 100%;
  height: 100%;
  min-height: 200vh;
  background: #b30000;
  transition: all 0.4s ease, width 0.5s ease, background 0.8s ease;
}

@keyframes bounce {
  0% {
    margin-top: -4px;
  }
  80% {
    margin-top: 2px;
  }
  100% {
    margin-top: 0px;
  }
}
```

<br>

Dark cinematic background

Smooth transitions for full-scene effects

Google Sans for modern typography

<br>