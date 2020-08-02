{
  const addButton = document.getElementById('add-button');
  const inputTask = document.getElementById('input-task');
  const taskList = document.getElementById('task-list');
  const tasks = [];

  addButton.addEventListener('click', () => {
    addTask();
  })

  /**
   * タスクを追加
   */
  const addTask = () => {
    const comment = inputTask.value.trim();
    inputTask.value = '';
    if (comment) {
      tasks.push({
        comment: comment,
        completed: false
      });
      showTask();
    }
  }

  /**
   * タスクを表示
   */
  const showTask = () => {
    // tbodyの中身を空にする
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    tasks.forEach((task, index) => {
      task.id = index;
      const tr = document.createElement('tr');

      const idTd = document.createElement('td');
      idTd.textContent = task.id;
      tr.appendChild(idTd);

      const commentTd = document.createElement('td');
      commentTd.textContent = task.comment;
      tr.appendChild(commentTd);

      const statusButtonTd = document.createElement('td');
      const statusButton = document.createElement('button');
      statusButton.textContent = '作業中';
      statusButtonTd.appendChild(statusButton);
      tr.appendChild(statusButtonTd);

      const deleteButtonTd = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButtonTd.appendChild(deleteButton);
      tr.appendChild(deleteButtonTd);
      deleteButton.addEventListener('click', () => {
        removeTask(index);
      })

      taskList.appendChild(tr);
    });
  }

  /**
   * タスクを削除
   */
  const removeTask = (index) => {
    tasks.splice(index, 1);
    showTask();
  }
}