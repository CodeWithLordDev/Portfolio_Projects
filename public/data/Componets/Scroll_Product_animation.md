---
title: "Scooter Animation with GSAP ScrollTrigger – Advanced Scroll-Driven Timeline Animation (Liberty 150)"
description: "A complete technical breakdown of an interactive scooter product showcase using GSAP ScrollTrigger. Features coordinated scroll-driven animations, SVG clipping, timeline sequencing, and dynamic product reveals with specifications."
image: "/Assets/data/images/Scroll_Product_animation.png"
tags: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "Timeline Animation", "SVG Clipping"]
author: "CodewithLord"
date: "2025-12-15"
---

<br>

## 🧠 Description

<br>

This **interactive scooter product showcase** demonstrates advanced scroll-driven animation techniques using GSAP (GreenSock Animation Platform) and ScrollTrigger plugin. The page creates an engaging, narrative-driven experience where scrolling reveals product details, specifications, and characteristics through coordinated animations and dynamic content transitions.

<br>

### What Makes This Project Exceptional?

<br>

**Visual Features:**
- Complex multi-timeline animation system
- SVG masking with dynamic clipping paths
- Product image that morphs and repositions during scroll
- Staggered text animations (fade, scale, slide)
- Specifications and characteristics panels reveal progressively
- Smooth viewport pinning for controlled scrolling
- Header transitions and background animations
- Intro logo animations with parallax effects

<br>

**Technical Innovation:**
- **GSAP Timeline Management**: 8 coordinated timelines working in sequence
- **ScrollTrigger Integration**: Precise scroll-based animation control
- **Scrub Property**: Smooth animation synchronization with scroll velocity
- **SVG Clipping**: Dynamic mask path manipulation
- **Stagger Animations**: Synchronized multi-element transitions
- **Programmatic Sequencing**: Hierarchical animation control
- **Easing Functions**: Sophisticated timing curves (expo.out, sine.out)

<br>

### The Concept

<br>

**Narrative-Driven Experience:**

The animation tells a story as user scrolls:

1. **Intro (0-700px)**: Welcome screen with logo and tagline
2. **Product Introduction (700-1500px)**: Product name and model variants appear
3. **Transition (1500-2500px)**: Product image scales and positions shift
4. **Specifications (2500-3800px)**: Engine specs slide in from left
5. **Characteristics (3800-4600px)**: Physical specs slide in from right
6. **Outro (4600-5700px)**: Price and call-to-action button
7. **Total Scroll Distance**: 5700px of coordinated animations

<br>

