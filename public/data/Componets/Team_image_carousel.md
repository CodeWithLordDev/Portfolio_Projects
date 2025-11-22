---
title: "3D Team Carousel with Scroll and Swipe Animation using HTML, CSS, and JavaScript"
description: "Build a stunning 3D team carousel that lets users scroll, click, or swipe through team members with smooth animations."
image: "/Assets/data/images/Team_image_carousel.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-10-24"
---



## 🧠 Description
Build a stunning 3D team carousel that lets users scroll, click, or swipe through team members with smooth animations. This project uses only HTML, CSS, and JavaScript — no frameworks — featuring depth effects, transitions, and adaptive mobile controls.


<br>


## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Team Carousel - by CodewithLord</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Carousel</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="main-container">
        <div class="carousel-section">
            <div class="carousel-container">
                <button class="nav-arrow up">
                    <img src="assets/top.png" alt="Up">
                </button>
                <div class="carousel-track">
                    <div class="card" data-index="0">
                        <img src="https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg?updatedAt=1754289569411" alt="Team Member 1">
                    </div>
                    <div class="card" data-index="1">
                        <img src="https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg?updatedAt=1754289569307" alt="Team Member 2">
                    </div>
                    <div class="card" data-index="2">
                        <img src="https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg?updatedAt=1754289569398" alt="Team Member 3">
                    </div>
                    <div class="card" data-index="3">
                        <img src="https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg?updatedAt=1754289569422" alt="Team Member 4">
                    </div>
                    <div class="card" data-index="4">
                        <img src="https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg?updatedAt=1754289569406" alt="Team Member 5">
                    </div>
                    <div class="card" data-index="5">
                        <img src="https://ik.imagekit.io/gopichakradhar/luffy/o6.jpeg?updatedAt=1754289569438" alt="Team Member 6">
                    </div>
                </div>
                <button class="nav-arrow down">
                    <img src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" alt="Down">
                </button>
            </div>
        </div>

        <div class="controls-section">
            <div class="nav-controls">
                <button class="nav-arrow up">
                    <img src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" alt="Up">
                </button>
                <button class="nav-arrow down">
                    <img src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" alt="Down">
                </button>
            </div>

            <div class="member-info">
                <h2 class="member-name">Emily Kim</h2>
                <p class="member-role">Founder</p>
            </div>

            <div class="dots">
                <div class="dot active" data-index="0"></div>
                <div class="dot" data-index="1"></div>
                <div class="dot" data-index="2"></div>
                <div class="dot" data-index="3"></div>
                <div class="dot" data-index="4"></div>
                <div class="dot" data-index="5"></div>
            </div>
        </div>
    </div>

<script src="scripts.js"></script>
  <!-- Floating button with image -->

</body>
</html>
    <script  src="./script.js"></script>

  </body>
  
</html>

