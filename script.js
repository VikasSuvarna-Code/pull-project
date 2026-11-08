
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];
// Update function
function updateTaskCount() {
    taskCount.textContent = `Total Number of Tasks: ${tasks.length}`;
}

function addTask() {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(taskName);

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = taskName;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(task => task !== taskName);
        li.remove();
        updateTaskCount();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    updateTaskCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateTaskCount();
