const form = document.forms[0];
const link = document.querySelector("#checkLink");

form.addEventListener("submit", function (e) {
  alert("Форма отправлена");
});

link.addEventListener("click", function () {
  alert(form.checkValidity());
  // checkValidity - проверяет есть ли ограничение у элемента и соответствует ли значение элемента этим ограничениям
  // возвращает false если есть ошибки валидации, и true - если проверка прошла успешно
});
