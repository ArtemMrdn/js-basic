let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let taskList = document.querySelector(".task-list");

addTaskButton.addEventListener("click", addTaskHandler);

function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");

    let input = document.createElement("input");
    input.type = "checkbox";

    let p = document.createElement("p");
    p.innerText = text;

    div.append(input);
    div.append(p);

    return div;
}

function addTaskHandler() {
    let newTask = createTask(taskNameInput.value);
    taskList.append(newTask);
}