//Создание узлов 
let divElement = document.createElement("div");         //создание HTML элемента <div></div>
let divText = document.createTextNode("Hello World");   //создание текстового узла "Hello World"

//созданные узлы не будут видимы пользователю, пока не станут частью DOM, который в данный момент отображает страница

//добавление созданных узлов на страницу 
divElement.append(divText);       //помещаем текстовый узел в HTML элемент. Метод append добавляет узел как последний дочерний узел 
document.body.append(divElement); //добавляем HTML элемент (в котором находится текстовый узел) в конец документа 



let div1 = document.createElement('div');
div1.textContent = 'Hello world 1';
div1.className = 'inserted-div'

let div2 = document.createElement('div');
div2.textContent = 'Hello world 2';
div2.className = 'inserted-div'

let div3 = document.createElement('div');
div3.textContent = 'Hello world 3';
div3.className = 'inserted-div'

let div4 = document.createElement('div');
div4.textContent = 'Hello world 4';
div4.className = 'inserted-div'

let container = document.querySelector('#container')

container.before(div1);   //вставить перед указанным элементом (prev sibling)
container.prepend(div2);  //вставить как первый дочерний элемент
container.append(div3);   //вставить как последний дочерний элемент 
container.after(div4);    //вставить после указанного элемента (next sibling)



let div = document.querySelector('#element');

div.insertAdjacentHTML("beforebegin", "<span>Insert before</span>") //insertAdjacentHTML позволяет добавить текст как HTML разметку 
div.after("<span>Insert after</span>")  //метод append/before/after/prepend строковыые значение  добавляют как текст, а не как HTML разметку

//Возможные значения для первого аргумента insertAdjacentHTML 
// beforebegin - перед открывающим элементом
// afterbegin - после открывающего элементом 
// beforeend - перед закрывающим элементом
// afterend - после закрывающего элемента 


