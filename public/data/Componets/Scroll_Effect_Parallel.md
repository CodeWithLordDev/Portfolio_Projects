---
title: "Scroll Effect Parallax with Smooth Scrolling"
description: "An advanced scroll animation project featuring parallax effects, smooth scrolling with ScrollSmoother, and synchronized timeline animations. Uses GSAP ScrollTrigger and ScrollSmoother for seamless scroll-based interactions with hero cover scaling, text fading, and filter transitions."
image: "/Assets/data/images/Scroll_effect_parallel.png"
tags: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "ScrollSmoother", "Parallax", "Smooth Scroll"]
author: "CodewithLord"
date: "2026-01-30"
---

## 🧠 Description

This project showcases an elegant parallax scroll effect using GSAP's ScrollSmoother and ScrollTrigger plugins.

The animation features a hero section with a parallax image that scales and transforms as users scroll, combined with smooth scrolling for enhanced user experience.

Additional effects include overlay opacity transitions, title animations, and text fade-out sequences that trigger at specific scroll positions.

The design creates an immersive storytelling experience perfect for landing pages, portfolio showcases, and content-heavy websites.

<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <div class="hero-container">
          <section class="hero">
            <div class="hero__content">
              <div class="hero__bg"></div>
              <h1 class="hero__title">Hobbiton</h1>
            </div>

            <div class="hero__cover">
              <img
                class="hero__cover-img"
                src="https://assets.codepen.io/204808/hobbit-hole.png"
                alt=""
              />
            </div>
          </section>
        </div>

        <section class="section-stick">
          <p class="opacity-reveal">
            If ever you are passing my way, don't wait to knock! Tea is at four;
            but any of you are welcome at any time.
          </p>
        </section>

        <section class="hobbiton">
          <img
            class="hobbiton-img"
            src="https://assets.codepen.io/204808/hobbiton.jpg"
            alt=""
          />
        </section>
      </main>
    </div>
  </div>

  <!-- GSAP -->
  <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollSmoother.min.js"></script>

  <script src="script.js"></script>
</body>

</html>
```

<br>

### HTML Structure Explanation

The HTML uses a wrapper and content structure specifically designed for ScrollSmoother:

**Key Elements:**

- `#smooth-wrapper` - Outer container required by ScrollSmoother plugin
- `#smooth-content` - Inner wrapper that scrolls smoothly
- `.hero-container` - Main hero section container
- `.hero` - Hero content area with full viewport height
- `.hero__content` - Contains background image and title
- `.hero__bg` - Background image layer that parallaxes
- `.hero__title` - Text that animates during scroll
- `.hero__cover` - Overlay layer with image that scales during scroll
- `.section-stick` - Sticky text section that fades on scroll
- `.hobbiton` - Final image section

The nested structure allows ScrollSmoother to apply smooth scrolling effects to the entire page while individual sections trigger GSAP animations.

External GSAP plugins (ScrollTrigger and ScrollSmoother) are loaded via CDN.

<br>

## 🎨 CSS Code
<br>

```css
:root {
  --black: #1f1f1f;
  --white: #ffffff;
}

body {
  margin: 0;
  background: var(--black);
  color: var(--white);
  font-family: Roboto, sans-serif;
}

/* ---------------- HERO ---------------- */

.hero-container {
  position: relative;
}

.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero__content {
  position: relative;
  height: 100vh;
}

.hero__bg {
  height: 100vh;
  width: 100%;
  background: url("https://assets.codepen.io/204808/hobbiton.jpg") center/cover
    no-repeat;
  filter: blur(3px) brightness(1.5);
  will-change: filter, transform;
}

.hero__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  font-size: clamp(3rem, 15vw, 12rem);
  opacity: 0;
  filter: blur(10px);
  color: #111;
  z-index: 10;
}

/* ---------------- COVER ---------------- */

.hero__cover {
  --overlay-opacity: 1;
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  perspective: 500px;
}

.hero__cover::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 1) 90%
  );
  opacity: var(--overlay-opacity);
  pointer-events: none;
}

.hero__cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

/* ---------------- STICKY TEXT ---------------- */

.section-stick {
  min-height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.opacity-reveal {
  font-size: 4rem;
  width: 60%;
  text-align: center;
}

/* ---------------- HOBBITON ---------------- */

.hobbiton {
  position: relative;
}

.hobbiton::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.7) 90%
  );
}

.hobbiton-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
```

<br>

### CSS Breakdown

**Color System**

CSS custom properties (--black, --white) provide consistent theming throughout.

**Hero Section Layout**

`.hero-container` and `.hero` establish full-viewport height sections.

`overflow: hidden` ensures content stays within bounds during transforms.

**Background Image Parallax**

`.hero__bg` uses `will-change` property to hint GPU acceleration for smooth animations.

