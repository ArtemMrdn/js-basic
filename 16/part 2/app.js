const form = document.forms[0];

form.field1.addEventListener("input", function () {
    console.log("Событие input - " + form.field1.value);
});

form.field2.addEventListener("change", function () {
    console.log("Событие change - " + form.field2.value);
});

form.field3.addEventListener("cut", function (e) {
    const selection = document.getSelection();
    console.log(`Событие cut - ${form.field3.value} (in buffer ${selection})`);
});

form.field4.addEventListener("copy", function () {
    const selection = document.getSelection();
    console.log(`Событие copy - ${form.field4.value} (in buffer ${selection})`);
});

form.field5.addEventListener("paste", function (e) {
    console.log(`Событие paste - ${form.field5.value} (in buffer ${e.clipboardData.getData("text")})`);
});

