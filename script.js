const movable = document.getElementById("square");
const canvas = document.getElementById("canvas");
const moveAmount = 20;
const move = () => {
  return { x: 0, y: 0 };
};
const pos = move();
window.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        pos.y -= moveAmount;
        move();
        break;
      case "ArrowDown":
        pos.y += moveAmount;
        break;
      case "ArrowLeft":
        pos.x -= moveAmount;
        break;
      case "ArrowRight":
        pos.x += moveAmount;
        break;
    }

    movable.style.top = `${pos.y}px`;
    movable.style.left = `${pos.x}px`;
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
