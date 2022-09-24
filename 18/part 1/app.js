//try/catch - может отловить ошибки этапа выполнения, синтаксические ошибки не могут быть обработаны в блоке catch      
let jsonWithError = '{"name" : "Artem", "age" = 25}'
let json = '{"name" : "Ivan", "age" : 25}'
console.time('parsing')     //начало замера времени

try {                                       //блок кода в котором может возникнуть ошибка на этапе выполнения
    console.log('Начало блока try'); 
    let obj = JSON.parse(json);
    //let obj = JSON.parse(jsonWithError)
    console.log('Конец блока try');
} catch(error) {                            //блок кода в который перейдет выполнение, в случае если в блоке try возникает ошибка 
    console.log('Блок catch');
    console.log(error.name);
    console.log(error.message);
} finally {                                 //блок кода который гарантировано выполняется, не зависимо от того, была ли ошибка в блоке try
    console.timeEnd('parsing')
}
console.log('Конец сценария')  // завершение замера времени