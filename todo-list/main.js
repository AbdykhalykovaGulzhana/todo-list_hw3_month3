{
    /*
    <li class="task">
      <input type="checkbox" />
      <span>name</span>
      <button>x</button>
    </li>
    */
}

//preventDefault, append, setAttribute

const inputCreateElement = document.querySelector("#todo-input");
const buttonCreateElement = document.querySelector("#todo-form button");
const todoListElement = document.querySelector("#todo-list");

let tasks = [];

const renderTasks = () => {
    todoListElement.innerHTML = "";


    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        todoListElement.append(taskElement);
        taskElement.classList.add("task")
        // taskElement.classList.add("completed");

        const checkboxElement = document.createElement("input");
        taskElement.append(checkboxElement);
        checkboxElement.setAttribute("type", "checkbox");

        const nameElement = document.createElement("span");
        taskElement.append(nameElement);
        nameElement.innerText = task.name;

        checkboxElement.checked = task.isCompleted;

        checkboxElement.addEventListener("change", (event) => {

            task.isCompleted = event.target.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));

            if (task.isCompleted) {
                alert("Task: '" + nameElement.innerText + "' is successfully completed.")
            }
            taskElement.classList.toggle("completed");
            console.log(tasks);
        })

        const deleteElement = document.createElement("button");
        deleteElement.innerText = "x";
        taskElement.append(deleteElement);
        deleteElement.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });
    });
    console.log(tasks)
};
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
}

const createTask = (event) => {
    event.preventDefault();

    if (!inputCreateElement.value) {
        return alert("Enter the name of task: ")
    }

    tasks.push({
    name: inputCreateElement.value.trim(),
    isCompleted: false,

});
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputCreateElement.value = "";
    renderTasks();

}
const themeBtn = document.getElementById("theme-btn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    if (isDark) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
buttonCreateElement.addEventListener("click", createTask);