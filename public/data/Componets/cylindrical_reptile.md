---
title: "Cylinder Creature AI – Procedural Kinematics & Autonomous Patrol using Three.js (2025)"
description: "A fully procedural 3D creature simulation built with Three.js, featuring inverse kinematics, segmented limb systems, autonomous AI patrol behavior, and real-time physics-based motion using cylinder-only geometry."
image: "/Assets/data/images/cylindrical_reptile.png"
tags: ["Three.js", "JavaScript", "Procedural Animation", "Inverse Kinematics", "AI Movement", "WebGL", "3D Simulation"]
author: "CodewithLord"
date: "2025-12-18"
---

<br>

## 🧠 Description

<br>

This project showcases a **procedural 3D creature AI system** that moves autonomously in a virtual environment using **inverse kinematics**, **segment-based skeletal animation**, and **AI patrol logic**.  
The entire creature is built using **only cylinders**, demonstrating how complex organic motion can emerge from simple geometry.

<br>

### What Makes This Project Exceptional?

<br>

**Visual & Motion Features:**
- Fully procedural multi-legged creature
- Smooth crawling and walking animations
- Dynamic leg lifting and stepping logic
- Tail and spine follow-through motion
- Real-time shadow casting and lighting
- Auto-follow cinematic camera system

<br>

**Technical Highlights:**
- **Inverse Kinematics (IK)** for limb control
- **Segment-chain physics simulation**
- **AI-driven autonomous patrol behavior**
- **Pure cylinder geometry** (no models used)
- **Three.js scene graph mastery**
- **OrbitControls with damping**
- **Real-time performance-friendly math**

<br>

### Core Concept

<br>

The creature is composed of:
- A **head** (cylinder)
- A **spinal chain** of connected segments
- Multiple **leg systems** using IK
- A **tail** with tapering thickness
- An **AI target** it continuously patrols toward

