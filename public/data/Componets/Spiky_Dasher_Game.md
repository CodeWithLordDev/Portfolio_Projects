---
title: "Spiky Dasher Game - Interactive Platformer"
description: "An interactive platformer game built with pure HTML, CSS, and JavaScript. Features grid-based tile system, player movement and jumping mechanics, lava spikes hazards, portals, and a scoring system with death counter and timer. Uses CSS gradients for pixel-art style graphics."
image: "/Assets/data/images/Spiky_dasher_game.png"
tags: ["HTML", "CSS", "JavaScript", "Game Development", "Platformer", "Grid System", "Game Mechanics"]
author: "CodewithLord"
date: "2026-01-30"
---

## 🧠 Description

This project showcases an interactive platformer game built entirely with HTML, CSS, and JavaScript.

The game features a grid-based tile system where players navigate through levels, avoiding lava spike hazards and collecting items to advance.

Players can move left and right, jump with double-jump mechanics, and must survive challenging obstacle courses while the game tracks deaths and elapsed time.

The entire visual style is created using CSS gradients and radial patterns, resulting in a unique pixel-art aesthetic without any external images for game elements.

Perfect for understanding game mechanics, physics-based movement, collision detection, and interactive game development.

<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Spiky Dasher Game | CodewithLord</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <!-- arrow keys to move and jump -->
  <!-- also a double jump -->
  <div id='game_console'>
    <div id='player2'></div>
    <div id='game_alert'></div>
    <div id='deaths_counter'></div>
    <div id='time_counter'></div>
  </div>
  <script src="./script.js"></script>

</body>
</html>
```

<br>

### HTML Structure Explanation

The HTML structure is intentionally minimal to allow JavaScript to dynamically generate the game world:

**Key Elements:**

- `#game_console` - Main game container that holds the entire game world
- `#player2` - The player character element (uses CSS for styling with pseudo-elements)
- `#game_alert` - Status messages and game notifications display area
- `#deaths_counter` - Displays total number of deaths
- `#time_counter` - Displays elapsed time since game start

The game uses a grid-based tile system where JavaScript dynamically creates tiles for:

- Ground tiles (walkable surfaces)
- Lava spikes (hazards that end the game)
- Portals (level transitions)
- Collectibles and other interactive elements

This minimal markup allows the JavaScript engine to fully control the game state and dynamically render all game elements.

<br>

## 🎨 CSS Code
<br>

