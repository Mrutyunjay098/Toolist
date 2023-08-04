document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');
  const taskList = document.getElementById('task-list');
  const taskCount = document.getElementById('task-count');

  let totalTasks = 0;

  addButton.addEventListener('click', function() {
    const task = taskInput.value.trim();

    if (task !== '') {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      const taskText = document.createElement('span');
      const deleteButton = document.createElement('button');

      checkbox.type = 'checkbox';
      taskText.textContent = task;
      deleteButton.textContent = 'Delete';

      checkbox.addEventListener('change', function() {
        taskText.classList.toggle('completed-task');
      });

      deleteButton.addEventListener('click', function() {
        listItem.remove();
        totalTasks--;
        updateTaskCount();
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      totalTasks++;
      updateTaskCount();

      taskInput.value = '';
    }
  });

  function updateTaskCount() {
    taskCount.textContent = `Total Tasks: ${totalTasks}`;
  }
});
