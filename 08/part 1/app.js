let divArray = document.querySelectorAll("div");
divArray.forEach(div => {
    div.addEventListener('click', handlerOnCapture, true);  //обработка события на фазе погружения
    div.addEventListener('click', handlerOnBubble)   //обрааботка события на фазе всплытия 
})

function handlerOnCapture() {
    alert('Фаза 1 (capture)' + this.id)
}
function handlerOnBubble() {
    alert('Фаза 3 (bubble)' + this.id)
}