//static method

class MyClass {
    property1;

    constructor(value) {
        this.property1 = value;
    }

    //метод находится в прототипе и доступен на каждом экземпляре
    method1() {
        console.log('Не статический метод' + this.property1)
    }

    //Статистический метод, находится в классе (пренадлежит функции конструктору )
    static method2() {
        console.log('Статический метод' + this.property1)
    }
}

let m1 = new MyClass(10)
let m2 = new MyClass(20)

m1.method1();
m2.method1();

/*выведет значение undefined, потому что данный метод находится в функции конструктор, 
и это означает что this указывает на эту фукнцию, а у нашего конструктора нету свойства property1*/
MyClass.method2(); 