const movable = document.getElementById("square");
const canvas = document.getElementById("canvas");
const moveAmount = 20;
const size = 100;
movable.style.width = `${size}px`;
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
const pos = { x: 0, y: 0 };

const transformMovable = () => {
  movable.style.transform = `translate(${pos.x}px,${pos.y}px)`;
};

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  switch (event.key) {
    case "ArrowUp":
      pos.y -= moveAmount;
      collCheck();
      transformMovable();
      break;
    case "ArrowDown":
      pos.y += moveAmount;
      collCheck();
      transformMovable();
      break;
    case "ArrowLeft":
      pos.x -= moveAmount;
      collCheck();
      transformMovable();
      break;
    case "ArrowRight":
      pos.x += moveAmount;
      collCheck();
      transformMovable();
      break;
  }
});

canvas.addEventListener("click", (event) => {
  pos.x = event.clientX - size / 2;
  pos.y = event.clientY - size / 2;
  collCheck();
  transformMovable();
});

function collCheck() {
  if (pos.x < 0) pos.x = 0;
  if (pos.y < 0) pos.y = 0;
  if (pos.x > canvas.offsetWidth - size) pos.x = canvas.offsetWidth - size;
  if (pos.y > canvas.offsetHeight - size) pos.y = canvas.offsetHeight - size;

  transformMovable();
}
