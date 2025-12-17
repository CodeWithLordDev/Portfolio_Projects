---
title: "Interactive Animated House with Room Slider – CSS 3D Transforms & FLIP Animation (2025)"
description: "A complete technical breakdown of an interactive 3D house visualization that responds to a range slider. Features CSS 3D transforms, advanced animations using the FLIP technique, RxJS reactive programming, and smooth room count transitions."
image: "/Assets/data/images/House_Slider.jpg"
tags: ["HTML", "CSS", "JavaScript", "RxJS", "FLIP Animation", "3D Transforms", "Interactive"]
author: "CodewithLord"
date: "2025-12-15"
---

<br>

## 🧠 Description

<br>

This **interactive 3D house visualization** demonstrates advanced web animation techniques by creating a responsive, animated house that morphs and transforms based on room count selection. Users can slide a range input to change the number of rooms (3-6), and the entire house architecture dynamically adjusts with smooth, coordinated animations.

<br>

### What Makes This Project Exceptional?

<br>

**Visual Features:**
- Fully 3D rendered house using CSS transforms
- Dynamic resizing and repositioning of house elements
- Animated roof, windows, door, chimney, and facade
- Sparkle animations when rooms are added/removed
- Smooth number label animations (scales and slides)
- Multiple synchronized animations coordinated across elements

<br>

**Technical Innovation:**
- **FLIP Animation Technique** for high-performance transitions
- **RxJS Reactive Programming** for event handling and data flow
- **CSS 3D Transforms** with skew, rotate, and scale effects
- **Data-driven HTML** using data attributes for state management
- **Advanced CSS Keyframes** with room-specific animations
- **Hardware-accelerated animations** for 60fps performance
- **Complex CSS Grid and positioning** for 3D perspective

<br>

### The Concept

<br>

The house is a complete 3D structure with:
- **Walls** (wings) - Left and right sections with windows
- **Roof** - Angled with proper perspective
- **Front Facade** - Main facing with door and large window
- **Chimney** - Architectural detail
- **Sparkles** - Visual feedback when rooms change
- **Responsive scaling** - All elements scale proportionally

As you move the slider, the house doesn't just scale—each individual element animates uniquely, creating a cohesive, realistic transformation effect.

<br>

---

<br>

## 💻 Step 1: HTML Structure

<br>

### Complete HTML Code

<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Animated House | Room Slider</title>
  <meta name="description" content="Interactive 3D house animation with room slider. Uses CSS 3D transforms, FLIP animations, and RxJS.">
  
  <!-- Normalize CSS -->
  <link rel="stylesheet" href="https://public.codepenassets.com/css/normalize-5.0.0.min.css">
  
  <!-- Custom Styles -->
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <!-- Main House Container -->
  <div class="house" id="house" data-rooms="6">
    
    <!-- House Wings (Left and Right Walls) -->
    <div class="house-wings" data-flip-key="wings">
      
      <!-- Left Wing -->
      <div class="house-left-wing">
        <!-- Windows for left side -->
        <div class="house-window"></div>
        <div class="house-window"></div>
        <!-- Sparkle animation for new room -->
        <div class="house-sparkle">
          <div class="house-sparkle-dots"></div>
        </div>
      </div>
      
      <!-- Right Wing -->
      <div class="house-right-wing">
        <!-- Windows for right side -->
        <div class="house-window"></div>
        <div class="house-window"></div>
        <!-- Sparkle animation for new room -->
        <div class="house-sparkle">
          <div class="house-sparkle-dots"></div>
        </div>
      </div>
      
      <!-- Roof of Wings -->
      <div class="house-roof">
        <div class="house-ledge"></div>
      </div>
      
    </div>
    
    <!-- House Front (Main Facing) -->
    <div class="house-front" data-flip-key="front">
      
      <!-- Chimney Detail -->
      <div class="house-chimney"></div>
      
      <!-- Front Facade (3D Perspective) -->
      <div class="house-facade"></div>
      
      <!-- Large Front Window -->
      <div class="house-window">
        <div class="house-sparkle">
          <div class="house-sparkle-dots"></div>
        </div>
      </div>
      
      <!-- Doorway Section -->
      <div class="house-doorway">
        <!-- Stairs leading to door -->
        <div class="house-stairs"></div>
        <!-- Main door -->
        <div class="house-door"></div>
      </div>
      
      <!-- Front Gable (Triangular Top) -->
      <div class="house-gable">
        <!-- Roof of gable -->
        <div class="house-roof">
          <div class="house-ledge"></div>
        </div>
      </div>
      
    </div>
    
  </div>
  
  <!-- Room Count Label -->
  <label class="house-label" for="range" id="label">
    <!-- Previous room count (animated out) -->
    <!-- Current room count (animated in) -->
    Rooms
  </label>
  
  <!-- Range Slider Input (3-6 rooms) -->
  <input 
    type="range" 
    min="3" 
    max="6" 
    step="1" 
    value="6" 
    id="range"
    aria-label="Select number of rooms (3-6)"
  >
  
  <!-- External Libraries -->
  <!-- FLIP Animation Library -->
  <script src='https://unpkg.com/flipping@0.5.3/dist/flipping.animationFrame.js'></script>
  
  <!-- RxJS Reactive Programming Library -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.3/rxjs.umd.min.js'></script>
  
  <!-- Custom JavaScript -->
  <script src="./script.js"></script>
  
