const form = document.forms[0];

document.querySelector("#checkButton").addEventListener("click", function () {
  console.log("Выбранное значение " + form.currency.value);
  console.log("Выбранный индекс " + form.currency.selectedIndex);
});

document.querySelector("#selectButton").addEventListener("click", function () {
  form.currency.value = "CHF";
  // form.currency.selectedIndex = 0;
  // document.querySelector("[value='USD']").selected = "true";
});
