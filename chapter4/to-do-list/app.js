const input = document.querySelector(".todo");
const submit = document.querySelector(".submit");
const todos = document.querySelector(".todos");

const todoList = [];

const renderTodos = () => {
  todos.innerHTML = "";
  todoList.map((t) => {
    todos.innerHTML += `
        <div class="todoItem">
          <h1>${t.todo}</h1>
          <button onclick=deleteTodo(${t.id}) >Delete</button>
        </div>
        `;
  });
};

let count = 0;
const submitTodo = () => {
  if (input.value === "") {
    return;
  }
  todoList.push({
    id: count++,
    todo: input.value,
  });
  input.value = "";
  renderTodos();
};

const deleteTodo = (id) => {
  const item = todoList.find((t) => t.id === id);
  todoList.splice(todoList.indexOf(item), 1);
  renderTodos();
};

submit.addEventListener("click", submitTodo);
