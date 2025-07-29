const canvas = document.getElementById('bubble-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Bubble {
  constructor() {
    this.x = random(0, canvas.width);
    this.y = canvas.height + random(0, 100); // start off-screen
    this.radius = random(2, 8);
    this.speed = random(1, 3);
    this.opacity = random(0.4, 1);
  }

  update() {
    this.y -= this.speed;
    this.opacity -= 0.002;
    if (this.opacity <= 0) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }

  reset() {
    this.x = random(0, canvas.width);
    this.y = canvas.height + random(0, 100);
    this.radius = random(2, 8);
    this.speed = random(1, 3);
    this.opacity = random(0.4, 1);
  }
}

function initBubbles(count) {
  for (let i = 0; i < count; i++) {
    bubbles.push(new Bubble());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    bubble.update();
    bubble.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start animation
initBubbles(100); // adjust number of bubbles
animate();