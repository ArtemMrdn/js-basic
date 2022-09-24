//onclick - атрибут, через который задается обработчик события click. В качестве значения данного атрибута используется JS код, который выполнится при возникновении события
/*
let div = document.querySelector('#my-div');

div.onclick = showMessage;

function showMessage() {
    alert('Сработал обработчик события, установленный через свойство')
}
*/

//Для получения введеного значение используем свойство value
//получение кнопок
let addBtn = document.querySelector("#add-btn");
let remBtn = document.querySelector("#rem-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");

//установка обработчиков на событие click по кнопкам
addBtn.onclick = add;
remBtn.onclick = rem;
mulBtn.onclick = mul;
divBtn.onclick = div;

function add() {
    alert(Number(input1.value) + Number(input2.value))
}

function rem() {
    alert(input1.value - input2.value)
}

function mul() {
    alert(input1.value * input2.value)
}

function div() {
    alert(input1.value / input2.value)
}