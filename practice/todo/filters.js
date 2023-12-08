import { todos, todoSearch, filters, activeStatuses } from "./index.js";

// export const filters = {
//   checked: "checked",
//   search: "search",
// };

// export let activeStatuses = [];

export function showAll(activeStatuses, renderChangedData) {
  if (activeStatuses.includes(filters.checked)) {
    activeStatuses = activeStatuses.filter((el) => el !== filters.checked);
  }
  renderChangedData();
}

export function showSearch(activeStatuses, renderChangedData) {
  if (!activeStatuses.includes(filters.search)) {
    activeStatuses.push(filters.search);
  }
  renderChangedData();
}

export function showChecked(activeStatuses, renderChangedData) {
  if (!activeStatuses.includes(filters.checked)) {
    activeStatuses.push(filters.checked);
  }
  renderChangedData();
}

export function getFiltered(todos) {
  return todos.filter((el) => {
    return el.isChecked;
  });
}

export function getFieldsByText(todos, searchValue) {
  return todos.filter((el) =>
    el.text.toLowerCase().includes(searchValue.toLowerCase())
  );
}

export function getFilteredData() {
  let data = todos;
  if (activeStatuses.includes(filters.checked)) {
    data = getFiltered(data);
  }

  if (activeStatuses.includes(filters.search)) {
    data = getFieldsByText(data, searchValue);
  }

  return data;
}

export function searchTodos() {
  let searchValue = todoSearch.value.toLowerCase();

  showSearch();
}