All movement emerges from math — no keyframe animations, no external models.

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
    <title>Creepy Crawly Kinematics 2</title>
    

  </head>
    
  <body>
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cylinder Creature AI</title>
    <style>
        body { margin: 0; overflow: hidden; background-color: #050505; }
        canvas { display: block; }
        #info {
            position: absolute;
            top: 10px;
            left: 10px;
            color: #aaaaaa;
            font-family: monospace;
            pointer-events: none;
            user-select: none;
        }
        #credit {
            position: fixed;
            bottom: 1em;
            right: 1em;
            z-index: 990;
            font-family: sans-serif;
            color: white;
            font-size: 14px;
            opacity: 0.7;
            pointer-events: none;
            text-shadow: 1px 1px 2px black;
        }
    </style>
    <!-- Import Three.js and OrbitControls -->
    <script type="importmap">
      {
        "imports": {
          "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
          "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
      }
    </script>
</head>
<body>
    <div id="info">AI Patrol Mode.<br>Left Click: Rotate | Right Click: Pan | Scroll: Zoom</div>
    <div id="credit">Edit by Travon L Lawrence</div>

    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

        // --- 1. SETUP ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);
        scene.fog = new THREE.Fog(0x050505, 200, 2000);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.set(0, 600, 600);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below floor
        controls.minDistance = 100;
        controls.maxDistance = 2000;

        // Lights
        const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 2);
        dirLight.position.set(100, 500, 200);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 3000;
        dirLight.shadow.camera.left = -1000;
        dirLight.shadow.camera.right = 1000;
        dirLight.shadow.camera.top = 1000;
        dirLight.shadow.camera.bottom = -1000;
        scene.add(dirLight);

        // Floor
        const planeGeo = new THREE.PlaneGeometry(10000, 10000);
        const planeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
        const floor = new THREE.Mesh(planeGeo, planeMat);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);

        const gridHelper = new THREE.GridHelper(4000, 40, 0x333333, 0x0a0a0a);
        scene.add(gridHelper);

        // --- 2. MATERIALS & TARGET ---
        
        const bodyMat = new THREE.MeshStandardMaterial({ 
            color: 0x00ddee, 
            roughness: 0.2, 
            metalness: 0.8 
        });
        const jointMat = new THREE.MeshStandardMaterial({ 
            color: 0x222222, 
            roughness: 0.7 
        });
        const targetMat = new THREE.MeshStandardMaterial({ 
            color: 0xff0000, 
            emissive: 0xaa0000 
        });

        // Target (Cylinder per request)
        const targetGeo = new THREE.CylinderGeometry(20, 20, 10, 32);
        const targetMesh = new THREE.Mesh(targetGeo, targetMat);
        targetMesh.position.set(200, 5, 0);
        targetMesh.castShadow = true;
        scene.add(targetMesh);

        // --- 3. GEOMETRY HELPERS ---

        // Pre-rotate cylinder geometry so it points along Z-axis.
        // This makes lookAt() work correctly for connecting segments.
        const segmentGeo = new THREE.CylinderGeometry(1, 1, 1, 16);
        segmentGeo.rotateX(-Math.PI / 2); 
        segmentGeo.translate(0, 0, 0.5); // Move pivot to start of cylinder

        // Joint geometry (Cylinder used as a disc/wheel)
        const jointGeo = new THREE.CylinderGeometry(1, 1, 1, 16);

        // --- 4. PROCEDURAL CLASSES ---

        var segmentCount = 0;

        class Segment {
            constructor(parent, size, angle, range, stiffness, thickness = 5) {
                segmentCount++;
                this.isSegment = true;
                this.parent = parent; 
                if (typeof parent.children == "object") {
                    parent.children.push(this);
                }
                this.children = [];
                this.size = size;
                this.relAngle = angle;
                this.defAngle = angle;
                this.absAngle = parent.absAngle + angle;
                this.range = range;
                this.stiffness = stiffness;
                
                // Simulation Position (2D Logic)
                this.x = 0; 
                this.y = 0; 

                // --- 3D MESHES (Cylinders Only) ---
                this.group = new THREE.Group();
                scene.add(this.group);

                // The Bone (Length)
                this.bone = new THREE.Mesh(segmentGeo, bodyMat);
                this.bone.castShadow = true;
                this.bone.receiveShadow = true;
                this.group.add(this.bone);

                // The Joint (Connection point - A flat cylinder/disc)
                this.joint = new THREE.Mesh(jointGeo, jointMat);
                this.joint.rotation.z = Math.PI / 2; // Lay flat like a wheel
                this.joint.castShadow = true;
                this.joint.receiveShadow = true;
                this.group.add(this.joint);

                // Initial Size setup
                this.thickness = thickness;
                this.joint.scale.set(thickness * 0.8, thickness * 1.2, thickness * 0.8);

                this.updateRelative(false, true);
            }

            updateRelative(iter, flex) {
                this.relAngle = this.relAngle - 2 * Math.PI * Math.floor((this.relAngle - this.defAngle) / 2 / Math.PI + 1 / 2);
                if (flex) {
                    this.relAngle = Math.min(
                        this.defAngle + this.range / 2,
                        Math.max(
                            this.defAngle - this.range / 2,
                            (this.relAngle - this.defAngle) / this.stiffness + this.defAngle
                        )
                    );
                }
                this.absAngle = this.parent.absAngle + this.relAngle;
                this.x = this.parent.x + Math.cos(this.absAngle) * this.size;
                this.y = this.parent.y + Math.sin(this.absAngle) * this.size;
                
                if (iter) {
                    for (var i = 0; i < this.children.length; i++) {
                        this.children[i].updateRelative(iter, flex);
                    }
                }
            }

            updateVisuals(offsetY = 0) {
                // Map Logic (X, Y) -> 3D (X, Z)
                const startX = this.parent.x;
                const startZ = this.parent.y;
                const endX = this.x;
                const endZ = this.y;

                // Move Group to Start
                this.group.position.set(startX, offsetY, startZ);
                
                // Rotate entire group to look at End
                this.group.lookAt(endX, offsetY, endZ);

                // Stretch Bone Cylinder to fit distance
                const dist = Math.sqrt((endX - startX)**2 + (endZ - startZ)**2);
                this.bone.scale.set(this.thickness, this.thickness, dist);

                for (var i = 0; i < this.children.length; i++) {
                    this.children[i].updateVisuals(offsetY); 
                }
            }

            follow(iter) {
                var x = this.parent.x;
                var y = this.parent.y;
                var dist = ((this.x - x) ** 2 + (this.y - y) ** 2) ** 0.5;
                this.x = x + this.size * (this.x - x) / dist;
                this.y = y + this.size * (this.y - y) / dist;
                this.absAngle = Math.atan2(this.y - y, this.x - x);
                this.relAngle = this.absAngle - this.parent.absAngle;
                this.updateRelative(false, true);
                
                if (iter) {
                    for (var i = 0; i < this.children.length; i++) {
                        this.children[i].follow(true);
                    }
                }
            }
        }

        class LimbSystem {
            constructor(end, length, speed, creature) {
                this.end = end;
                this.length = Math.max(1, length);
                this.creature = creature;
                this.speed = speed;
                creature.systems.push(this);
                this.nodes = [];
                var node = end;
                for (var i = 0; i < length; i++) {
                    this.nodes.unshift(node);
                    node = node.parent;
                    if (!node.isSegment) {
                        this.length = i + 1;
                        break;
                    }
                }
                this.hip = this.nodes[0].parent;
            }

            moveTo(x, y) {
                this.nodes[0].updateRelative(true, true);
                var dist = ((x - this.end.x) ** 2 + (y - this.end.y) ** 2) ** 0.5;
                var len = Math.max(0, dist - this.speed);
                for (var i = this.nodes.length - 1; i >= 0; i--) {
                    var node = this.nodes[i];
                    var ang = Math.atan2(node.y - y, node.x - x);
                    node.x = x + len * Math.cos(ang);
                    node.y = y + len * Math.sin(ang);
                    x = node.x;
                    y = node.y;
                    len = node.size;
                }
                for (var i = 0; i < this.nodes.length; i++) {
                    var node = this.nodes[i];
                    node.absAngle = Math.atan2(node.y - node.parent.y, node.x - node.parent.x);
                    node.relAngle = node.absAngle - node.parent.absAngle;
                    for (var ii = 0; ii < node.children.length; ii++) {
                        var childNode = node.children[ii];
                        if (!this.nodes.includes(childNode)) {
                            childNode.updateRelative(true, false);
                        }
                    }
                }
            }
            update(x,y) { this.moveTo(x, y); }
        }

        class LegSystem extends LimbSystem {
            constructor(end, length, speed, creature, liftHeight = 10) {
                super(end, length, speed, creature);
                this.goalX = end.x;
                this.goalY = end.y;
                this.step = 0; 
                this.forwardness = 0;
                this.liftHeight = liftHeight; 
                this.reach = 0.9 * ((this.end.x - this.hip.x) ** 2 + (this.end.y - this.hip.y) ** 2) ** 0.5;
                var relAngle = this.creature.absAngle - Math.atan2(this.end.y - this.hip.y, this.end.x - this.hip.x);
                relAngle -= 2 * Math.PI * Math.floor(relAngle / 2 / Math.PI + 1 / 2);
                this.swing = -relAngle + (2 * (relAngle < 0) - 1) * Math.PI / 2;
                this.swingOffset = this.creature.absAngle - this.hip.absAngle;
            }

            update(x, y) {
                this.moveTo(this.goalX, this.goalY);
                let heightOffset = 0;
                // Leg Lift Logic
                if (this.step == 0) {
                    var dist = ((this.end.x - this.goalX) ** 2 + (this.end.y - this.goalY) ** 2) ** 0.5;
                    if (dist > 1) {
                        this.step = 1;
                        this.goalX = this.hip.x + this.reach * Math.cos(this.swing + this.hip.absAngle + this.swingOffset) + (2 * Math.random() - 1) * this.reach / 2;
                        this.goalY = this.hip.y + this.reach * Math.sin(this.swing + this.hip.absAngle + this.swingOffset) + (2 * Math.random() - 1) * this.reach / 2;
                    }
                } else if (this.step == 1) {
                    var theta = Math.atan2(this.end.y - this.hip.y, this.end.x - this.hip.x) - this.hip.absAngle;
                    var dist = ((this.end.x - this.hip.x) ** 2 + (this.end.y - this.hip.y) ** 2) ** 0.5;
                    var forwardness2 = dist * Math.cos(theta);
                    var dF = this.forwardness - forwardness2;
                    this.forwardness = forwardness2;
                    let distToGoal = ((this.end.x - this.goalX) ** 2 + (this.end.y - this.goalY) ** 2) ** 0.5;
                    heightOffset = Math.sin((1 - Math.min(1, distToGoal / 50)) * Math.PI) * this.liftHeight;
                    if (dF * dF < 1) {
                        this.step = 0;
                        this.goalX = this.hip.x + (this.end.x - this.hip.x);
                        this.goalY = this.hip.y + (this.end.y - this.hip.y);
                    }
                }
                // Visual Update
                for(let i=0; i<this.nodes.length; i++) {
                    let factor = (i+1) / this.nodes.length; 
                    this.nodes[i].updateVisuals(heightOffset * factor + 5); // +5 to keep off floor
                }
            }
        }

        class Creature {
            constructor(x, y, angle, fAccel, fFric, fRes, fThresh, rAccel, rFric, rRes, rThresh) {
                this.x = x; 
                this.y = y;
                this.absAngle = angle;
                this.fSpeed = 0; 
                this.fAccel = fAccel; 
                this.fFric = fFric;
                this.fRes = fRes; 
                this.fThresh = fThresh; 
                this.rSpeed = 0; 
                this.rAccel = rAccel; 
                this.rFric = rFric; 
                this.rRes = rRes; 
                this.rThresh = rThresh;
                this.children = [];
                this.systems = [];

                // 3D Head (Cylinder)
                const headGeo = new THREE.CylinderGeometry(15, 10, 30, 16);
                headGeo.rotateX(-Math.PI / 2);
                this.mesh = new THREE.Mesh(headGeo, bodyMat);
                this.mesh.castShadow = true;
                this.mesh.position.set(x, 20, y);
                scene.add(this.mesh);
            }

            follow(x, y) {
                var dist = ((this.x - x) ** 2 + (this.y - y) ** 2) ** 0.5;
                var angle = Math.atan2(y - this.y, x - this.x);
                
                // Physics
                var accel = this.fAccel;
                if (this.systems.length > 0) {
                    var sum = 0;
                    for (var i = 0; i < this.systems.length; i++) {
                        sum += this.systems[i].step == 0;
                    }
                    accel *= sum / this.systems.length;
                }
                this.fSpeed += accel * (dist > this.fThresh);
                this.fSpeed *= 1 - this.fRes;
                this.speed = Math.max(0, this.fSpeed - this.fFric);
                
                var dif = this.absAngle - angle;
                dif -= 2 * Math.PI * Math.floor(dif / (2 * Math.PI) + 1 / 2);
                if (Math.abs(dif) > this.rThresh && dist > this.fThresh) {
                    this.rSpeed -= this.rAccel * (2 * (dif > 0) - 1);
                }
                this.rSpeed *= 1 - this.rRes;
                if (Math.abs(this.rSpeed) > this.rFric) {
                    this.rSpeed -= this.rFric * (2 * (this.rSpeed > 0) - 1);
                } else {
                    this.rSpeed = 0;
                }

                this.absAngle += this.rSpeed;
                this.absAngle -= 2 * Math.PI * Math.floor(this.absAngle / (2 * Math.PI) + 1 / 2);
                this.x += this.speed * Math.cos(this.absAngle);
                this.y += this.speed * Math.sin(this.absAngle);
                
                // Update Head
                this.mesh.position.set(this.x, 20, this.y);
                this.mesh.rotation.y = -this.absAngle;

                this.absAngle += Math.PI;
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i].follow(true, true);
                    this.children[i].updateVisuals(20); // 20 units off floor
                }
                for (var i = 0; i < this.systems.length; i++) {
                    this.systems[i].update(x, y);
                }
                this.absAngle -= Math.PI;
            }
        }

        // --- 5. INITIALIZATION ---

        var critter;

        function setupLizard(size, legs, tail) {
            var s = size * 3; 
            critter = new Creature(0, 0, 0, s * 10, s * 2, 0.5, 16, 0.5, 0.085, 0.5, 0.3);
            var spinal = critter;
            
            // Neck
            for (var i = 0; i < 6; i++) {
                spinal = new Segment(spinal, s * 4, 0, 3.1415 * 2 / 3, 1.1, 12);
            }
            // Torso
            for (var i = 0; i < legs; i++) {
                if (i > 0) {
                    for (var ii = 0; ii < 6; ii++) {
                        spinal = new Segment(spinal, s * 4, 0, 1.571, 1.5, 15); // Thick body
                    }
                }
                // Legs
                for (var ii = -1; ii <= 1; ii += 2) {
                    var node = new Segment(spinal, s * 12, ii * 0.785, 0, 8, 8); 
                    node = new Segment(node, s * 16, -ii * 0.785, 6.28, 1, 6); 
                    node = new Segment(node, s * 16, ii * 1.571, 3.1415, 2, 4); 
                    new LegSystem(node, 3, s * 12, critter, 30); 
                }
            }
            // Tail
            for (var i = 0; i < tail; i++) {
                // Taper thickness
                let thick = 15 * (1 - (i/tail));
                spinal = new Segment(spinal, s * 4, 0, 3.1415 * 2 / 3, 1.1, Math.max(1, thick));
            }
        }

        // Generate
        var legNum = 4;
        setupLizard(8 / Math.sqrt(legNum), legNum, 40);

        // AI Logic
        let aiTargetX = (Math.random() - 0.5) * 2000;
        let aiTargetY = (Math.random() - 0.5) * 2000;
        let aiPauseTimer = 0;

        function animate() {
            requestAnimationFrame(animate);

            if (critter) {
                // AI Patrol
                let dx = aiTargetX - critter.x;
                let dy = aiTargetY - critter.y;
                let dist = Math.sqrt(dx*dx + dy*dy);

                if (dist < 100) {
                    if (aiPauseTimer++ > 50) {
                        aiTargetX = (Math.random() - 0.5) * 3000;
                        aiTargetY = (Math.random() - 0.5) * 3000;
                        aiPauseTimer = 0;
                    }
                }

                // Update Target Visual
                targetMesh.position.set(aiTargetX, 10, aiTargetY);
                targetMesh.rotation.y += 0.02;

                // Move Creature
                critter.follow(aiTargetX, aiTargetY);

                // Auto-Follow Camera Logic
                controls.target.set(critter.x, 0, critter.y);
            }

            controls.update();
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();

    </script>
</body>
</html>
    
  </body>
  
</html>
```

<br>

## HTML Breakdown
<br>

Document Setup

Uses ES Modules (type="module")

Import Maps for clean Three.js imports

Fullscreen canvas rendering

<br>

Overlay UI

#info → User instructions

#credit → Attribution

Pointer-events disabled for immersion

<br>
<br>

## 🎨 Step 2: CSS – Scene Presentation & UI
<br>

### CSS Responsibilities
<br>

The CSS is intentionally minimal and focuses on:

Fullscreen WebGL rendering

Immersive dark environment

Overlay UI readability

<br>

```css
body {
  margin: 0;
  overflow: hidden;
  background-color: #050505;
}

canvas {
  display: block;
}
```
<br>

Why Minimal CSS?

Performance-first approach

All visuals handled by WebGL

No layout reflows during animation

<br>
<br>

## ⚙️ Step 3: JavaScript – Procedural Animation & AI Logic
<br>

### Scene Initialization
<br>
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050505);
scene.fog = new THREE.Fog(0x050505, 200, 2000);


Fog adds depth perception

Dark palette emphasizes silhouette motion