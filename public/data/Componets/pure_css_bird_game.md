---
title: "Flying Bird Animation Game Using Pure CSS | No JavaScript Needed"
description: "This project demonstrates a fun and interactive bird flying game built entirely with pure CSS — no JavaScript required! 🐥."
image: "/Assets/data/images/pure_css_bird_game.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
This project demonstrates a fun and interactive bird flying game built entirely with pure CSS — no JavaScript required! 🐥
The game features smooth animations that make the bird flap its wings and move across a beautifully styled background.
Using CSS keyframes, transitions, and transforms, the illusion of continuous flight and motion is achieved in a lightweight and responsive design.
It’s a perfect example of how powerful CSS animations can be for creating dynamic, game-like experiences without relying on JavaScript.
Ideal for beginners learning advanced CSS animation techniques or developers experimenting with creative front-end effects.


<br>

## 💻 HTML Code
<br>

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>PURE CSS GAME - NO JS</title>
    <link rel="stylesheet" href="https://public.codepenassets.com/css/normalize-5.0.0.min.css">
<link rel="stylesheet" href="./style.css">
<script src="https://public.codepenassets.com/js/prefixfree-1.0.7.min.js"></script>

  </head>
    
  <body>
  <div class="wrapper">
  <div class="timer">
       <span></span>    
  </div>
  <div class="gameover">GAME OVER</div>
  <h1>KILL THE BIRDS <span>(shoot the birds)</span></h1>
  <h2>PURE CSS GAME - NO JS!</h2>
  <input class="input-circle input-circle1" type="radio" id="circle1" >
 <input class="input-circle input-circle2" type="radio" id="circle2" >
 <input class="input-circle input-circle3" type="radio" id="circle3" >
 <input class="input-circle input-circle4" type="radio" id="circle4" >
 <input class="input-circle input-circle5" type="radio" id="circle5" >
 <input class="input-circle input-circle6" type="radio" id="circle6" >
  
  <label for="circle1" class="pajaro pajaro1"><span></span></label>
  <label for="circle2" class="pajaro pajaro2"><span></span></label>
  <label for="circle3" class="pajaro pajaro3"><span></span></label>
  <label for="circle4" class="pajaro pajaro4"><span></span></label>
  <label for="circle5" class="pajaro pajaro5"><span></span></label>
  <label for="circle6" class="pajaro pajaro6"><span></span></label>
  <div class="sum">SCORE:</div>
</div>
    <script  src="./script.js"></script>

  </body>
  
</html>

```
<br>
<br>

The HTML structure creates the foundation of the game interface without using any JavaScript logic. The (div class="wrapper") acts as the main game area, containing all visual elements and gameplay mechanics. Inside it:

A timer bar (div class="timer")(span) (span) (div) visually shows how much time is left before the game ends.

The "GAME OVER" text (div class="gameover") appears at the end of the game using CSS animation.

The game title (h1) and subtitle (h2) display information and credit.

Multiple hidden radio inputs (input class="input-circle" type="radio") represent targets (birds). When clicked, they act as “hits”.

Each bird is represented by a (label) linked to its respective input (for="circle1" etc.), styled with the pajaro class. Clicking on a bird label checks the associated input, triggering CSS effects to simulate shooting the bird.

The score counter (div class="sum")SCORE:(div) uses CSS counters to track how many birds have been shot.

Finally, a (script src="./script.js")(script) tag is present, but no JavaScript logic is required for functionality—this is a pure CSS-based game. The HTML mainly serves to structure the interactive elements and connect labels to hidden inputs for user interaction.
<br>

## CSS Code
<br>

```css
body{
  counter-reset:birds;
  -webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
  overflow:hidden;
}
/*hide checkbox*/
input{position:fixed; left:-10px; top:-10px;}

h1{margin:0; text-align:center;}
h2{position:fixed; right:20px; bottom:0; font-size:18px; color:red;}

