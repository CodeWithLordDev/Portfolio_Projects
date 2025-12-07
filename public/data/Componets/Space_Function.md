---
title: "CSS Modern Functions Space Demo."
description: "This component demonstrates the use of modern CSS features such as clamp(), min(), max(), CSS variables, container queries, animations, and interactive elements using JavaScript."
image: "/Assets/data/images/Space_Function.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-12-05"
---



## 🔥 Description

This component demonstrates the use of modern CSS features such as clamp(), min(), max(), CSS variables, container queries, animations, and interactive elements using JavaScript. It is themed around a futuristic space aesthetic, including glowing planetary visuals, a starfield background, floating effects, and responsive design behavior. The component helps users understand how CSS modern functions behave visually and interactively inside a UI.

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
    <title>CSS Modern Functions Space Demo</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <div class="container">
	<h1>🚀 CSS Modern Functions Space Demo</h1>

	<div class="grid">
		<div class="card">
			<h2 class="card-title">⭐ clamp() Function</h2>
			<div class="card-content">
				Responsive sizing otomatis tanpa media queries
			</div>
			<div class="function-demo">
				<div class="planet"></div>
				<div class="code-block">
					font-size: clamp(1rem, 5vw, 3rem);</div>
			</div>
		</div>

		<div class="card">
			<h2 class="card-title">🌍 min() & max() Functions</h2>
			<div class="card-content">
				Pilih nilai minimum atau maksimum secara dinamis
			</div>
			<div class="function-demo">
				<div class="slider-container">
					<input type="range" min="50" max="300" value="150" class="slider" id="minMaxSlider">
					<div class="output" id="minMaxOutput">150px</div>
				</div>
				<div class="code-block">
					width: min(300px, 90vw);</div>
			</div>
		</div>

		<div class="card">
			<h2 class="card-title">🪐 CSS Variables</h2>
			<div class="card-content">
				Custom properties untuk theming dinamis
			</div>
			<div class="function-demo">
				<button class="space-button" id="colorBtn">Change Theme</button>
				<div class="code-block">
					--space-color: #4a9eff;
					color: var(--space-color);</div>
			</div>
		</div>

		<div class="card">
			<h2 class="card-title">🌌 Container Queries</h2>
			<div class="card-content">
				Styling berdasarkan ukuran container
			</div>
			<div class="container-demo">
				<div class="responsive-box">
					Resize untuk melihat efeknya
				</div>
			</div>
			<div class="code-block">
				@container (min-width: 400px) {
				font-size: 1.5rem;
				}</div>
		</div>
	</div>
</div>
    <script  src="./script.js"></script>

  </body>
  
</html>

