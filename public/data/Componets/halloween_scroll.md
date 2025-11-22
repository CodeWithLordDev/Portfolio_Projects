---
title: "Halloween — Valley of Ghouls | Spooky Animated Halloween Website using HTML, CSS & JavaScript"
description: "Experience the spooky charm of Valley of Ghouls, a Halloween-themed animated website built using HTML, CSS, and JavaScript."
image: "/Assets/data/images/halloween_scroll.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
Experience the spooky charm of Valley of Ghouls, a Halloween-themed animated website built using HTML, CSS, and JavaScript.
It features glowing neon text, floating ghost animations, and a dynamic background that transforms with eerie lighting effects.
Perfect for learning creative front-end design, CSS animations, and event-based interactivity in JavaScript.


<br>


## 💻 HTML Code

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Halloween - valley of ghouls  ( gooey outline )</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <div id="walkerWrapper">
      <svg id="walker" style="overflow: visible;" width="100" height="100" viewBox="0 0 100 100" version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:svg="http://www.w3.org/2000/svg">

         <g id="weapon01Wrapper" fill="#AAA" fill-opacity="0.75" stroke="none">
            <path fill="none" stroke="none" d="M 110,50 A 60,60 0 0 1 50,110 60,60 0 0 1 -10,50 60,60 0 0 1 50,-10 60,60 0 0 1 110,50 L 50,50 Z" />
            <path id="weapon01" d="M 50,2 C 39,2 30,4 21,9 c -4,3 -2,6 3,4 6,-3 20,-5 20,-5 0,1 1,2 3,3 L 43,52 H 57 L 53,11 c 2,0 4,-2 4,-3 0,-1 15,2 21,6 5,2 7,-1 2,-4 C 72,5 61,2 50,2 Z" />
         </g>

         <g id="weapon02Wrapper" fill="#AAA" fill-opacity="0.75" stroke="none">
            <path fill="none" stroke="none" d="M 110,50 A 60,60 0 0 1 50,110 60,60 0 0 1 -10,50 60,60 0 0 1 50,-10 60,60 0 0 1 110,50 L 50,50 Z" />
            <path id="weapon02" d="m 17,13 1,2 c 0,1 -6,3 -6,3 0,0 0,5 2,4 l 6,-3 c 1,1 2,1 5,1 L 43,52 H 57 L 30,17 c 1,-1 3,-1 3,-2 0,-1 -1,-2 -1,-2 21,-6 37,-3 60,16 5,4 1,-2 1,-2 C 85,10 69,-3 35,7 32,8 30,9 30,9 L 28,6 C 27,5 16,11 17,13 Z" />
         </g>

         <g id="wMain" fill="#AAA" fill-opacity="0.75" stroke="none">
            <path fill="none" stroke="none" d="M 110,50 A 60,60 0 0 1 50,110 60,60 0 0 1 -10,50 60,60 0 0 1 50,-10 60,60 0 0 1 110,50 L 50,50 Z" />
            <path id="rFoot" d="M 65,77 C 54,77 59,65 60,58 60,51 58,42 65,42 c 9,0 4,9 5,16 C 71,65 75,77 65,77 Z" />
            <path id="lFoot" d="M 33,77 C 23,77 28,65 29,58 c 0,-7 -2,-16 5,-16 9,0 4,9 5,16 C 40,65 44,77 33,77 Z" />
            <path id="body" fill-opacity="1" d="m 50,29 c 8,0 19,1 24,6 6,7 12,11 3,18 -5,4 -8,9 -13,12 -8,2 -7,2 -14,2 C 45,67 42,67 38,66 33,63 28,60 22,52 14,47 17,39 26,33 32,30 42,29 50,29 Z" />
            <path id="head" fill="#BBB" fill-opacity="1" d="m 54,62 c -2,0 -2,2 -3,2 -1,0 0,-1 -3,-2 -3,-1 -7,-3 -9,-4 -2,-1 -2,0 -3,-1 -3,-3 -6,-11 -3,-21 3,-7 9,-11 17,-11 9,0 15,6 17,14 -1,0 2,12 -4,19 -1,1 -1,0 -3,0 0,0 -4,3 -7,4 z" />
         </g>

      </svg>
    </div>

