/* Один из способов избавиться от дублирования кода при создании объектов - использование функций-фабрик

Все объекты, которые создаст функция createCar будут содержать свою копию showStats метода, хотя поведение
метода не изменяется от объекта к объекту и правильно использовать одну копию методов для всех автомобилей. */
function createCar(image, manufacturer, model, year, VIN) {
  return {
    image: image,
    manufacturer: manufacturer,
    model: model,
    year: year,
    VIN: VIN,

    showStats: function (element) {
      element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
      element.insertAdjacentHTML("beforeend", `Производитель: <b>${this.manufacturer}</b><br />`);
      element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
      element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
      element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
    },
  };
}

let car1 = createCar("audi1.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = createCar("jaguar1.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = createCar("porsche1.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);
