let input = document.getElementById("input");
let addItem = document.getElementById("add");
let removeItem = document.getElementById("clear");
let taskContainer = document.getElementById("task");

addItem.addEventListener("click", addTask);
removeItem.addEventListener("click", removeTask);

function addTask(e) {
  e.preventDefault();
  if (input == " ") {
    let error = document.getElementById("error");
    if (error.style.visibility === "hidden") {
      error.style.visibility = "visible";
    } else {
      error.style.visibility = "hidden";
    }
  } else {
    let paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    taskContainer.appendChild(paragraph);
    input.value = "";
  }
}
function removeTask(e) {
  e.preventDefault();
  console.log("hey");
}
