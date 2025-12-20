---
title: "CSS Scroll-Driven Multi-Stage Image Comparator"
description: "An advanced scroll-driven multi-stage image comparator built with modern CSS features like scroll-timeline, animation-range, sibling-index(), and @property. The system automatically synchronizes layered image reveals, divider motion, percentage counters, and stage navigation with minimal JavaScript."
image: "/Assets/Images/Multi_stage_compare.png"
tags: ["CSS Scroll Animations", "scroll-timeline", "Image Comparator", "Creative CSS", "UI Interaction"]
author: "CodewithLord"
date: "2025-12-19"
---

## Description

This project demonstrates a **fully scroll-driven multi-stage image comparator** powered primarily by **modern CSS**, with JavaScript used only for measurement, smoothing, and navigation logic.

Unlike traditional before/after sliders, this system:
- Uses **scroll position as the timeline**
- Automatically adapts to any number of image layers
- Calculates animation ranges using `sibling-index()` and `sibling-count()`
- Requires **no manual z-index or timing configuration**

The result is a **scalable, declarative, and future-forward comparator system** ideal for editorial storytelling, case studies, and immersive visual narratives.

---

## HTML

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
    <main>
  <article>
    <section class="intro">
      <h1>CSS Scroll-Driven Multi-Stage Comparator</h1>
      <p>
        A multi-stage image comparator driven by scroll position using CSS
        <code>scroll-timeline</code> and <code>animation-range</code>. The system uses
        <code>sibling-index()</code> and <code>sibling-count()</code> to calculate layer
        timing and stacking order automatically - add or remove image layers and the CSS
        recalculates z-index, clip-path windows, and divider synchronization without
        manual class numbering.
      </p>
      <p>
        The percentage counter is calculated in CSS using <code>@property</code> with
        scroll-driven animations. JavaScript handles section offset measurement,
        percentage display formatting, velocity-based wheel and touchpad smoothing,
        and interactive stage navigation with click-to-jump indicators.
      </p>
      <p><small>Note: Images generated with the "thing" (AI) and curated by @me as part of <a href="https://www.linkedin.com/posts/luis-martinez-lr_creativeprocess-collage-generativeart-activity-7341093878554324992-NEW9/" target="_blank" rel="noopener">The Beauty of Scrambled Prompts</a> and <a href="https://www.linkedin.com/posts/luis-martinez-lr_no-fixed-recipe-just-collisions-accidents-activity-7364286262096142336-9Exj/" target="_blank" rel="noopener">Tiny Worlds Accidents</a>.</small></p>
    </section>
    <section>
      <p class="scroll-indicator">Scroll down ↓</p>
    </section>
    <section class="scroll-section">
      <div class="comparator-container">
        <div class="comparator-wrapper">
          <div class="comparator">
            <div class="comparison-percentage"></div>
            <div class="image-layers">
              <div class="image-layer">
                <picture>
                  <source media="(max-width: 48em)" srcset="https://lessrain.com/dev/images-2025/scroll/820/lr-scroll-img-01-820x984.webp">
                  <img src="https://lessrain.com/dev/images-2025/scroll/1024/lr-scroll-img-01-1024x683.webp" decoding="async" fetchpriority="high" alt="Stage 1">
                </picture>
                <div class="comparator-overlay">
                  <span class="label">Stage 1</span>
                  <div class="image-text">
                    <h2>Beach Origin</h2>
                    <h3>— Turquoise Shoreline</h3>
                  </div>
                </div>
              </div>
              <div class="image-layer">
                <picture>
                  <source media="(max-width: 48em)" srcset="https://lessrain.com/dev/images-2025/scroll/820/lr-scroll-img-02-820x984.webp">
                  <img src="https://lessrain.com/dev/images-2025/scroll/1024/lr-scroll-img-02-1024x683.webp" decoding="async" fetchpriority="high" alt="Stage 2">
                </picture>
                <div class="comparator-overlay">
                  <span class="label">Stage 2</span>
                  <div class="image-text">
                    <h2>Beach Evolution</h2>
                    <h3>— Surreal Egg-Shaped</h3>
                  </div>
                </div>
              </div>
              <div class="image-layer">
                <picture>
                  <source media="(max-width: 48em)" srcset="https://lessrain.com/dev/images-2025/scroll/820/lr-scroll-img-01-820x984.webp">
                  <img src="https://lessrain.com/dev/images-2025/scroll/1024/lr-scroll-img-01-1024x683.webp" decoding="async" fetchpriority="high" alt="Stage 3">
                </picture>
                <div class="comparator-overlay">
                  <span class="label">Stage 3</span>
                  <div class="image-text">
                    <h2>Beach Final</h2>
                    <h3>— Full Circle</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="divider-lines">
              <div class="divider-line"></div>
              <div class="divider-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <p class="scroll-indicator">Scroll up ↑</p>
    </section>
    <section class="spacer"></section>
  </article>
