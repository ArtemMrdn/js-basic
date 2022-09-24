//addEventListener - функция для установки обработчика события 
//первый параметр - имя события без приставки on
//второй параметр - функция обработчик
let btn = document.querySelector('#my-btn');

btn.addEventListener('click', function(){
    alert('Обработчик события click установленный через addEventListener')
})
btn.addEventListener('click', function(){                      //с помощью addEventListener можно установить несколько обработчиков на одно событие
    alert('addEventListener можно установить несколько обработчиков на одно событие')
})