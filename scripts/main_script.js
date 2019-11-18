// Array - auto-genererer 4 tasks til 'li'
var taskList = ['[Auto-generated task_01] ', '[Auto-generated task_02] ', '[Auto-generated task_03]  ', '[Auto-generated task_04] ', ]
listTasks();

function listTasks() {
  // Sletter indhold der måtte være i 'taskList' og tilføjer på ny
  document.getElementById('tskList').innerHTML = '';
  for (var i = 0; i < taskList.length; i++) {
    addTaskElement(i);
  }
  console.log(taskList);
}

// Funktion tilføjer tekst fra 'textInput' til 'li'
function addNewTask() {
  var taskName = document.getElementById('textInput').value;
  var tsk = taskName;
  taskList.push(tsk);
  listTasks();
}
// Funktion tilføjer nye elementer til 'li'
function addTaskElement(id) {
  // Tilføjer 'Checked' knap
  var btnCheck = document.createElement('button');
  var btnCheckText = document.createTextNode('✔')
  // Tilføjer 'Delete' knap
  var btnDelete = document.createElement('button');
  var btnDeleteText = document.createTextNode('X')
  // Tilføjer input fra textboks til 'li'
  var newlyAddedTask = document.createElement('li');
  var node = document.createTextNode(taskList[id]);
  // Tilføjer tekst til 'Checked' knap
  btnCheck.appendChild(btnCheckText);
  btnDelete.appendChild(btnDeleteText);
  // Tilføjer tekst fra tekstboks til 'li'
  newlyAddedTask.appendChild(node);
  // Tilføjer tekst til 'Delete' knap
  newlyAddedTask.appendChild(btnCheck);
  newlyAddedTask.appendChild(btnDelete);
  // Tilføjer id + class til nyt 'li' element
  newlyAddedTask.setAttribute('id', 'task' + id);
  newlyAddedTask.setAttribute('class', 'taskItem');
  document.getElementById('tskList').append(newlyAddedTask);
  // Tilføjer bootstrap styling til 'li'
  newlyAddedTask.setAttribute('class', 'list-group-item');
  // Tilføjer bootstrap styling til 'button'
  btnCheck.setAttribute('class', 'btn btn-outline-success');
  btnCheck.setAttribute('id', 'position_check');
  btnDelete.setAttribute('class', 'btn btn-outline-danger');
  btnDelete.setAttribute('id', 'position_delete');
  // Tilføjer "event/click/listener" til 'Delete' knappen
  btnDelete.addEventListener('click', function () {
    deleteElement(id);
  });
  // Tilføjer "event/click/listener" til 'Checked' knappen
  btnCheck.addEventListener('click', function () {
    newlyAddedTask.style.textDecoration = "line-through";
  });

}
//Funktion til overstående 'Delete' knap
function deleteElement(id) {
  taskList.splice(id, 1);
  listTasks();
}