</main>

<Script src="script.js" ></Script>
</body>
</html>
```

<br>


### 🎨 CSS Code
<br>

```css
@property --scroll-progress {
  inherits: true;
  initial-value: 0;
  syntax: "<number>";
}

@property --layer-index {
  syntax: "<integer>";
  inherits: true;
  initial-value: 1;
}

@property --layer-count {
  syntax: "<integer>";
  inherits: true;
  initial-value: 1;
}

@property --divider-index {
  syntax: "<integer>";
  inherits: true;
  initial-value: 1;
}

@property --divider-count {
  syntax: "<integer>";
  inherits: true;
  initial-value: 1;
}

@layer reset,
base,
typography,
layout,
comparator,
navigation,
links;

@layer reset {
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color-scheme: light dark;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-y: scroll;
  }
}

@layer base {
  :root {
    --color-light: #b9ae8d;
    --color-dark: #1f1408;
    --color-light-lighter: color-mix(in oklch, var(--color-light), #fff 10%);
    --color-light-darker: color-mix(in oklch, var(--color-light), #000 10%);
    --color-dark-lighter: color-mix(in oklch, var(--color-dark), #fff 10%);
    --color-dark-darker: color-mix(in oklch, var(--color-dark), #000 10%);
    --color-bg: var(--color-light);
    --color-bg-alt: var(--color-light-darker);
    --color-text: var(--color-dark);
    --color-text-muted: var(--color-dark-lighter);
    --color-accent: color-mix(in oklch, var(--color-dark), #fff 30%);

    --support-message-bg: var(--color-dark-darker);
    --support-message-text: var(--color-light-lighter);

    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-xxl: 3rem;
    --line-tight: 1.2;
    --line-base: 1.5;
    --line-loose: 1.75;
    --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
      Noto Sans, sans-serif;
    --font-mono: ui-monospace, "SFMono-Regular", "SF Mono", Menlo, Monaco,
      Consolas, monospace;
    --ts-xxs: clamp(0.75rem, -4cqw + 0.35rem, 0.9rem);
    --ts-xs: clamp(0.81rem, -3cqw + 0.35rem, 1.035rem);
    --ts-sm: clamp(0.9113rem, -1.5cqw + 0.35rem, 1.1644rem);
    --ts-base: clamp(1.0125rem, 0cqw + 0.35rem, 1.2938rem);
    --ts-md: clamp(1.1391rem, 1.5cqw + 0.35rem, 1.4555rem);
    --ts-lg: clamp(1.2656rem, 3cqw + 0.35rem, 1.6172rem);
    --ts-xl: clamp(1.582rem, 6cqw + 0.35rem, 2.0215rem);
    --ts-xxl: clamp(1.9775rem, 9cqw + 0.35rem, 2.5269rem);
    --ts-xxxl: clamp(2.4719rem, 12cqw + 0.35rem, 3.1586rem);

    --comparator-duration: 400vh;
    --comparator-offset: 35vh;
    --comparator-max-width: 56.25rem;
    --comparator-max-height: 100vh;
    --comparator-aspect-ratio: 16/11;

    accent-color: var(--color-accent);
  }

  @media (max-width: 48em) {
    :root {
      --comparator-aspect-ratio: 4/5;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg: var(--color-dark);
      --color-bg-alt: var(--color-dark-lighter);
      --color-text: var(--color-light);
      --color-text-muted: var(--color-light-darker);
      --color-accent: color-mix(in oklch, var(--color-dark), #fff 75%);
      --support-message-bg: var(--color-light-darker);
      --support-message-text: var(--color-dark-lighter);
    }
  }

  ::selection {
    background: var(--color-accent);
    color: var(--color-bg);
  }

  body {
    background: linear-gradient(
      to bottom,
      var(--color-bg),
      color-mix(in oklch, var(--color-bg), var(--color-text) 20%)
    );
    color: var(--color-text);
    font-family: var(--font-sans);
    font-size: var(--ts-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: var(--line-base);
    min-block-size: 100vh;
    padding-block-start: var(--space-xl);
    text-rendering: optimizeLegibility;
  }
}

@layer typography {
  :where(section, article) > * + * {
    margin-block-start: var(--space-lg);
  }

  :is(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: var(--line-tight);
  }

  h1 {
    font-size: var(--ts-xxxl);
    letter-spacing: -0.03em;
    margin-block-end: var(--space-lg);
  }

  p {
    hyphens: auto;
    line-height: var(--line-loose);
    text-wrap: pretty;
    word-wrap: break-word;
  }

  code {
    background: var(--color-bg-alt);
    border-radius: 0.25em;
    font-family: var(--font-mono);
    font-size: 0.9em;
    padding: 0.125em 0.25em;
  }

  a {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  small {
    font-size: var(--ts-sm);
  }
}

@layer layout {
  @supports not (
    (animation-timeline: scroll()) and (z-index: sibling-count())
  ) {
    .intro::before {
      background: var(--support-message-bg);
      border-radius: 0.5rem;
      color: var(--support-message-text);
      content: "Your browser doesn't support the advanced CSS features required for this interactive layout. Please use the latest Chrome or Edge.";
      display: block;
      font-size: var(--ts-base);
      font-weight: 600;
      margin-block: var(--space-xl);
      padding: var(--space-md);
      position: relative;
    }
  }

  .intro {
    display: block;
    inline-size: calc(100% - var(--space-xl));
    margin: 0 auto;
    max-inline-size: 56.25rem;
    padding-block-end: var(--space-xxl);
    position: relative;
  }

  .scroll-section {
    block-size: calc(var(--comparator-duration) + 100vh);
    position: relative;
  }

  .spacer {
    block-size: 50vh;
  }

  .scroll-indicator {
    font-size: var(--ts-xl);
    max-inline-size: 100%;
    text-align: center;
  }
}

@layer comparator {
  .comparator-container {
    align-items: center;
    block-size: 100vh;
    display: flex;
    inset-block-start: 0;
    justify-content: center;
    overflow: hidden;
    position: sticky;
  }

  .comparator-wrapper {
    animation: comparator-3d-flip linear both;
    animation-range: calc(var(--comparator-offset) - 50vh)
      calc(var(--comparator-offset) + var(--comparator-duration) + 50vh);
    animation-timeline: scroll(root);
    aspect-ratio: var(--comparator-aspect-ratio);
    border-radius: 0.5rem;
    inline-size: 100%;
    margin-inline: var(--space-md);
    max-block-size: var(--comparator-max-height);
    max-inline-size: var(--comparator-max-width);
    overflow: hidden;
    position: relative;
  }

  .comparator-wrapper.flip-reverse {
    animation-name: comparator-3d-flip-reverse;
  }

  .comparator {
    animation: progress-calc linear both;
    animation-range: var(--comparator-offset)
      calc(var(--comparator-offset) + var(--comparator-duration));
    animation-timeline: scroll(root);
    block-size: 100%;
    display: grid;
    inline-size: 100%;
    position: relative;
  }

  .image-layers,
  .divider-lines {
    grid-area: 1 / -1;
    display: grid;
    position: relative;
  }

  .image-layer {
    display: grid;
    grid-area: 1 / -1;
    position: relative;
    z-index: calc(sibling-count() - sibling-index() + 1);
  }

  .image-layer:not(:last-child) {
    --layer-index: sibling-index();
    --layer-count: sibling-count();
    --layer-start: calc((var(--layer-index) - 1) / (var(--layer-count) - 1));
    --layer-end: calc(var(--layer-index) / (var(--layer-count) - 1));

    animation: clip-reveal linear both;
    animation-timeline: scroll(root);
    animation-range: calc(
        var(--comparator-offset) +
          (var(--comparator-duration) * var(--layer-start))
      )
      calc(
        var(--comparator-offset) +
          (var(--comparator-duration) * var(--layer-end))
      );
  }

  picture {
    grid-area: 1 / -1;
    max-block-size: var(--comparator-max-height);
    inline-size: 100%;
    block-size: 100%;
    display: block;
  }

  .image-layer img {
    block-size: 100%;
    display: block;
    inline-size: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: var(--comparator-aspect-ratio);
    background: color-mix(in oklch, var(--color-bg), var(--color-text) 5%);
  }

  .divider-line {
    --divider-index: sibling-index();
    --divider-count: sibling-count();
    --layer-start: calc((var(--divider-index) - 1) / var(--divider-count));
    --layer-end: calc(var(--divider-index) / var(--divider-count));

    background: transparent;
    block-size: 100%;
    border-inline-start: thin solid var(--color-bg);
    box-shadow: 0 0 10px
      color-mix(in srgb, var(--color-accent), transparent 50%);
    grid-area: 1 / -1;
    inline-size: 1px;
    pointer-events: none;
    position: relative;
    z-index: calc(20 - var(--divider-index));

    animation: divider-move linear both;
    animation-timeline: scroll(root);
    animation-range: calc(
        var(--comparator-offset) +
          (var(--comparator-duration) * var(--layer-start))
      )
      calc(
        var(--comparator-offset) +
          (var(--comparator-duration) * var(--layer-end))
      );
  }

  .comparator-overlay {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    grid-area: 1 / -1;
    inline-size: 100%;
    max-block-size: var(--comparator-max-height);
    position: relative;
    transform: translateZ(30px);
  }

  .label {
    backdrop-filter: blur(0.375rem);
    background: color-mix(in srgb, var(--color-dark), transparent 20%);
    border-radius: 1rem;
    color: var(--color-light);
    font-size: var(--ts-xxs);
    font-weight: 600;
    inline-size: fit-content;
    letter-spacing: 0.05em;
    margin-block: var(--space-md) auto;
    margin-inline: var(--space-md) auto;
    padding: 0.375rem 0.75rem;
    pointer-events: none;
    position: relative;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 11;
  }

  .image-text {
    animation: text-reveal 0.6s ease-out both;
    animation-range: var(--comparator-offset)
      calc(var(--comparator-offset) + 20vh);
    animation-timeline: scroll(root);
    margin-block: auto var(--space-md);
    margin-inline: var(--space-md) auto;
    pointer-events: none;
    position: relative;
    white-space: nowrap;
    z-index: 10;
  }

  .image-text h2 {
    font-size: var(--ts-lg);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin: 0;
    color: var(--color-light-lighter);
  }

  .image-text h3 {
    font-size: var(--ts-md);
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    color: var(--color-light);
  }

  .comparison-percentage {
    color: var(--color-light-lighter);
    bottom: var(--space-md);
    font-size: var(--ts-md);
    font-variant-numeric: tabular-nums;
    font-weight: 500;
    line-height: 1.4;
    pointer-events: none;
    position: absolute;
    right: var(--space-md);
    z-index: 20;
  }

  @keyframes comparator-3d-flip {
    0% {
      opacity: 0.75;
      transform: perspective(1200px) rotateX(10deg) rotateY(-10deg)
        rotateZ(-3deg) scale(0.85);
    }

    15%,
    85% {
      opacity: 1;
      transform: perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        scale(1);
    }

    100% {
      opacity: 0.75;
      transform: perspective(1200px) rotateX(-10deg) rotateY(10deg)
        rotateZ(3deg) scale(0.85);
    }
  }

  @keyframes comparator-3d-flip-reverse {
    0% {
      opacity: 0.75;
      transform: perspective(1200px) rotateX(-10deg) rotateY(10deg)
        rotateZ(3deg) scale(0.85);
    }

    15%,
    85% {
      opacity: 1;
      transform: perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        scale(1);
    }

    100% {
      opacity: 0.75;
      transform: perspective(1200px) rotateX(10deg) rotateY(-10deg)
        rotateZ(-3deg) scale(0.85);
    }
  }

  @keyframes progress-calc {
    from {
      --scroll-progress: 0;
    }

    to {
      --scroll-progress: 100;
    }
  }

  @keyframes clip-reveal {
    from {
      clip-path: inset(0 0 0 0);
    }

    to {
      clip-path: inset(0 100% 0 0);
    }
  }

  @keyframes divider-move {
    0% {
      inset-inline-start: 100%;
      opacity: 0;
    }

    2% {
      opacity: 1;
    }

    98% {
      opacity: 1;
    }

    100% {
      inset-inline-start: 0%;
      opacity: 0;
    }
  }

  @keyframes text-reveal {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@layer navigation {
  .stage-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    right: var(--space-md);
    top: 50%;
    transform: translateY(-50%);
    z-index: 25;
    pointer-events: auto;
  }

  .stage-indicator {
    appearance: none;
    background: color-mix(in srgb, var(--color-light), transparent 70%);
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    height: 0.5rem;
    padding: 0;
    transition: all 0.2s ease;
    width: 0.5rem;
  }

  .stage-indicator:hover {
    background: color-mix(in srgb, var(--color-light), transparent 30%);
    transform: scale(1.3);
  }

  .stage-indicator.active {
    background: var(--color-light);
    height: 1rem;
  }

  .stage-indicator:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  @media (max-width: 48em) {
    .stage-nav {
      flex-direction: row;
      right: 50%;
      top: auto;
      bottom: calc(var(--space-md) * 3);
      transform: translateX(50%);
    }

    .stage-indicator.active {
      height: 0.5rem;
      width: 1rem;
    }
  }
}

@layer links {
  .links-layer {
    inset-block-end: 0;
    inset-inline-end: 0;
    pointer-events: none;
    position: fixed;
    z-index: 1000;
  }

  .links {
    backdrop-filter: blur(0.375rem);
    background: color-mix(in srgb, var(--color-dark), transparent 20%);
    display: grid;
    font-size: 0.75rem;
    gap: 0;
    grid-auto-flow: column;
    line-height: 1.3;
    padding-block: 0.375rem;
    padding-inline: 0.625rem;
    pointer-events: auto;
  }

  .links a {
    border-inline-start: thin solid
      color-mix(in srgb, currentColor, transparent 50%);
    color: var(--color-light);
    padding-inline: 0.5rem;
    text-decoration: none;
    transition: color 0.25s ease, opacity 0.25s ease;
  }

  .links a:first-child {
    border: none;
  }

  .links a:hover,
  .links a:focus-visible {
    opacity: 0.85;
  }
}
```
<br>

### Javascript Code
<br>

```javascript
(function () {
  "use strict";
  let velocity = 0;
  const ease = 0.12;
  const friction = 0.92;
  const sections = document.querySelectorAll(".scroll-section");
  const sectionsLen = sections.length;
  const wrappers = [];
  const comparatorData = [];
  let i, s, w, c, p;

  for (i = 0; i < sectionsLen; i++) {
    s = sections[i];
    w = s.querySelector(".comparator-wrapper");
    if (w) wrappers.push({ section: s, wrapper: w });
    c = s.querySelector(".comparator");
    if (!c) continue;
    p = c.querySelector(".comparison-percentage");
    if (p) {
      const layers = c.querySelectorAll(".image-layer");
      comparatorData.push({
        comp: c,
        pct: p,
        section: s,
        layerCount: layers.length,
        wrapper: w
      });
    }
  }

  const wrappersLen = wrappers.length;
  const compLen = comparatorData.length;
  let d, v;

  function createStageIndicators() {
    for (i = 0; i < compLen; i++) {
      d = comparatorData[i];
      const nav = document.createElement("div");
      nav.className = "stage-nav";

      const indicators = [];
      for (let j = 0; j < d.layerCount; j++) {
        const indicator = document.createElement("button");
        indicator.className = "stage-indicator";
        indicator.setAttribute("aria-label", `Go to stage ${j + 1}`);
        indicator.dataset.stage = j;
        indicator.dataset.comparatorIndex = i;
        indicators.push(indicator);
        nav.appendChild(indicator);
      }

      d.comp.appendChild(nav);
      d.indicators = indicators;
    }
  }

  function getComparatorDuration() {
    const style = getComputedStyle(document.documentElement);
    const duration = style.getPropertyValue("--comparator-duration").trim();
    return (parseFloat(duration) * window.innerHeight) / 100;
  }

  let targetScrollPosition = null;
  const scrollEase = 0.08;

  function scrollToStage(comparatorIndex, stageIndex) {
    const data = comparatorData[comparatorIndex];
    if (!data) return;

    const offset = data.section.offsetTop;
    const duration = getComparatorDuration();
    const stageCount = data.layerCount;

    stageIndex = Math.max(0, Math.min(stageIndex, stageCount - 1));

    const stageDuration = duration / (stageCount - 1);
    targetScrollPosition = offset + stageDuration * stageIndex;
  }

  function onIndicatorClick(e) {
    const btn = e.target.closest(".stage-indicator");
    if (!btn) return;

    const stage = parseInt(btn.dataset.stage, 10);
    const compIndex = parseInt(btn.dataset.comparatorIndex, 10);

    scrollToStage(compIndex, stage);
  }

  function updateOffsets() {
    for (i = 0; i < wrappersLen; i++) {
      w = wrappers[i];
      w.wrapper.style.setProperty(
        "--comparator-offset",
        w.section.offsetTop + "px"
      );
    }
  }

  function onWheel(e) {
    e.preventDefault();
    targetScrollPosition = null;
    velocity += e.deltaY;
  }

  let resizeTimeout;

  function onResize() {
    targetScrollPosition = null;

    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateOffsets();
    }, 150);
  }

  function onMouseDown(e) {
    if (!e.target.closest(".comparator-wrapper")) {
      targetScrollPosition = null;
    }
  }

  function frame() {
    if (targetScrollPosition !== null) {
      const current = window.scrollY;
      const delta = targetScrollPosition - current;

      if (Math.abs(delta) > 1) {
        window.scrollBy(0, delta * scrollEase);
      } else {
        targetScrollPosition = null;
      }
    }

    velocity *= friction;
    if (velocity > 0.2 || velocity < -0.2) {
      window.scrollBy(0, velocity * ease);
    }

    for (i = 0; i < compLen; i++) {
      d = comparatorData[i];
      v =
        parseFloat(
          getComputedStyle(d.comp).getPropertyValue("--scroll-progress")
        ) || 0;
      d.pct.textContent = (Math.round(v) + "").padStart(2, "0") + "%";

      const currentStage = Math.round((v / 100) * (d.layerCount - 1));
      d.indicators.forEach((indicator, idx) => {
        indicator.classList.toggle("active", idx === currentStage);
      });
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("mousedown", onMouseDown, { passive: true });
  document.addEventListener("click", onIndicatorClick);

  window.addEventListener("load", () => {
    createStageIndicators();
    updateOffsets();
    requestAnimationFrame(frame);
  });
})();
```

<br>

### How It Works
<br>

1. **Scroll as the Timeline**
<br>

Uses animation-timeline: scroll(root)

Scroll position directly maps to animation progress

No JavaScript-driven scroll tracking required
<br>

2. **Automatic Layer Calculation**
<br>

sibling-index() and sibling-count() determine:

Reveal timing

Z-index stacking

Divider synchronization

Adding or removing layers requires zero CSS changes
<br>

3. **Clip-Based Image Reveal**
<br>

Each image layer reveals itself using clip-path

The reveal window moves horizontally with scroll

Divider lines visually reinforce stage boundaries
<br>

4. **CSS-Driven Percentage Counter**
<br>

Scroll progress is calculated via @property

JavaScript only formats and displays the value

No scroll math or DOM measurement per frame
<br>

5. **Stage Navigation Enhancements**
<br>

JavaScript dynamically creates stage indicators

Clicking an indicator scrolls to the correct stage

Active stage updates automatically based on scroll progress
<br>

## Key Features
<br>
🧠 CSS-first animation architecture

📜 Scroll-driven multi-stage storytelling

🔢 Automatic layer timing & stacking

✂️ Clip-path based image comparison

🧭 Interactive stage navigation

🧩 Scales to any number of layers

⚡ Minimal JavaScript usage
<br>

# Use Cases
<br>

Case study comparisons

Editorial storytelling

Before / after product visuals

Design process breakdowns

Portfolio feature sections