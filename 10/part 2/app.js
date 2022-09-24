// Функция конструктор
//Когда функция конструктор заканчивает работу, неявно возвращается значение контекста как результат функции.
//Можно представить, что выполняется return this; в конце конструктора

function Car(image, manufacturer, model, year, VIN) {
    this.image = image;
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.VIN = VIN;

    this.showStats = function (element) {
      element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
      element.insertAdjacentHTML("beforeend", `Производитель: <b>${this.manufacturer}</b><br />`);
      element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
      element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
      element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
  };
}

//При вызове конструктора необходимо использовать ключевое слово new
//Ключевое слово new создает новый обьект и устанавливает его в качестве контекста вызываемой функции

let car1 = new Car("audi3.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = new Car("jaguar2.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = new Car("porsche1.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);
