function setDates() {
    let dueDateSpans = document.querySelectorAll("[data-due-date]");

    for (const span of dueDateSpans) {
        span.textContent = span.dataset.dueDate;
    }
}

function setStatuses() {
    let tasks = document.querySelectorAll(".task");

    for (const task of tasks) {
        // если checkbox отмечен, то устанавливаем для div атрибут data-status="completed"
        if (task.querySelector("input").checked) {
            task.dataset.status = "completed";
            continue;
        }

        let dueDateAttr = task.querySelector("span").dataset.dueDate; // чтение значения атрибута data-due-date
        let dueDate = getDateFromString(dueDateAttr); // создание объекта Date на основе значения атрибута data-due-date
        let today = new Date(); // создание объекта, описывающего текущую дату

        // если сегодняшняя дата больше, чем дата, указанная в атрибуте, задаем задачу как просроченную, устанавливая data-status="expired"
        if (today > dueDate) {
            task.dataset.status = "expired";
        }
    }
}

function getDateFromString(input) {
    let parts = input.split(".");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

setDates();
setStatuses();