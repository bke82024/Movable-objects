const movable = document.getElementById("square");
const canvas = document.getElementById("canvas");
const moveAmount = 20;
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
const pos = { x: 0, y: 0 };

const transformMovable = () => {
  movable.style.transform = `translate(${pos.x}px,${pos.y}px)`;
};

window.addEventListener("keydown", (event) => {
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

window.addEventListener("click", (event) => {
  const x = event.clientX - movable.offsetWidth / 2;
  const y = event.clientY - movable.offsetHeight / 2;
  pos.x = x;
  pos.y = y;
  movable.style.left = `${x}px`;
  movable.style.top = `${y}px`;
});

function collCheck() {
  if (pos.x < 0) pos.x = 0;
  if (pos.y < 0) pos.y = 0;
  if (pos.x > "???") pos.x = "????";
  if (pos.y > "???") pos.y = "????";

  transformMovable();
}
