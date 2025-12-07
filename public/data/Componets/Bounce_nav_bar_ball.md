---
title: "Elastic Nav Bounce – Liquid Glass Navigation Component."
description: "A futuristic, liquid-glass style navigation bar that features elastic bouncing animations, hover reactions, distortion effects, and smooth active-item transitions created using SVG filters, modern CSS, and JavaScript animation logic."
image: "/Assets/data/images/Bounce_nav_bar_ball.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-12-04"
---



## 🔥 Description

This component creates a stylish elastic bouncing navigation bar with a liquid glass effect, animated movement indicator, and smooth interaction based on mouse hover and click events. JavaScript handles the easing, the SVG filter creates the distortion wave, and CSS creates the frosted glass styling and layout.

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
    <title>Elastic Nav Bounce - Liquid Glass - ( hover jump )</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <header>
	<nav>
		<ul>
			<li><a href="#section1">Home</a></li>
			<li><a href="#section2">About</a></li>
			<li><a href="#section3">Services</a></li>
			<li><a href="#section4">Contact</a></li>
		</ul>
	</nav>
</header>
<section class="container" id="section1">
	<img src="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
</section>
<section class="container" id="section2">
	<img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
</section>
<section class="container" id="section3">
	<img src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
</section>
<section class="container" id="section4">
	<img src="https://images.unsplash.com/photo-1624696941338-934bf86c28b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
</section>

<svg style="display: none">
	<defs>
		<filter id="wave-distort" x="0%" y="0%" width="100%" height="100%">
			<feTurbulence
										type="fractalNoise"
										baseFrequency="0.0038 0.0038"
										numOctaves="1"
										seed="2"
										result="roughNoise"
										/>
			<feGaussianBlur in="roughNoise" stdDeviation="8.5" result="softNoise" />
			<feComposite
									 operator="arithmetic"
									 k1="0"
									 k2="1"
									 k3="2"
									 k4="0"
									 in="softNoise"
									 result="mergedMap"
									 />
			<feDisplacementMap
												 in="SourceGraphic"
												 in2="mergedMap"
												 scale="-42"
												 xChannelSelector="G"
												 yChannelSelector="G"
												 />
		</filter>
	</defs>
</svg>
    <script  src="./script.js"></script>

  </body>
  
</html>

```
<br>

### 🌐 1️⃣ HTML Explanation

The HTML provides the structure for the navigation effect and the full-page scrolling sections:

✔ Header & Navigation

The nav contains an ul list where each li holds a navigation link (a).
This simple list-based structure is used so JavaScript can easily measure each item’s position and animate the indicator under it.

✔ Sections

Four sections (#section1 to #section4) are placed vertically, each containing a full-screen image.
This is mainly for demonstrating smooth scrolling and navigation interactions.

✔ SVG Filter

A hidden svg section defines a "wave-distort" filter using:

feTurbulence

feGaussianBlur

feComposite

feDisplacementMap

This filter creates a distorted water/glass reflection effect, applied to the navigation bar using CSS backdrop-filter: url(#wave-distort).

✔ Script

" script src="./script.js"   loads the animation logic that controls the bouncing indicator.

<br><br>

## 🎨 CSS Code

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
html, body {
	scroll-behavior: smooth;
}
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: #000;
	color: #fff;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
nav {
	position: fixed;
	width: fit-content;
	inset-inline: 0px;
	margin: auto;
	margin-top: 30px;
	padding: 0 30px;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.5);
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 
		0 8px 32px rgba(0, 0, 0, 0.1),
		0 4px 16px rgba(0, 0, 0, 0.05);

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: url(#wave-distort);
	}
}

nav > ul {   
	position: relative;
	list-style: none;
	display: flex;
	justify-content: center;
	height: 55px;
	isolation: isolate;
	padding: 0 15px;
}
nav > ul::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 6px;
	width: 12px;
	height: 12px;
	background: white;
	border-radius: 50%;
	transform: translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate-x, 0deg));
	transition: none;
	opacity: 0;
	z-index: -1;
	box-shadow: 
		0 4px 16px rgba(255, 255, 255, 0.4),
		0 2px 8px rgba(255, 255, 255, 0.3),
		inset 0 1px 0 rgba(255, 255, 255, 0.8),
		inset 0 -1px 0 rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.6);
}
nav > ul li,
nav > ul li a {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1a1a1a;
	text-decoration: none;
	font-weight: bold;
	font-size: 0.95rem;
}
nav > ul li a {
	padding-inline: 20px;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
nav > ul li a:hover {
	color: #000000;
	transform: translateY(-2px);
}
nav > ul li a:focus {
	outline: none;
}
nav > ul li a.active {
	color: #000000;
	transform: translateY(-2px);
}
nav > ul.show-indicator::after {
	opacity: 1;
}
nav > ul li a:active {
	transform: translateY(-2px);
}
```