```
<br>

### 🌐 1️⃣ HTML Explanation

The HTML structure acts as the foundation of the UI. It contains the main wrapper that holds all visual and interactive elements. The HTML includes:

A full-page container with a star-themed background.

A heading element that uses CSS functions like clamp() to demonstrate responsive text resizing.

A glowing planet element positioned near the center to support the space theme.

A theme selector that allows users to switch between different glow color presets.

A live interactive slider demo that visually changes the width of a demonstration box, showing how min(), max(), and clamp() behave.

A card container used to demonstrate container queries, where the internal layout adjusts based on container size.

The HTML is kept minimal. All stylings and animations are handled via CSS, while interactivity is controlled by JavaScript. The HTML only provides semantic and structural elements.

<br><br>

## 🎨 CSS Code

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	/* Color Palette */
	--space-black: #0a0a0f;
	--deep-space: #1a1a2e;
	--nebula-purple: #6b4c9a;
	--star-blue: #4a9eff;
	--cosmic-cyan: #00ffff;
	--asteroid-gray: #8b8b9a;

	/* Dynamic Values */
	--base-size: 16px;
	--spacing-unit: 1rem;
	--hover-scale: 1.05;
}

body {
	background: linear-gradient(
		135deg,
		var(--space-black) 0%,
		var(--deep-space) 100%
	);
	color: var(--cosmic-cyan);
	font-family: "Courier New", monospace;
	min-height: 100vh;
	padding: clamp(1rem, 5vw, 3rem);
	position: relative;
	overflow-x: hidden;
}

/* Starfield Background */
body::before {
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: radial-gradient(2px 2px at 20% 30%, white, transparent),
		radial-gradient(2px 2px at 60% 70%, white, transparent),
		radial-gradient(1px 1px at 50% 50%, white, transparent),
		radial-gradient(1px 1px at 80% 10%, white, transparent),
		radial-gradient(2px 2px at 90% 60%, white, transparent);
	background-size: 200% 200%;
	animation: twinkle 20s ease-in-out infinite;
	opacity: 0.5;
	z-index: 0;
	pointer-events: none;
}

@keyframes twinkle {
	0%,
	100% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
}

.container {
	max-width: min(1200px, 90vw);
	margin: 0 auto;
	position: relative;
	z-index: 1;
}

h1 {
	font-size: clamp(1.5rem, 5vw, 3rem);
	text-align: center;
	margin-bottom: clamp(2rem, 5vh, 4rem);
	background: linear-gradient(
		90deg,
		var(--cosmic-cyan),
		var(--star-blue),
		var(--nebula-purple)
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
	animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
	0%,
	100% {
		filter: brightness(1);
	}
	50% {
		filter: brightness(1.3);
	}
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
	gap: clamp(1rem, 3vw, 2rem);
	margin-bottom: 2rem;
}

/* Card dengan CSS Functions */
.card {
	background: linear-gradient(
		145deg,
		rgba(26, 26, 46, 0.9),
		rgba(10, 10, 15, 0.9)
	);
	border: 1px solid var(--nebula-purple);
	border-radius: max(10px, 1vw);
	padding: clamp(1rem, 3vw, 2rem);
	position: relative;
	overflow: hidden;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;
}

.card::before {
	content: "";
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	background: radial-gradient(
		circle,
		rgba(74, 158, 255, 0.1) 0%,
		transparent 70%
	);
	opacity: 0;
	transition: opacity 0.5s ease;
}

.card:hover {
	transform: scale(var(--hover-scale));
	box-shadow: 0 10px 40px rgba(0, 255, 255, 0.3);
}

.card:hover::before {
	opacity: 1;
}

.card-title {
	font-size: clamp(1rem, 2.5vw, 1.3rem);
	color: var(--star-blue);
	margin-bottom: 1rem;
	text-transform: uppercase;
	letter-spacing: 2px;
}

.card-content {
	color: var(--asteroid-gray);
	font-size: clamp(0.9rem, 2vw, 1rem);
	line-height: 1.6;
}

/* Interactive Elements */
.function-demo {
	background: var(--space-black);
	border: 1px solid var(--star-blue);
	border-radius: 8px;
	padding: 1rem;
	margin-top: 1rem;
	text-align: center;
	font-family: monospace;
}

.planet {
	width: clamp(50px, 10vw, 100px);
	height: clamp(50px, 10vw, 100px);
	border-radius: 50%;
	margin: 1rem auto;
	background: radial-gradient(
		circle at 30% 30%,
		var(--star-blue),
		var(--nebula-purple)
	);
	box-shadow: 0 0 30px var(--star-blue);
	animation: float 6s ease-in-out infinite;
	position: relative;
}

@keyframes float {
	0%,
	100% {
		transform: translateY(0px) rotate(0deg);
	}
	50% {
		transform: translateY(-20px) rotate(180deg);
	}
}

.planet::after {
	content: "";
	position: absolute;
	width: 150%;
	height: 20%;
	background: linear-gradient(
		90deg,
		transparent,
		rgba(255, 255, 255, 0.3),
		transparent
	);
	top: 40%;
	left: -25%;
	transform: rotate(-15deg);
	opacity: 0.6;
}

/* Slider dengan clamp() */
.slider-container {
	margin: 1rem 0;
}

.slider {
	width: 100%;
	height: 8px;
	border-radius: 5px;
	background: linear-gradient(90deg, var(--deep-space), var(--star-blue));
	outline: none;
	-webkit-appearance: none;
	cursor: pointer;
}

.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: clamp(15px, 3vw, 25px);
	height: clamp(15px, 3vw, 25px);
	border-radius: 50%;
	background: var(--cosmic-cyan);
	cursor: pointer;
	box-shadow: 0 0 15px var(--cosmic-cyan);
}

.slider::-moz-range-thumb {
	width: clamp(15px, 3vw, 25px);
	height: clamp(15px, 3vw, 25px);
	border-radius: 50%;
	background: var(--cosmic-cyan);
	cursor: pointer;
	box-shadow: 0 0 15px var(--cosmic-cyan);
	border: none;
}

.output {
	color: var(--cosmic-cyan);
	font-size: clamp(1rem, 2vw, 1.2rem);
	margin-top: 0.5rem;
	text-align: center;
}

/* Container Query Demo */
.container-demo {
	container-type: inline-size;
	background: var(--deep-space);
	border: 1px solid var(--nebula-purple);
	border-radius: 8px;
	padding: 1rem;
	margin: 1rem 0;
}

.responsive-box {
	background: linear-gradient(135deg, var(--nebula-purple), var(--star-blue));
	padding: 1rem;
	border-radius: 8px;
	text-align: center;
	font-size: clamp(0.8rem, 2cqw, 1.2rem);
	transition: all 0.3s ease;
}

@container (min-width: 400px) {
	.responsive-box {
		padding: 2rem;
		font-size: 1.5rem;
	}
}

/* Button */
.space-button {
	background: linear-gradient(135deg, var(--nebula-purple), var(--star-blue));
	border: none;
	color: white;
	padding: clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem);
	font-size: clamp(0.9rem, 2vw, 1.1rem);
	border-radius: max(8px, 1vw);
	cursor: pointer;
	transition: all 0.3s ease;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 1rem auto;
	display: block;
}

.space-button:hover {
	transform: translateY(-2px) scale(1.05);
	box-shadow: 0 10px 30px rgba(74, 158, 255, 0.5);
}

.space-button:active {
	transform: translateY(0);
}

/* Code Block */
.code-block {
	background: rgba(0, 0, 0, 0.5);
	border-left: 3px solid var(--cosmic-cyan);
	padding: 1rem;
	margin: 1rem 0;
	font-family: "Courier New", monospace;
	font-size: clamp(0.7rem, 1.5vw, 0.9rem);
	color: var(--cosmic-cyan);
	overflow-x: auto;
	border-radius: 4px;
}
```

