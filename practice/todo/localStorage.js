import { todos, renderChangedData } from "./index.js";

function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
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

function generateId() {
  return todos.reduce((acc, { id }) => Math.max(acc, id), 0) + 1;
}

export { getTodos, setTodos, saveTodoCard, generateId };
