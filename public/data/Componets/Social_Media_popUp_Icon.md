---

title: "Social Media Icons Tooltip Hover Animation"
description: "A clean and modern social media icons UI with smooth tooltip popups using pure HTML and CSS. Perfect for portfolios, landing pages, and interactive UI demos."
image: "/Assets/data/images/Social_Media_popUp_Icon.png"
tags: [HTML, CSS, UI Design, Hover Effects, Tooltips, Social Media]
author: "CodewithLord"
date: "2026-02-09"
------------------

## 📌 Overview
<br>

This project showcases a **minimal yet elegant social media icons UI** where each icon reveals a smooth **tooltip popup on hover**. The interaction is lightweight, visually pleasing, and built using **pure HTML and CSS** — no JavaScript required.
<br>

It’s a great addition to:
<br>

* Portfolio websites
* Landing pages
* Footer social sections
* UI/UX micro-interaction demos

<br><br>

## 🧠 Core Concept
<br>

* Circular social media icons
* Tooltip that slides upward on hover
* Platform-specific brand colors
* Smooth cubic-bezier animations
* Fully responsive and lightweight

<br><br>

## 💻 Code
<br>

### HTML
<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Social Media Icons Popups | CodewithLord</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'>
  <link rel="stylesheet" href="./style.css">

</head>

<body>

  <ul class="wrapper">
    <li class="icon facebook">
      <span class="tooltip">Facebook</span>
      <span><i class="fab fa-facebook-f"></i></span>
    </li>
    <li class="icon twitter">
      <span class="tooltip">Twitter</span>
      <span><i class="fab fa-x-twitter"></i></span>
    </li>
    <li class="icon instagram">
      <span class="tooltip">Instagram</span>
      <span><i class="fab fa-instagram"></i></span>
    </li>
    <li class="icon github">
      <span class="tooltip">Github</span>
      <span><i class="fab fa-github"></i></span>
    </li>
    <li class="icon youtube">
      <span class="tooltip">Youtube</span>
      <span><i class="fab fa-youtube"></i></span>
    </li>
  </ul>

</body>

</html>
```

<br><br>

### CSS
<br>

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
  display: inline-flex;
  list-style: none;
  padding: 0;
}

.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877f2;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background: #222222;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #e4405f;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background: #833ab4;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background: #cd201f;
  color: #ffffff;
}
```

<br><br>

## 🔍 Explanation of the Code
<br>

### HTML Structure
<br>

* Uses an unordered list as the container
* Each list item represents a social platform
* Tooltip text is placed inside a `<span>`
* Font Awesome icons provide brand logos
<br>

### CSS Styling
<br>

* Flexbox centers everything perfectly
* Circular icons created using `border-radius: 50%`
* Tooltip positioned absolutely above the icon
* Custom cubic-bezier easing for playful motion
<br>

### Hover Interaction
<br>

* Tooltip moves upward and fades in
* Background and tooltip color switch to brand colors
* Small pseudo-element creates the tooltip arrow

<br><br>

## ✨ Key Features
<br>

* No JavaScript required
* Lightweight and fast
* Fully responsive
* Clean and reusable component
* Brand-accurate hover colors

<br><br>

## 📱 Use Cases
<br>

* Portfolio website footer
* Landing page social links
* UI animation demos
* Beginner CSS hover effect tutorials

<br><br>

## 🚀 Enhancement Ideas
<br>

* Add click ripple effect
* Convert to vertical layout
* Add dark mode support
* Animate icons individually

<br><br>
