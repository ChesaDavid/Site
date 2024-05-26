// script.js

// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        
        // Add event listener to mark task as completed when clicked
        newTask.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        // Add button to delete task
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        
        // Clear input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
