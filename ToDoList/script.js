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