//cookie - небольшой фрагмент данных которыый сохраняется в браузере


document.cookie = 'hello=World';    //добавления cookie с именем hello и значением world 
document.cookie = 'test=111';

console.log(document.cookie);     //чтение всех cookie относящихся к данному домену 

document.cookie  = 'test=000';     //изменение значения cookie с именем test

console.log(document.cookie);

// max-age - время жизни, значение в секундах, 
// path - указывает страницы на которые будет работать данный куки, /- для всех страниц 

document.cookie = 'color=green; max-age=30; path=/';    
 
document.querySelector('button').addEventListener('click', function(){
    alert(document.cookie);
})