</body>

</html>
```

<br>

### HTML Structure Breakdown

<br>

**Document Setup:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Animated House | Room Slider</title>
```

- **Doctype**: HTML5 standard
- **Language**: English for accessibility
- **Viewport**: Mobile responsive design
- **Title**: Descriptive for SEO

<br>

**Main House Container:**
```html
<div class="house" id="house" data-rooms="6">
```

- **id="house"**: JavaScript reference
- **data-rooms="6"**: Tracks current room count
- **Class**: Styling and responsive sizing

The house element is the root container that CSS will size based on the `data-rooms` attribute.

<br>

**House Wings (Left & Right Walls):**
```html
<div class="house-wings" data-flip-key="wings">
  <div class="house-left-wing">
    <!-- Windows -->
  </div>
  <div class="house-right-wing">
    <!-- Windows -->
  </div>
  <div class="house-roof">
    <!-- Roof structure -->
  </div>
</div>
```

**Three-layer structure:**

1. **house-left-wing**: Left side of house with windows
   - Windows (2 per side)
   - Sparkle element (animates when rooms added)
   
2. **house-right-wing**: Right side mirroring left
   - Same structure as left wing
   - Animations happen opposite direction

3. **house-roof**: Connects both wings
   - Triangular roof structure
   - Animates with wing scaling

**data-flip-key="wings"**: Marks this element for FLIP animation tracking.

<br>

**House Front (Main Facade):**
```html
<div class="house-front" data-flip-key="front">
  <div class="house-chimney"></div>
  <div class="house-facade"></div>
  <div class="house-window">
    <!-- Large front window -->
  </div>
  <div class="house-doorway">
    <div class="house-stairs"></div>
    <div class="house-door"></div>
  </div>
  <div class="house-gable">
    <!-- Front roof gable -->
  </div>
</div>
```

**Components:**

1. **Chimney**: Architectural detail that rotates during animation
2. **Facade**: 3D perspective using CSS skew transforms
3. **Front Window**: Large central window with sparkle animation
4. **Doorway**: Door plus stairs leading to entrance
5. **Gable**: Triangular front roof

**data-flip-key="front"**: Separate FLIP tracking for front section.

<br>

**Interactive Controls:**
```html
<label class="house-label" for="range" id="label">
  Rooms
</label>

<input 
  type="range" 
  min="3" 
  max="6" 
  step="1" 
  value="6" 
  id="range"
/>
```

- **Label**: Shows current room count with animated transitions
- **Range Input**: Slider controlling rooms (3-6)
- **Initial Value**: 6 rooms
- **Step**: 1 room per increment

<br>

