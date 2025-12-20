---
title: "Interactive Glass Thermostat UI with GSAP & SVG Effects"
description: "A futuristic glassmorphism-based thermostat UI built with HTML, CSS, SVG filters, and GSAP. Features a draggable temperature knob, plasma-like mercury animation, dynamic color gradients, animated scale markings, and snow particle effects below freezing."
image: "/Assets/data/images/Thermo_stats_animation.png"
tags: ["Glassmorphism", "GSAP", "Draggable", "UI Animation", "SVG Filters", "Interactive UI"]
author: "CodewithLord"
date: "2025-12-20"
---

## Description

This project implements a **high-end interactive glass thermostat UI** inspired by physical temperature gauges and futuristic control panels.  
It combines **glassmorphism**, **SVG displacement filters**, and **GSAP-powered interactions** to create a tactile, visually rich experience.

Key highlights:
- Draggable temperature knob with inertia
- Plasma-like mercury fill using SVG turbulence
- Dynamic gradient-based temperature coloring
- Animated scale with focus magnification
- Snow particle system when temperature drops below 40°F
- Real-time status updates (Cold, Warm, Hot, etc.)
- Fully responsive and GPU-accelerated animations

This component is ideal for **dashboard UIs, IoT mockups, smart home concepts, and portfolio showcases**.

---

## HTML

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Glass Thermostat</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <!-- Credit -->
<!-- The existence of this pen wouldn't've been possible without the following -->
<!-- https://codepen.io/ash_creator/pen/zYaPZLB -->
<!-- https://codepen.io/BalintFerenczy/pen/KwdoyEN -->
<!-- https://www.perplexity.ai/ -->
<!-- https://aistudio.google.com/ -->

<!-- Snow appears when the temperature drops below 40°F. -->

<svg style="position:absolute; width:0; height:0;">
  <defs>
    <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
      <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
        <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
      </feOffset>
      <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
      <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
        <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
      </feOffset>
      <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />
      <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
        <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
      </feOffset>
      <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />
      <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
        <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
      </feOffset>
      <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
      <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
      <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
      <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
    </filter>
  </defs>
</svg>

<div id="app">
  <div class="thermostat-ui">
    <div class="thermostat glass-panel">
      <div class="thermostat-inner">
        <div class="glass-noise"></div>
        <div class="scale-container" id="scaleContainer"></div>
        <div class="track" id="track">
          <div class="mercury" id="mercury"></div>
        </div>
        <div class="knob-zone">
          <div class="knob" id="knob"></div>
        </div>
      </div>
    </div>
    <div class="temp-readout">
      <div class="temp-value" id="tempValue">70°</div>
      <div class="temp-label">CURRENT TEMP</div>
      <div class="status-text" id="statusText">Comfortable</div>
    </div>
  </div>
</div>
<div class="particles-container" id="uiParticles"></div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js'></script><script  src="./script.js"></script>

  </body>
  
</html>
```
<br>

### 🎨 CSS Code
<br>

<br>

```css
:root {
  --glass-bg: rgba(10, 10, 10, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glow-color: #00a2fa;
}

/* Global reset */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #000;
  color: #fff;
  overflow: hidden;
  font-family: "Inter", system-ui, sans-serif;
}

#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Glass body */
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
}

.thermostat-ui {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

/* Main body */
.thermostat {
  position: relative;
  width: 150px;
  height: 520px;
  border-radius: 999px;
  overflow: visible;
}

.thermostat-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: visible;
}

.thermostat-inner::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,0.1);
  mix-blend-mode: soft-light;
  pointer-events: none;
}

/* Texture */
.glass-noise {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.08;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Track */
.track {
  position: absolute;
  top: 46px;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
  width: 42px;
  border-radius: 999px;
  background:
    radial-gradient(circle at 50% 0%, rgba(255,255,255,0.35) 0, transparent 55%),
    radial-gradient(circle at 50% 100%, rgba(0,0,0,1) 0, rgba(0,0,0,0.9) 70%),
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.8));
  background-blend-mode: screen, normal, soft-light;
  box-shadow: inset 0 0 18px rgba(0,0,0,1), 0 0 18px rgba(0,0,0,0.8);
  overflow: hidden;
}