```css
:root {
  --root-clr: dimgray;
  --tile-line-height: 30px;
  --tile-size: 10px;
  --clr: gray;
  --pl-clr:
    radial-gradient(circle at 75% 50%, white 1px, transparent 2px),
    radial-gradient(circle at 25% 50%, white 1px, transparent 2px),
    radial-gradient(circle at 75% 40%, black 3px, transparent 4px),
    radial-gradient(circle at 25% 40%, black 3px, transparent 4px),
    white;
}

html,
body {
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  display: grid;
  place-items: center;
  background: #111;
}

#game_console {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  position: relative;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, 1)),
    var(--root-clr);
  text-align: center;
  line-height: var(--tile-line-height);
  font-size: 0;
  color: transparent;
  user-select: none;
  box-shadow:
    0 20px 20px black;
}

#deaths_counter,
#time_counter {
  padding: 0rem 1rem;
  font-size: 16px;
  font-family: system-ui, serif;
  line-height: 100%;
  color: white;
  position: absolute;
}

#deaths_counter {
  top: 0;
  left: 0;
  transform: translate(0%, -125%);
}

#time_counter {
  top: 0;
  right: 0;
  transform: translate(0%, -125%);
}

#game_alert {
  padding: 1rem 2rem;
  font-size: 16px;
  font-family: system-ui, serif;
  line-height: 100%;
  color: white;
  background: rgba(0, 0, 0, .75);
  border: 1px dashed white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 125%);
  z-index: 99999;
  border-radius: 50px;
  transition: .5s;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}

.ground {
  background: var(--root-clr);
  box-sizing: border-box;
  border-top: 5px solid rgba(0, 0, 0, .25);
  border-right: 5px solid rgba(0, 0, 0, .65);
  border-bottom: 5px solid rgba(0, 0, 0, .65);
  border-left: 5px solid rgba(0, 0, 0, .25);
  outline: 0;
  z-index: 2;
}

.innerwall {
  background: var(--root-clr);
  outline: 0;
}

/* lava spikes */
.lava {
  background:
    conic-gradient(at 50% 0%, transparent 0deg 153deg, rgba(0, 0, 0, .5) 155deg 190deg, rgba(255, 255, 255, .5) 192deg 205deg, transparent 207deg 360deg),
    conic-gradient(at 50% 0%, transparent 0deg 153deg, var(--root-clr) 155deg 195deg, var(--root-clr) 197deg 205deg, transparent 207deg 360deg);
}

.spleft {
  transform: rotate(-90deg);
}

.sptop {
  transform: rotate(180deg);
}

.spright {
  transform: rotate(90deg);
}

.portal1:after,
.portal2:after {
  content: '';
  width: 150%;
  height: 150%;
  position: absolute;
  top: -25%;
  left: 0;
  background:
    radial-gradient(circle at 50% 50%,
      rgba(0, 0, 0, 1) 3px,
      rgba(0, 0, 0, .75) 6px,
      rgba(0, 0, 0, .75) 10px,
      rgba(0, 0, 0, .5) 11px,
      rgba(0, 0, 0, .5) 15px,
      rgba(0, 0, 0, .25) 16px,
      rgba(0, 0, 0, .25) 20px),
    var(--root-clr);
  animation: portal 2s linear infinite;
  pointer-events: none;
  border-radius: 50%;
}

@keyframes portal {
  50% {
    transform: scale(1.1);
  }
}

#player,
#player:after {
  content: '';
  width: 25px;
  height: 25px;
  background: transparent;
  position: absolute;
  z-index: 10000;
  pointer-events: none;
}

#player:before {
  content: '';
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0;
  top: 0;
  background:
    radial-gradient(circle at 85% 15%, LightSeaGreen 3px, transparent 4px),
    radial-gradient(circle at 15% 15%, LightSeaGreen 3px, transparent 4px),
    radial-gradient(circle at 65% 90%, LightSeaGreen 2px, transparent 3px),
    radial-gradient(circle at 35% 90%, LightSeaGreen 2px, transparent 3px);
}

#player:after {
  width: 20px;
  height: 25px;
  background:
    linear-gradient(to top, LightSeaGreen 0%, transparent 0%),
    radial-gradient(circle at 60% 40%, PaleTurquoise 2px, transparent 3px),
    radial-gradient(circle at 50% 50%, black 5px, transparent 6px),
    DarkTurquoise;
  position: absolute;
  top: -2.5px;
  left: 2.5px;
  z-index: 10000;
  border-radius: 50% 60% 50% 50% / 70% 70% 40% 40%;
  pointer-events: none;
  box-shadow:
    inset 2px 2px 3px 3px rgba(255, 255, 255, .5),
    inset -2px -2px 3px 3px rgba(0, 0, 0, .33);
  animation: blink 4s linear infinite;
}

@keyframes blink {
  5% {
    background:
      linear-gradient(to bottom, LightSeaGreen 35%, transparent 35%),
      radial-gradient(circle at 60% 40%, PaleTurquoise 2px, transparent 3px),
      radial-gradient(circle at 50% 50%, black 5px, transparent 6px),
      DarkTurquoise;
  }

  10% {
    background:
      linear-gradient(to bottom, LightSeaGreen 60%, transparent 60%),
      radial-gradient(circle at 60% 40%, PaleTurquoise 2px, transparent 3px),
      radial-gradient(circle at 50% 50%, black 5px, transparent 6px),
      DarkTurquoise;
  }

  15% {
    background:
      linear-gradient(to bottom, LightSeaGreen 0%, transparent 0%),
      radial-gradient(circle at 60% 40%, PaleTurquoise 2px, transparent 3px),
      radial-gradient(circle at 50% 50%, black 5px, transparent 6px),
      DarkTurquoise;
  }
}

/* player 2 player 2 player 2 */
#player2,
#player2:after {
  content: '';
  width: 25px;
  height: 25px;
  background: transparent;
  position: relative;
  z-index: 10000;
  pointer-events: none;
}

#player2:before {
  content: '';
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0;
  top: 0;
  background:
    radial-gradient(circle at 65% 90%, white 2px, transparent 3px),
    radial-gradient(circle at 35% 90%, white 2px, transparent 3px);
  z-index: 10001;
}

#player2:after {
  width: 20px;
  height: 25px;
  background:
    radial-gradient(circle at 60% 30%, white 2px, transparent 3px),
    radial-gradient(circle at 50% 40%, black 5px, transparent 6px),
    linear-gradient(to top, white, gold, orangered 50%),
    orangered;
  position: absolute;
  top: -4px;
  left: 2.5px;
  z-index: 10000;
  border-radius: 15px 15px 4px 4px;
  pointer-events: none;
  animation: blink2 4s linear infinite;
}

@keyframes blink2 {
  5% {
    background:
      linear-gradient(to top, transparent 75%, orangered 75%),
      radial-gradient(circle at 60% 30%, white 2px, transparent 3px),
      radial-gradient(circle at 50% 40%, black 5px, transparent 6px),
      linear-gradient(to top, white, gold, orangered 50%),
      orangered;
  }

  10% {
    background:
      linear-gradient(to top, transparent 50%, orangered 50%),
      radial-gradient(circle at 60% 30%, white 2px, transparent 3px),
      radial-gradient(circle at 50% 40%, black 5px, transparent 6px),
      linear-gradient(to top, white, gold, orangered 50%),
      orangered;
  }

  15% {
    background:
      linear-gradient(to top, transparent 100%, orangered 100%),
      radial-gradient(circle at 60% 30%, white 2px, transparent 3px),
      radial-gradient(circle at 50% 40%, black 5px, transparent 6px),
      linear-gradient(to top, white, gold, orangered 50%),
      orangered;
  }
}

.goleft:after {
  transform: skewX(10deg);
}

.goright:after {
  transform: skewX(-10deg);
}

.trailBall {
  position: absolute;
  width: 3px;
  height: 3px;
  background: darkorange;
  border-radius: 50%;
  opacity: .75;
  pointer-events: none;
  opacity: 1;
  animation: trail .75s linear forwards;
}

@keyframes trail {
  100% {
    transform: translateY(-25px);
    opacity: 0;
  }
}
```

