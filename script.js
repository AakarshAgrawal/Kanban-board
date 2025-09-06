const openFormBtn = document.getElementById("openForm");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const todoList = document.getElementById("todo");

let taskId = 0;

openFormBtn.addEventListener("click", () => {
    taskForm.style.display = "block";
    taskInput.focus();
});

cancelBtn.addEventListener("click", () => {
    taskForm.style.display = "none";
    taskInput.value = "";
})

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;

 const task = document.createElement("div");
 task.className = "task";
 task.id = `task-${taskId++}`;
 task.textContent = text;

task.draggable = true;
task.addEventListener("dragstart", drag);

todoList.appendChild(task);
 taskInput.value = "";
 taskForm.style.display = "none";

});
function allowDrop(e) {
  e.preventDefault();
}

function drag(e){
     e.dataTransfer.setData("text", e.target.id);
}
function drop (e){
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text")
    const task = document.getElementById(taskId);
    e.currentTarget.appendChild(task)
}
document.querySelectorAll(".task-list").forEach(list => {
 list.addEventListener("dragover", allowDrop);
 list.addEventListener("drop", drop);
});