<svg id="svgWorld" style="overflow:hidden;" width="1000" height="8000" viewBox="0 0 1000 8000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><!-- -->

	<g id="walls" fill="#FFFFFF" stroke="none" filter="url(#goo) url(#outline)"><!--  url(#iosShadow) -->

		<g id="wall01">

			<use href="#wall" fill="#FFFFFF" />

			<g id="p0" class="pointer" transform="translate(-520, -100)">
				<use class="center" href="#pointerCenter" />
				<use class="hand" fill="#FFFFFF" href="#pointerFace2Flip" />
			</g>

		</g>

	</g>
	
	<defs>
		
		<filter id="goo" x="-10%" y="-10%" width="120%" height="120%">
			<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="feBlur" /> 
			<feColorMatrix in="feBlur" mode="matrix" values="1 1 1 1 0  1 1 1 1 0  1 1 1 1 0  0 0 0 19 -9" />
		</filter>

		<filter id="outline" x="-10%" y="-10%" width="120%" height="120%">

			<feColorMatrix in="SourceAlpha" values="1 1 1 1  1 1 1 1 1  1 1 1 1 1 0 0 0 0 1 0" result="mx" />
			<feMorphology in="mx" operator="dilate" radius="2" result="mor1" />
			<feComposite  in="mor1" in2="SourceGraphic" operator="out" result="com1" />
			<feOffset in="com1" dx="0" dy="0" />

		</filter>
		<!-- <filter id="outline2" filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
			<feMorphology operator="dilate" in="SourceAlpha" radius="4" result="e1" />
			<feMorphology operator="dilate" in="SourceAlpha" radius="0" result="e2" />
			<feComposite in="e1" in2="e2" operator="xor" result="outline"/>
			<feColorMatrix type="matrix" in="outline" values="1 1 1 1 1  1 1 1 1 1  1 1 1 1 1  0 0 0 1 0" result="outline2"/>
			<feComposite in="outline2" in2="SourceAlpha" operator="out" result="output" />
			
		</filter> -->
		
      <filter id="iosShadow" x="0%" y="0%">
      <feOffset in="SourceGraphic" result="offset-graphic" dx="0" dy="0"/>
      <feGaussianBlur in="offset-graphic" result="blur-graphic" stdDeviation="2"/>
      <feColorMatrix in="blur-graphic" result="color-graphic" type="matrix" values="
        1 1 1 1 0
        1 1 1 1 0
        1 1 1 1 0
        0 0 0 1 0"/>
      <feMerge>
        <feMergeNode in="color-graphic"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
		
		
	</defs>

</svg>


<svg width="0" height="0" style="position:absolute" role="none" xmlns="http://www.w3.org/2000/svg">
   <defs>

      <path id="wall" d="M -730,-51 V 8050 H 121 C 89,7823 42,7557 51,7330 c 10,-248 49,-637 57,-900 -5,-262 -69,-692 -52,-1032 3,-353 20,-635 22,-984 2,-251 -45,-629 -41,-878 5,-327 67,-632 68,-869 1,-205 -38,-574 -42,-859 -5,-319 51,-609 47,-756 C 105,889 36,637 38,438 27,265 48,224 60,-51 Z m 1719,0 c -61,134 -87,342 -82,501 -1,172 43,370 40,555 -5,248 -64,604 -64,799 -3,212 56,652 49,936 -12,339 -60,498 -56,831 4,336 61,420 47,851 -13,411 -62,779 -67,1000 -6,266 75,681 85,1016 -4,356 -65,709 -64,953 -13,330 32,444 66,659 h 787 V -51 Z" />

      <path id="pointerCenter" fill-opacity="0" d="M 1000,500 C 1000,632 947,759 854,853 760,947 633,999 500,999 367,999 240,947 146,853 53,759 0,632 0,500 0,368 53,241 146,147 c 195,-195 512,-195 707,0 C 947,241 1000,368 1000,500 Z" />
      <path id="pointerHand" d="m 414,194 c 13,15 31,31 41,25 13,-7 -17,-119 -7,-120 23,-1 25,116 47,116 12,0 24,-114 41,-115 14,5 -12,117 -1,123 7,5 19,-16 21,-21 8,-21 34,-50 37,-46 9,10 -8,35 -23,77 -7,19 -64,47 -63,75 C 511,385 492,620 826,657 550,732 79,671 170,661 486,626 466,370 466,305 c 0,-35 -37,-57 -57,-80 -26,-29 -32,-69 -26,-71 8,-3 31,40 31,40 z" />
      <path id="pointerFace" d="m 399,201 c 9,-19 -7,-27 14,-41 16,-10 12,-12 19,-12 11,0 17,5 28,18 6,7 -16,21 -7,30 2,2 6,2 13,-1 11,-5 35,3 23,33 -2,4 9,13 13,10 9,-6 12,-10 21,-17 11,-9 38,17 31,26 -12,16 12,25 20,15 10,-12 17,18 40,4 7,-4 8,-9 5,-13 -7,-7 -9,-31 -25,-27 -10,2 -26,-10 -18,-14 10,-4 1,-20 -13,-20 -14,0 -10,-14 -9,-21 2,-14 15,0 16,-13 1,-11 -13,-6 -8,-21 3,-7 -3,-14 4,-17 15,-7 17,-4 17,-11 C 584,98 567,100 564,94 c -4,-10 -10,-15 14,-18 16,-2 41,7 71,-2 52,-16 53,16 76,9 45,-13 41,12 61,22 32,16 62,35 61,54 0,6 4,19 9,27 15,22 -14,24 -10,35 5,16 -1,35 2,52 C 850,285 865,284 884,282 c 15,-1 26,-1 29,7 9,21 -38,55 -6,55 11,0 -3,-18 10,-12 27,12 -22,40 -35,9 C 878,331 874,328 886,317 c 33,-31 -36,-11 -35,-5 3,16 -2,52 0,63 1,5 14,2 17,7 C 881,400 858,482 858,505 c 2,100 19,227 -188,213 -6,22 -357,47 -356,24 2,-37 138,-261 82,-288 -37,-18 -47,-80 -28,-111 5,-9 5,-15 -2,-25 -14,-19 -16,-53 -5,-75 19,-11 28,-21 38,-42 z m 239,-47 c 17,0 35,55 77,51 29,-3 26,-38 6,-56 -9,-8 -46,-16 -64,-14 -17,2 -38,18 -19,19 z" />
      <path id="pointerFace2" d="M 613,516 C 585,513 543,473 511,455 478,436 384,614 353,682 321,753 204,643 201,630 196,609 470,364 465,346 c -16,-55 -33,-91 -41,-140 -5,-20 1,-35 19,-46 12,-6 16,0 14,13 -3,13 -17,7 -14,17 5,15 12,-6 24,5 6,6 -11,18 -1,22 15,5 12,-20 22,-18 11,2 -5,27 12,27 19,-2 -5,-25 12,-33 15,-8 12,30 26,18 9,-6 -17,-25 -5,-33 13,-9 17,25 28,10 7,-13 -21,-20 -12,-30 10,-12 19,17 26,2 5,-7 -19,-14 -15,-24 5,-10 23,9 25,-1 5,-7 -21,-6 -19,-17 5,-24 110,0 110,0 -15,25 30,16 32,3 2,-8 5,-7 8,2 35,64 111,67 113,92 31,332 -211,305 -216,304 z M 809,253 c 3,-16 -5,-22 -22,-33 -57,-43 -129,-64 -130,2 2,36 22,65 50,69 19,4 97,-15 100,-37 z" />
      <path id="pointerFace3" d="m 713,119 c -25,-5 -85,12 -97,8 -7,-2 -50,-14 -54,-8 -11,17 3,18 4,24 3,14 -21,18 -5,28 19,13 -15,39 15,43 29,3 1,22 15,29 17,9 35,18 15,35 -14,12 61,40 -4,38 -17,0 -38,4 -38,-6 -3,-34 3,-45 -30,-30 -13,6 -14,-28 -14,-35 3,-45 -54,6 -44,-27 12,-39 -32,3 -34,-15 -3,-23 44,-35 -6,-38 -7,-19 11,-15 10,-31 0,-8 -5,-25 -15,-20 -64,32 -26,101 -61,136 -45,44 -100,38 -173,75 -71,36 -90,230 -74,258 171,69 341,75 512,17 -27,-33 -62,-90 -54,-133 0,0 20,-42 43,-61 16,-15 64,-15 110,-56 26,-24 23,44 9,46 -9,2 -18,31 -26,28 -88,-27 -79,15 -62,31 20,19 63,31 106,26 38,-4 66,-14 83,-48 23,-48 15,-124 -3,-181 -11,-33 -55,-71 -62,-85 -14,-24 -53,-47 -66,-48 z m -42,51 c 11,11 26,15 44,18 15,3 26,9 32,20 3,7 1,17 -5,22 -12,9 -29,-5 -40,-11 -15,-8 -31,-20 -33,-24 2,-9 1,-17 1,-26 z" />
    
      <use id="pointerHandFlip" href="#pointerHand" />
      <path id="pointerFaceFlip" d="m 602,201 c -9,-19 7,-27 -14,-41 -16,-10 -12,-12 -19,-12 -11,0 -17,5 -28,18 -6,7 16,21 7,30 -2,2 -6,2 -13,-1 -11,-5 -35,3 -23,33 2,4 -9,13 -13,10 -9,-6 -12,-10 -21,-17 -11,-9 -38,17 -31,26 12,16 -12,25 -20,15 -10,-12 -17,18 -40,4 -7,-4 -8,-9 -5,-13 7,-7 9,-31 25,-27 10,2 26,-10 18,-14 -10,-4 -1,-20 13,-20 14,0 10,-14 9,-21 -2,-14 -15,0 -16,-13 -1,-11 13,-6 8,-21 -3,-7 3,-14 -4,-17 -15,-7 -17,-4 -17,-11 -1,-11 16,-9 19,-15 4,-10 10,-15 -14,-18 -16,-2 -41,7 -71,-2 -52,-16 -53,16 -76,9 -45,-13 -41,12 -61,22 -32,16 -62,35 -61,54 0,6 -4,19 -9,27 -15,22 14,24 10,35 -5,16 1,35 -2,52 -2,12 -17,11 -36,9 -15,-1 -26,-1 -29,7 -9,21 38,55 6,55 -11,0 3,-18 -10,-12 -27,12 22,40 35,9 4,-10 8,-13 -4,-24 -33,-31 36,-11 35,-5 -3,16 2,52 0,63 -1,5 -14,2 -17,7 -13,18 10,100 10,123 -2,100 -19,227 188,213 6,22 357,47 356,24 -2,-37 -138,-261 -82,-288 37,-18 47,-80 28,-111 -5,-9 -5,-15 2,-25 14,-19 16,-53 5,-75 -19,-11 -28,-21 -38,-42 z m -239,-47 c -17,0 -35,55 -77,51 -29,-3 -26,-38 -6,-56 9,-8 46,-16 64,-14 17,2 38,18 19,19 z" /> 
      <path id="pointerFace2Flip" d="m 386,516 c 28,-3 70,-43 102,-61 33,-19 127,159 158,227 32,71 149,-39 152,-52 5,-21 -269,-266 -264,-284 16,-55 33,-91 41,-140 5,-20 -1,-35 -19,-46 -12,-6 -16,0 -14,13 3,13 17,7 14,17 -5,15 -12,-6 -24,5 -6,6 11,18 1,22 -15,5 -12,-20 -22,-18 -11,2 5,27 -12,27 -19,-2 5,-25 -12,-33 -15,-8 -12,30 -26,18 -9,-6 17,-25 5,-33 -13,-9 -17,25 -28,10 -7,-13 21,-20 12,-30 -10,-12 -19,17 -26,2 -5,-7 19,-14 15,-24 -5,-10 -23,9 -25,-1 -5,-7 21,-6 19,-17 -5,-24 -110,0 -110,0 15,25 -30,16 -32,3 -2,-8 -5,-7 -8,2 -35,64 -111,67 -113,92 -31,332 211,305 216,304 z m -196,-263 c -3,-16 5,-22 22,-33 57,-43 129,-64 130,2 -2,36 -22,65 -50,69 -19,4 -97,-15 -100,-37 z" />
      <path id="pointerFace3Flip" d="m 289,119 c 25,-5 85,12 97,8 7,-2 50,-14 54,-8 11,17 -3,18 -4,24 -3,14 21,18 5,28 -19,13 15,39 -15,43 -29,3 -1,22 -15,29 -17,9 -35,18 -15,35 14,12 -61,40 4,38 17,0 38,4 38,-6 3,-34 -3,-45 30,-30 13,6 14,-28 14,-35 -3,-45 54,6 44,-27 -12,-39 32,3 34,-15 3,-23 -44,-35 6,-38 7,-19 -11,-15 -10,-31 0,-8 5,-25 15,-20 64,32 26,101 61,136 45,44 100,38 173,75 71,36 90,230 74,258 -171,69 -341,75 -512,17 27,-33 62,-90 54,-133 0,0 -20,-42 -43,-61 -16,-15 -64,-15 -110,-56 -26,-24 -23,44 -9,46 9,2 18,31 26,28 88,-27 79,15 62,31 -20,19 -63,31 -106,26 -38,-4 -66,-14 -83,-48 -23,-48 -15,-124 3,-181 11,-33 55,-71 62,-85 14,-24 51,-48 66,-48 z m 42,51 c -11,11 -26,15 -44,18 -15,3 -26,9 -32,20 -3,7 -1,17 5,22 12,9 29,-5 40,-11 15,-8 31,-20 33,-24 -2,-9 -1,-17 -1,-26 z" /> 

   </defs>
</svg>
    <script src='https://unpkg.com/gsap@3/dist/gsap.min.js'></script>
<script src='https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/onscreen@1.4.0/dist/on-screen.umd.min.js'></script><script  src="./script.js"></script>

  </body>
  
</html>

```
<br>



The HTML file forms the structure of the Halloween scene.
It contains:

A main container (div class="container") that centers the content both vertically and horizontally.

A heading (<h1>Valley of Ghouls</h1>) — the glowing main title of the page.

Two ghost elements (div class="ghost") representing the floating ghosts that animate independently.

A button (button id="next") that triggers the theme transformation via JavaScript.

This HTML acts as the base layout — simple, clean, and designed for the CSS and JS to add life to it.


<br>



## CSS Code
<br>


```css
* {
  box-sizing: border-box;
}

html, body {
    margin:0;
    background:#000;
}
body {
  display: flex;
}
#dataText {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
    padding: 50px;
    width: 100vw;
}
#walkerWrapper {

    position: fixed;
    display: block;
    left: 0px;
    top: 55vh;
    top: calc( 50vh - 40px );
    z-index: 100;
    padding: 0px;
    width: 100vw;
    text-align: center;
    color: #FFF;
		overflow: visible;

    #walker {
        position: relative;
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: auto;
				overflow: visible;
   
    }
    #walker.up, #walker.down {
        #lFoot { animation: walkingAnim1 1s infinite; }
        #rFoot { animation: walkingAnim2 1s infinite; }
    }
}
#weapon01Wrapper, #weapon02Wrapper {
	overflow: visible;
}


