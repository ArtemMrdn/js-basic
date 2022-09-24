const form = document.forms[0];

form.addEventListener("submit", function (e) {
  alert("Форма отправлена");
});

form.passwordConfirmInput.addEventListener("input", function () {
  // setCustomValidity - добавляет настраиваемое сообщение об ошибке в элемент.
  // если сообщение установлено - элемент считается не валидным
  // если сообщением является пустая строка - элемент считается валидным.
  if (form.passwordConfirmInput.value != form.passwordInput.value) {
    form.passwordConfirmInput.setCustomValidity(
      "Пароль и подтверждение пароля не совпадают."
    );
    form.passwordInput.setCustomValidity(
      "Пароль и подтверждение пароля не совпадают."
    );
  } else {
    form.passwordConfirmInput.setCustomValidity(""); // убираем ошибку
    form.passwordInput.setCustomValidity("");
  }
});
