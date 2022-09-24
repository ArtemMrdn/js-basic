//super


class BaseClass {
    method1() {
        console.log('Method from BaseClass')
    }
}

class DerivedClass extends BaseClass {
    constructor(value) {
        super();   //конструктор производного класс должен вызывать конструктор базового класса 
        this.DerivedClassProperty = value;
    }

    method2() {
        console.log('Method from DerivedClass' + this.DerivedClassProperty);
    }
}

let obj1 = new BaseClass();
/* 
Когда запускается конструктор производного класса, пустой обьект не устанавливается в качестве контекста - это задачу выполняет 
конструктор базового класса. Для того чтобы контекст в производном классе указывал на новый создаваемый обьект, 
необходимо вызвать конструктор базового класса через super()
*/
let obj2 = new DerivedClass(10);

obj1.method1();
obj2.method1();

obj2.method2();
