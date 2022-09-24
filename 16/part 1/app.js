/* focus - событие происходит когда элемент получает фокус. Событие не всплывает. Например, при клике по элементу или при переходе на элемент
при помощи клавищи Tab. Событие указывает на то что пользовать готовится к вводу данных */

/* blur - событие происходит в момент потери фокуса, когда выполняется клик за пределами управления, или фокус получает другой элемент 
управления. Событие не всплывает. Оно указывает на то, что пользователь ввел данные.(используется для проверки введеных пользователем данных ) */

let form = document.form[0];
let search = form.search;
let searchError = document.querySelector('#searchError')

function showError () {
    searchError.style.display = 'block'
}

function hideError () { 
    searchError.style.display = 'none'
}

search.addEventListener('focus', function () {         //прячем ошибку потому что сейчас пользователь будет что-то вводить в поле вввода.
   hideError();
})

search.addEventListener('blur', function (event) {     //делаем проверку обьект который является инициатором этого события, его свойтсво value содержить символ или нет
    if(event.target.value.length == 0) {
        showError();
    }
})

form.addEventListener('submit', function (event) {
    if(event.target.value.length == 0) {
        event.preventDefault();
    }
})


