"use strict";
const tasks = [];
const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");
const addTask = (task) => {
    tasks.push({ task, completed: false });
    renderTasks();
};
const toggleTaskCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};
const removeTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};
const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("li");
        taskEl.innerHTML = task.task;
        if (task.completed) {
            taskEl.style.textDecoration = "line-through";
            taskEl.style.color = "gray";
        }
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = "Completed";
        completeBtn.addEventListener("click", () => toggleTaskCompletion(index));
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.addEventListener("click", () => removeTask(index));
        taskEl.appendChild(removeBtn);
        taskEl.appendChild(completeBtn);
        taskList.appendChild(taskEl);
    });
};
form.addEventListener("submit", (e) => {
    const taskInput = document.querySelector("#task");
    if ((taskInput.value == "")) {
        alert("Please enter a Task");
    }
    else {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = "";
    }
});
renderTasks();
