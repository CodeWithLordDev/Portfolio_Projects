---
title: "Frankenstein’s Monster Toggle Switch | CSS Halloween-Themed Interactive Button"
description: "This project creates a Frankenstein-inspired toggle switch using pure HTML and CSS, without any JavaScript."
image: "/Assets/data/images/Halloween_button.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-10-14"
---



## 🧠 Description
This project creates a Frankenstein-inspired toggle switch using pure HTML and CSS, without any JavaScript.
The switch visually transforms between states (ON/OFF) with animated facial movements, glowing colors, and clever use of CSS gradients.
It’s a creative example of how advanced CSS features like custom properties, gradients, and pseudo-elements can be used to draw complex artwork and interactivity directly in the browser.


<br>



## 💻 HTML Code
<br>


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodewithLord - Playful Todo List Animation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="todo-container">
    <div class="todo-item">
      <input type="checkbox" id="item1" class="checkbox">
      <label for="item1">Code in Assembly 💾</label>
      <svg class="line" width="340" height="32" viewBox="0 0 340 32">
        <path
          d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36"
          stroke="#111"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
      </svg>
    </div>

    <div class="divider"></div>

    <div class="todo-item">
      <input type="checkbox" id="item2" class="checkbox">
      <label for="item2">Present a bug as a feature 🪲</label>
      <svg class="line" width="340" height="32" viewBox="0 0 340 32">
        <path
          d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36"
          stroke="#111"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
      </svg>
    </div>

    <div class="divider"></div>

    <div class="todo-item">
      <input type="checkbox" id="item3" class="checkbox">
      <label for="item3">Push to prod on a Friday 🚀</label>
      <svg class="line" width="340" height="32" viewBox="0 0 340 32">
        <path
          d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36"
          stroke="#111"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
<br>



Container: "div class="todo-container"" wraps all tasks in a card-like box.

To-Do Item: Each task has a checkbox, label, and SVG line "(path)" below it.

SVG Path: The curvy path simulates a playful hand-drawn strike-through effect.

Divider:" div class="divider" div" separates each task for better readability.
<br>


## CSS Code
<br>


```css
body {
  background: #000000;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.todo-container {
  background: #fff;
  border-radius: 16px;
  padding: 20px 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 380px;
}

.todo-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #007bff;
}

.line {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.line path {
  stroke-dasharray: 700;
  stroke-dashoffset: 700;
  transition: stroke-dashoffset 1s ease-in-out, opacity 0.3s ease;
  opacity: 0;
}

.checkbox:checked ~ .line path {
  stroke-dashoffset: 0;
  opacity: 1;
}

.divider {
  border-top: 1px solid #ccc;
  margin: 15px 0;
}

```
<br>


Body Styling: Centers the list on a dark background.

Container: White rounded box with shadow for clean contrast.

Checkbox: Uses accent-color to apply a custom blue tick color.

SVG Line: Initially invisible (opacity: 0 and stroke-dashoffset: 700), then animates to visible when checked.

Transition: Creates a smooth “line-drawing” effect when toggled.

Divider: Adds a subtle line between tasks for visual spacing.
<br>


## Javascipt Code
<br>


```javascript
document.querySelectorAll('.checkbox').forEach((checkbox) => {
  const path = checkbox.parentElement.querySelector('.line path');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      path.style.strokeDashoffset = '0';
      path.style.opacity = '1';
    } else {
      path.style.strokeDashoffset = '700';
      path.style.opacity = '0';
    }
  });
});

```
<br>


Selector: Targets every element with the .checkbox class.

Path Reference: Finds the SVG "path" inside the same todo item.

Event Listener: When checkbox state changes (checked or not):

strokeDashoffset = 0: draws the line across the label.

strokeDashoffset = 700: hides it again when unchecked.

Opacity: Smoothly fades in or out the line for extra polish.