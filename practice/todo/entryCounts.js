import { allEntries, completedEntries } from "./index.js";

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

export { calculateTotal, updateEntryCounts };
