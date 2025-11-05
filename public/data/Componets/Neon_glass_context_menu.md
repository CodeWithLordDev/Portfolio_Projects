---
title: "Neon Glass Context Menu – Custom Right-Click Menu with Modern UI Effects"
description: "The Neon Glass Context Menu project demonstrates how to replace the default browser right-click menu with a stylish, animated custom menu that uses glassmorphism and neon glow effects."
image: "/Assets/data/images/Neon_glass_context_menu.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
The Neon Glass Context Menu project demonstrates how to replace the default browser right-click menu with a stylish, animated custom menu that uses glassmorphism and neon glow effects.
It’s built using HTML, CSS, and JavaScript, featuring smooth transitions, responsive design, and an interactive hover glow — making it perfect for modern websites or web apps that want a futuristic, aesthetic interface.





## 💻 HTML Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Neon Glass Context Menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://public.codepenassets.com/css/normalize-5.0.0.min.css">
<link rel='stylesheet' href='https://codepen.io/simeydotme/pen/jEOaeNd/63809857734821de257097bf620e7121.css'>
<link rel='stylesheet' href='https://fonts.bunny.net/css?family=amaranth:400,400i,700,700i|asap-condensed:200,300i,400,400i,600,600i,700,700i,900,900i|asap:200,300i,400,400i,500,500i,600,600i,700,700i,900,900i|kode-mono:400,500,600,700'><link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <main id="app">

    <header>
        <h1>Neon Glass Context menu</h1>
        <p>Right-click to open</p>
    </header>
    
    <footer class="dark">
        <h2>Pick your own colors!</h2>
        <input type=range id="h1" min=0 max=360 value=255 />
        <input type=range id="h2" min=0 max=360 value=222 />
    </footer>
    
</main>

<aside id="menu" class="open dark">
    <span class="shine shine-top"></span>
    <span class="shine shine-bottom"></span>
    <span class="glow glow-top"></span>
    <span class="glow glow-bottom"></span>
    <span class="glow glow-bright glow-top "></span>
    <span class="glow glow-bright glow-bottom "></span>
    
    <div class="inner">
        
        <label class="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" placeholder="type a command or search" />
        </label>
        
        <section>
            <header>Suggestions</header>
            <ul>
                <li class="selected" tabindex=0>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg> 
                    Calendar
                </li>
                <li tabindex=0>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                    </svg>
                    Calculator
                </li>
                <li tabindex=0>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    Messages
                </li>
            </ul>
        </section>
        
        <hr>
        
        <section>
            <header>Settings</header>
            <ul>
                <li tabindex=0>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Profile
                </li>
                <li tabindex=0>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>
                    Billing
                </li>
            </ul>
        </section>
        
    </div>
    
</aside>

<!--  social icons -->
<a class="social-icon codepen" href="https://codepen.io/simeydotme" title="view my codepens">
    Made by CodewithLord
</a>

<a class="social-icon twitter" href="https://twitter.com/simeydotme">
    <svg viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>
</a>
<a class="social-icon github" href="https://github.com/simeydotme">
    <svg viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
    </svg>
</a>
    <script  src="./script.js"></script>

  </body>
  
</html>

```


The HTML defines the structure of the page and the custom context menu.
It includes:

A <div> or <section> element to hold the context menu container.

Inside the menu, multiple <button> or <li> elements represent menu options like Copy, Paste, Delete, etc.

Each menu item can have an icon and text label for better visual clarity.

In short, HTML sets up the skeleton — defining what elements exist and how they’re grouped for styling and interactivity.



## CSS Code

```css
:root {
    /* vars */
    
    --hue1: 255;
    --hue2: 222;
    --border: 1px;
    --border-color: hsl(var(--hue2), 12%, 20%);
    --radius: 22px;
    
    --ease: cubic-bezier(0.5, 1, 0.89, 1);
    
}

#menu {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition-property: visibility, opacity, filter;
    transition-duration: 0s, 0.25s, 0.25s;
    transition-delay: 0.5s, 0s, 0s;
    transition-timing-function: var(--ease);
    filter: blur(4px);
    
    font-family: 'Asap', sans-serif;
    color: #737985;
    
    position: fixed;
    top: 140px;
    left: 2svw;
    min-width: 275px;
    min-height: 275px;
    border-radius: var(--radius);
    border: var(--border) solid var(--border-color);
    padding: 1em;
    background: linear-gradient(235deg, hsl(var(--hue1) 50% 10% / 0.8), hsl(var(--hue1) 50% 10% / 0) 33%), linear-gradient(45deg , hsl(var(--hue2) 50% 10% / 0.8), hsl(var(--hue2) 50% 10% / 0) 33%), linear-gradient(hsl(220deg 25% 4.8% / 0.66));
    -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
    box-shadow: hsl(var(--hue2) 50% 2%) 0px 10px 16px -8px, hsl(var(--hue2) 50% 4%) 0px 20px 36px -14px;
}

