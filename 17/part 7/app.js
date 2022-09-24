//JSON - JavaScript Object Notation - формат обмена данными, основанный на JS. Формат не зависим от языка, и может быть использован с другими

let user = {
    name: 'Artem',
    age: 19,
    email: 'artem@gmail.com',
}

let jsonString = JSON.stringify(user);       //сохранения обьекта в JSON, (также этот процесс называется сериализацией)
console.log(jsonString);

let objectFromJson = JSON.parse(jsonString); //восстановление обьекта JSON из строки (десериализация)
console.log(objectFromJson)