const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const removeTaskButton = document.getElementById('removeTask');
const taskList = document.getElementById('taskList');
let tasks = [];

addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    renderTaskList();
    taskInput.value = '';
  }
});

removeTaskButton.addEventListener('click', () => {
  tasks.pop();
  renderTaskList();
});

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(listItem);
  });
}