#menu:not(.open)::before,
#menu:not(.open)::after,
#menu:not(.open) .glow {
    opacity: 0;
    pointer-events: none;
    -webkit-animation: glowoff 0.25s var(--ease) both;
            animation: glowoff 0.25s var(--ease) both;
}


#menu.open {
    
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0s;
    filter: blur(0px); 
    
    &::before,
    &::after,
    & .glow,
    & .shine {
        -webkit-animation: glow 1s var(--ease) both;
                animation: glow 1s var(--ease) both;
    }
    & .shine {
        -webkit-animation-delay: 0s;
                animation-delay: 0s;
        -webkit-animation-duration: 2s;
                animation-duration: 2s;
    }
    & .glow {
        -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s;
    }
    & .glow-bright {
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s;
        -webkit-animation-duration: 1.5s;
                animation-duration: 1.5s;
    }
    & .shine-bottom {
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s;
        -webkit-animation-duration: 1.8s;
                animation-duration: 1.8s;
    }
    & .glow-bottom {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
    }
    & .glow-bright.glow-bottom {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
        -webkit-animation-duration: 1.1s;
                animation-duration: 1.1s;
    }
}

#menu .shine,
#menu .glow {
    --hue: var(--hue1);
}
#menu .shine-bottom,
#menu .glow-bottom {
    --hue: var(--hue2);
    --conic: 135deg;
}

#menu .shine {
}

#menu .shine,
#menu .shine::before,
#menu .shine::after {
    
    /* shine is the bright white-ish inner pixel-wide lights */
    
    pointer-events: none;
    
    border-radius: 0;
    border-top-right-radius: inherit;
    border-bottom-left-radius: inherit;
    border: 1px solid transparent;
    
    width: 75%;
    height: auto;
    min-height: 0px;
    aspect-ratio: 1;
    display: block;
    position: absolute;
    right: calc(var(--border) * -1);
    top: calc(var(--border) * -1);
    left: auto;
    
    z-index: 1;
    
    --start: 12%;
    background: conic-gradient(
        from var(--conic, -45deg) at center in oklch,
        transparent var(--start,0%), hsl( var(--hue), var(--sat,80%), var(--lit,60%)), transparent  var(--end,50%) 
    ) border-box;
    
    -webkit-mask: 
        linear-gradient(transparent), 
        linear-gradient(black);
    
            mask: 
        linear-gradient(transparent), 
        linear-gradient(black);
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-clip: padding-box, border-box;
            mask-clip: padding-box, border-box;
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    
}

#menu .shine::before,
#menu .shine::after {
    content: "";
    width: auto;
    inset: -2px;
    -webkit-mask: none;
            mask: none;
}
    
#menu .shine::after { 
    z-index: 2;
    --start: 17%;
    --end: 33%;
    background: conic-gradient(
        from var(--conic, -45deg) at center in oklch,
        transparent var(--start,0%), hsl( var(--hue), var(--sat,80%), var(--lit,85%)), transparent var(--end,50%) 
    );
    
}

#menu .shine-bottom {
    top: auto;
    bottom: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    right: auto;
}

#menu .glow {
    
    /* glow is the sparse colour bleed with noise */
    
    pointer-events: none;
    
    border-top-right-radius: calc(var(--radius) * 2.5);
    border-bottom-left-radius: calc(var(--radius) * 2.5);
    border: calc(var(--radius) * 1.25) solid transparent;
    inset: calc(var(--radius) * -2);
    
    width: 75%;
    height: auto;
    min-height: 0px;
    aspect-ratio: 1;
    display: block;
    position: absolute;
    left: auto;
    bottom: auto;
    
    -webkit-mask: url('https://assets.codepen.io/13471/noise-base.png');
    
            mask: url('https://assets.codepen.io/13471/noise-base.png');
    mask-mode: luminance;
    -webkit-mask-size: 29%;
            mask-size: 29%;
    
    opacity: 1;
    filter: blur(12px) saturate(1.25) brightness(0.5);
    mix-blend-mode: plus-lighter;
    z-index: 3;
    
    &.glow-bottom {
        inset: calc(var(--radius) * -2);
        top: auto;
        right: auto;
    }
    
    &::before, 
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border: inherit;
        border-radius: inherit;
        background: conic-gradient(
            from var(--conic, -45deg) at center in oklch,
            transparent var(--start,0%), hsl( var(--hue), var(--sat,95%), var(--lit,60%)), transparent  var(--end,50%) 
        ) border-box;
        -webkit-mask: 
            linear-gradient(transparent), 
            linear-gradient(black);
                mask: 
            linear-gradient(transparent), 
            linear-gradient(black);
        -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
        -webkit-mask-clip: padding-box, border-box;
                mask-clip: padding-box, border-box;
        -webkit-mask-composite: source-out;
                mask-composite: subtract;
        filter: saturate(2) brightness(1);
        
    }
    
    &::after {
        --lit: 70%;
        --sat: 100%;
        --start: 15%;
        --end: 35%;
        border-width: calc(var(--radius) * 1.75);
        border-radius: calc(var(--radius) * 2.75);
        inset: calc(var(--radius) * -0.25);
        z-index: 4;
        opacity: 0.75;
    }
    &.glow-bottom::after {
    }

}

