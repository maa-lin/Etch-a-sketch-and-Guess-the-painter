# Etch-a-sketch and Guess the painter

## Description

- **Etch-a-sketch:** Hover over the field to "paint" squares in random colors.
- **Guess the painter**: Hover over the field to gradually reveal a painting. Try to guess the painter before seeing the entire painting! To try this you need to uncomment/comment out some things in the code:
  - Comment out getInput-function on line 7 and `const size = getInput();` on line 16.
  - Uncomment `const size = 25;` on line 17.
  - Uncomment `container.style.backgroundImage = randomImg();` on line 31.
  - Comment out `square.style.backgroundColor = randomColor();` on line 49.
  - Change `0) + 0.3` at the end of line 50 to `1) - 0.3`.
  - Uncomment randomImg-function on line 67.

## Installation

This is a Vite-project, you need to have Node.js (https://nodejs.org/en) installed on your computer.

**In a terminal:**

1. `git clone https://github.com/maa-lin/Etch-a-sketch-and-Guess-the-painter.git`
2. `cd Etch-a-sketch-and-Guess-the-painter`
3. `npm install`
4. `npm run dev` (Once the server is running, you should see a clickable URL in your terminal)