<br>

### CSS Breakdown

**Color System & Variables**

CSS custom properties define the core color palette:

- `--root-clr: dimgray` - Primary color for tiles and UI elements
- `--tile-line-height: 30px` - Height of each grid tile
- `--tile-size: 10px` - Size unit for grid elements
- `--pl-clr` - Complex radial gradients for player eye effects

**Game Console Setup**

`#game_console` uses aspect-ratio (16:9) for responsive game area.

Centered with CSS Grid's `place-items: center` for perfect viewport alignment.

Layered background gradient creates depth from light to dark.

`user-select: none` prevents text selection during gameplay.

**Game Counters & Alerts**

`#deaths_counter` and `#time_counter` positioned above game console with -125% transform.

`#game_alert` positioned below with transition for smooth fade in/out.

Uses `pointer-events: none` to prevent interaction when hidden.

**Tile Styling**

`.ground` tiles use beveled borders (light top-left, dark bottom-right) for 3D appearance.

`.innerwall` creates internal obstacles and level structure.

`.lava` spikes use conic-gradients to create directional spike geometry.

Rotation classes (`.spleft`, `.sptop`, `.spright`) orient spikes in different directions.

**Portal Animation**

`.portal1:after` and `.portal2:after` create expanding ripple effect.

Uses radial gradients with varying opacity for depth perception.

