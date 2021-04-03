let input = document.getElementById("input");
let addItem = document.getElementById("add");
let removeItem = document.getElementById("clear");
let taskContainer = document.getElementById("task");
let error = document.getElementById("error");


addItem.addEventListener("click", addTask);
removeItem.addEventListener("click", removeTask);


function addTask(e) {
  e.preventDefault();
  
  if (input.value == "") {
   
    error.classList.add("show");
  } else {
    error.classList.remove("show");
// create container
let taskItem = document.createElement('div');
taskItem.className = 'tasks'
// create p element
let text = document.createElement('p');
text.className ='taskName'
text.innerText = input.value
// create container and put buttons inside
let btnBox = document.createElement('div')
btnBox.className = 'btnBox'
let checkBtn = document.createElement('button')
checkBtn.className = 'check'
checkBtn.innerHTML =  '<i class="fa fa-check-circle" aria-hidden="true"></i>'
let editBtn = document.createElement('button')
editBtn.className ='edit'
editBtn.innerHTML = '<i class="fas fa-edit"></i>'
let deleteBtn = document.createElement('button')
deleteBtn.className ='delete'
deleteBtn.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'
btnBox.appendChild(checkBtn)
btnBox.appendChild(editBtn)
btnBox.appendChild(deleteBtn)
// put p element and button container inside one container

taskItem.appendChild(text)
taskItem.appendChild(btnBox)
task.appendChild(taskItem)
input.value = ''
// add event listeners to the icons



  }
}
function removeTask(e) {
  e.preventDefault();
task.innerHTML = ''
}
