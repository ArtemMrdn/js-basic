//this - ключевое слово, определяющие контекст выполнения кода. Указывает на обьект, которому пренадлежит выполняемый код.

//функция определена в глобальной области видимости
function test() {
    console.log(this); //this указывает на Window, если бы был 'use strict', вернется значение undefined 
}
test();


let obj1 = {
    name: 'Test 1',
    //Функция находится в обьекте, контекст указывает на этот обьект
    printContextValue: function () {
        console.log(this)
    }
}

let obj2 = {
    name: 'Test 2',
}

let obj3 = new Object()
obj3.name = 'Test 3';

//копируем функцию из obj1 в obj2, obj3, одна и та же функция будет срабатывать, но с разным контекстом.
obj2.printContextValue() = obj1.printContextValue();
obj3.printContextValue() = obj1.printContextValue();

obj1.printContextValue();
obj2.printContextValue();
obj3.printContextValue();