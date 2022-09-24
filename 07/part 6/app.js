//передвигаем квадрат стрелками
let div = document.querySelector("#element");
let distance = 10;

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowLeft":
      moveLeft(div, distance);
      break;
    case "ArrowRight":
      moveRight(div, distance);
      break;
    case "ArrowUp":
      moveUp(div, distance);
      break;
    case "ArrowDown":
      moveDown(div, distance);
      break;
  }
});

function moveUp(element, distance) {
  let top = getComputedStyle(element).top; // 10px
  element.style.top = parseInt(top) - distance + "px";
}

function moveDown(element, distance) {
  let top = getComputedStyle(element).top;
  element.style.top = parseInt(top) + distance + "px";
}

function moveLeft(element, distance) {
  let left = getComputedStyle(element).left;
  element.style.left = parseInt(left) - distance + "px";
}

function moveRight(element, distance) {
  let left = getComputedStyle(element).left;
  element.style.left = parseInt(left) + distance + "px";
}
