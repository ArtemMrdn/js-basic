// Наследование
class Animal {  //Базовый класс Animal
    sleep() {
        console.log('Животное спит');
    }
    eat() {
        console.log('Животное есть')
    }
}

/* 
Производный класс Dog.
Класс Dog расширяет класс Animal.
Класс Dog наследуется от класса Animal, это означает, что методы и свойтсва в классе Animal будут доступны в классе Dog, 
при этом дочерний класс Dog может заместить работу методов, которые получены по наследству, а также добавить свои методы   */
class Dog extends Animal {
    eat() {
        console.log('Животное есть мясо')
    }
}

//Класс Cow расширяет класс Animal
class Cow extends Animal {            //extends наследование, расширение 
    eat() {
        console.log('Животное ест траву')
    }
}

let a1 = new Dow();
let a2 = new Cow();

a1.eat();
a1.sleep();

console.log('---------');

a2.eat();
a2.sleep();

console.log('---------');

/*создание массива обьектов которые были наследованы от класса Animal, мы можем расширять массив 
добавляя в него элементы, и добавлять такие элементы которыые наследовались от класса Animal */
let animals = [new Dog(), new Cow()]; 
    animals.forEach(animal => {     
    animal.eat();
    animal.sleep();
})