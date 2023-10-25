function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = taskInput.value;
    taskList.appendChild(listItem);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      listItem.remove();
    };

    listItem.appendChild(deleteButton);
    taskInput.value = "";
  }
}
