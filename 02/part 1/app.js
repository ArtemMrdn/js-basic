//навигация по DOM элементами 

let node = document.querySelector("p");

console.log('nodeType = ' + node.nodeType);      //тип узла
console.log('innerHTML = ' + node.innerHTML);    //содержимое узла как HTML
console.log('outerHTML = ' + node.outerHTML);    //содержимое узла и сам узел
console.log('textContent = '+ node.textContent); //содержимое узла как текст
console.log('hidden = ' + node.hidden);          //видимость узла 

//Использование innerHTML
let x = prompt('Введите первое число');
let y = prompt('Введите второе число');
let result;
let outputDiv = document.querySelector('#output');

if(y != 0) {
    result = x / y;
    outputDiv.innerHTML = `<b>${result}</b>`;

} else {
    outputDiv.innerHTML = '<b style = "color: red">Деление на 0</b>'
}

//Использование outerHTML
let nodeJS = document.querySelector('#test');
nodeJS.outerHTML = '<div>Hello World</div>'; //первый элемент p, превратился в div с текстом Hello World



//узлы DOM дерева
let e = document.querySelector('#elem');

e.parentElement.style.border = '2px solid red';

e.nextElementSibling.style.border = '2px solid green'
e.previousElementSibling.style.border = '2px solid yellow'

for(const node3 of e.children) {
    node3.style.border = '2px solid orange'
}