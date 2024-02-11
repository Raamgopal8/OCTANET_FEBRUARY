function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="checkbox" onchange="toggleCompleted(this)">
            <span>${taskInput.value}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

function toggleCompleted(checkbox) {
    var span = checkbox.nextElementSibling;
    span.classList.toggle("completed");
}

function editTask(button) {
    var span = button.previousElementSibling;
    var currentText = span.innerText;
    var newText = prompt("Edit task:", currentText);

    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}
