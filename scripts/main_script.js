var taskList = ['[Auto-generated task_01] ', '[Auto-generated task_02] ', '[Auto-generated task_03]  ', '[Auto-generated task_04] ',]
listTasks();

function listTasks() {
  document.getElementById('tskList').innerHTML = '';
  for (var i = 0; i < taskList.length; i++) {
    addTaskElement(i);
  }
  console.log(taskList);
}

function addNewTask() {
  var taskName = document.getElementById('taskName').value;
  var tsk = taskName;
  taskList.push(tsk);
  listTasks();
}

function addTaskElement(id) {
  var newTsk = document.createElement('li');
  var node = document.createTextNode(taskList[id]);
  newTsk.appendChild(node);
  newTsk.setAttribute('id', 'task' + id);
  newTsk.setAttribute('class', 'taskItem');
  document.getElementById('tskList').append(newTsk);
}