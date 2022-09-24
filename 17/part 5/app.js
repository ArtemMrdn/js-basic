//Получить доступ ко всем значениям, которые есть в localStorage
for(let i = 0; i<localStorage.length; i++) {    //length - кол-во ключей в хранилище 
    let key = localStorage.key(i);              //key(i) - получить имя ключа по заданной позиции
    console.log(`${key} = ${localStorage.getItem(key)}`);
}