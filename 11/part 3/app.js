// setter
class Rect {
    constructor(width, height) {
        this._width = width;  //закрытое свойство width с помощью _
        this._height = height;
    }

    get width() {
        return this._width;
    }

    //setter - синтактис связывающий свойство обьекта с функцией 
    //setter вызывается во время присвоения значения свойству 
    //присваемое значение попадает в качестве значения параметра setter
    set width(value) {
       this._width = value;
    }

    get height() {
        return this._height
    }

    set height(value) {
       this._height = value;
    }

    get area() {
        return this.width + this.height;   // использование getter
    }
}

let r1 = new Rect(10, 15);

r1.width = 30; //через свойства width меняем высоту, (вызывается setter на 15й строке)
r1.height = 30; //через свойства height меняем высоту, (вызывается setter на 15й строке)

console.log('width' + r1.width);  
console.log('height' + r1.height);
console.log('area' + r1.area); 