#menu .glow-bright {
    
    /* glow-bright is a sharper colour outline to accentuate the shine */
    
    --lit: 80%;
    --sat: 100%;
    --start: 13%;
    --end: 37%;
    
    border-width: 5px;
    border-radius: calc(var(--radius) + 2px);
    inset: -7px;
    left: auto;
    filter: blur(2px) brightness(0.66);
    
    &::after {
        content: none;
    }
    
    &.glow-bottom {
        inset: -7px;
        right: auto;
        top: auto;
    }
}

#menu .inner,
#menu section {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

#menu .inner {
    font-size: 0.875rem;
}

#menu hr {
    width: 100%;
    height: 0.5px;
    background: var(--border-color);
    border: none;
    margin: 0.25em 0 0.5em;
    opacity: 0.66;
}

#menu input {
    --tint2: hsl(var(--hue2) 50% 90% / 0.1);
    color: hsl(0 0 100% / 0.5);
    font-family: 'Asap', sans-serif;
    font-weight: 300;
    box-shadow: 0 0 0 1px transparent;
    border: 1px solid hsl(var(--hue2) 13% 18.5% / 0.5);
    background: linear-gradient(to bottom, hsl(var(--hue1) 20% 20% / 0.1) 50%, hsl(var(--hue1) 50% 50% / 0.8) 180%);
    background-size: 100% 300%;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    border-radius: calc(var(--radius) * 0.33333);
    padding-left: 2.33em;
    transition: all 0.3s var(--ease);
    
    &:focus {
        border-color: hsl(var(--hue1) 20% 70% / 0.5);
        background-position: 0% 50%;
        color: hsl(var(--hue1) 20% 80% / 1);
    }
    
    &::-moz-placeholder {
        color: hsl(0 0 100% / 1);
    }
    
    &:-ms-input-placeholder {
        color: hsl(0 0 100% / 1);
    }
    
    &::placeholder {
        color: hsl(0 0 100% / 1);
    }
}

#menu label {
    display: grid;
    grid-template: 1fr/1fr;
    margin-bottom: 1em;
    width: 100%;
    & > * {
        grid-area: 1/1;
        align-self: center;
    }
    
    & svg {
        margin-left: 0.5em;
        opacity: 0.5;
    }
}

#menu .search svg {
    &:has(+ input:focus) {
        stroke: hsl(var(--hue1) 60% 70% / 1);
    }
}

#menu header {
    font-size: 0.75rem;
    font-weight: 300;
    padding: 0 0.66em;
}

#menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#menu li {
    --item-hue: var(--hue2);
    position: relative;
    padding: 0.66em;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: calc(var(--radius) * 0.33333);
    border: 1px solid transparent;
    transition: all 0.3s ease-in, --item-opacity 0.3s ease-in;
    background: 
        linear-gradient(
            90deg  in oklch, 
            hsl(var(--item-hue) 29% 13% / var(--item-opacity)),
            hsl(var(--item-hue) 30% 15% / var(--item-opacity)) 24% 32%, 
            hsl(var(--item-hue) 5% 7% / 0) 95%
        ) border-box;
    
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        border: inherit;
        background: 
            linear-gradient(
                90deg in oklch, 
                hsl(var(--item-hue) 15% 16% / var(--item-opacity)),
                hsl(var(--item-hue) 40% 24% / var(--item-opacity)) 20% 32%, 
                hsl(var(--item-hue) 2% 12% / 0) 95%
            ) border-box;
        -webkit-mask: 
            linear-gradient(transparent), 
            linear-gradient(to right, black, transparent);
                mask: 
            linear-gradient(transparent), 
            linear-gradient(to right, black, transparent);
        -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
        -webkit-mask-clip: padding-box, border-box;
                mask-clip: padding-box, border-box;
        -webkit-mask-composite: source-out;
                mask-composite: subtract;
    }
        
    &:hover,
    &.selected,
    &:hover::after,
    &.selected::after,
    &:focus,
    &:focus::after {
        --item-opacity: 0.5;
        transition: all 0.1s ease-out, --item-opacity 0.1s ease-out;
        color: white;
        outline: none;
    }
    
    &.selected,
    &.selected::after {
        -webkit-animation: flash 0.75s ease-out 1 forwards;
                animation: flash 0.75s ease-out 1 forwards;
    }
}