`filter: blur(3px) brightness(1.5)` creates initial atmospheric effect.

The background will scale and adjust filters during scroll.

**Hero Title Styling**

`clamp(3rem, 15vw, 12rem)` ensures responsive typography across screen sizes.

Initial scale(0.5) and opacity: 0 set the starting animation state.

`filter: blur(10px)` creates initial blurred appearance that clarifies on scroll.

**Cover Layer**

`--overlay-opacity: 1` is a CSS variable that GSAP will animate to 0.

`perspective: 500px` enables 3D transform effects on the image.

Radial gradient overlay creates depth and vignette effect.

**Sticky Text Section**

Flexbox centers large responsive text perfectly in viewport.

Will be pinned and animated with fade-out effect during scroll.

**Final Image Section**

`object-fit: cover` ensures image fills full height without distortion.

Radial gradient overlay darkens edges for visual cohesion.

**Performance Optimization**

`will-change` declarations prepare browser for animated properties.

Smooth scrolling is handled entirely by ScrollSmoother plugin.

<br>

## ⚙️ JavaScript Code
<br>

```javascript
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* Smooth scrolling */
ScrollSmoother.create({
  smooth: 1,
  effects: true,
  normalizeScroll: true
});

/* HERO TIMELINE */
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: 1
    }
  })
  .to(".hero__cover-img", {
    scale: 2,
    z: 350,
    ease: "power1.inOut"
  })
  .to(
    ".hero__cover",
    {
      "--overlay-opacity": 0
    },
    "<"
  )
  .to(
    ".hero__bg",
    {
      scale: 1.1,
      filter: "blur(0px) brightness(1)"
    },
    "<"
  )
  .to(
    ".hero__title",
    {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)"
    },
    "<"
  );

/* TEXT FADE */
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-stick",
    start: "center center",
    end: "+=1000",
    pin: true,
    scrub: true
  }
})
.to(".opacity-reveal", {
  opacity: 0,
  scale: 1.2
});
```

<br>

### JavaScript Breakdown

**Plugin Registration**

`gsap.registerPlugin(ScrollTrigger, ScrollSmoother)` - Enables scroll-trigger functionality and smooth scrolling.

**Smooth Scrolling Setup**

`ScrollSmoother.create()` initializes smooth scrolling with three key options:

- `smooth: 1` - Duration in seconds for scroll smoothing effect
- `effects: true` - Enables special scroll effects and parallax
- `normalizeScroll: true` - Normalizes scroll behavior across different browsers

This creates the silky smooth scrolling experience throughout the page.

**Hero Timeline Animation**

Creates a GSAP timeline synchronized with scroll progress:

**ScrollTrigger Configuration:**

- `trigger: ".hero-container"` - Animation starts when hero container enters viewport
- `start: "top top"` - Begins when top of hero reaches top of viewport
- `end: "+=150%"` - Ends after scrolling 150% of the viewport height
- `pin: true` - Pins the hero section in place during animation
- `scrub: 1` - Syncs animation with scroll (1 second smoothing delay)

**Staggered Animations** (using `"<"` for simultaneous playback):

1. `.hero__cover-img`:
   - `scale: 2` - Zooms image to 2x size
   - `z: 350` - Moves element forward in 3D space
   - `ease: "power1.inOut"` - Smooth acceleration/deceleration

2. `.hero__cover`:
   - `"--overlay-opacity": 0` - Animates CSS variable from 1 to 0, fading overlay

3. `.hero__bg`:
   - `scale: 1.1` - Subtle zoom on background
   - `filter: "blur(0px) brightness(1)"` - Removes blur and brightens background

4. `.hero__title`:
   - `scale: 1` - Grows from 0.5 to full size
   - `opacity: 1` - Fades in from transparent
   - `filter: "blur(0px)"` - Removes blur for sharp appearance

**Text Fade Timeline**

Second animation controls the sticky text section:

**ScrollTrigger Configuration:**

- `trigger: ".section-stick"` - Animation tied to text section
- `start: "center center"` - Animation begins when section center reaches viewport center
- `end: "+=1000"` - Continues for 1000px of additional scrolling
- `pin: true` - Pins section in place while fading
- `scrub: true` - Directly syncs animation to scroll speed

**Animation:**

- `.opacity-reveal`:
  - `opacity: 0` - Fades text from visible to invisible
  - `scale: 1.2` - Simultaneously scales up for expanding effect

**Result**

The combined effect creates an immersive parallax experience where:

- Smooth scrolling makes all interactions feel polished
- Hero section pins and animates complex multi-layer transforms
- Text fades and scales as users reach the sticky section
- Multiple properties animate in perfect synchronization with scroll position

This architecture is ideal for premium portfolio sites, storytelling websites, and experiences that prioritize polish and user engagement.
```