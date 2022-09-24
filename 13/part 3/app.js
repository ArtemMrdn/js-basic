//setTimeout, setInterval

function showMessage() {
    console.log('setTimeout')
}

function showMessage2() {
    console.log('setInterval')
}
//setTimeout - планирует однократный вызов функции , спустя определенный интервал.
//первый параметр - запускаемая функция
//второй параметр - задержка в милисекундах
setTimeout(showMessage, 5000) 

//setTimeout - планирует регулярный запуск функции с указанным интервалом
//первый параметр - запускаемая функция
//второй параметр - задержка в милисекундах
setInterval(showMessage2, 2000)