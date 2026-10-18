# Assignment 5: JavaScript Basics

Adilzhan Kuandykov · SE-2526

A small website for practicing JavaScript, DOM manipulation and events. It uses plain HTML, CSS and JavaScript with no libraries or build tools.

[Open the website](https://adilzhandev.github.io/AITU-WT-A5/)

## Run locally

Open `index.html` in a browser. No installation is needed.

Alternatively, run a local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Pages

The navigation bar connects all four pages.

| Page | Tasks | JavaScript file |
| --- | --- | --- |
| `index.html` | 0–1: alert, variables, arithmetic and string concatenation | `basics.js` |
| `dom.html` | 2–4: change text and styles, add and remove list items | `dom.js` |
| `events.html` | 5–7: mouse events, keyboard events and calculator | `events.js` |
| `todo.html` | 8: add, complete and delete tasks | `todo.js` |

`style.css` contains the shared styles.

## How to use

- On Basics, close the greeting to see the variable values, arithmetic results and joined string. The same results are printed in Developer Tools → Console. Show Greeting opens the alert again.
- On DOM, use the buttons to change the paragraph and box, then add or remove list items.
- On Events, move the mouse over the box, type into the text field and try the four calculator operations. Division by zero displays an error.
- On To-Do List, enter a task and click Add Task or press Enter. Use its checkbox to mark it as completed, or Delete to remove it. Blank tasks are rejected.

Tasks are stored in the `tasks` array. Reloading or leaving the page clears them; there is no database or local storage.

## GitHub Pages

The site is published from the root of the `main` branch. `.nojekyll` keeps the files served as a plain static website.
