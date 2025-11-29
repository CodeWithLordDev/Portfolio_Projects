---
title: "A fully animated WebGL shader effect that renders fiery tendril‑like energy on a full‑screen canvas."
description: "This component produces Tendril Fire Energy, inspired by a Fire Titan aura."
image: "/Assets/data/images/tendrils.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
author: "CodewithLord"
date: "2025-11-29"
---



## 🔥 Description

This component produces **Tendril Fire Energy**, inspired by a Fire Titan aura. It twists, rotates, and animates fractal‑like tendrils using pure WebGL fragment shaders. <br><br>

## 🧠 How the Effect Works (Explanation)

### 1️⃣ **Canvas + WebGL Setup**

* A full‑screen `<canvas>` is used.
* JavaScript initializes WebGL, loads shaders, creates buffers, and renders every frame.

  <br>

### 2️⃣ **Vertex Shader**

* Passes full‑screen quad coordinates directly to the fragment shader.
* Does not modify shapes — all visuals are in the fragment shader.

  <br>

### 3️⃣ **Fragment Shader (Main Magic)**

* Normalizes pixel coordinates.
* Rotates them using time‑based rotation matrices.
* Computes radial + angular distortions.
* Uses a custom color function `palette3()` to generate flowing, fiery gradients.
* Layers 5 tendrils using a loop.
* Creates glowing intensity using `pow()` and `sin()`.

  <br>

### 4️⃣ **JavaScript Rendering**

* Sends `u_time` and `u_resolution` every frame.
* Uses `requestAnimationFrame()` for smooth animation. <br><br>

## 📄 HTML Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>tendrils</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <canvas id="glcanvas"></canvas>

    <script id="vertex-shader" type="x-shader/x-vertex">
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    </script>

    <script id="fragment-shader" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 palette3(float t, float factor) {
    vec3 a = vec3(0.5) + 0.3 * sin(vec3(0.1, 0.3, 0.5) * factor);
    vec3 b = vec3(0.5) + 0.3 * cos(vec3(0.2, 0.4, 0.6) * factor);
    vec3 c = vec3(1.0) + 0.5 * sin(vec3(0.3, 0.7, 0.9) * factor);
    vec3 d = vec3(0.25, 0.4, 0.55) + 0.2 * cos(vec3(0.5, 0.6, 0.7) * factor);
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 st = (gl_FragCoord.xy / u_resolution.xy) * 2.0 - 1.0;
    st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.0);

    for (float i = 1.0; i < 6.0; i++) {
        vec2 st0 = st;
        float sgn = 1.0 - 2.0 * mod(i, 2.0);
        float t = u_time * 0.02 - float(i);
        st0 *= mat2(cos(t), sin(t), -sin(t), cos(t));

        float R = length(st0);
        float d = R * i;
        float angle = atan(st0.y, st0.x) * 3.0;

        vec3 pal = palette3(-exp((length(d) * -0.9)), abs(d) * 0.4);

        float radial = exp(-R);
        radial *= smoothstep(1.2, 0.5, R);
        pal *= radial;

        float phase = -(d + sgn * angle) + u_time * 0.3;
        float v = sin(phase);
        v = max(abs(v), 0.02);
        float w = pow(0.02 / v, 0.8);

        color += pal * w;
    }

    gl_FragColor = vec4(color, 1.0);
}
    </script>

    <script src="./script.js"></script>
  </body>
</html>
```

<br><br>

## 🎨 CSS Code

```css
body {
  height: 100vh;
  margin: 0;
}
body,
html {
  overflow: hidden;
}
```

<br><br>

## 🧠 JavaScript Code

```javascript
const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getShaderSource(id) {
  return document.getElementById(id).textContent;
}

const vertexShaderSource = getShaderSource('vertex-shader');
const fragmentShaderSource = getShaderSource('fragment-shader');

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
const positions = [-1, -1, 1, -1, -1, 1, 1, 1];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

const positionLocation = gl.getAttribLocation(program, 'a_position');
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

gl.useProgram(program);

const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
const timeLocation = gl.getUniformLocation(program, 'u_time');

function render(time) {
  gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
  gl.uniform1f(timeLocation, time * 0.001);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}

function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', resize);
resize();
requestAnimationFrame(render);
```

<br><br>

## ✅ Usage

* Put all files (`index.html`, `style.css`, `script.js`) in one folder.
* Open `index.html` in a browser.
* You will see glowing tendril energy representing **Fire Titan Aura**. <br><br>

## 📌 Notes

* This effect is **tendril-based**, not a full fire titan body.
* Uses **pure WebGL shaders**.
* Works best on desktops.