**External Libraries:**
```html
<!-- FLIP Animation -->
<script src='https://unpkg.com/flipping@0.5.3/dist/flipping.animationFrame.js'></script>

<!-- RxJS Reactive Programming -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.3/rxjs.umd.min.js'></script>

<!-- Custom Script -->
<script src="./script.js"></script>
```

These libraries enable:
- **FLIP**: High-performance animations
- **RxJS**: Reactive event handling
- **Custom JS**: Application logic

<br>

### HTML Best Practices Used

<br>

✅ **Semantic HTML**: Proper structure with clear element hierarchy
✅ **Data Attributes**: State management via `data-*` attributes
✅ **ARIA Labels**: Accessibility for range input
✅ **Mobile-First**: Viewport meta tag and responsive design
✅ **Performance**: Minimal DOM, no unnecessary elements
✅ **Organization**: Logical nesting and clear relationships
✅ **Accessibility**: Form labels properly associated with inputs

<br>

---

<br>

## 🎨 Step 2: CSS – Advanced 3D Styling & Animations

<br>

### CSS Overview & Architecture

<br>

The CSS is **extremely complex** because it:
- Creates 3D perspective and transforms
- Handles 4 different room configurations (3, 4, 5, 6 rooms)
- Generates unique animations for each configuration
- Manages width scaling and positioning
- Coordinates dozens of simultaneous animations
- Uses advanced selectors and attribute-based styling

<br>

### Key CSS Sections

<br>

#### 1. Reset & Layout Foundation

<br>

```css
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EFEFEF;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
}

*:before,
*:after {
  content: "";
  display: block;
}
```

**Purpose:**
- Center content vertically and horizontally
- Full-height layout
- Pseudo-elements initialized (for decorative elements)
- Border-box sizing for predictable layout

<br>

#### 2. Range Slider Styling

<br>

```css
[type=range] {
  -webkit-appearance: none;
  margin: 20px 0;
  width: 330px;
}

[type=range]::-webkit-slider-runnable-track {
  cursor: pointer;
  height: 25px;
  width: 330px;
  background: linear-gradient(to bottom, #79AAFF, #79AAFF 49.9%, #609aff 50%, #609aff 100%);
  border: 5px solid #224889;
  border-radius: 25px;
}

[type=range]::-webkit-slider-thumb {
  background: #224889;
  border-radius: 20px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  -webkit-appearance: none;
  margin-top: -12.5px;
}
```

**Customization:**
- Removes default browser styling (`-webkit-appearance: none`)
- Custom track with gradient background
- Circular thumb button
- Browser prefixes for webkit and moz

<br>

#### 3. Room Configuration System

<br>

```css
[data-rooms="6"] {
  --wings-width: 425px;
  --front-width: 150px;
}

[data-rooms="6"] .house-wings {
  width: 425px;
  left: calc(50% - 212.5px);
}

[data-rooms="6"] .house-front {
  width: 150px;
  left: calc(50% - 75px);
}

[data-rooms="5"] {
  --wings-width: 355px;
  --front-width: 150px;
}

/* ... Similar for rooms 4 and 3 ... */
```

**How It Works:**
- Each room count (3, 4, 5, 6) has different widths
- Custom properties define sizes
- Centered positioning using calc()
- CSS automatically adapts when `data-rooms` changes

**Size Progression:**
- 6 rooms: Wings 425px, Front 150px (widest)
- 5 rooms: Wings 355px, Front 150px
- 4 rooms: Wings 300px, Front 125px
- 3 rooms: Wings 240px, Front 150px (narrowest)

<br>

#### 4. House Label Animation

<br>

```css
.house-label {
  text-transform: uppercase;
  font-weight: bold;
  padding-left: calc(20px + 1ch);
  font-size: 25px;
  color: #224889;
  margin: 30px 0 5px;
  font-family: Arial Rounded MT Bold, Helvetica Neue, Helvetica, sans serif;
}

.house-label:before {
  content: attr(data-prev-rooms);
  position: absolute;
  text-align: right;
  left: 0;
  top: 0;
  padding: 0 0.5ch;
  will-change: transform;
}

.house-label:after {
  content: attr(data-rooms);
  position: absolute;
  text-align: right;
  left: 0;
  top: 0;
  padding: 0 0.5ch;
  will-change: transform;
}
```