`@keyframes portal` scales the portal at 50% for pulsing animation.

**Player Character Design**

`#player` uses pseudo-elements (`:before` and `:after`) for detailed sprite design.

Eyes created with radial-gradient circles for expressive look.

Body uses multiple layered gradients with LightSeaGreen, PaleTurquoise colors.

`@keyframes blink` animates closing eyelids every 4 seconds.

**Player 2 Character**

`#player2` features orangered/gold coloring for distinction.

Similar pseudo-element structure with different gradient colors.

`@keyframes blink2` creates blinking effect for variety.

**Movement Classes**

`.goleft` and `.goright` apply skew transforms for running/jumping animation.

Creates illusion of character leaning into direction of movement.

**Trail Effects**

`.trailBall` creates particle trails behind moving players.

3px orange circles with fade animation.

`@keyframes trail` moves particles upward while fading out over 0.75 seconds.

**Performance Optimization**

Extensive use of CSS gradients eliminates need for sprite sheets.

All animations use GPU-accelerated transforms.

Pointer-events carefully managed to prevent interaction with hidden UI elements.

<br>

## ⚙️ JavaScript Code Overview
<br>

```javascript
const gc = document.querySelector('#game_console')
const gc_loc = gc.getBoundingClientRect()
const player = 'player2'
var pl;

var cols = 40 // multiple of 16
var rows = 22 // multiple of 9
const tile_size = gc_loc.width * (100 / cols / 100)
const pl_size = tile_size * 2
document.body.style.setProperty('--tile-line-height', pl_size + 'px')

gc.style.width = '1000px'
gc.style.height = tile_size * rows + 'px'

var gravity = 8,
  kd,
  x_speed = 5,
  pb_y = 0,
  score = 0,
  rot = 0,
  data_p = 0,
  bonus = 1,
  dead = false,
  kd_list = [],
  d = {},
  gp,
  gpa,
  dbljump = false,
  dash = false,
  timer = 0,
  level_num = -1;

const levels = [
  {
    start: '19.5,0',
    map: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
      8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 9, 9, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
  },
  {
    start: '19.5,0',
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 8, 8, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8,
      8, 8, 8, 8, 0, 2, 2, 2, 2, 2, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 2, 2, 2, 2, 2, 0, 8, 8, 8, 8,
      8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8]
  },
  {
    start: '2,13',
    map: [8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      8, 0, 0, 0, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 8, 8, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 0, 0, 0, 1, 1, 1, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1, 1, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 8, 8, 8, 8, 8,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 8, 8, 8, 8, 8,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 8, 8, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 8,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 8, 0, 2, 2, 2, 2, 2, 0, 8, 8, 8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      8, 8, 8, 8, 0, 2, 2, 2, 2, 2, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
      8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  },
  {
    start: '1,2',
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 6, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 9,
      0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0,
      8, 8, 8, 8, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 8, 8, 8, 8,
      8, 8, 8, 8, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 8, 8, 8, 8,
      8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8]


  },
  {
    start: '1,2',
    map: [0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 9,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 9,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8,
      8, 8, 8, 8, 0, 2, 2, 2, 2, 2, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8,
      8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8]
  },
  {
    start: '2,13',
    map: [8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      8, 0, 0, 0, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 8, 8, 8, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
      8, 0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 8, 8, 8,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 8, 8, 8, 8, 8,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 8, 8, 8, 8, 8,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 8,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      8, 8, 8, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      8, 8, 8, 8, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
      8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
]

function buildGame() {
  // clear tiles and update level number
  gc.innerHTML = "<div id='" + player + "'></div><div id='game_alert'></div><div id='deaths_counter'></div><div id='time_counter'></div>"
  if (level_num < levels.length - 1) {
    level_num++
  } else {
    level_num = 0
  }

  let time = 0
  let deaths = 0
  let tc = document.querySelector('#time_counter')
  let dc = document.querySelector('#deaths_counter')
  tc.innerHTML = 'TIME<br>' + time
  dc.innerHTML = 'DEATHS<br>' + deaths

  // set random level color
  document.body.style.setProperty('--root-clr', 'hsl(' + Math.random() * 360 + 'deg,75%,50%)')

  // add tiles for new level
  for (var i = 0; i < cols * rows; i++) {
    var d = document.createElement('div')
    d.className = 'tile'

    if (levels[level_num].map[i] == 0) {
      d.className = 'tile ground'
      // d.style.background = 'dimgray'
    }
    if (levels[level_num].map[i] == 2) {
      d.className = 'tile lava'
    }
    if (levels[level_num].map[i] == 3) {
      d.className = 'tile lava spleft'
    }
    if (levels[level_num].map[i] == 4) {
      d.className = 'tile lava sptop'
    }
    if (levels[level_num].map[i] == 5) {
      d.className = 'tile lava spright'
    }
    if (levels[level_num].map[i] == 6) {
      d.className = 'tile portal1'
    }
    if (levels[level_num].map[i] == 7) {
      d.className = 'tile portal2'
    }
    if (levels[level_num].map[i] == 8) {
      d.className = 'tile innerwall'
    }
    if (levels[level_num].map[i] == 9) {
      d.className = 'tile nextlevel'
    }
    d.setAttribute('grid_loc', [i % cols, Math.floor(i / cols)])
    d.style.width = tile_size + 'px'
    d.style.height = tile_size + 'px'
    d.style.position = 'absolute'
    // d.innerHTML = i
    // d.style.outline = '1px dotted gray'
    d.style.left = (i % cols) * tile_size + 'px'
    d.style.top = Math.floor(i / cols) * tile_size + 'px'

    gc.appendChild(d)
  }

  // add player stuff
  const ga = document.querySelector('#game_alert')
  var pl = document.querySelector('#' + player)
  pl.style.width = tile_size + 'px'
  pl.style.height = tile_size + 'px'
  pl.style.top = (tile_size * levels[level_num].start.split(',')[1]) + 'px'
  pl.style.left = (tile_size * levels[level_num].start.split(',')[0]) + 'px'

  // add info box
  ga.innerHTML = 'Arrow keys to move and jump<br>double jump / wall sliding'
  ga.style.opacity = '1'

  var pl_loc = pl.getBoundingClientRect()
  var x = pl_loc.left

  function updatePlayer() {
    // get points based on player location
    var pl_loc = pl.getBoundingClientRect()
    var pl_center = document.elementFromPoint(pl_loc.x + (tile_size * .5), pl_loc.y + (tile_size * .75))
    var pl_xy1 = document.elementFromPoint(pl_loc.x + (pl_loc.width * .25), pl_loc.y + pl_loc.height + gravity)
    var pl_xy2 = document.elementFromPoint(pl_loc.x + (pl_loc.width * .75), pl_loc.y + pl_loc.height + gravity)
    var pl_xy3 = document.elementFromPoint(pl_loc.x - (x_speed * .5), pl_loc.y + (pl_loc.height * .5))
    var pl_xy4 = document.elementFromPoint(pl_loc.x + pl_loc.width + (x_speed * .5), pl_loc.y + (pl_loc.height * .5))
    var pl_xy5 = document.elementFromPoint(pl_loc.x + (pl_loc.width * .5), pl_loc.y - (gravity * .5))
    var pl_xy6 = document.elementFromPoint(pl_loc.x + (pl_size * .5), pl_loc.y + pl_size)

    // console.log(pl_center)

    function endGame() {
      alert('you died')
    }

    //if dead stop, else update player and everything else
    if (!pl_xy1 || !pl_xy2 || dead) {
      // endGame()
    } else {

      // set player top   
      // if player on ground set new top
      if (pl_xy1.classList.contains('ground') ||
        pl_xy2.classList.contains('ground')) {
        gravity = 0
      } else {
        if (gravity < 8) {
          gravity += .51
        } else {
          gravity = 8
        }
      }
      pl.style.top = pl_loc.top - 6.25 - gc_loc.top + gravity + 'px'
      // console.log(gravity)    

      var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
      if (!gamepads) {
        return;
      }
      var gp = gamepads[0];

      // add jump-force (change the gravity)
      if ((d[38]
        || (gp && (gp.buttons[0].pressed
          || gp.buttons[1].pressed
          || gp.buttons[2].pressed
          || gp.buttons[3].pressed)))
        && gravity == 0) {
        dbljump = false
        gravity = -9
      }
      if ((d[38]
        || (gp && (gp.buttons[0].pressed
          || gp.buttons[1].pressed
          || gp.buttons[2].pressed
          || gp.buttons[3].pressed)))
        && gravity > 0) {
        if (!dbljump) {
          gravity = -9
        }
        dbljump = true
      }

      if (gp) {
        var gpa = Math.round(gp.axes[0])
        if (gpa == 0 || gravity == 0) {
          pl.className = ''
          pl.style.transform = 'rotate(0deg)'
        }
      }

      // track left/right movement
      if ((d[37] || (gp && gpa == -1)) && x > gc_loc.x) {
        if (!pl_xy3.classList.contains('ground')) {
          x -= x_speed
          pl.className = ''
          pl.classList.add('goleft')
        } else {
          if (gravity > 0) {
            dbljump = false
            gravity = 1
            pl.style.transform = 'rotate(90deg)'
          }
          pl.className = ''
        }
      }

      // console.log(x_speed)
      if ((d[39] || (gp && gpa == 1)) && x + pl_loc.width < gc_loc.x + gc_loc.width) {
        if (!pl_xy4.classList.contains('ground')) {
          x += x_speed
          pl.className = ''
          pl.classList.add('goright')
        } else {
          if (gravity > 0) {
            dbljump = false
            gravity = 1
            pl.style.transform = 'rotate(-90deg)'
          }
          pl.className = ''
        }
      }

      pl.style.left = x - gc_loc.left + 'px'
      // pl.style.left = x + x_speed - gc_loc.left + 'px'

      // set different interactions based on tile type
      if (pl_xy5.classList.contains('ground')) {
        gravity = 8
      }

      if (pl_center.classList.contains('lava')) {
        // console.log('lava')
        pl.style.top = (tile_size * levels[level_num].start.split(',')[1]) + 'px'
        pl.style.left = (tile_size * levels[level_num].start.split(',')[0]) + 'px'
        pl_loc = pl.getBoundingClientRect()
        x = pl_loc.left
        deaths++
        dc.innerHTML = 'DEATHS<br>' + deaths
      }

      if (pl_center.classList.contains('portal1')) {
        let p2 = document.querySelector('.portal2')
        let p2_loc = p2.getBoundingClientRect()
        pl.style.top = p2_loc.top - gc_loc.top + 'px'
        pl.style.left = p2_loc.left - gc_loc.left + 'px'
        pl_loc = pl.getBoundingClientRect()
        x = pl_loc.left
      }

      if (pl_center.classList.contains('nextlevel')) {
        buildGame()
      }

      timer++
      function secondsToTime(e) {
        var h = Math.floor(e / 3600).toString().padStart(2, '0'),
          m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
          s = Math.floor(e % 60).toString().padStart(2, '0');

        return h + ':' + m + ':' + s;
        //return `${h}:${m}:${s}`;
      }
      tc.innerHTML = 'TIME<br>' + secondsToTime(timer)

      playerTrail()
      setTimeout(updatePlayer, 1000 / 45) // update player 30-60 times a second
    }
  }

  updatePlayer()

  // add trail behind player b/c it's fun
  function playerTrail() {
    if (player == 'player') {
      let x = pl.getBoundingClientRect().x
      let y = pl.getBoundingClientRect().y
      let b = document.createElement('div')
      b.className = 'trailBall'
      b.style.left = x + 11 - gc_loc.left + 'px'
      b.style.top = y + 5 - gc_loc.top + 'px'
      b.onanimationend = function () {
        b.remove()
      }
      gc.appendChild(b)
    }

    if (player == 'player2') {
      let x = pl.getBoundingClientRect().x
      let y = pl.getBoundingClientRect().y
      let b = document.createElement('div')
      b.className = 'trailBall'
      let xx = Math.floor(Math.random() * 15) + 5
      b.style.left = x + xx - gc_loc.left + 'px'
      b.style.top = y - 3 - gc_loc.top + 'px'
      b.onanimationend = function () {
        b.remove()
      }
      gc.appendChild(b)
    }

  }

  // key tracking
  if (level_num > 0) {
    window.addEventListener('keydown', function (e) {
      d[e.which] = true;
    })
    window.addEventListener('keyup', function (e) {
      d[e.which] = false;
      pl.className = ''
      pl.style.transform = 'rotate(0deg)'
    })
    window.addEventListener("gamepadconnected", function (e) {
      var gp = navigator.getGamepads()[e.gamepad.index];
      // console.log("A " + gp.id + " was successfully detected! There are a total of " + gp.buttons.length + " buttons.")
    });
  } else {
    timer = 0
    deaths = 0
  }
}

window.addEventListener('load', buildGame)
window.focus()
```

