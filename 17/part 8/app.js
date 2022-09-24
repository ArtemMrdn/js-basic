let pageColor = localStorage.getItem('color');        //читаем ключ color

if (pageColor) {
    document.body.style.backgroundColor = pageColor;
    //находим элемент у котрого value соответствует тому значению которому оно сохряналось, и ставим его значение 
    // checked = true, для того чтобы элемент с тем стилем, который мы выбрали был выделен
    document.querySelector(`input[value = '${pageColor}']`).checked = true;  
}

document.querySelector('#saveButton').addEventListener('click', function(){
    const form = document.forms[0];
    let selectedColor = form.color.value;

    localStorage.setItem('color', selectedColor);
    document.body.style.backgroundColor = selectedColor;
})