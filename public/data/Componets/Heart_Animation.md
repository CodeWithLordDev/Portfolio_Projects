---
title: "Heart Animation with Particle Effects"
description: "A beautiful and romantic heart animation featuring smooth particle effects, canvas-based rendering, and mathematical curves. Pure HTML, CSS, and JavaScript implementation with adjustable particle settings."
image: "/Assets/data/images/Heart_Animation.png"
tags: ["HTML", "CSS", "JavaScript", "Canvas", "Animation", "Particle Effects"]
author: "CodewithLord"
date: "2026-01-30"
---

## 🧠 Description
<br>
This project showcases an elegant heart animation built entirely with pure HTML, CSS, and JavaScript.

The animation uses the HTML5 Canvas API to render particles that emit from a mathematically-defined heart shape, creating a romantic and visually stunning effect.

Each particle follows physics-based movement with velocity, acceleration, and gravity effects, while gradually fading out over time.

The design is responsive, lightweight, and perfect for Valentine's Day websites, love-themed projects, and romantic UI elements.

<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Heart Animation | CodewithLord</title>
  <link rel="stylesheet" href="https://public.codepenassets.com/css/reset-2.0.min.css">
  <link rel="stylesheet" href="./style.css">
</head>

<body>

  <canvas id="pinkboard"></canvas>
  <script src="./script.js"></script>

</body>
</html>
```
<br>

## HTML Structure Explanation

The HTML structure is minimal and clean, consisting of just three key elements:

A single `<canvas id="pinkboard">` element serves as the rendering surface for the entire animation.

External CSS stylesheet provides styling for the page background and canvas layout.

JavaScript file (script.js) handles all the animation logic, particle generation, and rendering.

This lightweight approach ensures maximum performance and allows the JavaScript to have full control over the visual output.

<br>

## 🎨 CSS Code
<br>

```css
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  background: #000;
}

canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

<br>

## CSS Breakdown

Minimal Styling Approach

The CSS is intentionally minimal, allowing the canvas animation to take center stage.

Full-Screen Canvas

html and body are set to 100% height with no padding or margins for a seamless full-screen experience.

Black Background

