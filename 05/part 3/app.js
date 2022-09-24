let messages = document.querySelectorAll(".read");
        
messages.forEach(div => {
    div.classList.remove("read"); // удаляем класс, если он есть
});


let messages = document.querySelectorAll(".message");
        
messages.forEach(div => {
    div.classList.toggle("read"); // удаляем класс, если он есть, добавляем класс, если его нет
});