/*play area*/
.wrapper{  
  height:500px;
  background: -webkit-linear-gradient(top, hsla(210,70%,80%,1) 0%,hsla(210,50%,100%,1) 100%);
  position:relative;
  cursor:crosshair;
}
/*count dead birds*/
.input-circle:checked{
  counter-increment:birds;
}

.sum{position:fixed; left:45%; top:60px; font-size:24px; fonot-weight:bold;}

/*print to screen dead birds*/
.sum:after{
  content: counter(birds);
}

.input-circle ~ .pajaro{
  opacity:0;
  transition:0.3s  cubic-bezier(0,.43,1,0);
  animation: move 8s infinite alternate;
}
.input-circle1:not(:checked) ~ .pajaro1,
.input-circle2:not(:checked) ~ .pajaro2,
.input-circle3:not(:checked) ~ .pajaro3,
.input-circle4:not(:checked) ~ .pajaro4,
.input-circle5:not(:checked) ~ .pajaro5,
.input-circle6:not(:checked) ~ .pajaro6
{
  opacity:1; 
}


.input-circle1:checked ~ .pajaro1 span,
.input-circle2:checked ~ .pajaro2 span,
.input-circle3:checked ~ .pajaro3 span,
.input-circle4:checked ~ .pajaro4 span,
.input-circle5:checked ~ .pajaro5 span,
.input-circle6:checked ~ .pajaro6 span
{
  display:block;
  
}

.pajaro{   
  position:absolute;
  left:0;  
  cursor:crosshair;
}
.pajaro>span{
  display:none;position:absolute; z-index:2; left:-250%;bottom:-50%;  
  background-color:white; border:solid 2px #000; width:80px; height:30px; padding:10px; border-radius:50%;
}
.pajaro>span:before{
  content:"I'm Dead!"; color:red; font-weight:bold;
}

.pajaro1{top:50px;
  animation-delay: -2s!important;
  transform:scale(0.9);
}
.pajaro2{
  top:100px;
  animation-delay: -1s!important;
  transform:scale(0.8); 
}
.pajaro3{
  top:200px;
  animation-delay: -3s!important;
  transform:scale(1.4); 
}

.pajaro4{top:50px;
  animation-delay: -12s!important;
  transform:scale(0.9);
}
.pajaro5{
  top:100px;
  animation-delay: -16s!important;
  transform:scale(0.5); 
}
.pajaro6{
  top:200px;
  animation-delay: -20s!important;
  transform:scale(1.4); 
}

@keyframes move{
0%{left:0%;}
20%{left:20%;top:50%; }
40%{top:30%; left:60%;}
60%{top:80%;left:80%;}
80%{top:10%; left:20%:}
100%{top:30%; left:20%; }
}


.timer{
  background-color:#333; width:300px;height:50px;
  position:fixed;
}


