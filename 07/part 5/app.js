//Тащим квадрат захватом мышки
let div = document.querySelector("#testDiv");
let move = false;
let offsetX, offsetY;

// при нажатии на div запоминаем отступ от курсора до левого верхнего угла div
div.addEventListener("mousedown", function (e) {
    move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

/* отлеживаем движение мыши по поверхности документа и перемещаем div
с учетом сохраненных отступов в момент нажатия левой клавиши мыши.
div перемещается только если переменная move == true */
document.addEventListener("mousemove", function (e) {
    if (move) {
        div.style.top = e.clientY - offsetY + "px";
        div.style.left = e.clientX - offsetX + "px";
    }
});

// в момент, когда клавиша отпускается прекращаем перемещение div
document.addEventListener("mouseup", function (e) {
    move = false;
});