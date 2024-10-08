let loadTodosButton = document.getElementById("load-todos-btn");
loadTodosButton.addEventListener("click", onLoadTodos);

function onLoadTodos() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    request.onprogress = function () {
        console.log("Loading todos...");
    };

    request.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const todosData = JSON.parse(this.responseText);
            console.log(todosData);
            renderTodos(todosData);
        } else {
            console.log("Error: Todos not found");
        }
    };

    request.send();
}

function renderTodos(todosData) {
    const todosContainer = document.getElementById("todos-container");
    todosContainer.innerHTML = "";

    todosData.forEach((todo) => {
        let todoCard = document.createElement("div");
        todoCard.classList.add("todo-item");
        todoCard.style.margin = "10px";
        todoCard.style.padding = "10px";
        todoCard.style.border = "1px solid black";

        todoCard.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
        <p>ID: ${todo.id}</p>
        `;

        todosContainer.appendChild(todoCard);
    });
}