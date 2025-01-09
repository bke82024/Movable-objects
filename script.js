const square = document.getElementById("square");
window.addEventListener("keydown", (input) => {
  switch (input.key) {
    case "ArrowDown":
      square.style.transform = changePosition(x, (y += 10));
      break;

    case "ArrowRight":
      square.style.transform = changePosition((x += 10), y);
      break;
    case "ArrowLeft":
      square.style.transform = changePosition((x -= 10), y);
      break;

    case "ArrowUp":
      square.style.transform = changePosition(x, (y -= 10));
      break;
    default:
      break;
  }
});

function changePosition(x, y) {
  return `translate(${x}px, ${y}px)`;
}

let x = 0;
let y = 0;
