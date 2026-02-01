---
title: Rock Paper Scissors Game using HTML, CSS & JavaScript
description: "A fun and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript, featuring animated hand effects, smooth UI transitions, and real-time game logic."
image: "/Assets/data/images/Rock_Paper_Scissors_Game.png"
tags: [HTML, CSS, JavaScript, Game Development, Rock Paper Scissors, Animation, Beginner Project]
author: "CodewithLord"
date: "2026-02-01"
---
<br>

# Rock Paper Scissors Game
<br>

This component demonstrates a **classic Rock Paper Scissors game** built using pure front-end technologies, featuring:

- Interactive user vs CPU gameplay  
- Animated hand-shake effect before result  
- Dynamic image switching  
- Clean and responsive UI  
- Simple yet effective game logic  

<br>

## Code

```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Rock Paper Scissors Game</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<section class="container">
  <div class="result_field">
    <div class="result_images">
      <span class="user_result">
        <img src="images/rock.png" alt="Rock Image" />
      </span>
      <span class="cpu_result">
        <img src="images/rock.png" alt="Rock Image" />
      </span>
    </div>
    <div class="result">Let's Play!!</div>
  </div>

  <div class="option_images">
    <span class="option_image">
      <img src="images/rock.png" alt="Rock Image" />
      <p>Rock</p>
    </span>
    <span class="option_image">
      <img src="images/paper.png" alt="Paper Image" />
      <p>Paper</p>
    </span>
    <span class="option_image">
      <img src="images/Scissors.png" alt="Scissors Image" />
      <p>Scissors</p>
    </span>
  </div>
</section>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>
```

<br>

## CSS code

<br>

```css
/* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #14171e;
}
::selection {
  color: #fff;
  background-color: #000;
}
.container {
  padding: 2rem 7rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
}
.result_images {
  display: flex;
  column-gap: 7rem;
}
.container.start .user_result {
  transform-origin: left;
  animation: userShake 0.7s ease infinite;
}
@keyframes userShake {
  50% {
    transform: rotate(10deg);
  }
}

.container.start .cpu_result {
  transform-origin: right;
  animation: cpuShake 0.7s ease infinite;
}
@keyframes cpuShake {
  50% {
    transform: rotate(-10deg);
  }
}
.result_images img {
  width: 100px;
}
.user_result img {
  transform: rotate(90deg);
}
.cpu_result img {
  transform: rotate(-90deg) rotateY(180deg);
}
.result {
  text-align: center;
  font-size: 2rem;
  color: #de0d64;
  margin-top: 1.5rem;
}

.option_image img {
  width: 50px;
}
.option_images {
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  justify-content: space-between;
}
.container.start .option_images {
  pointer-events: none;
}
.option_image {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.option_image:hover {
  opacity: 1;
}
.option_image.active {
  opacity: 1;
}
.option_image img {
  pointer-events: none;
}
.option_image p {
  color: #3477eb;
  font-size: 1.235rem;
  margin-top: 1rem;
  pointer-events: none;
}
```

<br>

## Explanation of the Code
<br>

**HTML & CSS**

Structured layout using semantic containers.

Google Font Poppins for a clean, modern look.

Flexbox used for alignment and spacing.
<br>

**Game UI**

<br>

Separate areas for results, player hand, and CPU hand.

Option buttons with icons and labels.

Active state highlights selected option.
<br>

**Animations**
<br>
Hand shake animation before result display.

CSS keyframes create realistic movement.

Disabled interaction during animation phase.

## Javascript Code

<br>

```javascript
// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src =
      "http://codingstella.com/wp-content/uploads/2024/01/download.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "http://codingstella.com/wp-content/uploads/2024/01/download.png",
        "http://codingstella.com/wp-content/uploads/2024/01/download-1.png",
        "http://codingstella.com/wp-content/uploads/2024/01/download-2.png"
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User"
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
```
<br>

## JavaScript Logic
<br>

Handles user input and CPU random selection.

Maps outcomes using a simple object-based logic table.

Updates images and result text dynamically.
<br>

**Gameplay Flow**
<br>
User selects Rock, Paper, or Scissors

Animation starts (Wait...)
<br>

**CPU randomly chooses**
<br>
Winner is calculated and displayed

Responsive Behavior

Automatically adapts to different screen sizes.

No external libraries required.

Lightweight and beginner-friendly project.

<br>
<br>

<div style="
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
">
  <img src="/Assets/data/imag/rock.png" alt="Preview Image 1" style="width:100%; border-radius:12px;" />
  <img src="/Assets/data/imag/paper.png" alt="Preview Image 2" style="width:100%; border-radius:12px;" />
  <img src="/Assets/data/imag/scissors.png" alt="Preview Image 3" style="width:100%; border-radius:12px;" />
</div>
