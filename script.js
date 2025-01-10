const square = document.getElementById("square");
const objWidth = square.offsetWidth;
const objHeight = square.offsetHeight;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const mousePos = window.mousePos;

let x = 0;
let y = 0;

window.addEventListener("keydown", (input) => {
  switch (input.key) {
    case "ArrowDown":
      if (x + 10 <= screenWidth)
        square.style.transform = changePosition(x, (y += 10));
      break;

    case "ArrowRight":
      if (x + 10 <= screenWidth)
        square.style.transform = changePosition((x += 10), y);

      break;
    case "ArrowLeft":
      if (x - 10 >= -10) square.style.transform = changePosition((x -= 10), y);
      break;

    case "ArrowUp":
      if (y - 10 >= -10) square.style.transform = changePosition(x, (y -= 10));
      break;

    default:
      break;
  }
});

window.addEventListener("click", (click) => {});

function changePosition(x, y) {
  return `translate(${x}px, ${y}px)`;
}
