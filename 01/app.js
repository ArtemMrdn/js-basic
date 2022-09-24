// DOM - обьектная модель документа, которая строится на основе HTML кода 
//document - обьект, который позволяет получить доступ к DOM 

/* Поиск элементов
querySelectorAll - поиск всех элементов, подходящих под CSS селектор
querySelector - поиск первого элемента по CSS селектору
Различие в том что querySelectorAll возвращает массив элементов который подходят под СSS селектор, 
querySelector возвращает только первый элемент по запросу который вы отправляли */

let paragraph = document.querySelector('#first') //находим элемент по id first 
paragraph.style.border = '2px solid red'


let link = document.querySelector('a[href="https://itvdn.com/ru"]'); //находим элемент а с атрибутом href со значением https://itvdn.com/r
link.style.border = '2px solid yellow';

let unorderedList = document.querySelector('.my-list'); //находим первый элемент с атрибутом class="my-list"
unorderedList.style.border = '2px solid green';

let article = document.querySelector('article'); //находим первый элемент article в документе 
article.style.border = '2px solid blue'


let listItems = document.querySelectorAll("li"); //возвращает коллекция(массив) элементов, подходящих под CSS селектор. Находим все элементы li
for(const item of listItems){
    item.style.margin = '2px';
    item.style.border = '1px solid red'
}

//closest - выполняет поиск ближайшего родительского элемента, соответсвующего CSS селектору, если родительский элемент не найден возвращает null
let block = document.querySelector('#closeBtn').closest('.block'); //находим элемент по id, вызываем ближайший элемент с классом block, он поднимается вверх под ДОМ дереву.
block.style.border = "2px solid red";

let element = document.querySelector('#closeBtn').closest('.foo'); //такой класс не найден
console.log(element) //если класс не найден - возвращает null