A pure black background (#000) provides perfect contrast for the pink heart animation and particles.

Absolute Positioning

The canvas element uses absolute positioning to fill the entire viewport, ensuring responsive behavior across all screen sizes.

This lightweight CSS approach keeps the page performant while providing the perfect visual foundation for the JavaScript animation.

<br>

## ⚙️ JavaScript Code
<br>

```javascript
let settings = {
  particles: {
    length: 500,
    duration: 2,
    velocity: 100,
    effect: -0.75,
    size: 30
  }
};

(function () {
  let b = 0;
  let c = ["ms", "moz", "webkit", "o"];
  for (let a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
    window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[c[a] + "CancelAnimationFrame"] ||
      window[c[a] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (h) {
      let d = new Date().getTime();
      let f = Math.max(0, 16 - (d - b));
      let g = window.setTimeout(function () {
        h(d + f);
      }, f);
      b = d + f;
      return g;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (d) {
      clearTimeout(d);
    };
  }
})();

let Point = (function () {
  function Point(x, y) {
    this.x = typeof x !== "undefined" ? x : 0;
    this.y = typeof y !== "undefined" ? y : 0;
  }
  Point.prototype.clone = function () {
    return new Point(this.x, this.y);
  };
  Point.prototype.length = function (length) {
    if (typeof length == "undefined")
      return Math.sqrt(this.x * this.x + this.y * this.y);
    this.normalize();
    this.x *= length;
    this.y *= length;
    return this;
  };
  Point.prototype.normalize = function () {
    var length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  };
  return Point;
})();

let Particle = (function () {
  function Particle() {
    this.position = new Point();
    this.velocity = new Point();
    this.acceleration = new Point();
    this.age = 0;
  }
  Particle.prototype.initialize = function (x, y, dx, dy) {
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = dx;
    this.velocity.y = dy;
    this.acceleration.x = dx * settings.particles.effect;
    this.acceleration.y = dy * settings.particles.effect;
    this.age = 0;
  };
  Particle.prototype.update = function (deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;
    this.age += deltaTime;
  };
  Particle.prototype.draw = function (context, image) {
    function ease(t) {
      return --t * t * t + 1;
    }
    let size = image.width * ease(this.age / settings.particles.duration);
    context.globalAlpha = 1 - this.age / settings.particles.duration;
    context.drawImage(
      image,
      this.position.x - size / 2,
      this.position.y - size / 2,
      size,
      size
    );
  };
  return Particle;
})();

let ParticlePool = (function () {
  let particles,
    firstActive = 0,
    firstFree = 0,
    duration = settings.particles.duration;

  function ParticlePool(length) {
    particles = new Array(length);
    for (let i = 0; i < particles.length; i++) particles[i] = new Particle();
  }
  ParticlePool.prototype.add = function (x, y, dx, dy) {
    particles[firstFree].initialize(x, y, dx, dy);
    firstFree++;
    if (firstFree == particles.length) firstFree = 0;
    if (firstActive == firstFree) firstActive++;
    if (firstActive == particles.length) firstActive = 0;
  };
  ParticlePool.prototype.update = function (deltaTime) {
    let i;
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++) particles[i].update(deltaTime);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].update(deltaTime);
      for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
    }
    while (particles[firstActive].age >= duration && firstActive != firstFree) {
      firstActive++;
      if (firstActive == particles.length) firstActive = 0;
    }
  };
  ParticlePool.prototype.draw = function (context, image) {
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].draw(context, image);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].draw(context, image);
      for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
    }
  };
  return ParticlePool;
})();

(function (canvas) {
  let context = canvas.getContext("2d"),
    particles = new ParticlePool(settings.particles.length),
    particleRate = settings.particles.length / settings.particles.duration,
    time;

  function pointOnHeart(t) {
    return new Point(
      160 * Math.pow(Math.sin(t), 3),
      130 * Math.cos(t) -
        50 * Math.cos(2 * t) -
        20 * Math.cos(3 * t) -
        10 * Math.cos(4 * t) +
        25
    );
  }

  let image = (function () {
    let canvas = document.createElement("canvas"),
      context = canvas.getContext("2d");
    canvas.width = settings.particles.size;
    canvas.height = settings.particles.size;

    function to(t) {
      let point = pointOnHeart(t);
      point.x =
        settings.particles.size / 2 + (point.x * settings.particles.size) / 350;
      point.y =
        settings.particles.size / 2 - (point.y * settings.particles.size) / 350;
      return point;
    }

    context.beginPath();
    let t = -Math.PI;
    let point = to(t);
    context.moveTo(point.x, point.y);
    while (t < Math.PI) {
      t += 0.01;
      point = to(t);
      context.lineTo(point.x, point.y);
    }
    context.closePath();
    context.fillStyle = "#ea80b0";
    context.fill();

    let image = new Image();
    image.src = canvas.toDataURL();
    return image;
  })();

  function render() {
    requestAnimationFrame(render);
    let newTime = new Date().getTime() / 1000,
      deltaTime = newTime - (time || newTime);
    time = newTime;

    context.clearRect(0, 0, canvas.width, canvas.height);

    let amount = particleRate * deltaTime;
    for (let i = 0; i < amount; i++) {
      let pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      let dir = pos.clone().length(settings.particles.velocity);
      particles.add(
        canvas.width / 2 + pos.x,
        canvas.height / 2 - pos.y,
        dir.x,
        -dir.y
      );
    }

    particles.update(deltaTime);
    particles.draw(context, image);
  }

  function onResize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  window.onresize = onResize;

  setTimeout(function () {
    onResize();
    render();
  }, 10);
})(document.getElementById("pinkboard"));
```

<br>

## JavaScript Breakdown

Settings Configuration

The `settings` object stores all customizable parameters:

- `length`: Number of particles (500) - more particles = more density
- `duration`: Particle lifespan (2 seconds) - how long particles stay visible
- `velocity`: Initial particle speed (100) - controls spread speed
- `effect`: Gravity/deceleration (-0.75) - negative values slow particles down
- `size`: Heart particle size (30px) - scales the rendered particles

RequestAnimationFrame Polyfill

Ensures cross-browser compatibility for smooth 60fps animations.

Point Class

A utility class for 2D vector operations (position, velocity, acceleration).

Methods: `clone()`, `length()`, and `normalize()` for vector math.

Particle Class

Each particle has position, velocity, acceleration, and age properties.

The `draw()` function applies easing to create smooth particle shrinkage.

Particles fade out gradually using `globalAlpha` opacity.

ParticlePool Class

Manages an object pool of particles for optimized memory usage.

Uses circular buffer technique to efficiently reuse particle instances.

Methods:

- `add()`: Initializes a new particle with position and velocity
- `update()`: Updates all active particles with deltaTime
- `draw()`: Renders all particles to canvas

Mathematical Heart Shape

`pointOnHeart(t)` uses parametric equations to define the heart curve.

The formula creates a smooth, mathematically perfect heart outline.

Canvas Rendering Loop

`render()` function runs continuously at 60fps.

Particles are generated from random points on the heart outline.

Each particle receives a direction and velocity emanating outward.

The canvas is cleared and redrawn each frame for smooth animation.

Responsive Behavior

`onResize()` function adjusts canvas dimensions when window resizes.

Ensures the animation fills the entire viewport on all devices.

Performance Optimization

The particle pool prevents memory leaks from continuous particle creation.

DeltaTime calculations ensure smooth animation regardless of frame rate.

This results in a smooth, performant heart animation that runs beautifully on all modern browsers.



