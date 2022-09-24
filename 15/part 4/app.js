const form = document.forms[0];
document.querySelector("#checkButton").addEventListener("click", function () {
    console.log("Согласен с условиями " + form.termsAccepted.checked);
    console.log("Выбранная валюта " + form.currency.value);
});