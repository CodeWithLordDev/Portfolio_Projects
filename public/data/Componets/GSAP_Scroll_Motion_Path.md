---
title: "GSAP Scroll Motion Path Animation"
description: "An interactive scroll-triggered animation using GSAP MotionPathPlugin that animates an element along a custom motion path defined by multiple waypoints. Features smooth scroll synchronization with ScrollTrigger and dynamic responsive calculations."
image: "/Assets/data/images/Motion_Path.png"
tags: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "MotionPath", "Animation", "Scroll Animation"]
author: "CodewithLord"
date: "2026-01-30"
---

## 🧠 Description

This project showcases an elegant scroll-triggered animation powered by GSAP (GreenSock Animation Platform) and its MotionPathPlugin.

The animation allows an element to smoothly travel along a custom motion path defined by multiple waypoint markers positioned throughout the page.

As users scroll down the page, the animated element follows the motion path in real-time, creating a seamless visual connection between scroll progress and element movement.

The design uses GSAP's ScrollTrigger to synchronize the animation with scroll position and MotionPathPlugin to calculate smooth curves connecting all waypoints.

Perfect for interactive storytelling, guided tours, and creative scroll experiences.

<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>GSAP Scroll Motion Path</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- GSAP CDN -->
  <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/MotionPathPlugin.min.js"></script>

  <style>
    :root {
      --color-surface50: rgba(255, 255, 255, 0.4);
    }

    body {
      min-height: 100vh;
      font-family: system-ui, sans-serif;
      color: white;
      background-color: #0b0b0b;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 2px, transparent 2px),
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
      background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
      background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .spacer {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      opacity: 0.7;
    }

    .main {
      position: relative;
      height: 300vh;
    }

    .container {
      position: absolute;
      width: 140px;
      height: 140px;
      border: 2px dashed var(--color-surface50);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Start point */
    .initial {
      left: 60%;
      top: 5%;
    }

    /* Down-the-page markers */
    .second {
      left: 10%;
      top: 25%;
    }

    .third {
      right: 10%;
      top: 45%;
    }

    .fourth {
      left: 20%;
      top: 65%;
    }

    .fifth {
      left: 60%;
      top: 80%;
    }

    .sixth {
      left: 15%;
      top: 95%;
    }

    .marker {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
    }

    .box {
      width: 100px;
      height: 100px;
      z-index: 10;
      border-radius: 10px;
      background-image: url("https://assets.codepen.io/16327/flair-26.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-color: transparent;
    }
  </style>
</head>

<body>

  <div class="spacer">⬇ Scroll down ⬇</div>

  <div class="main">
    <div class="container initial">
      <div class="box"></div>
    </div>

    <div class="container second">
      <div class="marker"></div>
    </div>

    <div class="container third">
      <div class="marker"></div>
    </div>

    <div class="container fourth">
      <div class="marker"></div>
    </div>

    <div class="container fifth">
      <div class="marker"></div>
    </div>

    <div class="container sixth">
      <div class="marker"></div>
    </div>
  </div>

  <div class="spacer final">⬆ End ⬆</div>

  <script>
    console.clear();
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    let ctx;

    function createTimeline() {
      ctx && ctx.revert();

      ctx = gsap.context(() => {
        const box = document.querySelector(".box");
        const boxStartRect = box.getBoundingClientRect();

        // All containers except the first
        const containers = gsap.utils.toArray(".container:not(.initial)");

        // Collect motion points
        const points = containers.map(container => {
          const marker = container.querySelector(".marker") || container;
          const r = marker.getBoundingClientRect();

          return {
            x: r.left + r.width / 2 - (boxStartRect.left + boxStartRect.width / 2),
            y: r.top + r.height / 2 - (boxStartRect.top + boxStartRect.height / 2)
          };
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".container.initial",
            start: "clamp(top center)",
            endTrigger: ".final",
            end: "clamp(top center)",
            scrub: 1
          }
        }).to(".box", {
          duration: 1,
          ease: "none",
          motionPath: {
            path: points,
            curviness: 1.5
          }
        });
      });
    }

    createTimeline();
    window.addEventListener("resize", createTimeline);
  </script>

</body>
</html>
```

<br>

### HTML Structure Explanation

The HTML is structured around a scrollable layout with motion path markers:

**Key Elements:**

- `.spacer` - Top and bottom spacer sections to enable scrolling
- `.main` - Container with 300vh height to provide scrollable area
- `.container.initial` - Starting position containing the animated `.box` element
- `.container.second/third/fourth/fifth/sixth` - Waypoint markers that define the motion path
- `.marker` - Visual indicators for each waypoint
- `.box` - The element that will animate along the motion path

The layout uses absolute positioning to place markers at strategic locations throughout the scrollable area.

GSAP plugins (ScrollTrigger and MotionPathPlugin) are loaded via CDN for animation functionality.

<br>

## 🎨 CSS Code
<br>

```css
:root {
  --color-surface50: rgba(255, 255, 255, 0.4);
}

body {
  min-height: 100vh;
  font-family: system-ui, sans-serif;
  color: white;
  background-color: #0b0b0b;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.spacer {
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  opacity: 0.7;
}

.main {
  position: relative;
  height: 300vh;
}

.container {
  position: absolute;
  width: 140px;
  height: 140px;
  border: 2px dashed var(--color-surface50);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Start point */
.initial {
  left: 60%;
  top: 5%;
}

/* Down-the-page markers */
.second {
  left: 10%;
  top: 25%;
}

.third {
  right: 10%;
  top: 45%;
}

.fourth {
  left: 20%;
  top: 65%;
}

.fifth {
  left: 60%;
  top: 80%;
}

.sixth {
  left: 15%;
  top: 95%;
}

.marker {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.box {
  width: 100px;
  height: 100px;
  z-index: 10;
  border-radius: 10px;
  background-image: url("https://assets.codepen.io/16327/flair-26.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
}
```

<br>

### CSS Breakdown

**Grid Background**

Multiple layered gradients create a subtle grid pattern for visual interest.

Custom CSS variables store reusable color values.

**Responsive Layout**

Flexbox centers spacer content for visual cues.

Absolute positioning allows precise marker placement.

**Visual Indicators**

Dashed borders on `.container` elements show waypoint locations.

Subtle opacity values (0.1, 0.4, 0.7) create depth perception.

**Animated Element Styling**

`.box` uses background-image for visual representation.

Border-radius creates rounded corners for polish.

Z-index ensures the animated element stays above markers.

**Spacer Sections**

20vh height provides visual breathing room and scrollable space.

The grid background fills the entire viewport for continuity.

<br>

## ⚙️ JavaScript Code
<br>

```javascript
console.clear();
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

let ctx;

function createTimeline() {
  ctx && ctx.revert();

  ctx = gsap.context(() => {
    const box = document.querySelector(".box");
    const boxStartRect = box.getBoundingClientRect();

    // All containers except the first
    const containers = gsap.utils.toArray(".container:not(.initial)");

    // Collect motion points
    const points = containers.map(container => {
      const marker = container.querySelector(".marker") || container;
      const r = marker.getBoundingClientRect();

      return {
        x: r.left + r.width / 2 - (boxStartRect.left + boxStartRect.width / 2),
        y: r.top + r.height / 2 - (boxStartRect.top + boxStartRect.height / 2)
      };
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".container.initial",
        start: "clamp(top center)",
        endTrigger: ".final",
        end: "clamp(top center)",
        scrub: 1
      }
    }).to(".box", {
      duration: 1,
      ease: "none",
      motionPath: {
        path: points,
        curviness: 1.5
      }
    });
  });
}

createTimeline();
window.addEventListener("resize", createTimeline);
```

<br>

### JavaScript Breakdown

**GSAP Plugin Registration**

`gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)` - Enables scroll-triggered animations and motion path calculations.

**Context Management**

`gsap.context()` - Creates a scoped context for animations, allowing proper cleanup with `ctx.revert()`.

Prevents memory leaks by reverting animations on resize or page updates.

**Element Selection & Position Calculation**

Retrieves the animated `.box` element and calculates its viewport position.

Selects all waypoint `.container` elements except the initial one.

**Motion Points Array**

Dynamically calculates relative positions of each waypoint using `getBoundingClientRect()`.

Converts absolute viewport coordinates to relative coordinates (offset from box's starting position).

The `points` array stores x, y coordinates for each waypoint the element will visit.

**ScrollTrigger Configuration**

`trigger: ".container.initial"` - Animation starts when initial container enters viewport.

`start: "clamp(top center)"` - Prevents over-scrolling; clamps to visible area.

`endTrigger: ".final"` - Animation ends when final spacer section is reached.

`scrub: 1` - Directly syncs animation progress with scroll position (1 = 1 second delay).

**MotionPath Animation**

`motionPath: { path: points, curviness: 1.5 }` - Animates the box along the calculated path.

`curviness: 1.5` - Smoothness of curve (0 = straight lines, higher = more curved).

`ease: "none"` - Linear easing ensures consistent motion tied to scroll speed.

**Responsive Behavior**

`window.addEventListener("resize", createTimeline)` - Recalculates waypoints on window resize.

Ensures motion path stays accurate as viewport dimensions change.

The timeline automatically updates to track new marker positions.

This combination creates a smooth, synchronized scroll experience where the element follows a perfectly curved path through all waypoints as users scroll the page.
```