**Dynamic Content:**
- **:before**: Shows previous room count
- **:after**: Shows new room count
- Content from data attributes
- Pseudo-elements animated simultaneously

**For 6 Rooms (decreasing):**
```css
.house-label[data-rooms="6"][data-rooms-delta^="-"]:before {
  animation: prev-label-up-6 500ms cubic-bezier(0.1, 0, 0.3, 1) both;
}

.house-label[data-rooms="6"][data-rooms-delta^="-"]:after {
  animation: label-up-6 1000ms cubic-bezier(0.1, 0, 0.3, 1) both;
}
```

**Decreasing (negative delta):**
- Old number slides up and scales
- New number enters from bottom
- Smooth easing function

**For 6 Rooms (increasing):**
```css
.house-label[data-rooms="6"]:not([data-rooms-delta^="-"]):before {
  animation: prev-label-down-6 500ms 70ms cubic-bezier(0.1, 0, 0.3, 1) both;
}

.house-label[data-rooms="6"]:not([data-rooms-delta^="-"]):after {
  animation: label-down-6 1000ms 70ms cubic-bezier(0.1, 0, 0.3, 1) both;
}
```

**Increasing (positive delta):**
- Old number slides down and scales
- New number enters from top
- Delayed start (70ms) for effect

<br>

#### 5. Keyframe Animations (Room Count Labels)

<br>

```css
@keyframes prev-label-up-6 {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%) scale(1.5);
    opacity: 0;
  }
}

@keyframes label-up-6 {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(0) scale(1.5);
    opacity: 1;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**prev-label-up-6:**
- Slides up (translateY(-100%))
- Scales to 1.5x
- Fades to transparent

**label-up-6:**
- Starts from bottom (translateY(100%))
- Grows to 1.5x scale at midpoint
- Settles back to normal size
- Duration: 1000ms (twice prev-label)

**4 Room Variants:**
- Each room count (3-6) has unique keyframes
- Different timing and intensity
- Creates varied animation feel

<br>

#### 6. House Structure Styling

<br>

```css
.house {
  height: 225px;
  width: 520px;
}

.house-wings {
  position: absolute;
  bottom: 0;
  height: 125px;
}

.house-wings:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border: 5px solid #224889;
  box-shadow: inset 0 15px #E1EAFF;
}

.house-wings:after {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: #224889;
  transform: scaleX(1.2);
}
```

**House Wings Structure:**
- `:before` = White wall with shadow
- `:after` = Bottom ledge/trim

**Roof:**
```css
.house-wings>.house-roof {
  height: 65px;
  width: calc(100% + 40px);
  left: -20px;
  border-bottom: 5px solid #224889;
  position: absolute;
  bottom: 100%;
}

.house-wings>.house-roof:before,
.house-wings>.house-roof:after {
  position: absolute;
  height: 100%;
  width: 50%;
  background-color: #A6CFFF;
  border: 5px solid #224889;
  border-bottom: none;
}

.house-wings>.house-roof:before {
  left: 0;
  transform-origin: bottom left;
  transform: skewX(-30deg);
  border-right: none;
}

.house-wings>.house-roof:after {
  right: 0;
  transform-origin: bottom right;
  transform: skewX(30deg);
  border-left: none;
}
```

**Roof Details:**
- Two angled sides using skewX
- Transform origin at bottom for realistic pitch
- Different borders for visual clarity
- Color: Light blue (#A6CFFF)

<br>

#### 7. Window Styling

<br>

```css
.house-window {
  height: 60px;
  width: 30px;
  border: 5px solid #224889;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-image: linear-gradient(to right, #65EBFF, #65EBFF 49.9%, #71FBFF 50%, #71FBFF);
}

.house-window:before {
  height: 100%;
  width: 5px;
  left: calc(50% - 2.5px);
  top: 0;
  background-color: #224889;
  position: absolute;
}