Each section uses dedicated timelines synchronized to scroll position, creating a seamless, choreographed experience.

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
  <title>Scooter Animation | Liberty 150 Product Showcase</title>
  <meta name="description" content="Interactive GSAP ScrollTrigger animation showcasing the Piaggio Liberty 150 scooter with specifications and product details.">
  
  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  
  <!-- ====================================
       MAIN CONTAINER & WRAPPER
       ===================================== -->
  <div class="container" id="container">

    <div class="wrapper" id="wrapper">

      <!-- ====================================
           HEADER SECTION
           ===================================== -->
      <div class="header">
        <!-- Filter Icon -->
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>

        <div>
          <!-- Search Icon -->
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <!-- Menu Grid Icon -->
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </div>
      </div>

      <!-- ====================================
           MAIN PANEL - CONTENT & ANIMATIONS
           ===================================== -->
      <div class="panel">
        
        <!-- INTRO SECTION -->
        <div class="intro" id="intro">
          <!-- Brand Logo -->
          <img id="logo" src="./Image/logo.png" alt="Piaggio logo">
          
          <!-- Main Heading -->
          <h1 id="intro-h1">Ready to Cruise</h1>
          
          <!-- Tagline -->
          <h3 id="intro-h3">Relax and enjoy the ride</h3>
        </div>

        <!-- PRODUCT IMAGE (SCOOTER) -->
        <!-- This element animates throughout the entire scroll experience -->
        <img id="liberty" src="./Image/scooter.png" alt="Liberty 150 scooter">

        <!-- PRODUCT NAME HEADING -->
        <h1 id="panel-h1">Liberty 150</h1>

        <!-- MODEL VARIANTS LIST -->
        <ul class="models">
          <li>Liberty 50</li>
          <li>Liberty 150</li>
          <li>Liberty 150 Sport</li>
        </ul>

        <!-- ROTATION INDICATOR (360° View) -->
        <div class="rotator">
          <p>0°</p>
          <svg viewBox="0 0 10 30">
            <path d="M5 5.663V40" fill="none" stroke="#999" stroke-width="1" />
            <circle cx="5" cy="7" r="2.5" fill="#fff" />
          </svg>
          <p>360°</p>
        </div>

        <!-- ====================================
             ENGINE SPECIFICATIONS SECTION
             ===================================== -->
        <div class="specs">
          <h2>Engine</h2>

          <!-- First Column of Engine Specs -->
          <dl>
            <dt>Bore x Stroke</dt>
            <dd>58mm x 58.6mm</dd>

            <dt>Clutch</dt>
            <dd>Automatic centrifugal dry clutch</dd>

            <dt>Consumption</dt>
            <dd>36.8 Km/I</dd>

            <dt>Cooling</dt>
            <dd>Air</dd>

            <dt>CO2 Emissions</dt>
            <dd>65 g/Km</dd>

            <dt>Distribution</dt>
            <dd>SOHC, 3 valves</dd>

            <dt>Engine</dt>
            <dd>Single cylinder 4-stroke i-get</dd>
          </dl>

          <!-- Second Column of Engine Specs -->
          <dl>
            <dt>Engine Capacity</dt>
            <dd>155cc</dd>

            <dt>Fuel system</dt>
            <dd>Electronic injection</dd>

            <dt>Lubrication</dt>
            <dd>Oil with wet sump</dd>

            <dt>Max Power</dt>
            <dd>12.9hp @ 7750 rpm</dd>

            <dt>Max Torque</dt>
            <dd>13 Nm @ 5250 rpm</dd>

            <dt>Transmission</dt>
            <dd>Automatic CVT</dd>

            <dt>Starter</dt>
            <dd>Electric</dd>
          </dl>
        </div>

        <!-- ====================================
             PHYSICAL CHARACTERISTICS SECTION
             ===================================== -->
        <div class="chars">
          <h2>Characteristics</h2>

          <!-- First Column of Characteristics -->
          <dl>
            <dt>Frame</dt>
            <dd>High resistance steel</dd>

            <dt>Front tyre</dt>
            <dd>90/80 - 16"</dd>

            <dt>Rear brake</dt>
            <dd>140mm drum</dd>

            <dt>Seat height</dt>
            <dd>31.1" (790mm)</dd>

            <dt>Front suspension</dt>
            <dd>Hydraulic fork</dd>

            <dt>Rear tyre</dt>
            <dd>100/80 - 14"</dd>

            <dt>ABS</dt>
            <dd>Front ABS</dd>
          </dl>

          <!-- Second Column of Characteristics -->
          <dl>
            <dt>Fuel Tank</dt>
            <dd>6 liters</dd>

            <dt>Rear suspension</dt>
            <dd>Hydraulic shock absorber</dd>

            <dt>Front brake</dt>
            <dd>Disc 240mm</dd>

            <dt>Dimensions</dt>
            <dd>76.5" × 27.1" × 52.7"</dd>

            <dt>Emission</dt>
            <dd>EPA / CARB</dd>
          </dl>
        </div>

        <!-- ====================================
             OUTRO/CALL-TO-ACTION SECTION
             ===================================== -->
        <div class="outro">
          <h2>Piaggio Liberty 150</h2>
          <p>$2999.00</p>
          <button>Learn More</button>
        </div>
      </div>

      <!-- ====================================
           BACKGROUND LAYER
           ===================================== -->
      <!-- Gradient background with SVG clipping mask -->
      <div class="bkg"></div>

    </div>

    <!-- ====================================
         SVG CLIPPING MASK
         ===================================== -->
    <!-- Defines dynamic clip path that animates during scroll -->
    <svg id="mask">
      <defs>
        <clipPath id="wrapMask">
          <!-- Rectangle that expands/contracts during animation -->
          <rect id="wrapWin" width="1000" height="800" />
        </clipPath>
      </defs>
    </svg>

  </div>

  <!-- ====================================
       EXTERNAL JAVASCRIPT LIBRARIES
       ===================================== -->
  
  <!-- GSAP Core Library (v3.12.2) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  
  <!-- GSAP ScrollTrigger Plugin (v3.12.2) -->
  <!-- Enables scroll-driven animations -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  
  <!-- Custom Animation Script -->
  <script src="./script.js"></script>

