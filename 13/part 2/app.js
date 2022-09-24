// Смена контекста, apply, call

let obj1 = {
    prop1: 123,
    prop2: 'Test 1',
}

let obj2 = {
    prop1: 123,
    prop2: 'Test 2',
}

function show() {
    console.log(this.prop1);
    console.log(this.prop2);
}
show(); //Контекст функции - глобальный обьект 

//apply и call - методы для запуска выбранной функции с приминением укзанного контекста
show.apply(obj1);  //контекст вызываемой функции - obj1
show.call(obj2);   //контекст вызываемой функции - obj2

let newFunction = show.bind(obj1); //создаем новую функцию, привязываем к ней в качестве контекста obj1
newFunction()



//Пример

let objDiv = {
    props1: 'Hello',
    props2: 'World',
}

function showDiv(elementSelector, color) {
    let element = document.querySelector(elementSelector);
    element.style.color = color;
    element.innerHTML += this.props1 + " ";
    element.innerHTML += this.props2;
}

showDiv.apply(objDiv, ['#elem1', 'red'])  //параметры передаются массивом
showDiv.call(objDiv, '#elem2', 'green')   //параметры передаются по отдельности 

let f = showDiv.bind(objDiv, '#elem3', 'blue') //параметры могут быть привязаны к создаваемой функции вместе с контекстом
f();