document.forms.writeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = document.forms.writeForm;

    let key = form.keyInput.value;
    let value = form.valueInput.value;

    localStorage.setItem(key, value); // сохранение значения по ключу

/*     localStorage - объект, позволяющий хранить информацию в памяти браузера.
    Хранение информации в localStorage не имеет ограничения по времени и может быть удалена
    с помощью JavaScript код.

    ключ и значение, которые записываются в localstorage, должны быть строковыми

    Источник - протокол, домен и порт
    
    Для каждого источника создается свой экземпляр хранилища. В зависимости от браузера лимит на хранилище 5 Мб. */

    form.reset();
});

document.forms.readForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const form = document.forms.readForm;
    let key = form.keyInput.value;

    let value = localStorage.getItem(key); // чтение значения по ключу, если ключ не найден, возвращается null
    alert(value);
});