const canvas = document.getElementById("blob-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blobs = [];

for (let i = 0; i < 20; i++) {
  blobs.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 60 + Math.random() * 60,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 - 1,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let blob of blobs) {
    ctx.beginPath();
    ctx.fillStyle = blob.color;
    ctx.globalAlpha = 0.5;
    ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
    ctx.fill();

    blob.x += blob.dx;
    blob.y += blob.dy;

    if (blob.x + blob.radius > canvas.width || blob.x - blob.radius < 0) blob.dx *= -1;
    if (blob.y + blob.radius > canvas.height || blob.y - blob.radius < 0) blob.dy *= -1;
  }
  requestAnimationFrame(animate);
}

animate();