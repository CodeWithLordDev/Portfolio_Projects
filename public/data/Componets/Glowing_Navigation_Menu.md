---
title: Glowing Navigation Menu with CSS Hover Effects
description: "A modern glowing navigation menu built using pure HTML and CSS, featuring neon hover animations, text stroke effects, and smooth color transitions."
image: "/Assets/data/images/Glowing_Navigation_Menu.png"
tags: [HTML, CSS, Navigation Menu, Hover Effects, Neon UI, Web Design, Animation]
author: "CodewithLord"
date: "2026-02-01"
---
<br>

# Glowing Navigation Menu
<br>

This component demonstrates a **stylish glowing navigation menu** using pure HTML and CSS, featuring:

- Neon glow hover animation  
- Text stroke + reveal effect  
- CSS variables for dynamic colors  
- Smooth transitions with modern UI feel  
- Fully responsive and lightweight  

<br>

## Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Glowing Navigation Menu | CodewithLord</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>

  <ul>
    <li style="--clr:#00ade1">
      <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
    </li>
    <li style="--clr:#ff6492">
      <a href="#" data-text="&nbsp;About">&nbsp;About&nbsp;</a>
    </li>
    <li style="--clr:#ffdd1c">
      <a href="#" data-text="&nbsp;Services">&nbsp;Services&nbsp;</a>
    </li>
    <li style="--clr:#00dc82">
      <a href="#" data-text="&nbsp;Blog">&nbsp;Blog&nbsp;</a>
    </li>
    <li style="--clr:#dc00d4">
      <a href="#" data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</a>
    </li>
  </ul>

</body>

</html>
```

<br>

## Explanation of the Code

# HTML & CSS

Simple semantic structure using `<ul>` and `<li>`for navigation.

**Google Font** Mochiy Pop One gives a playful, bold appearance.

Centered layout using Flexbox for perfect alignment.
<br>

## Glowing Text Effect

Text is initially transparent with a white stroke using -webkit-text-stroke.

The glowing color is revealed using the ::before pseudo-element.

width: 0 → 100% animation creates a smooth text-reveal effect.

CSS Variables

Each menu item defines its own color using --clr.

Allows easy customization without modifying CSS rules.
<br>

## Hover Animation

<br>

Border-right simulates a typing cursor effect.

drop-shadow() adds neon glow on hover.

Smooth transition: 1s for premium UI feel.

Responsive Behavior

Font scales naturally on different screen sizes.

<br>

## CSS code

```css
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Mochiy Pop One', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #252839;
}

ul {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

ul li {
  position: relative;
  list-style: none;
}

ul li a {
  font-size: 4em;
  text-decoration: none;
  letter-spacing: 2px;
  line-height: 1em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
}

ul li a::before {
  content: attr(data-text);
  position: absolute;
  color: var(--clr);
  width: 0;
  overflow: hidden;
  transition: 1s;
  border-right: 8px solid var(--clr);
  -webkit-text-stroke: 1px var(--clr);
}

ul li a:hover::before {
  width: 100%;
  filter: drop-shadow(0 0 25px var(--clr))
}

```


No JavaScript required — lightweight and performant.