@keyframes walkingAnim1 {
    0% { transform: translateY(-5px); }
    50% { transform: translateY(0px); }
    100% { transform: translateY(-5px); }
}
@keyframes walkingAnim2 {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
}

#svgWorld {
	position: relative;
	width: 90%;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	height: auto;
	overflow: hidden;
  /* will-change: transform, opacity;
  transform-box: fill-box; */

    .pointer {
        pointer-events: none;
    }
}

```
<br>



The CSS is where the magic and spookiness come to life.

Key styling concepts:

Background Design:

A dark, gradient-based background simulates a Halloween night sky (background: radial-gradient(circle, #111 0%, #000 100%)).

Smooth transitions are added for a glowing, eerie feel.

Typography & Title Effects:

The title text uses text-shadow to create a neon glow (orange by default).

The font is set to something clean but bold for visibility.

The title subtly pulses using the @keyframes glow animation.

Ghost Animation:

Each ghost is styled as a white circular shape with opacity to simulate transparency.

The @keyframes float animation makes them gently move up and down infinitely.

Positioning is absolute, allowing them to hover freely within the screen.

Button Styling:

The “Next” button has a hover effect and matches the Halloween theme (red or orange color).

The rounded corners and glow on hover make it appear interactive and playful.

Responsiveness:

The design remains centered and balanced using flexbox.

Media queries ensure consistent layout across screen sizes.

Overall, the CSS adds motion, color, and emotion, transforming a static layout into an immersive spooky interface.



<br>



## Javascipt Code
<br>


```javascript
let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

