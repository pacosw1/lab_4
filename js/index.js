const ids = new Set();

const onPostTodo = (e) => {
  e.preventDefault();

  const textArea = document.getElementById("todo-text");

  const text = textArea.value;

  if (text == "") return;

  const todo = document.createElement("div");
  todo.setAttribute("class", "todo-item");

  const todoText = document.createElement("p");
  todoText.textContent = text;

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  todo.appendChild(checkBox);
  todo.appendChild(todoText);

  textArea.value = "";

  const panel = document.getElementById("panel");
  panel.appendChild(todo);
};

const onDeleteSelected = () => {
  const todoList = getSelected(true);
  for (let element of todoList) {
    element.remove();
  }
};

const setMarkedState = (bool) => {
  const todoList = getSelected(!bool);
  for (let element of todoList) {
    element.firstElementChild.checked = bool;
  }
};

//utils
const getSelected = (bool) => {
  let todoList = Array.from(document.getElementsByClassName("todo-item"));
  return todoList.filter((todo) => todo.firstElementChild.checked == bool);
};
