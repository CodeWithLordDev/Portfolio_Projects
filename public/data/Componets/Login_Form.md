---
title: "Animated Login Form with Glowing Input Effect"
description: "A modern dark-themed animated login form featuring glowing input fields, smooth focus animations, Font Awesome icons, and a clean UI built using pure HTML and CSS."
image: "/Assets/data/images/Login_Form.png"
tags: ["HTML", "CSS", "UI Design", "Login Form", "Animation"]
author: "CodewithLord"
date: "2026-01-20"
---

## 🧠 Description

This project presents a dark-themed animated login form designed using pure HTML and CSS, enhanced with glowing input effects and smooth transitions.

When users focus on input fields, a neon-green glow animation activates, providing instant visual feedback and a futuristic UI feel.
The layout is clean, centered, and minimal — ideal for modern dashboards, admin panels, and authentication screens.

The design uses Font Awesome icons, gradient backgrounds, and CSS keyframes to create an engaging yet lightweight login experience.

<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Animated Login Form with Glowing Input | CodewithLord</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  
  <div class="login-form">
    <div class="text">
      LOGIN
    </div>
    <form>
      <div class="field">
        <div class="fas fa-envelope"></div>
        <input type="text" placeholder="Email or Phone">
      </div>
      <div class="field">
        <div class="fas fa-lock"></div>
        <input type="password" placeholder="Password">
      </div>
      <button>LOGIN</button>
      <div class="link">
        Not a member?
        <a href="#">Signup now</a>
      </div>
    </form>
  </div>

</body>
</html>
```
<br>

## HTML Structure Explanation

.login-form acts as the main card container.

.text displays the form title.

Each .field wraps an icon and input together for aligned styling.

Font Awesome icons visually represent email and password fields.

A simple CTA button and signup link complete the authentication UI.

This structure keeps the markup semantic, clean, and easy to style.

<br>

## 🎨 CSS Code
<br>

```css
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #151515;
}

.login-form {
  position: relative;
  width: 370px;
  height: auto;
  background: #1b1b1b;
  padding: 40px 35px 60px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: inset 0 0 1px #272727;
}

.text {
  font-size: 30px;
  color: #c7c7c7;
  font-weight: 600;
  letter-spacing: 2px;
}

form {
  margin-top: 40px;
}

form .field {
  margin-top: 20px;
  display: flex;
}

.field .fas {
  height: 50px;
  width: 60px;
  color: #868686;
  font-size: 20px;
  line-height: 50px;
  border: 1px solid #444;
  border-right: none;
  border-radius: 5px 0 0 5px;
  background: linear-gradient(#333, #222);
}

.field input,
form button {
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 19px;
  color: #868686;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
  border: 1px solid #444;
  caret-color: #339933;
  background: linear-gradient(#333, #222);
}

input:focus {
  color: #339933;
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1);
  background: linear-gradient(#333933, #222922);
  animation: glow 0.8s ease-out infinite alternate;
}

@keyframes glow {
  0% {
    border-color: #339933;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 0, 0, 0.1);
  }

  100% {
    border-color: #6f6;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.6),
      inset 0 0 10px rgba(0, 255, 0, 0.4);
  }
}

button {
  margin-top: 30px;
  border-radius: 5px !important;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}

button:hover {
  color: #339933;
  border: 1px solid #339933;
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.3), 0 0 10px rgba(0, 255, 0, 0.2),
    0 0 15px rgba(0, 255, 0, 0.1), 0 2px 0 black;
}

.link {
  margin-top: 25px;
  color: #868686;
}

.link a {
  color: #339933;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}
```

<br>

## CSS Breakdown

Dark Theme

Uses dark gradients and subtle borders for a modern UI look.

Glowing Input Animation

@keyframes glow creates a pulsing neon effect on focus.

Enhances accessibility by clearly indicating active fields.

Icon Integration

Icons are styled as part of the input group for seamless alignment.

Hover & Focus States

Button hover effects and input focus styles add polish without JS.

The result is a smooth, visually rich login form powered entirely by CSS.