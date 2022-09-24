let jsonWithError = '{"name" : "Artem", "age" = 25}';
let json = '{"name" : "Ivan", "age" : 25}';

function jsonStr() {
  console.time("parsing");
  try {
    let obj = JSON.parse(json);
    return obj;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  } finally {                        //блок finally срабатывает даже при наличии return на 8й строке 
    console.timeEnd("parsing");
  }
  console.log("Конец сценария");
}
