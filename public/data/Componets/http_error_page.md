---
title: "Code-Style 404 Error Page with Typing Animation Using HTML, CSS & JavaScript"
description: "This project showcases a creative 404 error page designed to look like a code editor or console output, built using HTML, CSS, and JavaScript."
image: "/Assets/data/images/http_error_page.png"
tags: ["HTML", "CSS", "JavaScript", "SVG Animation"]
---



## 🧠 Description
This project showcases a creative 404 error page designed to look like a code editor or console output, built using HTML, CSS, and JavaScript.
The page humorously displays an error message in the form of code syntax, giving it a developer-themed look — perfect for portfolios or tech-related websites.
A smooth typing animation simulates the code being typed line-by-line, enhancing interactivity and engagement.
The combination of monospace fonts, syntax highlighting, and animation makes it a visually appealing and modern 404 error design.


<br>



## 💻 HTML Code
<br>


```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Code-Theme 404 Page</title>
    <link rel="stylesheet" href="./style.css">

  </head>
    
  <body>
  <p>HTTP: <span>404</span></p>
<code><span>this_page</span>.<em>not_found</em> = true;</code>
<code><span>if</span> (<b>you_spelt_it_wrong</b>) {<span>try_again()</span>;}</code>
<code><span>else if (<b>we_screwed_up</b>)</span> {<em>alert</em>(<i>"We're really sorry about that."</i>); <span>window</span>.<em>location</em> = home;}</code>
<center><a>HOME</a></center>
    <script  src="./script.js"></script>

  </body>
  
</html>

```


The HTML provides the base structure of the 404 error page.

The "p" tag displays the main error message: HTTP: 404.

Multiple "code" elements mimic programming code lines, such as variable declarations and conditional statements, to give a developer-console vibe.

Syntax-like elements such as "span," "em", "b", and "i "are used to represent keywords, variables, and strings — styled differently using CSS for code highlighting.

A "center HOME center" element acts as a navigation link back to the homepage.

The HTML structure is minimal and relies on CSS and JavaScript for styling and animation effects.
<br>


## CSS Code
<br>


```css
@import url("https://fonts.googleapis.com/css?family=Bevan");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #282828;
  overflow: hidden;
}

p {
  font-family: "Bevan", cursive;
  font-size: 130px;
  margin: 10vh 0 0;
  text-align: center;
  letter-spacing: 5px;
  background-color: black;
  color: transparent;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
p span {
  font-size: 1.2em;
}

code {
  color: #bdbdbd;
  text-align: center;
  display: block;
  font-size: 16px;
  margin: 0 30px 25px;
}
code span {
  color: #f0c674;
}
code i {
  color: #b5bd68;
}
code em {
  color: #b294bb;
  font-style: unset;
}
code b {
  color: #81a2be;
  font-weight: 500;
}

a {
  color: #8abeb7;
  font-family: monospace;
  font-size: 20px;
  text-decoration: underline;
  margin-top: 10px;
  display: inline-block;
}

@media screen and (max-width: 880px) {
  p {
    font-size: 14vw;
  }
}
```
<br>


The CSS styles the page to resemble a dark code editor with syntax highlighting.

The body background is set to a dark gray #282828, matching the look of coding terminals.

The p tag (HTTP 404 message) uses a large bold Bevan font and a text shadow to give a glowing, embossed text effect.

The code tags display code lines in a monospaced font, with different colors for syntax elements:

span for yellow keywords

em for purple functions

i for green text

b for blue variables

The “HOME” link is styled with a light blue color and monospace font to blend with the code theme.

Responsive design ensures the text scales properly on smaller screens.
Overall, the CSS turns a standard 404 message into a beautifully coded aesthetic.


<br>


## Javascipt Code
<br>


```javascript
function type(n, t) {
    var str = document.getElementsByTagName("code")[n].innerHTML.toString();
    var i = 0;
    document.getElementsByTagName("code")[n].innerHTML = "";

    setTimeout(function() {
        var se = setInterval(function() {
            i++;
            document.getElementsByTagName("code")[n].innerHTML =
                str.slice(0, i) + "|";
            if (i == str.length) {
                clearInterval(se);
                document.getElementsByTagName("code")[n].innerHTML = str;
            }
        }, 10);
    }, t);
}

type(0, 0);
type(1, 600);
type(2, 1300);

```
<br>


The JavaScript adds the typing animation effect to the (code) elements.

The type() function takes two parameters:

n: which line of code to animate

t: the delay before animation starts

It retrieves the content of a specific (code) tag, clears it, and then uses setInterval to gradually reveal each character one by one — creating a typewriter animation.

Once typing is complete, it removes the blinking cursor (“|”) and displays the full line.

The function is called three times with different delays (0ms, 600ms, 1300ms) to make each code line appear sequentially.
This creates a realistic typing effect, giving the illusion that the code is being written live on the screen.