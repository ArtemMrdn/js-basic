//свойства и атрибуты
let divElem = document.querySelector('div');    

console.log(divElem.dataset.name); // чтение значения атрибута data-name
console.log(divElem.dataset.customValue); //чтение значение атрибута data-custom-value

divElem.dataset.name = 'new'  //смена значения атрибута data-name
console.log(divElem.dataset.name);