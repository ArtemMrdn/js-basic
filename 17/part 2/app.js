// encodeURIComponent - метод для кодирования строки в компонент, который будет использоваться в URI

//метод encodeURIComponent при записи значений и decodeURIComponent при чтении
console.log('Hello World');
console.log(encodeURIComponent('Hello World'));

console.log('Привет мир');
console.log(encodeURIComponent('Привет мир'));

// decodeURIComponent - декодирование 
console.log(decodeURIComponent('%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80'))

// Пример записи значения в cookie

document.cookie = 'login='+encodeURIComponent('super user')
alert(document.cookie)