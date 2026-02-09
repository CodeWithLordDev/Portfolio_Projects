---
title: "Do You Love Me? – Interactive Valentine Web Animation"
description: "A playful Valentine-themed interactive web experience using HTML, CSS, and JavaScript where users try to click a moving 'No' button, a heart loader animation plays, and a cute reveal appears on saying Yes."
image: "/Assets/data/images/Love_Me_Valentine.png"
tags: ["HTML", "CSS", "JavaScript", "Valentine Project", "Interactive UI", "Frontend Animation"]
author: "CodewithLord"
date: "2026-02-09"
---

## 💖 Overview

This project is a **fun, interactive Valentine web animation** where the user is asked  
**“Do you love me?”**

- Clicking **No** becomes impossible because the button escapes the cursor  
- Clicking **Yes** triggers a **heart loader animation**
- After a short delay, a cute confirmation message with a video is revealed  

Perfect for:
- Valentine reels & shorts
- Beginner-friendly JavaScript projects
- Cute UI demos for portfolios

---

## 🧩 Code

### 🔹 HTML, CSS & JavaScript (Combined)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <title>Do you love me?</title>
</head>
<body>

<div class="question-container container">
<video class="local-gif" src="Reply me love.mp4" autoplay muted loop></video>
  <h2 class="question">Do you love me?</h2>
  <div class="button-container">
    <button class="yes-btn btn js-yes-btn">Yes</button>
    <button class="no-btn btn js-no-btn">No</button>
  </div>
</div>
<div class="result-container container">
  <video class="gif-result" src="Love me.mp4" autoplay loop></video>
  <h2>I knew it😍!</h2>
</div>

<div class="cssload-main">
  <div class="cssload-heart">
    <span class="cssload-heartL"></span>
    <span class="cssload-heartR"></span>
    <span class="cssload-square"></span>
  </div>
  <div class="cssload-shadow"></div>
</div>
<script src="script.js"></script>

