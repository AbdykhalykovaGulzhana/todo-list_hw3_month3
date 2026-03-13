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

const createTask = (event) => {
    event.preventDefault();

    if (!inputCreateElement.value) {
        return alert("Enter the name of task: ")
    }

    const taskElement = document.createElement("li");
    todoListElement.append(taskElement);
    taskElement.classList.add("task")
    // taskElement.classList.add("completed");

    const checkboxElement = document.createElement("input");
    taskElement.append(checkboxElement);
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.addEventListener("click", () => {
       taskElement.classList.add("completed");
       alert("Task" + " " + nameElement.innerText + " is successfully completed.")
    });

    let nameElement = document.createElement("span");
    taskElement.append(nameElement);
    nameElement.innerText = inputCreateElement.value.trim();
    inputCreateElement.value = "";


    const deleteElement = document.createElement("button");
    deleteElement.innerText = "x";
    taskElement.append(deleteElement);
    deleteElement.addEventListener("click", () => {
        taskElement.remove();
    });
}
buttonCreateElement.addEventListener("click", createTask);