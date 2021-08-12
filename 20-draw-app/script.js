const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const colorEl = document.querySelector("#color");
const clearEl = document.querySelector("#clear");
const sizeEl = document.querySelector("#size");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  console.log(isPressed, x, y);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  console.log(isPressed, x, y);
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
    console.log(x2, y2);
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

colorEl.addEventListener("change", (e) => (color = e.target.value));
increaseBtn.addEventListener("click", (e) => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));
decreaseBtn.addEventListener("click", (e) => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

clearEl.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