/* Electric plasma fill */
.mercury {
  position: absolute;
  bottom: 0;
  left: -45%;
  width: 190%;
  height: 0%;
  background: var(--glow-color);
  filter: url(#turbulent-displace);
  mix-blend-mode: screen;
  box-shadow: 0 0 45px var(--glow-color), 0 0 90px var(--glow-color);
  transition: height 0.12s linear, box-shadow 0.3s ease, background 0.25s ease;
  opacity: 0.95;
}

/* Flowing current over plasma */
.mercury::before,
.mercury::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  filter: blur(6px);
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent 90%);
  mix-blend-mode: color-dodge;
  opacity: 0.25;
  animation: pulseElectric 3s infinite ease-in-out alternate;
}

.mercury::after {
  filter: blur(16px);
  opacity: 0.18;
  animation-delay: 1.5s;
}

@keyframes pulseElectric {
  0% { opacity: 0.15; transform: scaleY(1); }
  100% { opacity: 0.35; transform: scaleY(1.05); }
}

/* Knob */
.knob-zone {
  position: absolute;
  top: 46px;
  bottom: 46px;
  left: 0;
  right: 0;
  pointer-events: none;
}

.knob {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 999px;
  background: rgba(10,10,10,0.7);
  backdrop-filter: blur(12px) saturate(260%) brightness(1.25);
  -webkit-backdrop-filter: blur(12px) saturate(260%) brightness(1.25);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: inset 0 1px 18px rgba(255,255,255,0.15), 0 8px 26px rgba(0,0,0,0.9);
  cursor: grab;
  pointer-events: auto;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
}

.knob:active {
  transform: translate(-50%, -50%) scale(1.05);
}

/* Scale container and marks */
.scale-container {
  position: absolute;
  top: 46px;
  bottom: 46px;
  left: -90px;
  width: 80px;
  pointer-events: none;
}

.scale-mark {
  position: absolute;
  right: 0;
  font-size: 14px;
  color: rgba(255,255,255,0.35);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  transform-origin: right center;
  transition: all 0.1s ease;
}

.tick {
  height: 2px;
  background: rgba(255,255,255,0.4);
  border-radius: 2px;
  flex-shrink: 0;
}

/* Temperature readout */
.temp-readout {
  text-align: center;
}

.temp-value {
  font-size: 5.2rem;
  font-weight: 700;
  text-shadow: 0 0 48px var(--glow-color);
  color: var(--glow-color);
}

.temp-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.34em;
  opacity: 0.7;
  margin-top: 10px;
}

.status-text {
  margin-top: 8px;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--glow-color);
  opacity: 0.95;
}

/* More Prominent Snow Particles - full canvas */
.particles-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Responsive tweak */
@media (max-width: 480px){
  .thermostat { transform: scale(0.9);}
}

#app { z-index: 10; position: relative; }
.thermostat-ui, .thermostat { z-index: 10; position: relative; }
.particles-container { z-index: 1; } /* snow stays behind */
```

<br>

### Javascript Code
<br>

```javascript
const CONFIG = {
  minTemp: 20,
  maxTemp: 110,
  defaultTemp: 70,
  gradientColors: ["#00eaff","#0099ff","#00ff73","#ffdd00","#ff8800","#ff0044"],
  gradientStops: [0,0.25,0.5,0.7,0.85,1],
  thresholds: { snow: 40 }
};

const els = {
  track: document.getElementById("track"),
  mercury: document.getElementById("mercury"),
  knob: document.getElementById("knob"),
  scaleContainer: document.getElementById("scaleContainer"),
  tempValue: document.getElementById("tempValue"),
  statusText: document.getElementById("statusText"),
  uiParticles: document.getElementById("uiParticles"),
  root: document.documentElement
};

let currentTemp = CONFIG.defaultTemp;
let trackHeight = 0, knobBounds = { minY: 0, maxY: 0 }, scaleItems = [], colorMap;
let snowParticleIntervalId = null;

// linear interpolation helper
const lerp = (a,b,t) => a + (b - a) * t;

function createColorMap() {
  const stops = CONFIG.gradientStops;
  const colors = CONFIG.gradientColors.map(c => gsap.utils.splitColor(c));
  return t => {
    t = Math.max(0, Math.min(1, t));
    for (let i=0; i<stops.length-1; i++) {
      const s0 = stops[i], s1 = stops[i+1];
      if (t >= s0 && t <= s1) {
        const n = (t - s0) / (s1 - s0);
        const c0 = colors[i], c1 = colors[i+1];
        return `rgb(${Math.round(lerp(c0[0],c1[0],n))},${Math.round(lerp(c0[1],c1[1],n))},${Math.round(lerp(c0[2],c1[2],n))})`;
      }
    }
  };
}