```
<br>


The HTML defines two main sections inside .main-container:

carousel-section — holds the rotating stack of cards (each showing a team member image).

controls-section — displays navigation arrows, team member details (name & role), and pagination dots.

Each .card in .carousel-track represents a team member’s image, and the structure ensures only one card is centered at a time.
The buttons (.nav-arrow.up and .nav-arrow.down) and .dot elements are connected to the carousel for navigation control.

<br>


## CSS Code
<br>

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
/* Floating image button styles */
#super-btn {
    position: fixed;
    right: 32px;
    bottom: 32px;
    z-index: 1000;
    display: inline-block;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    width: 56px;
    height: 56px;
    background: #fff;
    transition: box-shadow 0.2s, transform 0.2s;
}
#super-btn:hover {
    box-shadow: 0 4px 24px rgba(0,0,0,0.28);
    transform: scale(1.07);
}
#super-btn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    display: block;
}
body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	overflow: hidden;
	scroll-behavior: smooth;
	margin: 0;
	padding: 20px 0;
}

.main-container {
	display: flex;
	width: 100%;
	max-width: 1200px;
	height: 80vh;
	gap: 60px;
	align-items: center;
	justify-content: center;
}

.carousel-section {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.controls-section {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	padding-left: 40px;
}

.carousel-container {
	width: 100%;
	max-width: 500px;
	height: 70vh;
	position: relative;
	perspective: 1000px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.carousel-container .nav-arrow {
	display: none;
}

.carousel-track {
	width: 450px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card {
	position: absolute;
	width: 400px;
	height: 225px;
	background: white;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	cursor: pointer;
}

.card img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card.center {
	z-index: 10;
	transform: scale(1.1) translateZ(0);
}

.card.center img {
	filter: none;
}

.card.up-2 {
	z-index: 1;
	transform: translateY(-300px) scale(0.8) translateZ(-300px);
	opacity: 0.7;
}

.card.up-2 img {
	filter: grayscale(100%);
}

.card.up-1 {
	z-index: 5;
	transform: translateY(-150px) scale(0.9) translateZ(-100px);
	opacity: 0.9;
}

.card.up-1 img {
	filter: grayscale(100%);
}

.card.down-1 {
	z-index: 5;
	transform: translateY(150px) scale(0.9) translateZ(-100px);
	opacity: 0.9;
}

.card.down-1 img {
	filter: grayscale(100%);
}

.card.down-2 {
	z-index: 1;
	transform: translateY(300px) scale(0.8) translateZ(-300px);
	opacity: 0.7;
}

.card.down-2 img {
	filter: grayscale(100%);
}

.card.down-2 img {
	filter: grayscale(100%);
}

.card.hidden {
	opacity: 0;
	pointer-events: none;
}

.member-info {
	text-align: center;
	margin-top: 20px;
	transition: all 0.5s ease-out;
}

.member-name {
	color: rgb(8, 42, 123);
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 8px;
	position: relative;
	display: inline-block;
}

.member-name::before,
.member-name::after {
	content: "";
	position: absolute;
	top: 100%;
	width: 80px;
	height: 2px;
	background: rgb(8, 42, 123);
}

.member-name::before {
	left: -100px;
}

.member-name::after {
	right: -100px;
}

.member-role {
	color: #848696;
	font-size: 1.2rem;
	font-weight: 500;
	opacity: 0.8;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	padding: 5px 0;
	margin-top: -10px;
	position: relative;
}
.dots {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 30px;
}

.dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: rgba(8, 42, 123, 0.2);
	cursor: pointer;
	transition: all 0.3s ease;
}

.dot.active {
	background: rgb(8, 42, 123);
	transform: scale(1.2);
}

.nav-arrow {
	position: relative;
	background: transparent;
	color: white;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 20;
	transition: all 0.3s ease;
	font-size: 1.5rem;
	border: none;
	outline: none;
	margin: 0;
	padding: 0;
	overflow: visible;
	box-shadow: none;
}

.nav-arrow:hover {
	background: transparent;
	transform: scale(1.2);
	box-shadow: none;
	border-color: transparent;
}

.nav-arrow img {
	width: 60px;
	height: 60px;
	object-fit: contain;
	filter: none;
	transition: all 0.3s ease;
}

.nav-arrow:hover img {
	filter: none;
	transform: scale(1.1);
}

.nav-arrow.up {
	transform: none;
}

.nav-arrow.down {
	transform: none;
}

.nav-controls {
	display: flex;
	flex-direction: row;
	gap: 30px;
	align-items: center;
	justify-content: center;
}

.scroll-indicator {
	position: fixed;
	bottom: 30px;
	right: 30px;
	background: rgba(8, 42, 123, 0.8);
	color: white;
	padding: 8px 16px;
	border-radius: 20px;
	font-size: 0.8rem;
	text-align: center;
	z-index: 1000;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	animation: scrollFadeOut 5s ease-in-out forwards;
	font-weight: 500;
	line-height: 1;
}

.scroll-indicator span {
	font-size: 0.75rem;
	opacity: 0.9;
	display: block;
	margin-top: 2px;
}

@keyframes scrollFadeOut {
	0% {
		opacity: 0;
		transform: scale(0.8);
	}
	10% {
		opacity: 1;
		transform: scale(1);
	}
	90% {
		opacity: 1;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(0.8);
		visibility: hidden;
	}
}

@media (max-width: 768px) {
	body {
		padding: 10px 0;
	}

	.main-container {
		flex-direction: column;
		height: auto;
		gap: 20px;
		max-width: 100%;
	}

	.carousel-section {
		flex: none;
		width: 100%;
	}

	.controls-section {
		flex: none;
		width: 100%;
		padding-left: 0;
		gap: 20px;
	}

	.carousel-container {
		height: 60vh;
		max-width: 350px;
	}

	.carousel-container .nav-arrow {
		display: flex;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 70px;
		height: 70px;
		margin: 0;
		background: transparent;
		border: none;
		box-shadow: none;
	}

	.carousel-container .nav-arrow:hover {
		transform: translateX(-50%) scale(1.2);
		background: transparent;
		box-shadow: none;
	}

	.carousel-container .nav-arrow.up:hover {
		transform: translateX(-50%) scale(1.2);
	}

	.carousel-container .nav-arrow.down:hover {
		transform: translateX(-50%) scale(1.2);
	}

	.carousel-container .nav-arrow.up {
		top: 20px;
		transform: translateX(-50%);
	}

	.carousel-container .nav-arrow.down {
		bottom: 20px;
		transform: translateX(-50%);
	}

	.carousel-container .nav-arrow.up img {
		transform: rotate(-90deg);
		width: 50px;
		height: 50px;
	}

	.carousel-container .nav-arrow.down img {
		transform: rotate(90deg);
		width: 50px;
		height: 50px;
	}

	.nav-controls {
		display: none;
	}

	.card {
		width: 320px;
		height: 180px;
	}

	.carousel-track {
		width: 350px;
	}

	.card.up-2 {
		transform: translateY(-160px) scale(0.8) translateZ(-300px);
	}

	.card.up-1 {
		transform: translateY(-80px) scale(0.9) translateZ(-100px);
	}

	.card.down-1 {
		transform: translateY(80px) scale(0.9) translateZ(-100px);
	}

	.card.down-2 {
		transform: translateY(160px) scale(0.8) translateZ(-300px);
	}

	.member-name {
		font-size: 1.8rem;
	}

	.member-role {
		font-size: 1rem;
	}

	.member-name::before,
	.member-name::after {
		width: 40px;
	}

	.member-name::before {
		left: -60px;
	}

	.member-name::after {
		right: -60px;
	}

	.scroll-indicator {
		bottom: 20px;
		right: 20px;
		padding: 6px 12px;
		font-size: 0.7rem;
	}

	.scroll-indicator span {
		font-size: 0.7rem;
	}
}
```

