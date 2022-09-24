document.querySelector('#testForm').addEventListener('reset', function(event){
    alert('Обработчик событие reset')
    let reslt = confirm('Очистить форму?')

    if(!reslt) {
        // preventDefault - отмена действия по умолчанию
        // для события reset действия по умолчанию - очистка содержимого формы
        event.preventDefault();
        event.stopPropagation();
    }
})