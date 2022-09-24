//Event - интерфейс(набор свойств и методов) который предостовляет событие возникшее в DOM 

let div = document.querySelector('#testDiv')

div.addEventListener('mouseover', mouseOverHandler);    //курсор попал в div
div.addEventListener('mouseout', mouseOutHandler);      //курсор вышел за пределы div
div.addEventListener('mousemove', mouseMoveHandler);    //курсор перемещается по div

function mouseOverHandler() {
    div.style.background = 'green';
}

function mouseOutHandler() {
    div.style.background = 'orange';
}

function mouseMoveHandler(e) {
    let message = `X:${e.clientX}; Y:${e.clientY}`
    div.textContent = message;
}