</body>
</html>
```

<br>

### CSS Code

<br>

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: "Quicksand", sans-serif;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-100%, -50%);
  transition: 0.2s;
}

.question-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transition: 0.2s;
}
.local-gif {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  display: block;
  margin: 0 auto 3rem auto;
  pointer-events: none;
}
.question {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.btn {
  position: absolute;
  border: none;
  border-radius: 50px;
  padding: 14px 24px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #ff54a4;
  color: white;
  transform: scale(1.05);
  box-shadow: 0px 4px 15px
   rgba(255, 107, 129, 0.5);
}
.btn:hover {
  background-color: #ffa4b1;
  transform: scale(1.1);
  box-shadow: 0px 6px 20px rgba(255, 107, 129, 0.7);
  text-shadow: 1px 1px 5px rgba(255, 182, 193, 0.8);
}

.yes-btn {
  right: 54%;
}
.no-btn {
  left: 54%;
}

.result-container {
  display: none;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-100%, -50%);
  transition: 0.2s;
}
.gif-result {
  border-radius: 10px;
  margin-bottom: 2rem;
}
.result-container h2 {
  font-size: 3.2rem;
  text-align: center;
}

/* heart loader */
.cssload-main {
  display: none;
  position: absolute;
  content: "";
  top: 17%;
  left: 50%;
  margin: 200px auto 0 auto;
  transform: translate(-100%, -50%);
  -o-transform: translate(-100%, -240%);
  -ms-transform: translate(-100%, -240%);
  -webkit-transform: translate(-100%, -240%);
  -moz-transform: translate(-100%, -240%);
}

.cssload-main * {
  font-size: 62px;
}

.cssload-heart {
  animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  -o-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -ms-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -webkit-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -moz-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  top: 50%;
  content: "";
  left: 50%;
  position: absolute;
}

.cssload-heartL {
  width: 1em;
  height: 1em;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  content: "";
  position: absolute;
  display: block;
  border-radius: 100%;
  animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  -o-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -ms-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -webkit-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -moz-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  transform: translate(-28px, -27px);
  -o-transform: translate(-28px, -27px);
  -ms-transform: translate(-28px, -27px);
  -webkit-transform: translate(-28px, -27px);
  -moz-transform: translate(-28px, -27px);
}

.cssload-heartR {
  width: 1em;
  height: 1em;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  content: "";
  position: absolute;
  display: block;
  border-radius: 100%;
  transform: translate(28px, -27px);
  -o-transform: translate(28px, -27px);
  -ms-transform: translate(28px, -27px);
  -webkit-transform: translate(28px, -27px);
  -moz-transform: translate(28px, -27px);
  animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  -o-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -ms-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -webkit-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -moz-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
}

.cssload-square {
  width: 1em;
  height: 1em;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  position: relative;
  display: block;
  content: "";
  transform: scale(1) rotate(-45deg);
  -o-transform: scale(1) rotate(-45deg);
  -ms-transform: scale(1) rotate(-45deg);
  -webkit-transform: scale(1) rotate(-45deg);
  -moz-transform: scale(1) rotate(-45deg);
  animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  -o-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -ms-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -webkit-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -moz-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
}

.cssload-shadow {
  top: 97px;
  left: 50%;
  content: "";
  position: relative;
  display: block;
  bottom: -0.5em;
  width: 1em;
  height: 0.24em;
  background-color: rgb(215, 215, 215);
  border: 1px solid rgb(215, 215, 215);
  border-radius: 50%;
  animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  -o-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -ms-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -webkit-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
  -moz-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite
    normal;
}

@keyframes cssload-square {
  50% {
    border-radius: 100%;
    transform: scale(0.5) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(-45deg);
  }
}

@-o-keyframes cssload-square {
  50% {
    border-radius: 100%;
    -o-transform: scale(0.5) rotate(-45deg);
  }
  100% {
    -o-transform: scale(1) rotate(-45deg);
  }
}

@-ms-keyframes cssload-square {
  50% {
    border-radius: 100%;
    -ms-transform: scale(0.5) rotate(-45deg);
  }
  100% {
    -ms-transform: scale(1) rotate(-45deg);
  }
}

@-webkit-keyframes cssload-square {
  50% {
    border-radius: 100%;
    -webkit-transform: scale(0.5) rotate(-45deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(-45deg);
  }
}

@-moz-keyframes cssload-square {
  50% {
    border-radius: 100%;
    -moz-transform: scale(0.5) rotate(-45deg);
  }
  100% {
    -moz-transform: scale(1) rotate(-45deg);
  }
}

@keyframes cssload-heart {
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  }
}

@-o-keyframes cssload-heart {
  50% {
    -o-transform: rotate(360deg);
  }
  100% {
    -o-transform: rotate(720deg);
  }
}

@-ms-keyframes cssload-heart {
  50% {
    -ms-transform: rotate(360deg);
  }
  100% {
    -ms-transform: rotate(720deg);
  }
}

@-webkit-keyframes cssload-heart {
  50% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(720deg);
  }
}

@-moz-keyframes cssload-heart {
  50% {
    -moz-transform: rotate(360deg);
  }
  100% {
    -moz-transform: rotate(720deg);
  }
}

@keyframes cssload-heartL {
  60% {
    transform: scale(0.4);
  }
}

@-o-keyframes cssload-heartL {
  60% {
    -o-transform: scale(0.4);
  }
}

@-ms-keyframes cssload-heartL {
  60% {
    -ms-transform: scale(0.4);
  }
}

@-webkit-keyframes cssload-heartL {
  60% {
    -webkit-transform: scale(0.4);
  }
}

@-moz-keyframes cssload-heartL {
  60% {
    -moz-transform: scale(0.4);
  }
}

@keyframes cssload-heartR {
  40% {
    transform: scale(0.4);
  }
}

@-o-keyframes cssload-heartR {
  40% {
    -o-transform: scale(0.4);
  }
}

@-ms-keyframes cssload-heartR {
  40% {
    -ms-transform: scale(0.4);
  }
}

@-webkit-keyframes cssload-heartR {
  40% {
    -webkit-transform: scale(0.4);
  }
}

@-moz-keyframes cssload-heartR {
  40% {
    -moz-transform: scale(0.4);
  }
}

@keyframes cssload-shadow {
  50% {
    transform: scale(0.5);
    border-color: rgb(228, 228, 228);
  }
}

@-o-keyframes cssload-shadow {
  50% {
    -o-transform: scale(0.5);
    border-color: rgb(228, 228, 228);
  }
}

@-ms-keyframes cssload-shadow {
  50% {
    -ms-transform: scale(0.5);
    border-color: rgb(228, 228, 228);
  }
}

@-webkit-keyframes cssload-shadow {
  50% {
    -webkit-transform: scale(0.5);
    border-color: rgb(228, 228, 228);
  }
}

@-moz-keyframes cssload-shadow {
  50% {
    -moz-transform: scale(0.5);
    border-color: rgb(228, 228, 228);
  }
}
```

<br>

### Javascript Code

<br>

```javascript
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

```
<br>

### 🧠 Explanation of the Code
<br>

**🔹 HTML Structure**
<br>

Question container shows the video, question, and buttons

Result container stays hidden until the Yes button is clicked

Heart loader is a pure CSS animation shown during the delay
<br>

### 🎨 CSS Styling & Animation
<br>


Buttons use soft shadows and scaling for a playful feel

The No button is positioned absolutely to allow free movement

Heart loader is built using:

Circles + square

Rotation, scaling, and shadow animations
<br>


### ⚙️ JavaScript Logic
<br>

mouseover on No button randomly changes its position

Clicking Yes:

Hides the question

Shows heart loader

Reveals the result after 3 seconds
<br>

**✨ Features**
<br>

Cute Valentine UI 💕

Impossible-to-click “No” button 😈

Pure CSS heart loader animation ❤️

Beginner-friendly JavaScript logic

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
  <video src="/Assets/data/video/love me.mp4" alt="Love ME" />
  <video src="/Assets/data/video/Reply me love.mp4" alt="Reply me Love" />
</div>