#menu section:nth-of-type(1) li {
    --item-hue: var(--hue1);
}

@property --item-opacity {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
}




/* other ui stuff */

body {
    background: #08090d;
    background-image: url(https://assets.codepen.io/13471/abstract-light.jpg), linear-gradient(to right in oklab, hsl(var(--hue2) 50% 75%), hsl(var(--hue1) 50% 75%));
    background-size: cover;
    background-position: center;
    background-blend-mode: hard-light;
    padding: 0;
}

body, #app {
    min-height: 100svh;
}

#app {
    padding: 2svw;
}

#app > header {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
}

#app > header h1,
#app > header p {
    margin: 0;
    color: color-mix(in oklab, var(--fg) 70%, hsl(var(--hue1) 50% 50%));
}

#app > header p {
    color: color-mix(in oklab, var(--fg) 40%, hsl(var(--hue2) 50% 50%));
}

#app > footer {
    align-self: end;
    max-width: calc(96svw - 200px);
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
}

#app > footer h2 {
    width: 100%;
    font-size: 1em;
}

#app > footer [type=range] {
    --tint: hsl( var(--hue2) 66% 50% );
    --tint2: hsl( var(--hue1) 66% 50% );
    width: 320px;
    margin: 0;
}
#app > footer #h1 {
    --tint: hsl( var(--hue1) 66% 50% );
    --tint2: hsl( var(--hue1) 66% 50% );
    --hue: var(--hue1);
    width: 320px;
}
#app > footer #h2 {
    --tint: hsl( var(--hue2) 66% 50% );
    --tint2: hsl( var(--hue2) 66% 50% );
    --hue: var(--hue2);
    width: 320px;
}

@media screen and (max-width: 480px) {
    #app > footer {
        gap: 1em;
    }
}

#app input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0 1px 2px 1px hsl(var(--hue) 66% 20% / 0.5);
}

#app input[type="range"]::-moz-range-thumb {
    box-shadow: 0 1px 2px 1px hsl(var(--hue) 66% 20% / 0.5);
}

#app input[type="range"]::-ms-thumb {
    box-shadow: 0 1px 2px 1px hsl(var(--hue) 66% 20% / 0.5);
}

#menu svg {
    fill: none;
    stroke-width: 1;
    height: 20px;
}



