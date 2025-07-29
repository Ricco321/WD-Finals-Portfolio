const canvas = document.getElementById("waves-canvas");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function drawWaves() {
  ctx.clearRect(0, 0, width, height);

  const waveCount = 3;
  for (let j = 0; j < waveCount; j++) {
    const color = `rgba(0, 150, 255, ${0.2 + j * 0.1})`;
    ctx.beginPath();
    for (let i = 0; i < width; i++) {
      const y =
        height / 2 +
        Math.sin(i * 0.01 + t + j) * (10 + j * 10) +
        Math.sin(i * 0.02 + t * 0.8 + j) * (5 + j * 5);
      if (i === 0) ctx.moveTo(i, y);
      else ctx.lineTo(i, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  t += 0.02;
  requestAnimationFrame(drawWaves);
}

drawWaves();