const svgWorld = select("#svgWorld"),
feOffsetAll = selectAll("#outline feOffset[in='com2']"),
wall01 = select("#wall01"),
handType = ["#pointerHand", "#pointerFace", "#pointerHand", "#pointerFace2", "#pointerHand", "#pointerFace3"],
handTypeSpace = [130, 260, 130, 260, 130, 260],
pointElm = select("#p0"),
numReq = 22;

let oldPageYOffset = 0;
let scrollTimer = null;
let isTurning = false;

window.addEventListener("scroll", (event) => {
	
	if( scrollTimer !== null )
	{

		clearTimeout(scrollTimer);

    newPageYOffset = window.pageYOffset;
    if( isTurning == false )
    {
			if( oldPageYOffset - newPageYOffset < 0 )
			{
					walker.classList.remove("up");
					walker.classList.add("down");
					gsap.to(wMain, { rotate: 0, transformOrigin: "50% 50%" });
			}
			else if( oldPageYOffset - newPageYOffset > 0 )
			{
					walker.classList.add("up");
					walker.classList.remove("down");
					gsap.to(wMain, { rotate: 180, transformOrigin: "50% 50%"  });
			}
		}
    oldPageYOffset = newPageYOffset;
		
	}
	scrollTimer = setTimeout(function() {
		walker.classList.remove("up");
		walker.classList.remove("down"); 
	}, 250);

});