<br>

The JavaScript engine handles all game logic and physics simulation. Key systems include:

**Game Initialization**

- Dynamically generates grid-based level layout from tile data
- Creates player character with position tracking
- Sets up event listeners for keyboard input (Arrow Keys)
- Initializes game clock and death counter

**Player Movement & Physics**

- Horizontal movement (left/right arrow keys) with acceleration/deceleration
- Gravity simulation pulling player downward each frame
- Ground detection for landing on platform tiles
- Double-jump mechanic allowing mid-air jump when grounded

**Collision Detection**

- Grid-based collision system checking adjacent tiles
- Detects collisions with ground (walkable), walls (solid), and hazards
- Lava spike detection triggers death state and respawn
- Portal detection for level progression

**Game State Management**

- Tracks player position (x, y coordinates)
- Monitors health/death state
- Counts total deaths and elapsed time
- Displays game alerts and status messages

**Rendering System**

- Updates player position each game frame
- Positions player element with CSS transforms
- Applies movement direction classes (`.goleft`, `.goright`)
- Creates particle trail effects on movement

**Input Handling**

- Listens for keyboard events (Arrow Left, Arrow Right, Arrow Up)
- Implements key press state tracking for smooth movement
- Prevents default browser behaviors during gameplay
- Handles multiple simultaneous key presses

**Game Loop**

- RequestAnimationFrame-based 60 FPS update cycle
- Applies physics calculations each frame
- Updates collision detection and game state
- Renders updated player position and effects
- Updates UI counters (deaths, time)

**Level & Tile System**

- Grid-based level design with configurable tile types
- Tile classes for different behaviors:
  - `.ground` - Walkable surfaces
  - `.lava` - Hazardous instant-death spikes
  - `.portal1/portal2` - Level transitions
  - `.innerwall` - Solid obstacles

**Game Mechanics Summary**

The game combines classic platformer mechanics with a grid-based physics system. Players navigate through obstacle courses, avoiding lava spikes while utilizing double-jump mechanics to reach otherwise inaccessible platforms. The game tracks performance metrics (deaths and time) to challenge players to improve their skills.
