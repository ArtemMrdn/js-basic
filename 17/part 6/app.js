document.forms.writeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const form = document.forms.writeForm;

  let key = form.keyInput.value;
  let value = form.valueInput.value;

  sessionStorage.setItem(key, value); // сохранение значения по ключу

  // sessionStorage - объект, позволяющий хранить информацию в памяти браузера.
  // Время жизни данных ограничивается сессией и текущей вкладкой, но значения сохраняются в памяти
  // даже если странице будет перезагружена

  form.reset();
});

document.forms.readForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = document.forms.readForm;
  let key = form.keyInput.value;

  let value = sessionStorage.getItem(key); // чтение значения по ключу, если ключ не найден, возвращается null
  alert(value);
});