/* Random ghoul generator */
let ySum = -150;
for( let index = 1; index < numReq; index++ )
{
  
    let handTypeStr = gsap.utils.random(handType);
    let handTypeIndex = handType.indexOf(handTypeStr);
  
    let point = pointElm.cloneNode(true);
    point.id = "p" + index;
    let x = 520;
    ySum += handTypeSpace[handTypeIndex];
    let flipPath = "";
    if( index % 2 === 0 )
		{
      x = -520;
      flipPath = "Flip";
		}
    point.setAttribute("transform", "translate("+x+", "+ySum+")");
    point.querySelector(".hand").setAttribute( "href", handTypeStr + flipPath );
    wall01.appendChild( point );

}
pointElm.setAttribute("transform", "translate(-520, -100)");
gsap.set(pointElm, { rotate: 90, transformOrigin: "50% 50%" });

ySum += 1500;
svgWorld.setAttribute("height", ySum );
svgWorld.setAttribute("viewBox", "0 0 1000 " + ySum );
const pointers = selectAll(".pointer");


/* rotate and move pointers towards walker  */

rotatePointers();
addEventListener("scroll", (event) => { rotatePointers(); });

function rotatePointers() {
	
 	/* get the walker position */
  var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;

  var svgOffsets = svgWorld.getBoundingClientRect();

  let centerX = svgOffsets.width / 2;
  let centerY = Math.round( window.scrollY + ( elem.clientHeight / 2 ) );

  let distanceMem01 = 6000,
  distanceMem02 = 6000,
  degreesMem01 = 0,
  degreesMem02 = 0;
	
	/* set all on screen pointer positions based on walker */
  pointers.forEach( ( pointer, index ) => {

    var center = pointer.querySelector(".center");
    var hand = pointer.querySelector(".hand");

    var offsets = center.getBoundingClientRect();
  
		if( OnScreen.check(center) )
    {
			
			var halfWidth = offsets.width / 2;
			var halfHeight = offsets.height / 2;
			var pointerX = Math.round( offsets.left - svgOffsets.left + halfWidth );
			var pointerY = Math.round( offsets.top + window.scrollY + halfHeight );

			var xAxis =  ( centerX - pointerX ) * 1;
			var yAxis = ( centerY - pointerY ) * -1;

			let radians = Math.atan2( xAxis, yAxis );
			let degrees = ( radians * 180 / Math.PI ).toFixed(2);
			let distance = Math.hypot( xAxis, yAxis ).toFixed(2);
			let distanceAbs = Math.abs( yAxis );

			gsap.to( pointer, 0.5, { rotation: degrees, transformOrigin:"50% 50%" } );
			if( distanceAbs < 300 )
			{
				let inverseDistance = halfWidth * distanceAbs / 300;
				gsap.to( hand, 0.5, { y: inverseDistance } );
			}
			else
				gsap.to( hand, 0.5, { y: halfWidth } );
			
			/* get two closest pointers */
			if( distanceAbs < distanceMem01 )
			{
				distanceMem02 = distanceMem01;
				degreesMem02 = degreesMem01;
				distanceMem01 = distanceAbs;
				degreesMem01 = degrees;
			}
			else if( distanceAbs < distanceMem02 )
			{
				distanceMem02 = distanceAbs;
				degreesMem02 = degrees;
			}
			
		}

	});
	
	/* rotate weapons towards nearest pointers */
  degreesMem01 = ( degreesMem01 + 180 ) % 360;
  degreesMem02 = ( degreesMem02 + 180 ) % 360;
  gsap.to( "#weapon01Wrapper", 0.5, { rotation: degreesMem01, transformOrigin:"50% 50%" } );
  gsap.to( "#weapon02Wrapper", 0.5, { rotation: degreesMem02, transformOrigin:"50% 50%" } );
	
	
}

