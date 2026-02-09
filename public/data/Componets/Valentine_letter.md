---

title: "Interactive Valentine Letter Animation"
description: "A cute and interactive Valentine letter experience with an animated envelope, playful buttons, and a fun yes/no interaction using HTML, CSS, and JavaScript."
image: "/Assets/data/images/Valentine_letter.png"
tags: [HTML, CSS, JavaScript, Valentine, UI Animation, Fun Projects]
author: "CodewithLord"
date: "2026-02-09"
------------------

## ❤️ Overview
<br>

This project is a **cute interactive Valentine Letter animation** where the user first sees a pulsing envelope. Clicking it opens a letter window with an adorable cat GIF and a playful **Yes / No** interaction.

The **No** button avoids the cursor, while clicking **Yes** reveals a final Valentine message with animations. This type of UI is perfect for:
<br>

* Valentine reels & shorts
* Fun JavaScript projects
* Beginner-friendly animation demos
* Personal surprise websites

<br><br>

## 📦 Technologies Used
<br>

* HTML5 – Structure and layout
* CSS3 – Animations, transitions, layout styling
* JavaScript – Interaction logic and state handling
* Google Fonts – Pixel-style typography

<br><br>

## 🧩 Complete Code

<br>

### HTML
<br>

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <title>Valentine Letter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Aldrich&family=Pixelify+Sans:wght@400..700&display=swap"
      rel="stylesheet"
    />
    <title>Document</title>
  </head>
  <body>
    <!-- Envelope Screen -->
    <div id="envelope-container">
      <img src="envelope.png" alt="Envelope" id="envelope" />
      <p>♡ Letter for You ♡</p>
    </div>

    <!-- Letter Screen -->
    <div id="letter-container">
      <div class="letter-window">
        <h1 id="letter-title">Will you be my Valentine?</h1>

        <img src="cat_heart.gif" class="cat" id="letter-cat" />

        <div class="buttons" id="letter-buttons">
          <img src="yes.png" class="btn yes-btn" alt="Yes" />

          <div class="no-wrapper">
            <img src="no.png" class="btn no-btn" alt="No" />
          </div>
        </div>

        <p id="final-text" class="final-text" style="display: none">
          <strong>Valentine Date:</strong> Meow Restaurant at 7pm. Dress fancy!
        </p>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

```

<br><br>

### CSS
<br>

```css
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("heart-bg.jpg");
    font-family: "Pixelify Sans", sans-serif;
}

/* Envelope Screen */
#envelope-container {
    text-align: center;
    cursor:pointer;
}

@keyframes pulse {
    0% {
        transform:scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

#envelope{
    width: 200px;
    animation: pulse 1.5s infinite;
    cursor: pointer;
}

#letter-container{
    display: none;
    position:fixed;
    inset: 0;
    justify-content: center;
    align-items: center;
}

.letter-window{
    width: 90vw;
    max-width: 800px;
    aspect-ratio: 3/2;
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("window.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 12px;
    gap: 1px;
    padding-top: 180px;

    transform: scale(1.2);
    opacity: 0;
    transition: transform 0.6s ease, opacity 0.6s ease;
}

.letter-window.open {
    transform: scale(1);
    opacity: 1;
}

h1 {
    font-size: 30px;
    margin:0;
}

p {
    font-size: 40px;
}

/* Cat */

.cat {
    width: 250px;
    margin: 10px 0;
    transition: width 0.4s ease;
}

.letter-window.final .cat {
    width: 180px;
}

/* buttons */
.buttons {
    display: flex;
    justify-content: center;
    gap: 30px;
    position: relative;
}

.no-wrapper{
    position:relative;
}

.btn {
    width: 120px;
    cursor: pointer;
    user-select: none;
}

.yes-btn,
.no-btn {
width: 120px;
height: auto;
display: inline-block;
}

.yes-btn {
    position: relative;
    z-index: 2;
    transform-origin: center center;
    transition: transform 0.3s ease;
}

.no-btn {
    z-index: 1;
    position: relative;
    transition: transform 0.15s ease;
    cursor: default;
}

.final-text{
    font-size: 22px;
    line-height: 1.4;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(255,240,240,0.5);
    border-radius: 12px;
}
```

<br><br>

### JavaScript
<br>

```js
// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

```

<br><br>

## 🧠 How It Works
<br>

### Envelope Interaction
<br>

* A pulsing animation attracts the user
* Clicking the envelope reveals the letter with a scale-in animation

### No Button Logic
<br>

* The **No** button moves randomly on hover
* Uses trigonometry for natural movement
<br>

### Yes Button Result
<br>

* Updates heading text
* Changes the GIF
* Hides buttons
* Reveals final Valentine message

<br><br>

## ✨ Features
<br>

* Smooth CSS animations
* Fun and playful interaction
* Beginner-friendly JavaScript logic
* Fully responsive layout
* Perfect for Valentine surprise pages

<br><br>

## 🚀 Possible Enhancements
<br>

* Add background music toggle 🎵
* Confetti animation on YES 🎉
* Mobile vibration support
* Save YES state using localStorage

<br><br>


<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
  <img src="/Assets/data/img/cat_dance.gif" alt="cat dance" />
  <img src="/Assets/data/img/cat_heart.gif" alt="cat heart" />
  <img src="/Assets/data/img/envelope.png" alt="envelope" />
  <img src="/Assets/data/img/heart-bg.jpg" alt="heart background" />
  <img src="/Assets/data/img/no.png" alt="No" />
  <img src="/Assets/data/img/window.png" alt="Window" />
  <img src="/Assets/data/img/yes.png" alt="Yes" />
</div>