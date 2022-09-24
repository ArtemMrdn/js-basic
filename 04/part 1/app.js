//свойства и атрибуты
let div1 = document.querySelector('#div1')
let div2 = document.querySelector('#div2')

console.log(div1.hasAttribute('MyAttribute'));  //true - если атрибут с именем MyAttribute есть, иначе - false
console.log(div1.getAttribute('MyAttribute'));  //выведет значение атрибута MyAttribute

div1.setAttribute('MyAttribute', 'new value');  //сменит значение для атрибута MyAttribute
console.log(div1.getAttribute('MyAttribute'));  //выведет значение атрибута MyAttribute

div2.removeAttribute('MyAttribute');            //удалит атрибут MyAttribute для элемента div2