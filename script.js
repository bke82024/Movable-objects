const square = document.getElementById("square");
const moveAmount = 10;
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
