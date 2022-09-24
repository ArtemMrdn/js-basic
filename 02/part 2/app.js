let elemId = prompt('Введите ID элемента (elem1, elem2, elem3)');
let elem = document.querySelector('#'+elemId);
for(const child of elem.children) {
    child.style.border = "1px solid red"
}