function buildScale() {
  els.scaleContainer.innerHTML = "";
  scaleItems = [];
  const min = CONFIG.minTemp, max = CONFIG.maxTemp, range = max - min;
  const rect = els.track.getBoundingClientRect();
  const trackH = rect.height;
  for (let t = min; t <= max; t += 2) {
    const el = document.createElement("div");
    el.className = "scale-mark";
    const tick = document.createElement("div");
    tick.className = "tick";
    if (t % 10 === 0) tick.style.width = "18px";
    else if (t % 5 === 0) tick.style.width = "12px";
    else tick.style.width = "6px";
    const y = (1 - (t - min) / range) * (trackH - 1);
    el.style.top = `${y}px`;
    if (t % 10 === 0) el.innerHTML = `${t}<div class="tick"></div>`;
    el.appendChild(tick);
    el.dataset.temp = t;
    els.scaleContainer.appendChild(el);
    scaleItems.push(el);
  }
}

function updateScaleVisuals(knobY){
  scaleItems.forEach(el => {
    const rect = els.track.getBoundingClientRect();
    const elY = parseFloat(el.style.top);
    const dist = Math.abs(knobY - elY), maxDist = 70;
    if (dist < maxDist) {
      const p = 1 - dist / maxDist;
      gsap.set(el, { 
        scale: 1 + p * 0.8, 
        opacity: 0.6 + p * 0.6, 
        color: "#fff",
        textShadow: "0 0 8px var(--glow-color)"
      });
    } else {
      gsap.set(el, { 
        scale: 1, 
        opacity: 0.3, 
        color: "rgba(255,255,255,0.35)",
        textShadow: "none"
      });
    }
  });
}

function updateStatusText(t){
  let txt = "";
  if(t < 32) txt = "Freezing";
  else if(t < 55) txt = "Cold";
  else if(t < 66) txt = "Cool";
  else if(t <= 74) txt = "Comfortable";
  else if(t < 85) txt = "Warm";
  else if(t < 95) txt = "Hot";
  else txt = "Extreme";
  els.statusText.textContent = txt;
}

function applyColorTheme(color){
  els.root.style.setProperty("--glow-color", color);
  els.tempValue.style.color = color;
  els.statusText.style.color = color;
  els.mercury.style.boxShadow = `0 0 40px ${color}, 0 0 80px ${color}`;
}

function updateSystemFromY(yPos){
  yPos = Math.max(knobBounds.minY, Math.min(knobBounds.maxY, yPos));
  const pct = 1 - yPos / trackHeight;
  const temp = CONFIG.minTemp + pct * (CONFIG.maxTemp - CONFIG.minTemp);
  currentTemp = Math.round(temp);
  const norm = (currentTemp - CONFIG.minTemp) / (CONFIG.maxTemp - CONFIG.minTemp);
  const color = colorMap(norm);
  els.tempValue.textContent = currentTemp + "°";
  els.mercury.style.height = pct * 100 + "%";
  applyColorTheme(color);
  updateStatusText(currentTemp);
  updateScaleVisuals(yPos);
  updateSnowParticles(currentTemp);
}

function initLayout(){
  const rect = els.track.getBoundingClientRect();
  trackHeight = rect.height;
  knobBounds = { minY: 0, maxY: trackHeight };
  buildScale();
  const norm = (CONFIG.defaultTemp - CONFIG.minTemp) / (CONFIG.maxTemp - CONFIG.minTemp);
  const startY = trackHeight * (1 - norm);
  gsap.set(els.knob, { y: startY });
  updateSystemFromY(startY);
}

function initDrag(){
  Draggable.create(els.knob,{
    type: "y",
    bounds: { minY: knobBounds.minY, maxY: knobBounds.maxY },
    inertia: true,
    onDrag() { updateSystemFromY(this.y); },
    onThrowUpdate() { updateSystemFromY(this.y); }
  });
}

/* Improved Snow Particles with more prominence and random fall */

const minSnowSpawnInterval = 1.2;
const maxSnowSpawnInterval = 5; 
const minSnowFallDuration = 4;
const maxSnowFallDuration = 7;

function createSnowParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  els.uiParticles.appendChild(p);
  
  const vw = window.innerWidth, vh = window.innerHeight;
  const size = Math.random() * 12 + 7;
  const baseOpacity = 0.9 + Math.random() * 0.1;
  const blurVal = Math.random() * 1.6 + 0.9;
  
  p.style.width = p.style.height = size + "px";
  p.style.borderRadius = "50%";
  p.style.background = `radial-gradient(circle, rgba(255,255,255,${baseOpacity}) 0%, rgba(255,255,255,${baseOpacity*0.9}) 70%, transparent 100%)`;
  p.style.filter = `blur(${blurVal}px)`; // +30% brightness
  p.style.boxShadow = "0 0 24px rgba(255,255,255,0.95)"; // 30% bigger glow
  
  // ALWAYS spawn ABOVE viewport
  const startX = Math.random() * vw;
  const startY = -50 - Math.random() * 150; // -50 to -200px
  
  gsap.set(p, { x: startX, y: startY, opacity: 0, scale: 0.6 });
  
  const swayX = 80 + Math.random() * 60;
  const fallDuration = getSnowFallDuration(currentTemp);
  
  gsap.timeline({ onComplete: () => p.remove() })
    .to(p, { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" })
    .to(p, { 
      y: vh + 80, 
      x: "+=" + (Math.random() * swayX - swayX/2), 
      rotation: Math.random() * 180,
      opacity: 0, 
      duration: fallDuration, 
      ease: "none"
    }, 0)
    .to(p, { 
      x: "+=" + (Math.random() * 40 - 20), 
      yoyo: true, 
      repeat: 1, 
      duration: 2 + Math.random() * 3, 
      ease: "sine.inOut" 
    }, 0.2);
}

function getSnowFallDuration(temp) {
  const clampedTemp = Math.max(20, Math.min(temp, 40));
  const requiredPct = (40 - clampedTemp) / 20;
  return lerp(maxSnowFallDuration, maxSnowFallDuration * 0.55, requiredPct); // 30% faster
}

function getSnowSpawnInterval(temp) {
  const clampedTemp = Math.max(20, Math.min(temp, 40));
  const requiredPct = (40 - clampedTemp) / 20;
  return lerp(maxSnowSpawnInterval, maxSnowSpawnInterval * 0.45, requiredPct); // 55% more snow
}

function updateSnowParticles(temp) {
  if (temp > CONFIG.thresholds.snow) {
    // Stop snow if above threshold
    if (snowParticleIntervalId !== null) {
      clearInterval(snowParticleIntervalId);
      snowParticleIntervalId = null;
    }
    els.uiParticles.innerHTML = "";
    return;
  }

  if (snowParticleIntervalId !== null) clearInterval(snowParticleIntervalId);

  // Spawn immediately on threshold crossing
  createSnowParticle();

  const spawnInterval = getSnowSpawnInterval(temp) * 100; // convert to ms scaled 
  snowParticleIntervalId = setInterval(() => {
    createSnowParticle();
  }, spawnInterval);
}

window.addEventListener("load", () => {
  colorMap = createColorMap();
  initLayout();
  initDrag();
  updateSnowParticles(currentTemp);
});

window.addEventListener("resize", () => {
  initLayout();
  updateSnowParticles(currentTemp);
});
```
<br>

### How It Works
<br>

1. **Glassmorphism Structure**
<br>
Frosted glass effect using backdrop-filter

Noise texture overlay for realism

Soft lighting and glow shadows
<br>

2. **Temperature Interaction**
<br>

GSAP Draggable controls the knob

Knob Y-position maps to temperature range

Mercury fill height updates in real time

<br>

3. **Dynamic Color System**
<br>
Gradient-based color interpolation

Glow color updates across UI

Temperature text and plasma stay in sync
<br>

4. **Environmental Feedback**
<br>
Status text updates (Cold → Comfortable → Hot)

Snow particle system activates below 40°F

Particle density increases as temperature drops
<br>

## Key Features

❄️ Temperature-aware snow particles

🧊 Glassmorphism UI design

🔥 Plasma-style mercury animation

🎛️ Smooth draggable knob with inertia

🎨 Dynamic color gradients

⚡ GPU-accelerated animations

📱 Responsive and scalable
<br> 

# Use Cases

Smart thermostat UI concepts

IoT dashboard mockups

Sci-fi control panels

Interactive product demos

Portfolio showcase components