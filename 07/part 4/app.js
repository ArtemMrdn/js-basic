//нажатие на клавиши
let output = document.querySelector("#output");

document.addEventListener("keydown", function(e) {              //keydown - когда мы зажимаем клавишу
    let message = `keydown (Code = ${e.code}, Key = ${e.key})`; //code - физический код клавиши, независим от языка, key - символ клавиши который меняется от языка
    output.innerHTML = message;
});

document.addEventListener("keyup", function(e) {                ////keyup - когда мы отжимаем клавишу
    let message = `keyup (Code = ${e.code}, Key = ${e.key})`;
    output.innerHTML = message;
});