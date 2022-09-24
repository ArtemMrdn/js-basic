//promise - methods
function asyncOperation() {
    return new Promise(function (resolve, reject) {
        let randomValue = Math.floor(Math.random() * 5001); // случайное значение от 0 до 5000

        if (randomValue > 1000) {
            // переводим promise в состояние resolved после задержки
            setTimeout(() => resolve(randomValue), randomValue);
        }
        else {
            // если случайное значение менее 1000 - выбрасываем ошибку
            setTimeout(() => reject(new Error(`Ошибка. Значение ${randomValue} меньше 1000.`)),
                randomValue);
        }
    });
}

let button = document.querySelector("#start");

button.addEventListener("click", function () {
    // вариант 1
    // asyncOperation()
    //     .then(result => console.log(result), error => console.log(error.message));

    // вариант 2
    asyncOperation()
        .then(result => console.log(result))
        .catch(error => console.log(error.message));
});