@-webkit-keyframes glow {
    0% {
        opacity: 0;
    }
    3% {
        opacity: 1;
    }
    10% {
        opacity: 0;
    }
    12% {
        opacity: 0.7;
    }
    16% {
        opacity: 0.3;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
    100% {
        opacity: 1;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
}



@keyframes glow {
    0% {
        opacity: 0;
    }
    3% {
        opacity: 1;
    }
    10% {
        opacity: 0;
    }
    12% {
        opacity: 0.7;
    }
    16% {
        opacity: 0.3;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
    100% {
        opacity: 1;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
}

@-webkit-keyframes glowoff {
    to {
        opacity: 0;
    }
}

@keyframes glowoff {
    to {
        opacity: 0;
    }
}

@-webkit-keyframes flash {
    0% {
        opacity: 0;
        --item-opacity: 0;
    }
    7% {
        opacity: 0.5;
        --item-opacity: 1;
    }
    14% {
        opacity: 0;
        --item-opacity: 0.5;
    }
    21%, 100% {
        opacity: 1;
        --item-opacity: 1;
    }
}

@keyframes flash {
    0% {
        opacity: 0;
        --item-opacity: 0;
    }
    7% {
        opacity: 0.5;
        --item-opacity: 1;
    }
    14% {
        opacity: 0;
        --item-opacity: 0.5;
    }
    21%, 100% {
        opacity: 1;
        --item-opacity: 1;
    }
}:root {
    /* vars */
    
    --hue1: 255;
    --hue2: 222;
    --border: 1px;
    --border-color: hsl(var(--hue2), 12%, 20%);
    --radius: 22px;
    
    --ease: cubic-bezier(0.5, 1, 0.89, 1);
    
}

#menu {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition-property: visibility, opacity, filter;
    transition-duration: 0s, 0.25s, 0.25s;
    transition-delay: 0.5s, 0s, 0s;
    transition-timing-function: var(--ease);
    filter: blur(4px);
    
    font-family: 'Asap', sans-serif;
    color: #737985;
    
    position: fixed;
    top: 140px;
    left: 2svw;
    min-width: 275px;
    min-height: 275px;
    border-radius: var(--radius);
    border: var(--border) solid var(--border-color);
    padding: 1em;
    background: linear-gradient(235deg, hsl(var(--hue1) 50% 10% / 0.8), hsl(var(--hue1) 50% 10% / 0) 33%), linear-gradient(45deg , hsl(var(--hue2) 50% 10% / 0.8), hsl(var(--hue2) 50% 10% / 0) 33%), linear-gradient(hsl(220deg 25% 4.8% / 0.66));
    -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
    box-shadow: hsl(var(--hue2) 50% 2%) 0px 10px 16px -8px, hsl(var(--hue2) 50% 4%) 0px 20px 36px -14px;
}

#menu:not(.open)::before,
#menu:not(.open)::after,
#menu:not(.open) .glow {
    opacity: 0;
    pointer-events: none;
    -webkit-animation: glowoff 0.25s var(--ease) both;
            animation: glowoff 0.25s var(--ease) both;
}


#menu.open {
    
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0s;
    filter: blur(0px); 
    
    &::before,
    &::after,
    & .glow,
    & .shine {
        -webkit-animation: glow 1s var(--ease) both;
                animation: glow 1s var(--ease) both;
    }
    & .shine {
        -webkit-animation-delay: 0s;
                animation-delay: 0s;
        -webkit-animation-duration: 2s;
                animation-duration: 2s;
    }
    & .glow {
        -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s;
    }
    & .glow-bright {
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s;
        -webkit-animation-duration: 1.5s;
                animation-duration: 1.5s;
    }
    & .shine-bottom {
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s;
        -webkit-animation-duration: 1.8s;
                animation-duration: 1.8s;
    }
    & .glow-bottom {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
    }
    & .glow-bright.glow-bottom {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
        -webkit-animation-duration: 1.1s;
                animation-duration: 1.1s;
    }
}

#menu .shine,
#menu .glow {
    --hue: var(--hue1);
}
#menu .shine-bottom,
#menu .glow-bottom {
    --hue: var(--hue2);
    --conic: 135deg;
}

#menu .shine {
}

#menu .shine,
#menu .shine::before,
#menu .shine::after {
    
    /* shine is the bright white-ish inner pixel-wide lights */
    
    pointer-events: none;
    
    border-radius: 0;
    border-top-right-radius: inherit;
    border-bottom-left-radius: inherit;
    border: 1px solid transparent;
    
    width: 75%;
    height: auto;
    min-height: 0px;
    aspect-ratio: 1;
    display: block;
    position: absolute;
    right: calc(var(--border) * -1);
    top: calc(var(--border) * -1);
    left: auto;
    
    z-index: 1;
    
    --start: 12%;
    background: conic-gradient(
        from var(--conic, -45deg) at center in oklch,
        transparent var(--start,0%), hsl( var(--hue), var(--sat,80%), var(--lit,60%)), transparent  var(--end,50%) 
    ) border-box;
    
    -webkit-mask: 
        linear-gradient(transparent), 
        linear-gradient(black);
    
            mask: 
        linear-gradient(transparent), 
        linear-gradient(black);
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-clip: padding-box, border-box;
            mask-clip: padding-box, border-box;
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    
}

#menu .shine::before,
#menu .shine::after {
    content: "";
    width: auto;
    inset: -2px;
    -webkit-mask: none;
            mask: none;
}
    
#menu .shine::after { 
    z-index: 2;
    --start: 17%;
    --end: 33%;
    background: conic-gradient(
        from var(--conic, -45deg) at center in oklch,
        transparent var(--start,0%), hsl( var(--hue), var(--sat,80%), var(--lit,85%)), transparent var(--end,50%) 
    );
    
}

#menu .shine-bottom {
    top: auto;
    bottom: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    right: auto;
}

