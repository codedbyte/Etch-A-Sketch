# Etch-a-Sketch Grid Project 🎨

This project is a simple **Etch-a-Sketch–style drawing pad** built with **HTML, CSS, and JavaScript**.  
The goal was to practice **DOM manipulation** and **Flexbox** layout techniques by dynamically creating and styling a grid of squares that respond to user interaction.

---

## 🚀 Features

- **Dynamic Grid Creation**  
  - Default grid: `16 x 16` squares.  
  - Squares are generated **via JavaScript** (not hardcoded in HTML).  

- **Hover Drawing Effect**  
  - Move your mouse across squares to "draw."  
  - Squares change color on hover, leaving a pixelated trail.  

- **Customizable Grid Size**  
  - A button allows users to input a new grid size (up to `100 x 100`).  
  - The grid regenerates while maintaining a fixed container size (`960px` wide).  

- **Responsive Layout with Flexbox**  
  - Flexbox is used to keep squares evenly aligned.  
  - No CSS Grid was used (per project requirements).  

- **Developer Debugging Tips**  
  - Use browser dev tools (`console`, `elements` tab, etc.) to troubleshoot grid generation.  
  - Helpful `console.log` statements included for debugging.  

---

## ✨ Extra Credit (Optional Enhancements)

- **Randomized Colors**  
  - Each hover generates a random RGB color for the square.  

- **Progressive Darkening**  
  - Each interaction with a square increases its darkness by `10%`.  
  - After 10 hovers, the square becomes fully black (or fully colored).  

---

## 📂 Project Structure

```plaintext
.
├── index.html   # Base HTML with container + button
├── style.css    # Flexbox layout + styling
└── script.js    # Grid generation + hover effects + input handling
