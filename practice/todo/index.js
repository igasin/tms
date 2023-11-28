let todos = getTodos();

const filers = {
  checked: "checked",
  search: "search",
};

let searchValue = "";

let activeStatuses = [];

const root = document.querySelector("#root");
const todoList = document.createElement("div");
const todoNavBlock = document.createElement("div");
const todoInput = createInput("Enter todo ...", "inputnav");
const allEntries = createSpan("All: 0", "entries");
const completedEntries = createSpan("Completed: 0", "entries");
const todoSearch = createInput("Search...", "search");

root.classList.add("todolistblock");

todoList.classList.add("todolistnav");

todoNavBlock.classList.add("todonavblock");

const addButton = createButton("Add", "buttonnav", handleAddButtonClick);
const deleteAllButton = createButton("Delete All", "buttonnav", deleteAll);
const deleteLastButton = createButton(
  "Delete last",
  "buttonnav",
  removeLastTodo
);
const showAllButton = createButton("Show All", "buttonshow", showAll);
const showCompletedButton = createButton(
  "Show Completed",
  "buttonshow",
  showChecked
);

root.append(todoNavBlock, todoList);
todoNavBlock.append(
  deleteAllButton,
  deleteLastButton,
  todoInput,
  addButton,
  allEntries,
  completedEntries,
  showAllButton,
  showCompletedButton,
  todoSearch
);

todoSearch.addEventListener("input", searchTodos);

function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function changeCopmlitedCard(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    todos[todoIndex].isChecked = !todos[todoIndex].isChecked;
    renderChangedData();
  }
}
function saveTodoCard({ text }) {
  const todo = {
    id: generateId(),
    date: new Date().toLocaleString(),
    text,
    isChecked: false,
  };

  todos.push(todo);

  renderChangedData();
}
function deleteAll() {
  todos = [];
  renderChangedData();
}

function generateId() {
  return todos.reduce((acc, { id }) => Math.max(acc, id), 0) + 1;
}

function removeLastTodo() {
  todos.pop();
  renderChangedData();
}

function removeTodoItem(id) {
  todos = todos.filter((el) => el.id !== id);
  renderChangedData();
}

function renderList(filteredData) {
  todoList.innerHTML = "";
  filteredData.forEach((el) => todoList.append(createTodoCard(el)));
}

function renderChangedData() {
  const filteredData = getFilteredData();
  console.log(filteredData);
  console.log(activeStatuses);
  updateEntryCounts(filteredData);
  renderList(filteredData);
  setTodos(todos);
}

function showAll() {
  if (activeStatuses.includes(filers.checked)) {
    activeStatuses = activeStatuses.filter((el) => el !== filers.checked);
  }
  renderChangedData();
}
function showSearch() {
  if (!activeStatuses.includes(filers.search)) {
    activeStatuses.push(filers.search);
  }
  renderChangedData();
}

function showChecked() {
  if (!activeStatuses.includes(filers.checked)) {
    activeStatuses.push(filers.checked);
  }
  renderChangedData();
}

function getFiltered(todos) {
  return todos.filter((el) => {
    return el.isChecked;
  });
}

function getFieldsByText(todos, searchValue) {
  return todos.filter((el) =>
    el.text.toLowerCase().includes(searchValue.toLowerCase())
  );
}

function getFilteredData() {
  let data = todos;
  if (activeStatuses.includes(filers.checked)) {
    data = getFiltered(data);
  }

  if (activeStatuses.includes(filers.search)) {
    data = getFieldsByText(data, searchValue);
  }

  return data;
}

renderChangedData();

function createButton(text, className, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("button", className);
  button.onclick = onClick;
  return button;
}

function createInput(placeholder, className) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.classList.add("inputnav", className);
  return input;
}

function createSpan(text, className) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add(className);
  return span;
}

function createTodoCard({ text, isChecked = false, id, date }) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todocard");

  const todoTextSpan = createSpan(text, "todotext");

  const checkboxButton = createButton("", "checkboxbutton", function () {
    checkboxButton.classList.toggle("checkboxbutton_checked");
    todoCard.classList.toggle("todocard_active");
    todoTextSpan.classList.toggle("todotext_line-through");
    console.log(id);

    changeCopmlitedCard(id);
  });

  if (isChecked) {
    checkboxButton.classList.add("checkboxbutton_checked");
    todoCard.classList.add("todocard_active");
    todoTextSpan.classList.add("todotext_line-through");
  }

  const todoDate = createSpan(date, "date");

  const todoCardButtonClose = createButton("X", "buttoncard", () => {
    console.log(id);
    removeTodoItem(id);
  });

  const containerDateBtn = document.createElement("div");
  containerDateBtn.classList.add("todocard_block-btn");

  todoCard.append(
    checkboxButton,
    todoTextSpan,
    todoDate,
    todoCardButtonClose,
    containerDateBtn
  );
  containerDateBtn.append(todoCardButtonClose, todoDate);

  return todoCard;
}

function calculateTotal(filteredData) {
  return {
    all: filteredData.length,
    checked: filteredData.filter((el) => el.isChecked).length,
  };
}

function updateEntryCounts(todos) {
  const { all, checked } = calculateTotal(todos);

  allEntries.textContent = `All: ${all}`;
  completedEntries.textContent = `Completed: ${checked}`;
}

function searchTodos() {
  searchValue = todoSearch.value.toLowerCase();

  showSearch();
}

function validateInput(value) {
  return !!value;
}

function handleAddButtonClick() {
  const todoTextValue = todoInput.value.trim();

  if (validateInput(todoTextValue)) {
    todoInput.value = "";
    saveTodoCard({ text: todoTextValue });
  }
}
