---

title: "Valentine Interactive Yes / No Button Animation"
description: "A fun and interactive Valentine UI where the No button runs away and the Yes button wins hearts. Perfect for reels, shorts, and beginner DOM practice."
image: "/Assets/Images/Be_My_valentine.png"
tags: ["HTML", "CSS", "JavaScript", "Valentine Animation", "DOM Manipulation", "UI Fun"]
author: "CodewithLord"
date: "2026-02-08"
------------------

## ❤️ Description

This Valentine project is a **playful interactive UI** where users are asked a simple question:

> **"Will you be my Valentine?"**

* Clicking **No** makes the button dodge the cursor 🏃‍♂️
* Clicking **Yes** fills the screen with love 💖

Perfect for:

* Instagram / YouTube Shorts
* Beginner JavaScript practice
* Fun portfolio additions

<br>

## 🧠 Core Concept

This project demonstrates:

* DOM manipulation
* Mouse events
* Button positioning logic
* Simple animations using CSS

No libraries. Pure **HTML + CSS + JavaScript**.

<br>

## 🧩 Complete Code (HTML + CSS + JS)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will You Be My Valentine?</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="gif_container">
            <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="Cute GIF">
        </div>
        <h1>Will you be my Valentine?</h1>
        <div class="buttons">
            <button class="yes-button" onclick="handleYesClick()">Yes</button>
            <button class="no-button" onclick="handleNoClick()">No</button>
        </div>
        
    </div>
    <script src="script.js"></script>
</body>
</html>
```

<br>

<br>

## CSS Code

<br>

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: white;
    font-family: "Nunito", sans-serif;
    flex-direction: column;
  }
  
  .container {
    text-align: center;
  }
  
  h1 {
    font-size: 2.5em;
    color: #d32f2f;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  .yes-button {
    font-size: 1.5em;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #fa0561;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .yes-button:hover{
    background-color: #e03777;
  }
  
  .no-button {
    font-size: 1.5em;
    padding: 10px 20px;
    background-color: #d3d3d3;
    color: black
    ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .gif_container img {
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
  }
```

<br>

## Javascript Code

<br>

```javascript
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
```

<br>

## Yes_Page.html Code

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Knew you would say yes!</title>
    <link rel="stylesheet" href="./yes_style.css">
</head>
<body>
    <div class="container">
        <h1 class="header_text">Knew you would say yes!</h1>
        <div class="gif_container">
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif">
        </div>
    </div>
</body>
</html>
```

<br>

## Yes_style.css code

<br>

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: white;
    font-family: "Nunito", sans-serif;
}

.container {
    text-align: center;
}

.header_text {
    font-size: 3em;
    color: #d32f2f;
}

.gif_container img {
    width: 300px; 
    max-width: 500px; 
    height: auto; 
}

```
<br>

## 🧱 HTML & CSS Breakdown

### HTML

* `.card` → main UI container
* Two buttons: **Yes** and **No**
* `.hearts` → container for floating hearts

### CSS

* Gradient background for romantic feel
* Rounded card with soft shadow
* `position:absolute` on **No** button for movement
* Floating hearts animation using `@keyframes`

<br>

## ⚙️ JavaScript Logic Explained

### 🏃 No Button Movement

* Triggered on `mouseover`
* Random X and Y position calculated
* Button jumps to a new location instantly

### 💖 Yes Button Effect

* On click, multiple heart elements are created
* Random position + animation duration
* Hearts float upward and disappear

<br>

## 🎯 Why This Project Works

* High engagement (user interaction)
* Funny + emotional
* Perfect for **short-form content**
* Very beginner-friendly

<br>

## 🚀 Ideas to Extend

* Add sound effect on Yes
* Replace text with emojis
* Convert to React component
* Add confetti instead of hearts

<br>

Happy Coding ❤️
<br>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
  <img src="/Assets/data/img/teddy_bear.gif" alt="teddy bear" />
  <img src="/Assets/data/img/teddy_bear_2.gif" alt="teddy Bear 2" />
</div>