</body>

</html>
```




<br>

✅ **Semantic Elements**: Proper heading hierarchy, list structure
✅ **ID/Class Naming**: Clear, descriptive identifiers for JavaScript targeting
✅ **Accessibility**: Alt text for images, semantic HTML
✅ **Performance**: Minimal nested elements, optimized structure
✅ **Organization**: Logical grouping of related content
✅ **Comments**: Clear section demarcation with comments
✅ **Mobile-Ready**: Viewport meta tag for responsive design

<br>

---

<br>

## 🎨 Step 2: CSS – Layout, Styling & Positioning

<br>

### Complete CSS Code

<br>

```css
/* ====================================
   FONT IMPORTS & RESET
   ==================================== */

@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&display=swap");

/* Universal Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ====================================
   BODY & GLOBAL STYLES
   ==================================== */

body {
  height: 100vh;
  width: 100vw;
  font-family: "Oswald", sans-serif;
  background-color: #ffffff;
  background-image: url("/Image/bg.png");
  
  /* Hide scrollbar (GSAP ScrollTrigger handles scroll) */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Webkit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* ====================================
   TYPOGRAPHY
   ==================================== */

h1,
h2,
h3 {
  font-family: "Bebas Neue", sans-serif;
  text-transform: uppercase;
  color: #f0f0f0;
  letter-spacing: 2px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

ul {
  list-style: none;
}

/* ====================================
   CONTAINER & WRAPPER LAYOUT
   ==================================== */

.container {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.wrapper {
  width: 90%;
  max-width: 900px;
  height: 100%;
  max-height: 700px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  background: #f0f0f0;
}

/* ====================================
   BACKGROUND LAYER WITH SVG CLIPPING
   ==================================== */

.bkg {
  width: 100%;
  height: 100%;
  background: #a4a4a4;
  background: linear-gradient(0deg, #797979, #494949 100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  
  /* Apply SVG clipping mask -->
  /* Height of clip-path animates via #wrapWin rect -->
  -webkit-clip-path: url("#wrapMask");
  clip-path: url("#wrapMask");
}

/* ====================================
   HEADER SECTION
   ==================================== */

.header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 4;
  width: 100%;
  padding: 1.5em;
  display: grid;
  grid-template-columns: 1fr 16%;
}

.header svg {
  width: 18px;
  stroke: #f0f0f0;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
}

/* Rotate filter icon 90 degrees -->
.header svg:nth-child(1) {
  transform: rotateZ(90deg);
}

/* Right-align search and menu icons -->
.header div {
  text-align: right;
}

.header div svg {
  margin-left: 20px;
}

/* ====================================
   PANEL - MAIN CONTENT AREA
   ==================================== */

.panel {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
}

/* ====================================
   PRODUCT IMAGE (SCOOTER)
   ==================================== */

.panel img#liberty {
  width: 95%;
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: -250px;  /* Positioned below viewport initially -->
  transform: translateX(-50%);
}

/* ====================================
   PRODUCT NAME HEADING
   ==================================== */

.panel h1#panel-h1 {
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 9;
  top: 140px;
  font-size: 8rem;
  left: 50%;
  transform: translateX(-50%);
}

/* ====================================
   INTRO SECTION
   ==================================== */

.intro {
  z-index: 6;
  text-align: center;
  transform: translateY(-60px);
}

.intro h1 {
  font-size: 4rem;
}

.intro h3 {
  font-size: 2.4rem;
  margin-top: -16px;
}

.intro img {
  width: 50px;
  opacity: 0.6;
}

/* ====================================
   MODEL VARIANTS LIST
   ==================================== */

.models {
  position: absolute;
  top: 50%;
  left: 2em;
  z-index: 11;
}

.models li {
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #8a8a8a;
}

/* Highlight active model -->
.models li:nth-child(2) {
  color: #f0f0f0;
  font-size: 0.9rem;
  list-style-type: square;
}

/* ====================================
   360° ROTATION INDICATOR
   ==================================== */

.rotator {
  position: absolute;
  top: 45%;
  right: 2em;
  z-index: 12;
}

.rotator p {
  text-align: center;
  font-size: 0.8rem;
  color: #a4a4a4;
  text-transform: uppercase;
  padding: 5px 0;
}

/* ====================================
   SPECIFICATIONS & CHARACTERISTICS
   ==================================== */

.specs,
.chars {
  position: absolute;
  top: 15%;
  width: 50%;
  z-index: 20;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10% 1fr;
}

/* Section headings span both columns -->
.specs h2,
.chars h2 {
  grid-column: 1/3;
  grid-row: 1/2;
  color: #4b4b4b;
  text-shadow: none;
}

/* Definition lists fill grid cells -->
.specs dl:nth-child(0),
.chars dl:nth-child(0) {
  grid-column: 1/2;
  grid-row: 2/3;
}

.specs dl:nth-child(1),
.chars dl:nth-child(1) {
  grid-column: 2/3;
  grid-row: 2/3;
}

/* Definition styling -->
.specs dl dt,
.chars dl dt {
  text-transform: uppercase;
  margin-bottom: 5px;
}

.specs dl dd,
.chars dl dd {
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #717171;
}

/* ====================================
   OUTRO / CALL-TO-ACTION SECTION
   ==================================== */

.outro {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  text-align: center;
  padding: 1em;
}

.outro h2 {
  font-size: 3rem;
}

.outro p {
  font-size: 1.7rem;
  color: #f0f0f0;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

/* ====================================
   BUTTON STYLING
   ==================================== */

.outro button {
  margin: 20px 0;
  border: 1px solid #9b9b9b;
  background: #646464;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  color: #d7d7d7;
  font-size: 1.2rem;
  font-family: "Bebas Neue", sans-serif;
  transition: all 0.3s ease;
}

.outro button:hover {
  background: #7a7a7a;
  border-color: #d7d7d7;
}

/* ====================================
   SVG MASK ELEMENT
   ==================================== */

#mask {
  display: block;
  position: absolute;
  z-index: 40;
}

/* ====================================
   FIREFOX-SPECIFIC FIX
   ==================================== */

@-moz-document url-prefix() {
  .rotator svg {
    width: 100%;
    height: 60px;
  }
}
```

<br>

### CSS Architecture Explanation

<br>

#### 1. Grid-Based Layout

<br>

```css
.container {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.wrapper {
  max-width: 900px;
  max-height: 700px;
  position: relative;
}
```

**Purpose:**
- `grid` with `place-items: center` centers wrapper
- Wrapper has fixed max dimensions for consistent animation
- `position: relative` creates stacking context for absolute positioning

<br>

#### 2. SVG Clipping Mask System

<br>

```css
.bkg {
  clip-path: url("#wrapMask");
}

/* In HTML: <rect id="wrapWin" width="1000" height="800" /> -->
```

**How It Works:**
1. `.bkg` applies clip-path from SVG mask
2. `#wrapWin` rect height animates from 80 to 800
3. Gradient background clips to animated rectangle
4. Creates reveal/masking effect

**JavaScript animates:**
```javascript
gsap.to("#wrapWin", {
  height: 800,  // Expands from 80
  duration: 2,
  scrollTrigger: { start: 300, end: 500 }
})
```

<br>

#### 3. Absolute Positioning Strategy

<br>

```css
.panel img#liberty {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: -250px;  /* Below viewport initially -->
  transform: translateX(-50%);
}

.intro {
  z-index: 6;  /* Below product -->
}

.outro {
  z-index: 30;  /* Above all -->
}
```

**Z-Index Hierarchy:**
- 1: Background gradient
- 4: Header
- 6: Intro section
- 9: Panel heading
- 10: Product image
- 11: Model list
- 12: Rotator
- 20: Specs/Chars
- 30: Outro
- 40: SVG mask

<br>



**Layout Result:**
```
┌─────────────────┐
│   Engine (h2)   │  ← Spans 2 columns
├────────┬────────┤
│ Specs1 │ Specs2 │  ← Two-column specs
└────────┴────────┘
```

<br>

#### 5. Typography & Color Hierarchy

<br>

```css
h1, h2, h3 {
  font-family: "Bebas Neue", sans-serif;  /* Display font -->
  color: #f0f0f0;                         /* Light on dark -->
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

body {
  font-family: "Oswald", sans-serif;  /* Body font -->
}
```

**Color Scheme:**
- **#f0f0f0**: Light headings (high contrast)
- **#717171**: Body text (readable on light background)
- **#8a8a8a**: Inactive labels
- **#4b4b4b**: Section headings

<br>

---

<br>

## ⚙️ Step 3: JavaScript – GSAP Timeline Animation

<br>

### Complete JavaScript Code & Explanation

<br>

```javascript
/* ====================================
   GSAP SETUP & PLUGIN REGISTRATION
   ==================================== */

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin("ScrollTrigger");

/* ====================================
   TIMELINE DECLARATIONS
   ==================================== */

// Create 8 separate timelines for different sections
let scene = gsap.timeline();        // Master timeline
let intro_tl = gsap.timeline();     // Intro section (0-700px)
let part1_tl = gsap.timeline();     // Part 1 (700-1500px)
let part2_tl = gsap.timeline();     // Part 2 (1500-2500px)
let part3_tl = gsap.timeline();     // Part 3 (2500-3800px)
let part4_tl = gsap.timeline();     // Part 4 (3800-4600px)
let part5_tl = gsap.timeline();     // Part 5 (4600-5700px)
let outro_tl = gsap.timeline();     // Outro section

/* ====================================
   SCROLLTRIGGER SETUP - PIN CONTAINER
   ==================================== */

ScrollTrigger.create({
  trigger: "#container",
  pin: true,                    // Pin container while scrolling
  start: "top top",             // Start when top reaches top
  end: "+=5700"                 // Total scroll distance: 5700px
});

/*
  How pinning works:
  1. User scrolls down 5700px total
  2. #container stays pinned to viewport
  3. Animations synchronized to scroll position
  4. Creates immersive, fixed viewport experience
*/

/* ====================================
   INITIAL STATE SETUP (gsap.set)
   ==================================== */

// These properties start hidden/off-screen
// Animations will reveal them

gsap.set(".specs", {
  x: -160,      // Off-screen left
  opacity: 0    // Invisible
});

gsap.set(".chars", {
  x: 260        // Off-screen right
  // Note: opacity not set, will fade in via animation
});

// Initialize model list items as invisible
part2_tl.set(".models li", {
  opacity: 0
});

// Initialize spec details as invisible
part3_tl.set(".specs dt", {
  opacity: 0
});

part3_tl.set(".specs dd", {
  opacity: 0
});

// Initialize characteristics details as invisible
part4_tl.set(".chars h2", {
  opacity: 0
});

part4_tl.set(".chars dt", {
  opacity: 0
});

part4_tl.set(".chars dd", {
  opacity: 0
});

/* ====================================
   INTRO TIMELINE (0-700px)
   ===================================

   The intro reveals the scooter image
   and fades out welcome message
*/

intro_tl
  //
```


<br>
<hr>
<br>

<h2 style="text-align:center;">
  Images used in the above program
</h2>

<br>

<div style="
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  align-items: center;
  justify-items: center;
">

  <!-- Logo Image -->
  <figure style="text-align:center;">
    <img 
      src="/Assets/data/img/logo.png" 
      alt="Piaggio Logo used in GSAP scooter animation"
      style="max-width:100%; border-radius:12px;"
    >
    <figcaption style="margin-top:8px; font-size:14px;">
      Brand Logo
    </figcaption>
  </figure>

  <!-- Scooter Image -->
  <figure style="text-align:center;">
    <img 
      src="/Assets/data/img/scooter.png" 
      alt="Liberty 150 Scooter image used in animation"
      style="max-width:100%; border-radius:12px;"
    >
    <figcaption style="margin-top:8px; font-size:14px;">
      Scooter Product Image
    </figcaption>
  </figure>

  <!-- Background Image -->
  <figure style="text-align:center;">
    <img 
      src="/Assets/data/img/bg.png" 
      alt="Background image used with SVG clipping mask"
      style="max-width:100%; border-radius:12px;"
    >
    <figcaption style="margin-top:8px; font-size:14px;">
      Animated Background
    </figcaption>
  </figure>

</div>

<br>
