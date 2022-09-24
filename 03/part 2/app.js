//Удаление узлов

let lastLiItem = document.querySelector('#marked');
lastLiItem.remove(); //удаление элемента из DOM 

let listItem = document.querySelector('#item');
let unorderedList = document.querySelector('#list');

/* Если в DOM дерево вставить элемент, который уже находится в другой части дерева, то этот элемент будет удален 
со старого места расположения и добавлен в новое  */

unorderedList.append(listItem);


//Клонирование узлов 

let articleNode = document.querySelector('article');

let shallowCopy = articleNode.cloneNode(false); //false - создание поверхностной копии
let deepCopy = articleNode.cloneNode(true);   //true - создание копии элемента со всеми атрибутами и дочерними элементами

document.body.append(shallowCopy);
document.body.append(deepCopy);