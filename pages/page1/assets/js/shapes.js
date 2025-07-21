document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".floating-shapes");

  if (!container) return;

  const shapeCount = 40;

  for (let i = 0; i < shapeCount; i++) {
    const shape = document.createElement("div");
    shape.classList.add("shape");

    // Spread them horizontally
    shape.style.left = `${Math.random() * 100}%`;

    // Randomize vertical start (50–90%)
    shape.style.top = `${50 + Math.random() * 40}%`;

    // Random size
    const scale = 1 + Math.random() * 2;
    shape.style.transform = `scale(${scale})`;

    // Desync animation
    shape.style.animationDuration = `${8 + Math.random() * 6}s`;
    shape.style.animationDelay = `${Math.random() * 10}s`;

    container.appendChild(shape);
  }

  const baseSize = 20 + Math.random() * 30; // Between 20 and 50
shape.style.borderLeft = `${baseSize}px solid transparent`;
shape.style.borderRight = `${baseSize}px solid transparent`;
shape.style.borderBottom = `${baseSize * 1.7}px solid rgba(0, 0, 0, 0.2)`; // height
});