// Способы получения форм текущего документа
let form1 = document.forms.loginForm; // получение формы с атрибутом name=loginForm
let form2 = document.forms[0]; // получение первой формы в документе
let form3 = document.querySelector("[name=loginForm]"); // через CSS селектор

document.querySelector("#checkFormButton").addEventListener("click", function () {
    // все элементы, содержащиеся в форме, доступны через коллекцию elements на объекте формы
    for (let i = 0; i < form1.elements.length; i++) {
        const element = form1.elements[i];
        console.log(element.name + " = " + element.value);
    }
});

document.querySelector("#checkValuesButton").addEventListener("click", function () {
    // получить доступ к элементу управления можно по имени на коллекции elements объекта form
    // form.elements.<element-name>
    console.log(form1.elements.loginInput.value);
    console.log(form1.elements.passwordInput.value);

    // альтернативная, более короткая форма записи, но может повлечь ошибки, если значение name во время выполнения будет изменено
    // атрибут name элементов во время выполнения меняется крайне редко 
    // form.<element-name>
    console.log(form1.loginInput.value);
    console.log(form1.passwordInput.value);
});