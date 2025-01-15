const square = document.getElementById("square");
const canvas = document.getElementById("canvas");
const moveAmount = 20;
let x = 0;
let y = 0;

window.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
  }
  event.preventDefault();

  switch (event.key) {
    case "ArrowUp":
      y -= moveAmount;
      break;
    case "ArrowDown":
      y += moveAmount;
      break;
    case "ArrowLeft":
      x -= moveAmount;
      break;
    case "ArrowRight":
      x += moveAmount;
      break;
  }

  square.style.top = `${y}px`;
  square.style.left = `${x}px`;
});
const movable = document.getElementById("square");

window.addEventListener("click", (event) => {
  const x = event.clientX - movable.offsetWidth / 2;
  const y = event.clientY - movable.offsetHeight / 2;
  movable.style.left = `${x}px`;
  movable.style.top = `${y}px`;
});