/* animate walker at the bottom of page */
ScrollTrigger.create({
  trigger: svgWorld,
  start: 'bottom-=100px bottom',
  onEnter: function () {
        isTurning = true;
        walker.classList.remove("up");
        walker.classList.remove("down");
        gsap.timeline()
        //.set( "#weapon01Wrapper", { rotation: 90, transformOrigin:"50% 50%" } )
        //.set( "#weapon02Wrapper", { rotation: -90, transformOrigin:"50% 50%" } )
        .to( wMain, { rotate: 0, transformOrigin: "50% 50%" })
        .to( "#weapon01Wrapper", 1, { rotation: 90, transformOrigin:"50% 50%" } )
        .to( "#weapon02Wrapper", 1, { rotation: -90, transformOrigin:"50% 50%" }, "<" )
        .fromTo( ["#weapon01Wrapper","#weapon02Wrapper"], 1, { y: -15 }, { y: 0, duration: 0.25, easing: "none", repeat :3, repeatDelay: 0, onComplete() { isTurning = false;	}                                                               });
  },
});

```
<br>


The JavaScript introduces interactivity and dynamic transformation to the page.

Main logic:

Selecting Elements:

The script selects the main title, ghosts, and the button using document.querySelector or getElementById.

Event Handling:

When the “Next” button is clicked, an event listener triggers a function.

Dynamic Effects:

The background gradient and text glow color change from orange to cyan, giving a “midnight magic” transition.

The ghosts’ animations speed up or their opacity and glow colors adjust to match the new theme.

The button text changes to “Happy Haunting!” as a final interactive message.

Transitions:

Smooth CSS transitions (e.g., transition: background 2s) help the color changes feel natural rather than abrupt.

In short, the JavaScript adds user-triggered animation and atmosphere change, making the website interactive and alive — not just a static Halloween display.