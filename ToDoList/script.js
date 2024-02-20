function addTask(){
    console.log("working");
    let inputElement = document.querySelector("#taskInput");
    let taskContainer = document.querySelector("#tasksList");
    
    let taskText = inputElement.value;
    if(taskText.trim() !== ''){
        let list = document.createElement('li');
        list.innerHTML = `<span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>`;
        taskContainer.appendChild(list);
        
        inputElement.value = "";
    }
}
function removeTask(button){
    button.parentElement.remove();
}
/*
Alternate to solve the problem as well
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = taskText;
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      removeTask(this);
    };
    listItem.appendChild(span);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function removeTask(button) {
  var listItem = button.parentNode;
  var taskList = listItem.parentNode;
  taskList.removeChild(listItem);
}
 */