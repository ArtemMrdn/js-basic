//зажать клик с сtrl/shift...
let div = document.querySelector("#testDiv");
div.addEventListener("click", function (e) {
    let message = "Click с зажатой клавишей";

    if (e.shiftKey) {
        message += " Shift";
    }
    if (e.altKey) {
        message += " Alt";
    }
    if (e.ctrlKey) {
        message += " Ctrl";
    }
    if (e.metaKey) {
        message += " Meta";
    }

    div.innerHTML = message;
});