const inpTitleAdd = document.getElementById("inpTitleAdd");
const inpBodyAdd = document.getElementById("inpBodyAdd");
const btnAdd = document.getElementById("btnAdd");
const todoC = document.querySelector(".todos-list-cont");

const inpTitleEdit = document.getElementById("inpTitleEdit");
const inpBodyEdit = document.getElementById("inpBodyEdit");
const btnEdit = document.getElementById("btnEdit");

let todos = [];
let currentTodo = null;

btnAdd.addEventListener("click", onAddList);
btnEdit.addEventListener("click", onEditList);

todoC.addEventListener("click", onClick);

const todo = new Todos();
updateList();

function updateList() {
  todo.getTodos().then((r) => {
    todos = r.splice(0, 40);
    renderTodo(todos);
  });
}

const ELEMENT = (tag, id, className, value) =>
  `<${tag} id="${id}" class="${className}">${value}</${tag}>`;

function renderTodo(data) {
  todoC.innerHTML = "";

  const html = data.map((e) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("todo-cont");
    if (!e.isComplete) {
      wrapper.classList.add("table-item-col");
    }

    wrapper.id = e.id;
    const elTitle = ELEMENT(
      "div",
      "note",
      "table-item table-item-col",
      e.title
    );
    const elBody = ELEMENT("div", "note", "table-item table-item-col", e.body);
    const elDate = ELEMENT(
      "div",
      "note",
      "table-item table-item-col",
      e.createDate
    );
    const elIsComplete = ELEMENT(
      "div",
      "note",
      "table-item table-item-col",
      e.isComplete
    );

    wrapper.insertAdjacentHTML("beforeend", elTitle);
    wrapper.insertAdjacentHTML("beforeend", elBody);
    wrapper.insertAdjacentHTML("beforeend", elDate);
    wrapper.insertAdjacentHTML("beforeend", elIsComplete);
    wrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="delete" id="delete">X</div>`
    );
    wrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="completed" id="completed">V</div>`
    );
    todoC.append(wrapper);
  });
}

function onAddList() {
  const todoItem = {
    title: inpTitleAdd.value,
    body: inpBodyAdd.value,
    isComplete: false,
  };

  todo.createTodo(todoItem).then((r) => {
    console.log(r);
    updateList();
  });
}

function onEditList() {
  todo.getTodo(currentTodo).then((r) => {
    const todoItem = {
      id: currentTodo,
      title: inpTitleEdit.value,
      body: inpBodyEdit.value,
    };
    todo.editTodo(todoItem).then((r) => {
      updateList();
      document.getElementById("item-cont").classList.toggle("display");
    });
  });
}

function onClick(e) {
  if (e.target.id === "delete") {
    const item = e.target.closest(".todo-cont");
    todo.deleteTodo(item.id).then((r) => {
      updateList();
    });
  }

  if (e.target.id === "completed") {
    const item = e.target.closest(".todo-cont");
    todo.getTodo(item.id).then((r) => {
      const todoItem = {
        id: item.id,
        isComplete: !r.isComplete,
      };
      todo.editTodo(todoItem).then((r) => {
        updateList();
      });
    });
  }

  if (e.target.id === "note") {
    document.getElementById("item-cont").classList.add("display");
    const item = e.target.closest(".todo-cont");
    todo.getTodo(item.id).then((r) => {
      inpTitleEdit.value = r.title;
      inpBodyEdit.value = r.body;
      currentTodo = r.id;
    });
  }
}
