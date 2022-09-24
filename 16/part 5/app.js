const form = document.forms[0];

form.addEventListener("submit", function (e) {
  alert("Форма отправлена");
});

form.addEventListener("change", eventHandler);
form.addEventListener("invalid", eventHandler, true);
// invalid - событие происходит, когда элемент был проверен, но его содержимое не удовлетворило ограничения.
// Проверка выполняется перед отправкой формы или при вызове метода checkValidity

function eventHandler(e) {
  if (e.target.tagName != "INPUT") {
    return;
  }

  checkErrorAndSetMessage(e.target);
}

function checkErrorAndSetMessage(input) {
  // если свойство validity.valueMissing - true, у элемента есть атрибут required но значение не введено
  // validity.tooShort - ошибка проверки атрибута minLength
  // validity.tooLong - ошибка проверки атрибута maxLength
  // validity.typeMismatch - ошибка введенного значение в input[type=email] или input[type=url]

  if (input.validity.valueMissing) {
    input.setCustomValidity("Пожалуйста, заполните это поле");
  } else if (input.validity.tooShort) {
    input.setCustomValidity("Значение не может быть менее 6 символов");
  } else if (input.validity.tooLong) {
    input.setCustomValidity("Значение не может быть более 16 символов");
  } else if (input.validity.typeMismatch) {
    input.setCustomValidity("Пожалуйста, укажите правильный email адрес");
  } else {
    input.setCustomValidity("");
  }
}