.house-window:after {
  height: 15px;
  width: calc(100% + 20px);
  left: -10px;
  bottom: 5px;
  border-radius: 15px;
  background-color: #79AAFF;
  border: 5px solid #224889;
  box-shadow: 0 5px #E1EAFF;
}
```

**Window Features:**
- Arched top (border-radius)
- Gradient fill (light cyan)
- Vertical mullion (:before)
- Window sill (:after)

<br>

#### 8. House Component Animations

<br>

```css
@keyframes wing-roof-6-move {
  from {
    transform-origin: bottom left;
  }
  25% {
    transform: translateY(-10px) rotate(-5deg);
  }
  50% {
    transform-origin: bottom left;
    transform: none;
  }
  51% {
    transform-origin: bottom right;
  }
  75% {
    transform-origin: bottom right;
    transform: translateY(-5px) rotate(2deg);
  }
  to {
    transform-origin: bottom right;
    transform: none;
  }
}
```

**Animation Technique:**
- Changes transform-origin mid-animation
- Moves roof up and rotates
- Returns to neutral state
- Creates "breathing" effect

**Multiple Animations:**
- **wing-roof-**: Roof animation
- **front-roof-**: Front gable animation
- **house-**: Main structure scaling
- **facade-**: Front wall animation
- **chimney-**: Chimney rotation/movement

Each has variants for rooms 3, 4, 5, 6.

<br>

#### 9. Sparkle Animation (New Rooms)

<br>

```css
.house-sparkle {
  position: absolute;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 5px solid #224889;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  display: none;
}

.house-sparkle:before {
  top: 0;
  left: 0;
  background-color: #65EBFF;
}

.house-sparkle:after {
  bottom: 0;
  right: 0;
  background-color: #224889;
}

@keyframes sparkle-6 {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(2);
    opacity: 0;
    border-width: 0;
  }
}

