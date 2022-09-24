//находим все кнопки
let buttons = document.querySelectorAll('button')

//устанавливаем для всех кнопок одну и ту же функцию (clickHandler) в качестве обработчика события click
buttons.forEach(btn => {
    btn.addEventListener("click", clickHandler);
});

function clickHandler() {
    alert(this.textContent)    // this - указывает на ту кнопку, для которой обрабатывается в данный момент событие.
}