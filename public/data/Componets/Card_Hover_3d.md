---
title: "3D Hovering Tourist Cards"
description: "A visually engaging UI component that displays three tourist attraction cards with 3D perspective, tilt animations, hover effects, and color-themed gradients."
image: "/Assets/data/images/Card_Hover_3d.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-12-03"
---



## 🔥 Description

A visually engaging UI component that displays three tourist attraction cards with 3D perspective, tilt animations, hover effects, and color-themed gradients. Each card lifts up from a 3D transformed state to a flat, elevated display when hovered. Designed using HTML and CSS only.

<br>
<br>

## 🧠 How the Component Works

<br>

## 📄 HTML Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>hovering cards</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <div class="title">
  <h1><span style="color: #ff9f43">Tou</span><span style="color: #0abde3">rist</span> <span style="color: #ee5253">Attr</span><span style="color: #00d2d3">acti<span><span style="color: #5f27cd">ons<span></h1>
</div>
<div class="card1">
  <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="">
  <h3>Pyramids</h3>
  <p>The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt. As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.</p>
</div>

<div class="card2">
  <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="Eiffel Tower">
  <h3>Statue of Liberty</h3>
  <p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>
</div>

<div class="card3">
  <img src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png" alt="">
  <h3>Taj Mahal</h3>
  <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.</p>
</div>
<div class="footer">
</div>
    
  </body>
  
</html>


```
<br>

### 🌐 1️⃣ HTML Explanation

The HTML creates the structure for three tourist attraction cards and the title.

The document begins with the DOCTYPE declaration and sets the language to English. Inside the head section, metadata and a link to the external CSS file are defined. The body contains a main title inside a div where each part of the text is styled with a different color using inline span styling.

Below the title, there are three separate card containers named card1, card2, and card3. Each card contains an image tag for displaying the attraction, a heading for the site name, and a paragraph describing the location. These divs act as the base blocks that CSS later transforms into 3D hover cards.

At the end of the document, there is a footer div to reserve space for future footer text.

<br><br>

## 🎨 CSS Code

```css
@import url('https://fonts.googleapis.com/css?family=Exo:700');
@import url('https://fonts.googleapis.com/css?family=Abel');
body {
  background-color: #dfe6e9;
  -webkit-transform: perspective(900px);
  -webkit-transform-style: preserve-3d;
}
.title{
  width:100%;
  text-align: center;
}
.title h1{
  font-size:50px;
  font-family: 'Exo', sans-serif;
}
.card1 {
  text-align:center;
  position: absolute;
  left: 100px;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: linear-gradient(rgb(225,150,58),rgb(227,144,91));
  transition:.6s;
  
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(0,0,0, 0.5);
}
.card1:hover{
  transform: rotatex(0deg);
  transform: rotatez(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}
.card1 img{
  transform: translateY(15px);
  width:200px;
  height:120px;
}
h3{
  font-size:25px;
  font-family: 'Abel', sans-serif;
  color:rgb(255,255,255);
  text-shadow: 0 0 2px rgb(255,255,255);
  transform: translatey(10px);
}

p{
  
  font-family: 'Abel', sans-serif;
  color: white;
  text-align:center;
  width:220px;
  transform: translatex(12px);
}


.card2 {
  text-align:center;
  position: absolute;
  left: 550px;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: linear-gradient(rgb(93,94,170),rgb(93,66,103));
  animation: animate 1s linear infinite;
  transition:.6s;
  
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
}
.card2:hover{
   transform: rotatex(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}
.card2 img{
  transform: translateY(15px);
  width:180px;
  height:150px;
}
.card3 {
  text-align:center;
  position: absolute;
  left: 1000px;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: linear-gradient(#ff5252, #b33939);
  transition:.6s;
  
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
}
.card3:hover{
   transform: rotatex(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}
.card3 img{
  transform: translateY(15px);
  width:200px;
  height:120px;
}
.footer{
  position: absolute;
  top: 500px;
  marging: 10px;
  width: 100%;
   text-align: center;
}
.footer h2{
  font-size:18px;
  font-family: 'Exo', sans-serif;
  
}
```

<br>

### 🎨 2️⃣ CSS Explanation

The CSS begins by importing two Google Fonts, Exo and Abel, used for the title and card text. The body has a light gray background and is given 3D rendering properties using perspective and transform-style to enable the dramatic hover motion.

The title section centers the heading and applies large, bold typography.
Each card has absolute positioning to place them horizontally across the screen. The cards have a fixed width and height and use linear gradients for colorful backgrounds. A shadow is added to create depth.

To create the 3D effect, each card is rotated on the X-axis by 75 degrees and moved forward and upward using translateY and translateZ. This makes them appear as if they are lying flat in the distance.

On hover, the transform is reset to a 0-degree rotation, making the card stand upright. The transition smooths the animation, and the shadow is softened to give a glowing appearance. Each card uses slightly different styling and sizing for its images.
The second card has an infinite animation assigned, although no keyframes are defined in the provided code, meaning the animation has no visible effect until keyframes are added.

The global h3 heading and p text styles are applied to all cards. Text alignment, color, and spacing are adjusted to ensure readability against the gradient backgrounds.

The footer is positioned lower on the page with centered alignment.