.house[data-rooms="6"] .house-sparkle {
  animation: sparkle-6 500ms cubic-bezier(0.1, 0, 0.3, 1) both;
}
```

**Sparkle Effect:**
- Circle with colored quarters
- Scales and fades out
- Only shows when rooms change
- Creates celebratory visual feedback

<br>

#### 10. Door & Stairs

<br>

```css
.house-door {
  position: absolute;
  background-color: #224889;
  width: 50%;
  height: 55px;
  left: 25%;
  bottom: 35px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.house-stairs {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 15px;
  border: 5px solid #224889;
  z-index: 0;
  box-shadow: 5px -5px #E1EAFF;
}

.house-stairs:before,
.house-stairs:after {
  box-shadow: 5px -5px #E1EAFF;
  position: absolute;
  height: 15px;
  width: 100%;
  border: 5px solid #224889;
}

.house-stairs:before {
  bottom: 100%;
  transform: scaleX(0.9);
}

.house-stairs:after {
  bottom: calc(200% + 5px);
  transform: scaleX(0.75);
}
```

**Door:**
- Dark blue rectangular door
- Arched top
- Positioned above stairs

**Stairs:**
- Three-step ascending pattern
- Each step scaled smaller (perspective)
- Shadow for depth

<br>

---

<br>

## ⚙️ Step 3: JavaScript – RxJS & FLIP Animation

<br>

### Complete JavaScript Code

<br>

```javascript
// ====================================
// REACTIVE HOUSE ANIMATION SYSTEM
// Using RxJS for reactive event handling
// Using FLIP for high-performance animations
// ====================================

// Destructure RxJS operators
const { fromEvent } = rxjs;
const { map, startWith } = rxjs.operators;

// ====================================
// DOM ELEMENT REFERENCES
// ====================================

// Main house container
const house = document.querySelector('#house');

// Range slider input
const range = document.querySelector('#range');

// Room count label
const label = document.querySelector('#label');

// ====================================
// FLIP ANIMATION INITIALIZATION
// FLIP = First, Last, Invert, Play
// High-performance DOM animation technique
// ====================================

const f = new Flipping();

// ====================================
// UPDATE FUNCTION (Wrapped with FLIP)
// Called whenever room count changes
// ====================================

const update = f.wrap(rooms => {
  // Step 1: Get previous room count
  // This is the FIRST state
  const prevRooms = house.getAttribute('data-rooms');
  
  // Step 2: Update data attributes to new values
  // This is the LAST state
  house.setAttribute('data-prev-rooms', prevRooms);
  house.setAttribute('data-rooms', rooms);
  
  // Also update label
  label.setAttribute('data-prev-rooms', prevRooms);
  label.setAttribute('data-rooms', rooms);
  
  // Calculate delta (positive = increasing, negative = decreasing)
  const delta = rooms - prevRooms;
  label.setAttribute('data-rooms-delta', delta);
  
  // FLIP handles INVERT and PLAY automatically
  // CSS animations triggered by attribute changes
});

// ====================================
// REACTIVE EVENT STREAM (RxJS Observable)
// Listens to range slider input
// ====================================

const range$ = fromEvent(range, 'input')
  .pipe(
    // Extract value from input event
    map(e => e.target.value),
    
    // Start with initial value (6 rooms)
    startWith(6)
  );

// ====================================
// SUBSCRIPTION
// Subscribe to observable and call update
// ====================================

range$.subscribe(update);

// ====================================
// OPTIONAL: LOGGING & DEBUGGING
// ====================================

// Log room changes (for debugging)
range$.subscribe(rooms => {
  console.log(`House updated to ${rooms} rooms`);
});

// ====================================
// OPTIONAL: KEYBOARD SHORTCUTS
// ====================================

document.addEventListener('keydown', (e) => {
  // Arrow keys to change rooms
  if (e.key === 'ArrowUp') {
    const current = parseInt(range.value);
    if (current < 6) range.value = current + 1;
    range.dispatchEvent(new Event('input'));
  }
  
  if (e.key === 'ArrowDown') {
    const current = parseInt(range.value);
    if (current > 3) range.value = current - 1;
    range.dispatchEvent(new Event('input'));
  }
});

// ====================================
// OPTIONAL: ACCESSIBILITY ENHANCEMENTS
// ====================================

// Add aria-live region for room count updates
const ariaLiveRegion = document.createElement('div');
ariaLiveRegion.setAttribute('aria-live', 'polite');
ariaLiveRegion.setAttribute('aria-atomic', 'true');
ariaLiveRegion.className = 'sr-only';

document.body.appendChild(ariaLiveRegion);

// Update aria-live when rooms change
range$.subscribe(rooms => {
  ariaLiveRegion.textContent = `House now has ${rooms} rooms`;
});

// ====================================
// OPTIONAL: PERFORMANCE MONITORING
// ====================================

let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;

function measureFPS() {
  frameCount++;
  const currentTime = performance.now();
  
  if (currentTime >= lastFrameTime + 1000) {
    fps = frameCount;
    frameCount = 0;
    lastFrameTime = currentTime;
    console.log(`FPS: ${fps}`);
  }
  
  requestAnimationFrame(measureFPS);
}

// Uncomment to monitor performance
// measureFPS();
```

<br>

### JavaScript Architecture Explanation

<br>

#### 1. RxJS Fundamentals

<br>

**What is RxJS?**

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables. It simplifies event handling and asynchronous operations.

<br>

**Observable Pattern:**
```javascript
const range$ = fromEvent(range, 'input')
  .pipe(
    map(e => e.target.value),
    startWith(6)
  );

range$.subscribe(update);
```

**Flow:**
```
User moves slider
    ↓
Input event fires
    ↓
fromEvent() captures event
    ↓
map() extracts value
    ↓
startWith() provides initial value
    ↓
subscribe() calls update() function
    ↓
House animates to new room count
```

<br>

**Why RxJS Here?**
- Declarative event handling
- Easy to add/modify logic
- Built-in operators (map, filter, etc.)
- Chainable and testable

<br>

#### 2. FLIP Animation Technique

<br>

**What is FLIP?**

FLIP is a performance optimization technique for animations:

**F** - First: Record initial state
**L** - Last: Apply changes, record new state
**I** - Invert: Apply inverse transforms
**P** - Play: Animate to final state

<br>

**Why FLIP?**

```javascript
// Without FLIP (Janky)
element.style.width = '300px';  // Forces layout
```