.timer span{
  display:block;
  background:repeating-linear-gradient(-45deg, #000, rgba(0, 0, 0, 0) 25px, #FFF 25px, #FFF 50px);
  width:300px; height:50px;
  animation:timer 20s linear;
}

.timer span:before{  
  content:"TIME LEFT";
  display:block;
  position:absolute; z-index:3;
  left:0; 
  right:0;
  top:0;
  bottom:0;
  text-align:center;
  line-height:50px;
  font-size:25px;
  color:red;
}
@keyframes timer{
0%{width:10px;}
100%{width:300px; display:block;}
}


.gameover{
  position:fixed; z-index:100000; left:0; top:0; bottom:0; right:0; background-color:rgba(0,0,0,0.8);
  animation:gameover 20s linear forwards;
  font-size:80px; color:white; font-weight:bold; text-align:center; 
  text-indent:0;  
  line-height:500px;
}

@keyframes gameover{
0%{left:-5000px;bottom:100%;}
97%{left:-5000px;bottom:100%;}
100%{ left:0px;}
}

footer{position:fixed; left:0; bottom:0; padding:10px 20px;}
footer svg{vertical-align:middle;}
footer a{text-decoration:none;  font-size:20px; color:rgba(29,161,242,1.00); vertical-align:middle;}




/*------------------------------------------------------ body of the bird
*/

.pajaro{
  background:black;
  border-radius: 50% 50% 20% 20%;
  color:white;
  line-height:20px;
  letter-spacing: 2px;
  font-size:0.8em;
  text-align:center;
  position:absolute;
 
  margin-top:-20px; margin-left:-10px;
  width:15px; height:15px;
  animation:planeo 0.8s linear infinite;
  z-index:999;
}

.pajaro:after,
.pajaro:before{
  content:"";
  position:absolute;
  top:50%; left:50%;
}

/*------------------------------------------------------ bird wings
*/

.pajaro:after{
  border-radius: 100% 100% 0 0;
  box-shadow: inset 0px 5px 0 black;
  width:100px; height:100px;
  margin-top:-7px; margin-left:-50px;
  transform-origin: 100% 0%;
  animation:alas 3s linear infinite;
}

/*------------------------------------------------------ bird beak
*/

.pajaro:before{
  background:#FFC37F;
  border-radius: 100% 0% 20% 0%;
  margin-top:3px; margin-left:-4px;
  width:6px; height:6px;
  transform:rotateZ(45deg);
}

/*------------------------------------------------------ wings animation
*/

@keyframes alas {
  50%{
    transform:rotateX(-1440deg);
  }
}

/*------------------------------------------------------ bird animation
*/

@keyframes planeo {
  40%{
    transform:rotateZ(2deg) translateX(2px) translateY(10px) translateZ(0);
    line-height:16px;
    font-size:0.6em;
  }
  80%{
    transform:rotateZ(-2deg) translateX(5px) translateY(8px) translateZ(0);
  }
}

```
<br>

The CSS file is where the entire game logic, animations, and visuals are implemented using advanced CSS features and keyframes—without any JavaScript.

General Setup:
The body disables text selection, hides overflow, and resets a custom counter (counter-reset: birds;) that tracks how many birds are shot.

Hidden Inputs:
The radio inputs are hidden off-screen but still clickable through their linked labels. When a bird (label) is clicked, its input becomes checked.

Scoring System:
Each time a bird’s input (.input-circle:checked) is selected, the counter (birds) is incremented. The .sum:after pseudo-element displays the live score using the counter’s current value.

Game Area (.wrapper):
Defines a 500px-high playable area with a blue sky gradient and a crosshair cursor, giving a shooting game feel.

Birds (.pajaro classes):
Each bird is absolutely positioned and styled as a small black oval shape with wings and a beak.

The :before pseudo-element forms the beak.

The :after pseudo-element forms the wings.

Both are animated using keyframes for flapping and flying motion (@keyframes alas and @keyframes planeo).

Bird Movement:
Each .pajaro uses the move keyframe animation to travel across the screen horizontally and vertically in smooth loops. Birds start at different heights and speeds using animation-delay to make their movement look natural.

Shooting Mechanism:
When a bird is clicked (input becomes checked), its label becomes invisible (opacity: 0), simulating it being shot. The label’s <span> element displays “I’m Dead!” text at the clicked position.

Timer Animation:
The .timer span element expands its width from 10px to 300px over 20 seconds using the timer keyframe animation. The text “TIME LEFT” overlays the bar, showing the countdown duration visually.

Game Over Screen:
The .gameover div stays hidden off-screen initially and moves into view at the end of the 20-second timer animation using the gameover keyframes. It overlays a dark transparent background with large white text saying “GAME OVER”.

Wings and Bird Body Animation:
The wings continuously flap with the alas keyframe, rotating the shape to create motion. The planeo keyframe slightly moves and rotates the bird for a gliding effect, giving a lifelike flying motion.

Together, these CSS techniques—counters, transitions, and keyframes—create a fully functional interactive shooting game where players click moving birds to earn points before the timer runs out.