<br>


The CSS provides a 3D layered illusion using transformations and depth effects:

The .carousel-track uses transform-style: preserve-3d and perspective to give real depth to card transitions.

Cards are positioned using custom classes like .up-1, .down-1, .up-2, .down-2, etc., which move and scale them based on their position relative to the active center card.

The center card is highlighted with a larger scale, brighter colors, and a higher z-index.

Grayscale filters are applied to non-active cards for visual contrast.

The right side contains team member information (.member-info) with subtle animations when changing roles or names.

Dots below the member info act as pagination indicators, and their color and size update dynamically based on which card is active.

The design is fully responsive, with a restructured layout and resized cards on smaller screens.
<br>


## Javascipt Code
<br>

```javascript
const teamMembers = [
	{ name: "Luffy", role: "Founder" },
	{ name: "Monkey D. Luffy", role: "Creative Director" },
	{ name: "Luffy chan", role: "Lead Developer" },
	{ name: "Lucy", role: "UX Designer" },
	{ name: "Luffy kun", role: "Marketing Manager" },
	{ name: "Monkey chan", role: "Product Manager" }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const upArrows = document.querySelectorAll(".nav-arrow.up");
const downArrows = document.querySelectorAll(".nav-arrow.down");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"up-1",
			"up-2",
			"down-1",
			"down-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("down-1");
		} else if (offset === 2) {
			card.classList.add("down-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("up-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("up-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	memberName.style.opacity = "0";
	memberRole.style.opacity = "0";

	setTimeout(() => {
		memberName.textContent = teamMembers[currentIndex].name;
		memberRole.textContent = teamMembers[currentIndex].role;
		memberName.style.opacity = "1";
		memberRole.style.opacity = "1";
	}, 300);

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

upArrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		updateCarousel(currentIndex - 1);
	});
});

downArrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		updateCarousel(currentIndex + 1);
	});
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowUp") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowDown") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;
let scrollTimeout;
let isScrolling = false;

// Scroll event listener
//if u wnat u can timer to disappear that bottom right scroll button - by gopi
	
	

// Add scroll indicator
function createScrollIndicator() {
	const indicator = document.createElement('div');
	indicator.className = 'scroll-indicator';
	indicator.innerHTML = 'scroll';
	document.body.appendChild(indicator);
}

// Initialize scroll indicator
createScrollIndicator();

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenY;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);
```

<br>


avaScript handles all the interactivity and carousel movement logic:

Data Setup:
A teamMembers array stores names and roles. The updateCarousel() function updates the UI based on the currently active index.

Card Transitions:
The function removes and reassigns position classes (up-1, down-1, etc.) to cards dynamically, creating smooth 3D rotation effects.

Navigation Controls:
The carousel responds to:

Clicks on up/down arrows

Keyboard arrow keys

Clicking dots

Touch swipe gestures (for mobile)

Card clicks directly on an image

All these inputs call updateCarousel() with the new index value.

Member Info Animation:
The current team member’s name and role fade out and back in as the carousel moves, creating a clean text transition effect.

Scroll Indicator:
A small animated “scroll” badge briefly appears at the bottom-right to hint that the carousel can be scrolled or swiped.

Swipe Detection:
Touch events capture the vertical drag distance (touchstart and touchend), moving the carousel up or down if the swipe passes a threshold.