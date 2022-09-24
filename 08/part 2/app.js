let divArray = document.querySelectorAll("div");
divArray.forEach(div => {
    div.addEventListener('click', handler);  
})

/*  
event.target.id - элемент который инициировал событие (обьект event хранит тот элемент из-за которого события произошло)
this - элемент для которого срабатывает событие (оно всегда указывает на тот элемент для которого производится обработка СЕЙЧАС)
*/
function handler(event) {
    alert(`this.id = ${this.id} event.target.id = ${event.target.id}`)
}