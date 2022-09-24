//catch
function processData(data) {
  return new Promise(function (resolve, reject) {
    let randomValue = Math.floor(Math.random() * 5001);

    setTimeout(() => {
      if (randomValue > 1000) {
        console.log(`Данные ${data} обработаны за ${randomValue}.`);
        resolve(data + randomValue);
      } else {
        reject(new Error("Ошибка во время обработки данных " + data));
      }
    }, randomValue);
  });
}

let initialData = 10;

processData(initialData)
  .then((data) => processData(data))
  .then((data) => processData(data))
  .then((data) => processData(data))
  .then((data) => processData(data))
  .catch((error) => console.error(error.message)); // если один из промисов завершается с ошибкой то управление переходит
// к ближайшему catch
