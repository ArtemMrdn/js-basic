// getter
class Rect {
    constructor(width, height) {
        this._width = width;  //закрытое свойство width с помощью _
        this._height = height
    }

    //getter - синтаксис, связывающий свойство обьекта с методом
    //при обращении obj.width будет вызвана функция get width()
    get width() {
        console.log('get width');
        return this._width;
    }

    get height() {
        console.log('get height');
        return this._height
    }

    get area() {
        console.log('get area');
        return this.width + this.height;   // использование getter
    }
}

let r1 = new Rect(10, 15);

console.log('width' + r1.width);  // при обращении к свойству width происходит вызов getter c 10 строчки
console.log('height' + r1.height);
console.log('area' + r1.area); /*при последнем вызове результат будет выведение всех геттеров, 
потому что в area есть this.width/this.height и это работает как обращение к геттеру, и вызывает еще раз консоль лог*/