<br>

### 🎨 2️⃣ CSS Explanation

The CSS handles all visual appearance, layout behavior, and the liquid-glass effect.

✔ Global Reset

Resets margins, paddings, and enables smooth scrolling.

✔ Full-Screen Sections

.container is styled to fill the full viewport height with centered content.
Images use object-fit: cover to maintain quality across screen sizes.

✔ Frosted Glass Navigation

The nav is:

Centered horizontally

Given a blurred, semi-transparent, glass-like background

Surrounded by a soft shadow

Distorted using the custom SVG filter

This creates a "liquid glass" floating bar.

✔ Indicator Animation Styles

nav > ul::after creates the circular glowing indicator:

White glowing spot

Moves elastically based on CSS variables set by JavaScript

Appears only when .show-indicator is added

It visually "jumps" between items when hovered.

✔ Link Hover/Active Styles

Links:

Rise slightly upward when hovered

Become bold and darker

Have smooth cubic-bezier transitions for natural movement

✔ Responsive Glass

The nav uses overflow: hidden; and backdrop-filter so the distortion effect applies only inside the glass area.

<br>

## 🧠 JavaScript Code

```javascript
// Min/Max Slider
document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('nav > ul');
	const items = document.querySelectorAll('nav > ul li a');
	let anim = null;
	let currentActiveItem = null;

	const animate = (from, to) => {
		if (anim) clearInterval(anim);

		const start = Date.now();
		anim = setInterval(() => {
			const p = Math.min((Date.now() - start) / 500, 1);
			const e = 1 - Math.pow(1 - p, 3);

			const x = from + (to - from) * e;
			const y = -40 * (4 * e * (1 - e));
			const r = 200 * Math.sin(p * Math.PI);

			nav.style.setProperty('--translate-x', `${x}px`);
			nav.style.setProperty('--translate-y', `${y}px`);
			nav.style.setProperty('--rotate-x', `${r}deg`);

			if (p >= 1) {
				clearInterval(anim);
				anim = null;
				nav.style.setProperty('--translate-y', '0px');
				nav.style.setProperty('--rotate-x', '0deg');
			}
		}, 16);
	};

	const getCurrentPosition = () => parseFloat(nav.style.getPropertyValue('--translate-x')) || 0;

	const getItemCenter = (item) => {
		return item.getBoundingClientRect().left + item.offsetWidth / 2 - nav.getBoundingClientRect().left - 5;
	};

	const moveToItem = (item) => {
		const current = getCurrentPosition();
		const center = getItemCenter(item);
		animate(current, center);
		nav.classList.add('show-indicator');
	};

	const setActiveItem = (item) => {
		if (currentActiveItem) {
			currentActiveItem.classList.remove('active');
		}

		currentActiveItem = item;
		item.classList.add('active');
		moveToItem(item);
	};

	const handleMouseLeave = () => {
		if (currentActiveItem) {
			moveToItem(currentActiveItem);
		} else {
			nav.classList.remove('show-indicator');
			if (anim) clearInterval(anim);
		}
	};

	items.forEach(item => {
		item.addEventListener('mouseenter', () => moveToItem(item));
		item.addEventListener('mouseleave', handleMouseLeave);
		item.addEventListener('click', () => setActiveItem(item));
	});

	nav.addEventListener('mouseleave', handleMouseLeave);
	
	if (items.length > 0) {
		setTimeout(() => {
			setActiveItem(items[0]);
		}, 100);
	}
});
```

<br><br>

### ⚙️ 3️⃣ JavaScript Explanation

JavaScript is responsible for the elastic bounce animation and dynamic indicator movement.

✔ Element Selection

JavaScript selects:

The ul inside nav

All the a items

Stores active item state and animation control variables

✔ Custom Easing Animation

A custom animation loop moves the indicator using:

Cubic easing

Vertical bounce (-40 * (4 * e * (1 - e)))

Rotation effect (200 * Math.sin(p * Math.PI))

These create the "jump + bounce + spin" behavior of the indicator.

✔ getItemCenter()

Calculates the exact center of each menu item relative to the nav bar.
This ensures the indicator always aligns perfectly under each link.

✔ moveToItem()

Moves the indicator to the hovered or active item’s position by triggering the animation.

✔ setActiveItem()

Adds or removes the .active class to links, visually marking the selected section.

✔ Mouse Enter / Leave Events

On hover → indicator jumps
On leave → indicator returns to the last active item

✔ Initial Activation

On page load, the first item ("Home") automatically becomes active after a slight delay.