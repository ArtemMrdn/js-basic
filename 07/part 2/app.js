
let testButton = document.querySelector("#testBtn");
let resetButton = document.querySelector("#resetBtn");
let output = document.querySelector("#output");

resetButton.addEventListener("click", function() {
    output.innerHTML = "";
})

/* which нажатая клавиша на мыши
1 - левая
2 - средняя
3 - правая */
testButton.addEventListener("click", function(e) {
    output.innerHTML += "click which=" + e.which + "<br />";
});

testButton.addEventListener("mousedown", function(e) {
    output.innerHTML += "mousedown which=" + e.which + "<br />";
});

testButton.addEventListener("mouseup", function(e) {
    output.innerHTML += "mouseup which=" + e.which + "<br />";
});