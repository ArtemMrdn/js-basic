//Пример с предыдущих работ улучшенный

let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");

addTaskButton.addEventListener("click", addTaskHandler);

// Если фокус находится в поле ввода и нажимается клавиша Enter, запускается функция addTaskHandler (происходит, тоже самое, что и при нажатии на кнопку "Добавить задачу")
taskNameInput.addEventListener("keydown", function (e) {
  if (e.code == "Enter") addTaskHandler();
});

// функция для создания новой задачи в списке, получает в качестве параметра текст задачи, возвращает DOM элемент
function createTask(text) {
  let div = document.createElement("div");
  div.classList.add("task");

  let input = document.createElement("input");
  input.addEventListener("click", changeTaskState); // устанавливаем обработчик на нажатие по checkbox - один и тот же для всех элементов
  input.type = "checkbox";

  let p = document.createElement("p");
  p.innerText = text;

  div.append(input);
  div.append(p);

  return div;
}

// функция обработчик, которая меняет статус выбранной задачи, используется как обработчик на событие click для checkbox
function changeTaskState() {
  if (this.checked) {
    // если нажатый chekbox с галочкой, то добавляем для родительского элемента класс completed
    this.parentElement.classList.add("completed");
  } else {
    // иначе убираем класс completed
    this.parentElement.classList.remove("completed");
  }
}

// функция обработчик на событие click для кнопки добавления новой задачи в список
function addTaskHandler() {
  if (taskNameInput.value) {
    // если текст в поле ввода введен
    if (!startMessage.hidden) startMessage.hidden = true;

    let newTask = createTask(taskNameInput.value);
    taskList.append(newTask);
    taskNameInput.value = "";
  } else {
    // если поле ввода для имени задачи пустое
    alert("введите имя задачи");
  }
}
