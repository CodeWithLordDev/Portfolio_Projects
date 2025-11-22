---
title: "Magic Animated Motion Button"
description: "This component is a visually appealing animated button that uses 3D geometric elements. On hover, the button scales up and geometric shapes (cone, torus, icosahedron, and sphere) appear and move around the button, creating a dynamic magic motion effect. The button also has a blurred gradient shadow that appears on hover, enhancing the 3D illusion."
image: "/Assets/data/images/Magic_Animated_button.png"
tags: ["CSS Animation", "HTML", "Magic", "Animated Button", "Frontend", "CodewithLord"]
author: "CodewithLord"
date: "2025-11-22"
---

## Husky Dog Animation CSS

This component is a visually appealing animated button that uses 3D geometric elements. On hover, the button scales up and geometric shapes (cone, torus, icosahedron, and sphere) appear and move around the button, creating a dynamic "magic motion" effect. The button also has a blurred gradient shadow that appears on hover, enhancing the 3D illusion.

---

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">

    <title>Magic Animated Motion Button | CodewithLord</title>
</head>
<body>

  <a href="#" class="button">
    <span class="button__text"> play </span>
    <img src="img/cone.png" alt="" class="button__cone" />
    <img src="img/torus.png" alt="" class="button__torus" />
    <img src="img/icosahedron.png" alt="" class="button__icosahedron" />
    <img src="img/sphere.png" alt="" class="button__sphere" />
  </a>

</body>
</html>
```
<br>
Explanation:
Place the following HTML inside your plain HTML page:

a class=button
span class=button__text play /span
img src=img/cone.png alt="" class=button__cone /
img src=img/torus.png alt="" class=button__torus /
img src=img/icosahedron.png alt="" class=button__icosahedron /
img src=img/sphere.png alt="" class=button__sphere /


<br>

## CSS Code

<br>

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap");

:root {
  --first-color: hsl(217, 75%, 80%);
  --body-color: hsl(211, 100%, 95%);
  
  --body-font: 'Montserrat Alternates', sans-serif;
  --normal-font-size: 1.25rem;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--body-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

a {
  text-decoration: none;
}

.button {
  position: relative;
  background-color: var(--first-color);
  color: #fff;
  padding: .9rem 2.20rem;
  border-radius: 3rem;
  transition: .4s;
}

.button::after {
  content: '';
  width: 80%;
  height: 40%;
  background: linear-gradient(80deg, 
            hsl(217, 80%, 80%) 10%, 
            hsl(217, 85%, 70%) 48%);
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  margin: 0 auto;
  border-radius: 3rem;
  filter: blur(12px);
  z-index: -1;
  opacity: 0;
  transition: opacity .4s;
}

.button__text {
  position: relative;
  z-index: 10;
}

.button img {
  position: absolute;
  inset: 0;
  margin: auto;
  pointer-events: none;
  transition: .6s;
  opacity: 0;
}

/* Move 3D geometric elements */
.button__cone {
  width: 18px;
  transform: translate(-25px, -6px) rotate(55deg);
  filter: blur(.5px);
}

.button__torus {
  width: 38px;
  transform: translate(7px, -14px) rotate(80deg);
}

.button__icosahedron {
  width: 36px;
  transform: translate(34px, -4px) rotate(-45deg);
  filter: blur(.9px);
}

.button__sphere {
  width: 30px;
  transform: translate(-5px, 15px) rotate(40deg);
}

/* View shadow gradient */
.button:hover::after {
  opacity: 1;
}

/* Button scale */
.button:hover {
  transform: scale(1.3);
}

/* View 3D geometric elements */
.button:hover img {
  opacity: 1;
}

.button:hover .button__cone {
  transform: translate(-38px, -10px) scale(1.2);
}

.button:hover .button__torus {
  transform: translate(7px, -32px) scale(1.1);
}

.button:hover .button__icosahedron {
  transform: translate(50px, -20px) scale(1.1);
}

.button:hover .button__sphere {
  transform: translate(-14px, 20px) scale(1.1);
}
```

<br>

## Explanation 

CSS Breakdown

Root Variables:

--first-color: main button color

--body-color: page background

--body-font: Montserrat Alternates

--normal-font-size: default font size

Button Base Styles:

Positioned relative for layering images.

Rounded with 3rem border-radius.

Smooth transition for scaling and hover effects.

Hover Shadow (button::after):

A blurred linear gradient appears underneath the button.

Controlled opacity transitions to appear on hover.

Geometric Elements (button img):

Positioned absolutely in the center of the button.

Initially invisible (opacity 0).

Each element has a unique transform (position, rotation, blur).

Hover Animation for Images:

On hover, images become visible and move to new positions.

Each shape scales slightly for extra depth.

Button Scale:

Entire button enlarges smoothly to 1.3 times its original size on hover.


## Magic Animated Motion Button Images

Here are the images used in the button:

![Cone](Assets/data/img/cone.png)
![Torus](Assets/data/img/torus.png)
![Icosahedron](Assets/data//icosahedron.png)
![Sphere](Assets/data/img/sphere.png)