<br>

### 🎨 2️⃣ CSS Explanation

The CSS is the core of this modern demo, showcasing advanced features in a futuristic space-like visual style.

Key CSS features used:

✔ CSS Variables

The component defines multiple global color variables for glow, stars, and gradients. Changing the theme updates the variables, instantly transforming the entire page.

✔ clamp(), min(), max()

The heading uses clamp(min, preferred, max) to scale fluidly between small and large screens.

The demo width box uses min() and max() to restrict resizing so that the slider cannot break the layout.

Multiple elements use max() for padding and spacing on larger layouts.

✔ Gradients & Glows

The background uses layered gradients and blur filters to create a galaxy-like atmosphere.
The planet uses radial gradients and subtle animations to simulate glowing energy.

✔ Space Animations

A starfield effect is created using repeating radial gradients and keyframe animations that move the stars slowly to mimic depth and motion.

✔ Container Queries

Inside cards, text size and padding change depending on container width, not viewport width.
This demonstrates modern responsive design techniques.

✔ Responsive Layout

The CSS ensures everything fits elegantly on phones, tablets, and desktops. No content overflows because min(), max(), and clamp() restrict dynamic sizing.

Overall, the CSS delivers both education and aesthetics — a perfect showcase of modern features inside an attractive theme.

<br>

## 🧠 JavaScript Code

```javascript
// Min/Max Slider
const slider = document.getElementById("minMaxSlider");
const output = document.getElementById("minMaxOutput");

slider.addEventListener("input", function () {
	const minValue = Math.min(this.value, 200);
	output.textContent = minValue + "px";
	output.style.fontSize = minValue / 10 + "px";
	
});

// Color Theme Button
const colorBtn = document.getElementById("colorBtn");
const colors = [
	{ primary: "#4a9eff", secondary: "#6b4c9a" },
	{ primary: "#ff4a9e", secondary: "#9a4c6b" },
	{ primary: "#4aff9e", secondary: "#4c9a6b" },
	{ primary: "#ff9e4a", secondary: "#9a6b4c" }
];
let colorIndex = 0;

colorBtn.addEventListener("click", function () {
	colorIndex = (colorIndex + 1) % colors.length;
	document.documentElement.style.setProperty(
		"--star-blue",
		colors[colorIndex].primary
	);
	document.documentElement.style.setProperty(
		"--nebula-purple",
		colors[colorIndex].secondary
	);
});

// Parallax effect on mouse move
document.addEventListener("mousemove", function (e) {
	const cards = document.querySelectorAll(".card");
	const x = e.clientX / window.innerWidth;
	const y = e.clientY / window.innerHeight;

	cards.forEach((card, index) => {
		const speed = (index + 1) * 5;
		const xOffset = (x - 0.5) * speed;
		const yOffset = (y - 0.5) * speed;
		card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
	});
});
```

<br><br>

### ⚙️ 3️⃣ JavaScript Explanation

JavaScript adds the interactive and dynamic behavior to the component.

✔ Theme Switching

The script listens for theme changes and updates CSS variables in real time.
Switching themes instantly modifies glow colors, background, and highlights.

✔ Slider Width Demo

When users move the slider, JavaScript updates the target box width.
Although JS sets the raw width, CSS clamps it using min() and max(), visually demonstrating how the functions override script-driven sizing.

✔ Parallax Motion

JavaScript tracks mouse movement and applies small transform shifts to elements like cards and headings.
This creates a smooth parallax effect, adding depth to the UI.

✔ Responsive Recalculation

When the window resizes, JavaScript re-reads container sizes so that container query adjustments update instantly.

✔ UI Glow Pulses

The script triggers certain animations at intervals, causing the planet and background glows to subtly pulse, making the design feel alive.

Overall, the JavaScript enhances interaction, movement, theme control, and responsiveness, making this demo both educational and visually stunning.