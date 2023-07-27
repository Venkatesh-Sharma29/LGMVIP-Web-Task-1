const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const priority = prioritySelect.value;
  li.innerHTML = `
    <span>${taskText}</span>
    <span class="priority ${priority}">Priority: ${priority}</span>
    <button class="doneButton" onclick="markTaskAsDone(event)">Done</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function markTaskAsDone(event) {
  const listItem = event.target.parentElement;
  listItem.remove();
}

addButton.addEventListener('click', addTask);
