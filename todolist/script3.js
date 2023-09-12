document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const pendingTasksList = document.querySelector("#pendingTasks ul");
    const completedTasksList = document.querySelector("#completedTasks ul");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            completeButton.addEventListener("click", function() {
                taskItem.classList.add("completed");
                taskItem.removeChild(completeButton);
                taskItem.removeChild(deleteButton);
                completedTasksList.appendChild(taskItem);
            });

            deleteButton.addEventListener("click", function() {
                taskItem.remove();
            });

            taskItem.appendChild(completeButton);
            taskItem.appendChild(deleteButton);
            pendingTasksList.appendChild(taskItem);

            taskInput.value = "";
        }
    });
});
