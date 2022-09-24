// Области видимости 

var exampleName1 = 'Test1';   //Переменная созданная через var становится глобальной переменной 
let exampleName2 = 'Test2';   //Переменная созданная через let доступна только в данном сценарии 

//Функция в глобальной области видимости 
function testFunc() {           
    console.log('Test function');
}

//Для браузера глобальный обьект это window
console.log(window.exampleName1);  //глобальная переменная exampleName1 доступна как свойство обьекта window
console.log(window.exampleName2);  //переменная exampleName2, созданная через let, не глобальная, и не доступна через свойтсво window
console.log(exampleName2);

window.testFunc(); //Функция testFunc глобальная, ее можно вызвать на глобальном обьекте 
testFunc();

window.alert('Hello'); //любую глобальную функцию можно вызвать на глобальном обьекте
alert('World');