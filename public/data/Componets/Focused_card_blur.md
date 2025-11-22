---
title: "Interactive Focus Cards | Responsive Image Grid with Blur & Hover Effects using HTML, CSS & JavaScript"
description: "This project showcases a modern and responsive focus card grid that highlights user interaction through smooth hover animations."
image: "/Assets/data/images/Focused_card_blur.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
This project showcases a modern and responsive focus card grid that highlights user interaction through smooth hover animations. Built using HTML, CSS, and JavaScript, the layout dynamically generates image cards that blur out when one is hovered over, keeping focus on the active card with a glowing overlay and title. It’s ideal for showcasing portfolios, photo galleries, or product grids with minimal code and an elegant, professional look.


<br>


## 💻 HTML Code
<br>


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodewithLord - Focus Cards</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="cards-grid" id="cardsGrid">
    <!-- Cards will be injected via JS -->
  </div>

  <script src="script.js"></script>
</body>
</html>

```
<br>



The HTML serves as the foundation for the card grid layout. It contains a simple page structure with a container div named cardsGrid, where all the image cards will be inserted dynamically using JavaScript. The page includes a link to an external CSS file for styling and a script tag that links to the JavaScript file that populates and animates the cards. By keeping the HTML minimal and using JavaScript for rendering, the design becomes flexible and easy to scale with more cards or dynamic content.

<br>



## CSS Code
<br>


```css
body {
  margin: 0;
  padding: 2rem;
  background: #111;
  font-family: sans-serif;
  color: #fff;
  display: flex;
  justify-content: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  position: relative;
  height: 15rem;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease-out, filter 0.3s ease-out;
  cursor: pointer;
  background: #222;
}

@media (min-width: 768px) {
  .card {
    height: 24rem;
  }
}

.card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card.blur {
  filter: blur(4px);
  transform: scale(0.98);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  padding: 2rem 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-overlay.active {
  opacity: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 500;
  background: linear-gradient(to bottom, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
  .card-title {
    font-size: 1.5rem;
  }
}


```
<br>


The CSS defines the visual style and animation behavior of the focus cards. The page background is dark, with centered content and generous spacing for a clean, modern aesthetic. The cards-grid uses a CSS Grid layout, switching from a single-column structure on small screens to a three-column layout on larger devices, ensuring responsiveness. Each .card has a rounded, dark background and smooth transitions for transform and filter effects. When a card is hovered, it remains sharp and highlighted, while other cards are slightly blurred and scaled down, directing attention to the focused one. The .card-overlay adds a subtle dark gradient and reveals the card’s title during hover using a fade-in transition. The gradient text styling on .card-title gives a polished, modern effect, matching the project’s sleek UI.
<br>


## Javascipt Code
<br>


```javascript


// Sample cards data
const cards = [
  { title: "Card One", src: "https://picsum.photos/id/1011/600/400" },
  { title: "Card Two", src: "https://picsum.photos/id/1012/600/400" },
  { title: "Card Three", src: "https://picsum.photos/id/1013/600/400" },
  { title: "Card Four", src: "https://picsum.photos/id/1014/600/400" },
  { title: "Card Five", src: "https://picsum.photos/id/1015/600/400" },
  { title: "Card Six", src: "https://picsum.photos/id/1016/600/400" },
];

const cardsGrid = document.getElementById("cardsGrid");

let hoveredIndex = null;

// Render cards
cards.forEach((card, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
    <img src="${card.src}" alt="${card.title}">
    <div class="card-overlay">
      <div class="card-title">${card.title}</div>
    </div>
  `;

  // Mouse enter
  cardDiv.addEventListener("mouseenter", () => {
    hoveredIndex = index;
    updateHoverEffects();
  });

  // Mouse leave
  cardDiv.addEventListener("mouseleave", () => {
    hoveredIndex = null;
    updateHoverEffects();
  });

  cardsGrid.appendChild(cardDiv);
});

function updateHoverEffects() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card, index) => {
    const overlay = card.querySelector(".card-overlay");
    if (hoveredIndex === null) {
      card.classList.remove("blur");
      overlay.classList.remove("active");
    } else if (index === hoveredIndex) {
      card.classList.remove("blur");
      overlay.classList.add("active");
    } else {
      card.classList.add("blur");
      overlay.classList.remove("active");
    }
  });
}
// Sample cards data
const cards = [
  { title: "Card One", src: "https://picsum.photos/id/1011/600/400" },
  { title: "Card Two", src: "https://picsum.photos/id/1012/600/400" },
  { title: "Card Three", src: "https://picsum.photos/id/1013/600/400" },
  { title: "Card Four", src: "https://picsum.photos/id/1014/600/400" },
  { title: "Card Five", src: "https://picsum.photos/id/1015/600/400" },
  { title: "Card Six", src: "https://picsum.photos/id/1016/600/400" },
];

const cardsGrid = document.getElementById("cardsGrid");

let hoveredIndex = null;

// Render cards
cards.forEach((card, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
    <img src="${card.src}" alt="${card.title}">
    <div class="card-overlay">
      <div class="card-title">${card.title}</div>
    </div>
  `;

  // Mouse enter
  cardDiv.addEventListener("mouseenter", () => {
    hoveredIndex = index;
    updateHoverEffects();
  });

  // Mouse leave
  cardDiv.addEventListener("mouseleave", () => {
    hoveredIndex = null;
    updateHoverEffects();
  });

  cardsGrid.appendChild(cardDiv);
});

function updateHoverEffects() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card, index) => {
    const overlay = card.querySelector(".card-overlay");
    if (hoveredIndex === null) {
      card.classList.remove("blur");
      overlay.classList.remove("active");
    } else if (index === hoveredIndex) {
      card.classList.remove("blur");
      overlay.classList.add("active");
    } else {
      card.classList.add("blur");
      overlay.classList.remove("active");
    }
  });
}

```
<br>


The JavaScript file controls how cards are created, displayed, and interact when hovered. It begins by defining an array of card data, each containing a title and image URL. Using forEach, it dynamically creates and injects cards into the HTML grid, each consisting of an image and overlay with text. Event listeners track when a user hovers over a card (mouseenter) or moves away (mouseleave), updating which card is currently focused. The updateHoverEffects() function handles the visual response — applying the blur effect to all non-hovered cards while activating the overlay and text on the hovered one. This logic creates a seamless and intuitive focus transition without requiring complex animations.