#menu .glow {
    
    /* glow is the sparse colour bleed with noise */
    
    pointer-events: none;
    
    border-top-right-radius: calc(var(--radius) * 2.5);
    border-bottom-left-radius: calc(var(--radius) * 2.5);
    border: calc(var(--radius) * 1.25) solid transparent;
    inset: calc(var(--radius) * -2);
    
    width: 75%;
    height: auto;
    min-height: 0px;
    aspect-ratio: 1;
    display: block;
    position: absolute;
    left: auto;
    bottom: auto;
    
    -webkit-mask: url('https://assets.codepen.io/13471/noise-base.png');
    
            mask: url('https://assets.codepen.io/13471/noise-base.png');
    mask-mode: luminance;
    -webkit-mask-size: 29%;
            mask-size: 29%;
    
    opacity: 1;
    filter: blur(12px) saturate(1.25) brightness(0.5);
    mix-blend-mode: plus-lighter;
    z-index: 3;
    
    &.glow-bottom {
        inset: calc(var(--radius) * -2);
        top: auto;
        right: auto;
    }
    
    &::before, 
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border: inherit;
        border-radius: inherit;
        background: conic-gradient(
            from var(--conic, -45deg) at center in oklch,
            transparent var(--start,0%), hsl( var(--hue), var(--sat,95%), var(--lit,60%)), transparent  var(--end,50%) 
        ) border-box;
        -webkit-mask: 
            linear-gradient(transparent), 
            linear-gradient(black);
                mask: 
            linear-gradient(transparent), 
            linear-gradient(black);
        -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
        -webkit-mask-clip: padding-box, border-box;
                mask-clip: padding-box, border-box;
        -webkit-mask-composite: source-out;
                mask-composite: subtract;
        filter: saturate(2) brightness(1);
        
    }
    
    &::after {
        --lit: 70%;
        --sat: 100%;
        --start: 15%;
        --end: 35%;
        border-width: calc(var(--radius) * 1.75);
        border-radius: calc(var(--radius) * 2.75);
        inset: calc(var(--radius) * -0.25);
        z-index: 4;
        opacity: 0.75;
    }
    &.glow-bottom::after {
    }

}

#menu .glow-bright {
    
    /* glow-bright is a sharper colour outline to accentuate the shine */
    
    --lit: 80%;
    --sat: 100%;
    --start: 13%;
    --end: 37%;
    
    border-width: 5px;
    border-radius: calc(var(--radius) + 2px);
    inset: -7px;
    left: auto;
    filter: blur(2px) brightness(0.66);
    
    &::after {
        content: none;
    }
    
    &.glow-bottom {
        inset: -7px;
        right: auto;
        top: auto;
    }
}

#menu .inner,
#menu section {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

#menu .inner {
    font-size: 0.875rem;
}

#menu hr {
    width: 100%;
    height: 0.5px;
    background: var(--border-color);
    border: none;
    margin: 0.25em 0 0.5em;
    opacity: 0.66;
}

#menu input {
    --tint2: hsl(var(--hue2) 50% 90% / 0.1);
    color: hsl(0 0 100% / 0.5);
    font-family: 'Asap', sans-serif;
    font-weight: 300;
    box-shadow: 0 0 0 1px transparent;
    border: 1px solid hsl(var(--hue2) 13% 18.5% / 0.5);
    background: linear-gradient(to bottom, hsl(var(--hue1) 20% 20% / 0.1) 50%, hsl(var(--hue1) 50% 50% / 0.8) 180%);
    background-size: 100% 300%;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    border-radius: calc(var(--radius) * 0.33333);
    padding-left: 2.33em;
    transition: all 0.3s var(--ease);
    
    &:focus {
        border-color: hsl(var(--hue1) 20% 70% / 0.5);
        background-position: 0% 50%;
        color: hsl(var(--hue1) 20% 80% / 1);
    }
    
    &::-moz-placeholder {
        color: hsl(0 0 100% / 1);
    }
    
    &:-ms-input-placeholder {
        color: hsl(0 0 100% / 1);
    }
    
    &::placeholder {
        color: hsl(0 0 100% / 1);
    }
}

#menu label {
    display: grid;
    grid-template: 1fr/1fr;
    margin-bottom: 1em;
    width: 100%;
    & > * {
        grid-area: 1/1;
        align-self: center;
    }
    
    & svg {
        margin-left: 0.5em;
        opacity: 0.5;
    }
}

#menu .search svg {
    &:has(+ input:focus) {
        stroke: hsl(var(--hue1) 60% 70% / 1);
    }
}

#menu header {
    font-size: 0.75rem;
    font-weight: 300;
    padding: 0 0.66em;
}

#menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#menu li {
    --item-hue: var(--hue2);
    position: relative;
    padding: 0.66em;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: calc(var(--radius) * 0.33333);
    border: 1px solid transparent;
    transition: all 0.3s ease-in, --item-opacity 0.3s ease-in;
    background: 
        linear-gradient(
            90deg  in oklch, 
            hsl(var(--item-hue) 29% 13% / var(--item-opacity)),
            hsl(var(--item-hue) 30% 15% / var(--item-opacity)) 24% 32%, 
            hsl(var(--item-hue) 5% 7% / 0) 95%
        ) border-box;
    
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        border: inherit;
        background: 
            linear-gradient(
                90deg in oklch, 
                hsl(var(--item-hue) 15% 16% / var(--item-opacity)),
                hsl(var(--item-hue) 40% 24% / var(--item-opacity)) 20% 32%, 
                hsl(var(--item-hue) 2% 12% / 0) 95%
            ) border-box;
        -webkit-mask: 
            linear-gradient(transparent), 
            linear-gradient(to right, black, transparent);
                mask: 
            linear-gradient(transparent), 
            linear-gradient(to right, black, transparent);
        -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
        -webkit-mask-clip: padding-box, border-box;
                mask-clip: padding-box, border-box;
        -webkit-mask-composite: source-out;
                mask-composite: subtract;
    }
        
    &:hover,
    &.selected,
    &:hover::after,
    &.selected::after,
    &:focus,
    &:focus::after {
        --item-opacity: 0.5;
        transition: all 0.1s ease-out, --item-opacity 0.1s ease-out;
        color: white;
        outline: none;
    }
    
    &.selected,
    &.selected::after {
        -webkit-animation: flash 0.75s ease-out 1 forwards;
                animation: flash 0.75s ease-out 1 forwards;
    }
}

#menu section:nth-of-type(1) li {
    --item-hue: var(--hue1);
}

@property --item-opacity {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
}




/* other ui stuff */

body {
    background: #08090d;
    background-image: url(https://assets.codepen.io/13471/abstract-light.jpg), linear-gradient(to right in oklab, hsl(var(--hue2) 50% 75%), hsl(var(--hue1) 50% 75%));
    background-size: cover;
    background-position: center;
    background-blend-mode: hard-light;
    padding: 0;
}

body, #app {
    min-height: 100svh;
}

#app {
    padding: 2svw;
}

#app > header {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
}

#app > header h1,
#app > header p {
    margin: 0;
    color: color-mix(in oklab, var(--fg) 70%, hsl(var(--hue1) 50% 50%));
}

#app > header p {
    color: color-mix(in oklab, var(--fg) 40%, hsl(var(--hue2) 50% 50%));
}

#app > footer {
    align-self: end;
    max-width: calc(96svw - 200px);
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
}

#app > footer h2 {
    width: 100%;
    font-size: 1em;
}

#app > footer [type=range] {
    --tint: hsl( var(--hue2) 66% 50% );
    --tint2: hsl( var(--hue1) 66% 50% );
    width: 320px;
    margin: 0;
}
#app > footer #h1 {
    --tint: hsl( var(--hue1) 66% 50% );
    --tint2: hsl( var(--hue1) 66% 50% );
    --hue: var(--hue1);
    width: 320px;
}
#app > footer #h2 {
    --tint: hsl( var(--hue2) 66% 50% );
    --tint2: hsl( var(--hue2) 66% 50% );
    --hue: var(--hue2);
    width: 320px;
}

@media screen and (max-width: 480px) {
    #app > footer {
        gap: 1em;
    }
}

#app input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0 1px 2px 1px hsl(var(--hue) 66% 20% / 0.5);
}

#app input[type="range"]::-moz-range-thumb {
    box-shadow: 0 1px 2px 1px hsl(var(--hue) 66% 20% / 0.5);
}

#app input[type="range"]::-ms-thumb {
    box-shadow: 0 1px 2px 1px hsl(var(--hue) 66% 20% / 0.5);
}

#menu svg {
    fill: none;
    stroke-width: 1;
    height: 20px;
}



