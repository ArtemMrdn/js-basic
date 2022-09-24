//Классы - шаблон для создания обьект. Содержит данные и методы которые должны эти данные обрабатывать
//В начале необходимо обьявить класс, а уже после пользоваться им
class Rect {
    //Конструктор - инициализирует экземпляр класса Rect, представляет обычную функцию - конструктор 
    constructor(width, height) {
        this.width = width;  //создание свойства width
        this.height = height
    }
    // метод будет добавлен в прототип Rect.prototype
    getArea() {
        return this.height * this.width
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2
    }
}

let r1 = new Rect(10, 15);
let r2 = new Rect(15, 10);

console.log('r1 area = ' + r1.getArea());
console.log('r1 perimeter' + r1.getPerimeter());

console.log('r2 area = ' + r2.getArea());
console.log('r2 perimeter' + r2.getPerimeter());



/*class expression  - можно передать в качестве значения в другую часть кода
let Rect = class {
    constructor(width, height) {
        this.width = width;  
        this.height = height
    }

    getArea() {
        return this.height * this.width
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2
    }
}

let r1 = new Rect(10, 15);
let r2 = new Rect(15, 10);

console.log('r1 area = ' + r1.getArea());
console.log('r1 perimeter' + r1.getPerimeter());

console.log('r2 area = ' + r2.getArea());
console.log('r2 perimeter' + r2.getPerimeter());
*/


