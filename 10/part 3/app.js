// Функция конструктор
//Когда функция конструктор заканчивает работу, неявно возвращается значение контекста как результат функции.
//Можно представить, что выполняется return this; в конце конструктора

function Car(image, manufacturer, model, year, VIN) {
    this.image = image;
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.VIN = VIN;
}
//Каждая функция в JS связана со своим прототипом - пустым обьектом
//Доступ к прототипу можно получить через свойство prototype на функции
//Контекст функции (this) находящейся в прототипе, - обьект, на котором функция будет изначально вызываться, а не сам прототип.
Car.prototype.showStats = function (element) {
    element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
    element.insertAdjacentHTML("beforeend", `Производитель: <b>${this.manufacturer}</b><br />`);
    element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
    element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
    element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
};


//При использовании ключевого слова new после создания нового экземпляра для этого экземпляра устанавливается прототип 
//Прототип устанавливается из конструктора, который используется после ключевого слова new

let car1 = new Car("audi1.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = new Car("jaguar1.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = new Car("porsche1.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

/* 
Когда на экземпляре вызывается метод или происходит обращение к свойству
и данной конструкции нет в самом экземпляре, то происходит обращение к прототипу
и вызываемая конструкция ищется в прототипе.
Метода showStats нет в car1, car2 или car3, но данный код выполняется корректно,
найти метод там. */


car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);
