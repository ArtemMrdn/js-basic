//Замыкание/Closure - это функция и лексическое окружение, в котором эта функция была создана
//Пример 1
function calculate(x) {      //х находится в лексическом окружении создаваемом при вызове calculate

    //вложенная функция
    function increment1() {   
        return x + 1;        // переменная х будет взята с лексического окружения внешней функции
    }
    console.log(increment1());
}

calculate(1);
calculate(10);



//Пример 2

function makeCounter() {
    let counter = 0;

    function increment() {    //функция определена в лексическом окружении, которое было создано при запуске makeCounter 
        return counter += 1;
    }

    return increment;       //функция содержит ссылку на лексическое окружение, в котором она была создана
};

/*
Так как, при каждом вызову makeCounter создается новое лексическое окружение 
замыкания, сохраненные в переменных counter1 и counter2, буду работать с двумя 
независимыми переменными counter, расположенны в разных лексических окружениях 
 */


let counter1 = makeCounter();  //возвращает замыкание
let counter2 = makeCounter();  //возвращает замыкание

console.log('counter1')

console.log(counter1()) 
console.log(counter1())
console.log(counter1())
console.log(counter1())

console.log('counter2')

console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(counter2())
