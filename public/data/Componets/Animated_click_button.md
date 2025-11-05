---
title: "Animated Success Button — Smooth Loading & Checkmark Transition"
description: "A modern animated button built using HTML, CSS, and JavaScript that visually transitions through three states — idle, loading, and success."
image: "/Assets/data/images/Animated_click_button.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
A modern animated button built using HTML, CSS, and JavaScript that visually transitions through three states — idle, loading, and success.
When clicked, the button replaces its text with a spinning loader animation, simulating a background process (like a form submission). After a short delay, the loader switches to a success checkmark before returning to its original state.


␣␣

## 💻 HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodewithLord - Animated Button</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<button class="animated-button" id="animatedButton">
  <div class="button-content">
    <svg class="loader" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 3a9 9 0 1 0 9 9"/>
    </svg>

    <svg class="check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 12l2 2l4 -4"/>
    </svg>

    <span class="button-text">Click Me</span>
  </div>
</button>

<script src="script.js"></script>
</body>
</html>

```


HTML Structure Explanation

The HTML defines a single button element with the class animated-button.
Inside it, there’s a wrapper <div> called button-content, which holds three main elements:

Loader SVG: A circular stroke animation that rotates to represent “loading”.

Checkmark SVG: A success indicator shown after loading completes.

Text span: Displays the default button label ("Click Me").

The SVG icons are scalable vector graphics — they allow for crisp animations without external image files.

The JavaScript manipulates these inner elements dynamically to switch between states.




## CSS Code

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
}

.animated-button {
  background-color: #22c55e;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  position: relative;
  font-family: sans-serif;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.loader, .check {
  width: 0;
  height: 24px;
  display: none;
  transform: scale(0.5);
}

/* Rotate animation for loader */
@keyframes rotate {
  0% { transform: rotate(0deg) scale(0.5); }
  100% { transform: rotate(360deg) scale(0.5); }
}


```

Body Setup

The body uses Flexbox to center the button both vertically and horizontally.

The background is dark (#121212), giving the button contrast and focus.

Button Styling

The button has:

A green background (#22c55e — Tailwind’s “emerald” tone).

White text for contrast.

A pill shape achieved via a large border-radius (9999px).

Padding, bold font, and spacing between inner elements.

It uses inline-flex to align the icons and text horizontally.

Inner Elements

The .button-content is a flex container that holds the loader, checkmark, and text neatly aligned.

The .loader and .check are hidden by default (display: none and width: 0).

Both start at a scaled-down size (0.5) for a subtle effect.

Animations

The @keyframes rotate animation rotates the loader 360° infinitely while keeping it scaled down.

This rotation gives the visual cue that a process is happening.

Visual Flow

Initially: Only text ("Click Me") is visible.

During loading: The loader appears, spinning beside the faded text.

On success: The loader disappears, replaced by the checkmark icon.

After a short delay: The checkmark fades out, and the button resets to its initial look.




## Javascipt Code

```javascript
const button = document.getElementById("animatedButton");
const loader = button.querySelector(".loader");
const check = button.querySelector(".check");
const text = button.querySelector(".button-text");

async function animateLoading() {
  loader.style.display = "block";
  loader.style.width = "24px";
  loader.style.animation = "rotate 0.6s linear infinite";
  text.style.opacity = "0.5";
}

async function animateSuccess() {
  loader.style.display = "none";
  loader.style.animation = "";

  check.style.display = "block";
  check.style.width = "36px";   // increased from 24px
  check.style.height = "36px";  // added height

  setTimeout(() => {
    check.style.display = "none";
    text.style.opacity = "1";
  }, 2000); 
}

button.addEventListener("click", async () => {
  await animateLoading();

  // Simulate async action (e.g., form submission)
  setTimeout(async () => {
    await animateSuccess();
  }, 1000);
});

```





The JavaScript controls the state transitions of the button.

Element Selection

The script first grabs references to the button, loader, checkmark, and text.

animateLoading() Function

Triggered immediately after a click.

It:

Displays the loader (display: block).

Sets its width to 24px and starts the infinite rotation animation.

Fades the text slightly (opacity: 0.5) to show that the action is in progress.

animateSuccess() Function

Called after a short delay to represent a completed action.

It:

Hides the loader and removes its rotation animation.

Displays the checkmark, enlarging it for emphasis (36px size).

After 2 seconds, hides the checkmark and restores the text opacity to full (1), resetting the button.

Click Event Listener

When the button is clicked:

It runs animateLoading().

Waits for 1 second (simulating a process such as an API call).

Then runs animateSuccess() to show the checkmark feedback.

Smooth User Experience

The timing (1000ms load, 2000ms success display) ensures users clearly see each phase.

These async animations mimic real-world processes like saving data or submitting forms.