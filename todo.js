const tasks = [];
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskMessage = document.getElementById("task-message");
const emptyMessage = document.getElementById("empty-message");

function renderTasks() {
  taskList.textContent = "";
  emptyMessage.hidden = tasks.length > 0;

  tasks.forEach(function (task, index) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    text.textContent = task.title;
    text.classList.toggle("completed", task.completed);

    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      text.classList.toggle("completed", task.completed);
    });

    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete " + task.title);
    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    label.append(checkbox, text);
    item.append(label, deleteButton);
    taskList.appendChild(item);
  });
}

document.getElementById("todo-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (title === "") {
    taskMessage.textContent = "Enter a task.";
    taskInput.focus();
    return;
  }

  tasks.push({ title: title, completed: false });
  renderTasks();
  taskInput.value = "";
  taskMessage.textContent = "";
  taskInput.focus();
});
