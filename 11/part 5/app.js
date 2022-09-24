/*работа с закрыытыми полями #  -  закрытое поле можно использовать только в классе, можно поменять в 
теле класса и его нельзя изменить за пределами класс
 */
class Rect {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;  //закрытое свойство width с помощью _
        this.#height = height;
    }

    get width() {
        if(this.#width === undefined){
            this.#width = 0;
        }
        return this.#width;
    }

    
    set width(value) {
        if(value < 0) {
            alert('Значения для width не может быть меньше чем 0')
        } else{
            this.#width = width;
        }
    }

    get height() {
        if(this.#height === undefined){
            this.#height = 0;
        }
        return this.#height;
    }

    set height(value) {
        if(value < 0) {
            alert('Значения для height не может быть меньше чем 0');
        } else{
            this.#height = height;
        }
    }

    get area() {
        return this.width + this.height;   // использование getter
    }
}

let r1 = new Rect(10, 20);

r1.#height; //если кто-то напрямую захотит обратиться к свойству #height, приведет к ошибке, скрипт не выполнится вообще

r1.height = -10;  //ошиюка значение не изменится
r1.width = 30;


console.log('width' + r1.width);  
console.log('height' + r1.height);
console.log('area' + r1.area); 