@-webkit-keyframes glow {
    0% {
        opacity: 0;
    }
    3% {
        opacity: 1;
    }
    10% {
        opacity: 0;
    }
    12% {
        opacity: 0.7;
    }
    16% {
        opacity: 0.3;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
    100% {
        opacity: 1;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
}



@keyframes glow {
    0% {
        opacity: 0;
    }
    3% {
        opacity: 1;
    }
    10% {
        opacity: 0;
    }
    12% {
        opacity: 0.7;
    }
    16% {
        opacity: 0.3;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
    100% {
        opacity: 1;
        -webkit-animation-timing-function: var(--ease);
                animation-timing-function: var(--ease);
    }
}

@-webkit-keyframes glowoff {
    to {
        opacity: 0;
    }
}

@keyframes glowoff {
    to {
        opacity: 0;
    }
}

@-webkit-keyframes flash {
    0% {
        opacity: 0;
        --item-opacity: 0;
    }
    7% {
        opacity: 0.5;
        --item-opacity: 1;
    }
    14% {
        opacity: 0;
        --item-opacity: 0.5;
    }
    21%, 100% {
        opacity: 1;
        --item-opacity: 1;
    }
}

@keyframes flash {
    0% {
        opacity: 0;
        --item-opacity: 0;
    }
    7% {
        opacity: 0.5;
        --item-opacity: 1;
    }
    14% {
        opacity: 0;
        --item-opacity: 0.5;
    }
    21%, 100% {
        opacity: 1;
        --item-opacity: 1;
    }
}

```



The CSS brings the futuristic look to life using:

Glassmorphism: Achieved with backdrop-filter: blur() and semi-transparent backgrounds (rgba), giving a frosted glass effect.

Neon Glow: Done with box-shadow and text shadows in bright hues like cyan or magenta.

Animations and Transitions: Smooth hover transitions using transform, scale, and transition properties to make the menu feel responsive and alive.

Positioning: The context menu is positioned absolutely, allowing JavaScript to dynamically move it to the cursor’s location on right-click.

Overall, CSS gives the design its aesthetic and animation appeal, turning a simple menu into a glowing, interactive element.

 

## Javascipt Code

```javascript
const $menu = document.getElementById('menu');
const $li = $menu.querySelectorAll('li');
const $hue1 = document.querySelector('#h1');
const $hue2 = document.querySelector('#h2');

let cleanTimer;

document.addEventListener("contextmenu", (event) => {
    
    const menuBox = $menu.getBoundingClientRect();
    const bodyBox = { width: window.innerWidth, height: window.innerHeight }
    const target = {  x: event.clientX, y: event.clientY }
    const padding = { x: 30, y: 20 }
    
    const hitX = target.x + menuBox.width >= bodyBox.width - padding.x;
    const hitY = target.y + menuBox.height >= bodyBox.height - padding.y;
    
    if ( hitX ) {
        target.x = bodyBox.width - menuBox.width - padding.x;
    }
    
    if ( hitY ) {
        target.y = bodyBox.height - menuBox.height - padding.y;
    }
    
    const $target = event.target;
    const isMenu = $menu.contains( $target );
    event.preventDefault();
    
    if( !isMenu ) {
        $menu.style.left = target.x + 'px';
        $menu.style.top = target.y + 'px';
        $menu.classList.add('open');
        clearTimeout(cleanTimer);
    }
    
});

document.addEventListener('pointerdown', (event) => {
    const $target = event.target;
    const isMenu = $menu.contains( $target );
    const isSlider = $target.matches( 'input' );
    
    if( !isMenu && !isSlider ) {
        $menu.classList.remove('open');
        cleanTimer = setTimeout(() => { 
            $menu.querySelector('input').value = ''; 
            $li.forEach($el => {
              $el.classList.remove('selected');  
            })
        }, 200);
    } else if (isMenu) {
        $li.forEach($el => {
          $el.classList.remove('selected');  
        })
        if ( $target.matches('li') ) {
            $target.classList.add('selected');
        }
    }
});

$hue1.addEventListener( 'input', (event) => {
    requestAnimationFrame(() => {
        document.body.style.setProperty('--hue1', event.target.value );
        $menu.classList.add('open');
    })
});
$hue2.addEventListener( 'input', (event) => {
    requestAnimationFrame(() => {
        document.body.style.setProperty('--hue2', event.target.value );
        $menu.classList.add('open');
    })
});

const rand1 = 120 + Math.floor(Math.random() * 240);
const rand2 = rand1 - 80 + (Math.floor(Math.random() * 60) - 30);
$hue1.value = rand1;
$hue2.value = rand2;
document.body.style.setProperty('--hue1', rand1 );
document.body.style.setProperty('--hue2', rand2 );
```

The JavaScript handles all interactivity and logic:

It disables the default browser context menu using event.preventDefault().

Tracks the cursor position on right-click (contextmenu event) and positions the custom menu (menu.style.top and menu.style.left) accordingly.

Adds click listeners to close the menu when clicking anywhere else on the page.

Optionally, you can link actions (e.g., Copy, Paste) to menu items by attaching custom event handlers.

In essence, JavaScript is responsible for making the custom menu behave like a real context menu — dynamic, responsive, and intuitive.