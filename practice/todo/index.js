const root = document.querySelector("#root");
root.classList.add("todolistblock");

const createButton = (text, className, onClick) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("button", className);
  button.addEventListener("click", onClick);
  return button;
};

const createInput = (placeholder, className) => {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.classList.add("inputnav", className);
  return input;
};

const createSpan = (text, className) => {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add(className);
  return span;
};

const createTodoCard = () => {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todocard");


    

  
  const todoText = createSpan(todoInput.value, "todotext");
  
  const checkboxButton = createButton("", "checkboxbutton", () => {
    checkboxButton.classList.toggle("checkboxbutton_checked");
    todoCard.classList.toggle("todocard_active");
    todoText.classList.toggle("todotext_line-through");
    updateEntryCounts()
  });

  const todoDate = createSpan(new Date().toLocaleString(), "date");

  const todoCardButtonClose = createButton("X", "buttoncard", () => {
    todoCard.remove();
    updateEntryCounts();
  });

  const conteinerDateBtn = document.createElement("div");
  conteinerDateBtn.classList.add("conteinerdata");

  todoList.append(todoCard);
  todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn);
  conteinerDateBtn.append(todoCardButtonClose, todoDate);
};

const todoInput = createInput("Enter todo ...", "inputnav");

const addButton = createButton("Add", "buttonnav", () => {
  if (todoInput.value) {
    createTodoCard(todoInput.value);
    todoInput.value = "";
    updateEntryCounts();


    // Local Storage functions
    function saveTodoCard(todoCard) {
      const todos = getName();
      const todo = {
        id: generateId(),
        date: new Date().toLocaleString(),
        text: todoCard.querySelector(".todotext").textContent,
        isChecked: todoCard.classList.contains("todocard_active"),
      };
      todos.push(todo);
      setName(todos);

      console.log(todos, todo);
    }

    function getName() {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      return todos;
    }

    function setName(data) {
      localStorage.setItem('todos', JSON.stringify(data));
    }

    function generateId() {
      const todos = getNeme();
      let maxId = 0;
      todos.forEach(todo => {
        if (todo.id > maxId) {
          maxId = todo.id;
        }
      });
      return maxId + 1;
    }




  } 
});

const deleteAllButton = createButton("Delete All", "buttonnav", () => {
  todoList.innerHTML = "";
  updateEntryCounts();
});

const deleteLastButton = createButton("Delete last", "buttonnav", () => {
    todoList.lastChild.remove();
    updateEntryCounts();
  }
);

const todoList = document.createElement("div");
todoList.classList.add("todolistnav");

const todoNavBlock = document.createElement("div");
todoNavBlock.classList.add("todonavblock");

const todoSearch = createInput("Search...", "search");

const showAllButton = createButton("Show All", "buttonshow", () => {
  showAllTodos();
});

const showCompletedButton = createButton("Show Completed", "buttonshow", () => {
  showCompletedTodos();
});

const allEntries = createSpan("All: 0", "entries");

const completedEntries = createSpan("Completed: 0", "entries");

root.append(todoNavBlock, todoList);
todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton,
  allEntries, completedEntries, showAllButton, showCompletedButton, todoSearch);

const updateEntryCounts = () => {
  const allTodos = document.getElementsByClassName("todocard");
  const completedTodos = document.getElementsByClassName("todocard_active");
  allEntries.textContent = `All: ${allTodos.length}`;
  completedEntries.textContent = `Completed: ${completedTodos.length}`;
};

const showAllTodos = () => {
  const todos = document.getElementsByClassName("todocard");
  Array.from(todos).forEach(todo => {
    todo.style.display = "flex";
  });
};

const showCompletedTodos = () => {
  const todos = document.getElementsByClassName("todocard");
  Array.from(todos).forEach(todo => {
    if (todo.classList.contains("todocard_active")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
};

const searchTodos = () => {
  const todos = document.getElementsByClassName("todocard");
  const searchValue = todoSearch.value.toLowerCase();

  Array.from(todos).forEach(todo => {
    const todoText = todo.querySelector(".todotext").textContent.toLowerCase();

    if (todoText.includes(searchValue)) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
};

todoSearch.addEventListener("input", searchTodos);

updateEntryCounts();




// // Local Storage functions
// function saveTodoCard(todoCard) {
//   const todos = getName();
//   const todo = {
//     id: generateId(),
//     date: new Date().toLocaleString(),
//     text: todoCard.querySelector(".todotext").textContent,
//     isChecked: todoCard.classList.contains("todocard_active"),
//   };
//   todos.push(todo);
//   setName(todos);
// }

// function getName() {
//   const todos = JSON.parse(localStorage.getItem("todos")) || [];
//   return todos;
// }

// function setName(data) {
//   localStorage.setItem('todos', JSON.stringify(data));
// }

// function generateId() {
//   const todos = getNeme();
//   let maxId = 0;
//   todos.forEach(todo => {
//     if (todo.id > maxId) {
//       maxId = todo.id;
//     }
//   });
//   return maxId + 1;
// }






// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createButton = (text, className, onClick) => {
//   const button = document.createElement("button");
//   button.textContent = text;
//   button.classList.add("button", className);
//   button.addEventListener("click", onClick);
//   return button;
// };

// const createInput = (placeholder, className) => {
//   const input = document.createElement("input");
//   input.placeholder = placeholder;
//   input.classList.add("inputnav", className);
//   return input;
// };

// const createSpan = (text, className) => {
//   const span = document.createElement("span");
//   span.textContent = text;
//   span.classList.add(className);
//   return span;
// };

// const createTodoCard = (todoTextValue) => {
//   const todoCard = document.createElement("div");
//   todoCard.classList.add("todocard");

//   const checkboxButton = createButton("", "checkboxbutton", () => {
//     checkboxButton.classList.toggle("checkboxbutton_checked");
//     todoCard.classList.toggle("todocard_active");
//     todoText.classList.toggle("todotext_line-through");
//     updateEntryCounts()
//   });

//   const todoText = createSpan(todoTextValue, "todotext");

//   const todoDate = createSpan(new Date().toLocaleString(), "date");

//   const todoCardButtonClose = createButton("X", "buttoncard", () => {
//     todoCard.remove();
//     updateEntryCounts();
//   });

//   const conteinerDateBtn = document.createElement("div");
//   conteinerDateBtn.classList.add("conteinerdata");

//   todoList.append(todoCard);
//   todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn);
//   conteinerDateBtn.append(todoCardButtonClose, todoDate);
// };

// const todoInput = createInput("Enter todo ...", "inputnav");

// const addButton = createButton("Add", "buttonnav", () => {
//   const todoTextValue = todoInput.value;
//   if (todoTextValue !== "") {
//     createTodoCard(todoTextValue);
//     todoInput.value = "";
//     updateEntryCounts();
//   }
// });

// const deleteAllButton = createButton("Delete All", "buttonnav", () => {
//   todoList.innerHTML = "";
//   updateEntryCounts();
// });

// const deleteLastButton = createButton("Delete last", "buttonnav", () => {
//     todoList.lastChild.remove();
//     updateEntryCounts();
//   }
// );

// const todoList = document.createElement("div");
// todoList.classList.add("todolistnav");

// const todoNavBlock = document.createElement("div");
// todoNavBlock.classList.add("todonavblock");

// const todoSearch = createInput("Search...", "search");

// const showAllButton = createButton("Show All", "buttonshow", () => {
//   showAllTodos();
// });

// const showCompletedButton = createButton("Show Completed", "buttonshow", () => {
//   showCompletedTodos();
// });

// const allEntries = createSpan("All: 0", "entries");

// const completedEntries = createSpan("Completed: 0", "entries");

// root.append(todoNavBlock, todoList);
// todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton,
//   allEntries, completedEntries, showAllButton, showCompletedButton, todoSearch);

// const updateEntryCounts = () => {
//   const allTodos = document.getElementsByClassName("todocard");
//   const completedTodos = document.getElementsByClassName("todocard_active");
//   allEntries.textContent = `All: ${allTodos.length}`;
//   completedEntries.textContent = `Completed: ${completedTodos.length}`;
// };

// const showAllTodos = () => {
//   const todos = document.getElementsByClassName("todocard");
//   Array.from(todos).forEach(todo => {
//     todo.style.display = "flex";
//   });
// };

// const showCompletedTodos = () => {
//   const todos = document.getElementsByClassName("todocard");
//   Array.from(todos).forEach(todo => {
//     if (todo.classList.contains("todocard_active")) {
//       todo.style.display = "flex";
//     } else {
//       todo.style.display = "none";
//     }
//   });
// };

// const searchTodos = () => {
//   const todos = document.getElementsByClassName("todocard");
//   const searchValue = todoSearch.value.toLowerCase();

//   Array.from(todos).forEach(todo => {
//     const todoText = todo.querySelector(".todotext").textContent.toLowerCase();

//     if (todoText.startsWith(searchValue)) {
//       todo.style.display = "flex";
//     } else {
//       todo.style.display = "none";
//     }
//   });
// };

// todoSearch.addEventListener("input", searchTodos);

// updateEntryCounts();

















// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createButton = (text, className, onClick) => {
//   const button = document.createElement("button");
//   button.textContent = text;
//   button.classList.add("button", className);
//   button.addEventListener("click", onClick);
//   return button;
// };

// const createInput = (placeholder, className) => {
//   const input = document.createElement("input");
//   input.placeholder = placeholder;
//   input.classList.add("inputnav", className);
//   return input;
// };

// const createSpan = (text, className) => {
//   const span = document.createElement("span");
//   span.textContent = text;
//   span.classList.add(className);
//   return span;
// };

// const createTodoCard = (todoTextValue) => {
//   const todoCard = document.createElement("div");
//   todoCard.classList.add("todocard");

//   const checkboxButton = createButton("", "checkboxbutton", () => {
//     checkboxButton.classList.toggle("checkboxbutton_checked");
//     todoCard.classList.toggle("todocard_active");
//     todoText.classList.toggle("todotext_line-through");
//     updateEntryCounts()
//   });

//   const todoText = createSpan(todoTextValue, "todotext");

//   const todoDate = createSpan(new Date().toLocaleString(), "date");

//   const todoCardButtonClose = createButton("X", "buttoncard", () => {
//     todoCard.remove();
//     updateEntryCounts();
//   });

//   const conteinerDateBtn = document.createElement("div");
//   conteinerDateBtn.classList.add("conteinerdata");

//   todoList.append(todoCard);
//   todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn);
//   conteinerDateBtn.append(todoCardButtonClose, todoDate);
// };

// const todoInput = createInput("Enter todo ...", "inputnav");

// const addButton = createButton("Add", "buttonnav", () => {
//   const todoTextValue = todoInput.value;
//   if (todoTextValue !== "") {
//     createTodoCard(todoTextValue);
//     todoInput.value = "";
//     updateEntryCounts();
//   }
// });

// const deleteAllButton = createButton("Delete All", "buttonnav", () => {
//   todoList.innerHTML = "";
//   updateEntryCounts();
// });

// const deleteLastButton = createButton("Delete last", "buttonnav", () => {
//     todoList.lastChild.remove();
//     updateEntryCounts();
//   }
// );

// const todoList = document.createElement("div");
// todoList.classList.add("todolistnav");

// const todoNavBlock = document.createElement("div");
// todoNavBlock.classList.add("todonavblock");

// const todoSearch = createInput("Search...", "search");

// const showAllButton = createButton("Show All", "buttonshow", () => {
//   showAllTodos();
// });

// const showCompletedButton = createButton("Show Completed", "buttonshow", () => {
//   showCompletedTodos();
// });

// const allEntries = createSpan("All: 0", "entries");

// const completedEntries = createSpan("Completed: 0", "entries");

// root.append(todoNavBlock, todoList);
// todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton,
//   allEntries, completedEntries, showAllButton, showCompletedButton, todoSearch);

// const updateEntryCounts = () => {
//   const allTodos = document.getElementsByClassName("todocard");
//   const completedTodos = document.getElementsByClassName("todocard_active");
//   allEntries.textContent = `All: ${allTodos.length}`;
//   completedEntries.textContent = `Completed: ${completedTodos.length}`;
// };

// // const showAllTodos = () => {
// //   const todos = document.getElementsByClassName("todocard");
// //   for (let i = 0; i < todos.length; i++) {
// //     todos[i].style.display = "flex";
// //   }
// // };

// const showAllTodos = () => {
//   const todos = document.getElementsByClassName("todocard");
//   Array.from(todos).forEach(todo => {
//     todo.style.display = "flex";
//   });
// };

// // const showCompletedTodos = () => {
// //   const todos = document.getElementsByClassName("todocard");
// //   for (let i = 0; i < todos.length; i++) {
// //     if (todos[i].classList.contains("todocard_active")) {
// //       todos[i].style.display = "flex";
// //     } else {
// //       todos[i].style.display = "none";
// //     }
// //   }
// // };

// const showCompletedTodos = () => {
//   const todos = document.getElementsByClassName("todocard");
//   Array.from(todos).forEach(todo => {
//     if (todo.classList.contains("todocard_active")) {
//       todo.style.display = "flex";
//     } else {
//       todo.style.display = "none";
//     }
//   });
// };

// updateEntryCounts();

// ============================================

// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createTodoList = () => {

//   const createButton = (text, className, classNameTwo) => {
//     const button = document.createElement("button");
//     button.textContent = text;
//     button.classList.add("button", className);
//     return button;
//   };

//   const createInput = (placeholder, className) => {
//     const input = document.createElement("input");
//     input.placeholder = placeholder;
//     input.classList.add("inputnav", className);
//     return input;
//   };

//   const createSpan = (text, className) => {
//     const span = document.createElement("span");
//     span.textContent = text;
//     span.classList.add(className);
//     return span;
//   };

//   const todoInput = createInput("Enter todo ...", "inputnav");

//   const addButton = createButton("Add", "buttonnav");

//   const deleteAllButton = createButton("Delete All", "buttonnav");

//   const deleteLastButton = createButton("Delete last", "buttonnav", "deletelast");

//   const todoList = document.createElement("div");
//   todoList.classList.add("todolistnav");

//   const todoNavBlock = document.createElement("div");
//   todoNavBlock.classList.add("todonavblock");

//   const todoSearch = createInput("Search...", "search");

//   const showAllButton = createButton("Show All", "buttonshow");

//   const showCompletedButton = createButton("Show Completed", "buttonshow");

//   const allEntries = createSpan("All: 0", "entries");

//   const completedEntries = createSpan("Completed: 0", "entries")

//   root.append(todoNavBlock, todoList);
//   todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton, allEntries, completedEntries, showAllButton, showAllButton, showCompletedButton, todoSearch);

//   let countNum = 0;
//   const createTodoCard = () => {

//       countNum++;
//       const todoCard = document.createElement("div");
//       todoCard.classList.add("todocard");

//       const checkboxButton = createButton("", "checkboxbutton");

//       const todoText = createSpan(todoInput.value, "todotext");

//       const todoDate = createSpan(new Date().toLocaleString(), "date");

//       const todoCardButtonClose = createButton("X", "buttoncard");

//       const conteinerDateBtn = document.createElement("div");
//       conteinerDateBtn.classList.add("conteinerdata");

//       todoList.append(todoCard);
//       todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn)
//       conteinerDateBtn.append(todoCardButtonClose, todoDate);

//       checkboxButton.addEventListener('click', () => {
//         checkboxButton.classList.toggle("checkboxbutton_checked");
//         todoCard.classList.toggle("todocard_active");
//         todoText.classList.toggle("todotext_line-through");
//       });

//       todoCardButtonClose.addEventListener('click', () => {
//         todoCard.remove();
//         allEntries.textContent = `All: ${getSumTodoCard()}`;
//       });

//       deleteAllButton.addEventListener('click', () => {
//         todoCard.remove();
//         allEntries.textContent = `All: ${0}`;
//       })

//       const getSumTodoCard = () => {
//         const sumTodoCard = document.getElementsByClassName('todocard').length;
//         return sumTodoCard;
//       };
//       allEntries.textContent = `All: ${getSumTodoCard()}`;

//       deleteLastButton.onclick = () => {
//         todoList.lastChild.remove();
//         allEntries.textContent = `All: ${getSumTodoCard()}`;
//       }
//   }
//   addButton.addEventListener('click', () => {
//     const todoTextValue = todoInput.value;
//     if (todoTextValue !== "") {
//       createTodoCard(1);
//       todoInput.value = "";
//     }
//   });
// };
// createTodoList();

// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createTodoList = () => {

//   const createButton = (text, className, classNameOne, classNameTwo) => {
//     const button = document.createElement("button");
//     button.textContent = text;
//     button.classList.add("button", className);
//     return button;
//   };

//   const createInput = (placeholder, className) => {
//     const input = document.createElement("input");
//     input.placeholder = placeholder;
//     input.classList.add("inputnav", className);
//     return input;
//   };

//   const createSpan = (text, className) => {
//     const span = document.createElement("span");
//     span.textContent = text;
//     span.classList.add(className);
//     return span;
//   };

//   const todoInput = createInput("Enter todo ...", "inputnav");

//   const addButton = createButton("Add", "buttonnav");

//   const deleteAllButton = createButton("Delete All", "buttonnav");

//   const deleteLastButton = createButton("Delete last", "buttonnav", "deletelast");

//   const todoList = document.createElement("div");
//   todoList.classList.add("todolistnav");

//   const todoNavBlock = document.createElement("div");
//   todoNavBlock.classList.add("todonavblock");

//   const todoSearch = createInput("Search...", "search");

//   const showAllButton = createButton("Show All", "buttonshow");

//   const showCompletedButton = createButton("Show Completed", "buttonshow");

//   const allEntries = createSpan("All: 0", "entries");

//   const completedEntries = createSpan("Completed: 1", "entries")

//   root.append(todoNavBlock, todoList);

//   todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton, allEntries, completedEntries, showAllButton, showAllButton, showCompletedButton, todoSearch);

//   let idNumCheckbox = 0;
//   const createTodoCard = (cardNumber) => {

//       idNumCheckbox++;
//       const todoCard = document.createElement("div");
//       todoCard.classList.add("todocard");

//       const checkboxButton = createButton("", "checkboxbutton");

//       const todoText = createSpan(todoInput.value, "todoText");

//       const todoDate = createSpan(new Date().toLocaleString(), "date");

//       const todoCardButtonClose = createButton("X", "buttoncard");

//       const conteinerDateBtn = document.createElement("div");
//       conteinerDateBtn.classList.add("conteinerdata");

//       todoList.append(todoCard);
//       todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn)

//       conteinerDateBtn.append(todoCardButtonClose, todoDate);

//       checkboxButton.addEventListener('click', () => {
//         checkboxButton.classList.toggle("checkboxbutton_checked");
//         todoCard.classList.toggle("todocard_active");
//         todoText.classList.toggle("todoText_line-through");
//       });

//       todoCardButtonClose.addEventListener("click", () => {
//         todoCard.remove();
//       });

//       deleteAllButton.addEventListener("click", () => {
//         todoCard.remove();
//       })

//       deleteLastButton.onclick = () => {
//         todoList.removeChild(todoList.lastElementChild);
//       }
//   }

//   addButton.addEventListener("click", () => {
//     const todoTextValue = todoInput.value;
//     if (todoTextValue !== "") {
//       createTodoCard(1);
//       todoInput.value = "";
//     }
//   });
// };
// createTodoList();

// ------------------------ previos version ------------------------

// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createTodoList = () => {

//   const createButton = (text, className) => {
//     const button = document.createElement("button");
//     button.textContent = text;
//     button.classList.add("button");
//     button.classList.add(className);
//     return button;
//   };

//   const createInput = (placeholder, className) => {
//     const input = document.createElement("input");
//     input.placeholder = placeholder;
//     input.classList.add("inputnav");
//     input.classList.add(className);
//     return input;
//   };

//   const createSpan = (text, className) => {
//     const span = document.createElement("span");
//     span.textContent = text;
//     span.classList.add(className);
//     return span;
//   };

//   const todoInput = createInput("Enter todo ...", "inputnav");

//   const addButton = createButton("Add", "buttonnav");

//   const deleteAllButton = createButton("Delete All", "buttonnav");

//   const deleteLastButton = createButton("Delete last", "buttonnav");

//   const todoList = document.createElement("div");
//   todoList.classList.add("todolistnav");

//   const todoSearch = createInput("Search...", "search");

//   const showAllButton = createButton("Show All", "buttonshow");

//   const showCompletedButton = createButton("Show Completed", "buttonshow");

//   const allEntries = createSpan(`All:`, "entries");

//   const completedEntries = createSpan("Completed: 1", "entries")

//   root.append(todoList);
//   todoList.append(deleteAllButton, deleteLastButton, todoInput, addButton, allEntries, completedEntries, showAllButton, showAllButton, showCompletedButton, todoSearch);

//   let idNumCheckbox = 0;
//   const createTodoCard = (cardNumber) => {

//     for (let i = 0; i < cardNumber; i++) {

//       idNumCheckbox++;
//       const todoCard = document.createElement("div");
//       todoCard.classList.add("todocard");

//       const todoCardCheckbox = document.createElement("input");
//       todoCardCheckbox.type = "checkbox";
//       todoCardCheckbox.id = idNumCheckbox + "checkbox";
//       todoCardCheckbox.classList.add("custom-checkbox");

//       const labelCustomCheckbox = document.createElement("label");
//       labelCustomCheckbox.htmlFor = idNumCheckbox + "checkbox";

//       const todoText = createSpan(todoInput.value, "todoText");

//       const todoDate = createSpan(new Date().toLocaleString(), "date");

//       const todoCardButtonClose = createButton("X", "buttoncard");

//       const conteinerDateBtn = document.createElement("div");
//       conteinerDateBtn.classList.add("conteinerdata");

//       todoList.append(todoCard);
//       todoCard.append(todoCardCheckbox, labelCustomCheckbox, todoText, todoDate, todoCardButtonClose, conteinerDateBtn)

//       conteinerDateBtn.append(todoCardButtonClose, todoDate);

//       todoCardButtonClose.addEventListener("click", () => {
//         todoCard.remove();
//       });

//         deleteAllButton.addEventListener("click", () => {
//           todoCard.remove();
//       })

//       // deleteLastButton.addEventListener("click", () => {
//       //   todoList.removeChild(todoList.lastElementChild);
//       // })

//     }
//   }
//   // createTodoCard();

//   addButton.addEventListener("click", () => {
//     const todoTextValue = todoInput.value;
//     if (todoTextValue !== "") {
//       createTodoCard(1);
//       todoInput.value = "";
//     }
//   });

// };
// createTodoList();

// ------------------------ previos version ------------------------

// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createTodoList = (cardNumber) => {

//   const todoInput = document.createElement("input");
//   todoInput.placeholder = "Enter todo ...";
//   todoInput.classList.add("inputnav");

//   const addButton = document.createElement("button");
//   addButton.textContent = "Add";
//   addButton.classList.add("button");
//   addButton.classList.add("buttonnav");

//   const deleteAllButton = document.createElement("button");
//   deleteAllButton.textContent = "Delete All";
//   deleteAllButton.classList.add("button");
//   deleteAllButton.classList.add("buttonnav");

//   const deleteLastButton = document.createElement("button");
//   deleteLastButton.textContent = "Delete last";
//   deleteLastButton.classList.add("button");
//   deleteLastButton.classList.add("buttonnav");

//   const todoList = document.createElement("div");
//   todoList.classList.add("todolistnav");

//   const todoSearch = document.createElement("input");
//   todoSearch.placeholder = "Search...";
//   todoSearch.classList.add("inputnav");
//   todoSearch.classList.add("search");

//   const showAllButton = document.createElement("button");
//   showAllButton.textContent = "Show All";
//   showAllButton.classList.add("button");
//   showAllButton.classList.add("buttonshow");

//   const showCompletedButton = document.createElement("button");
//   showCompletedButton.textContent = "Show Completed";
//   showCompletedButton.classList.add("button");
//   showCompletedButton.classList.add("buttonshow");

//   const allEntries = document.createElement("span");
//   allEntries.textContent = "All: 2";
//   allEntries.classList.add("entries");

//   const completedEntries = document.createElement("span");
//   completedEntries.textContent = "Completed: 1";
//   completedEntries.classList.add("entries");

//   root.append(todoList);
//   todoList.append(deleteAllButton, deleteLastButton, todoInput, addButton, allEntries, completedEntries, showAllButton, showAllButton, showCompletedButton, todoSearch);

//   let num = 0;
//   // Append Todo Card
//   for (let i = 0; i < cardNumber; i++) {
//     num++;
//     const todoCard = document.createElement("div");
//     todoCard.classList.add("todocard");

//     const todoCardCheckbox = document.createElement("input");
//     todoCardCheckbox.type = "checkbox";
//     todoCardCheckbox.id = num + "checkbox";
//     todoCardCheckbox.classList.add("custom-checkbox");

//     const labelCustomCheckbox = document.createElement("label");
//     labelCustomCheckbox.htmlFor = num + "checkbox";

//     const todoText = document.createElement("span");
//     todoText.textContent = "Todo text";
//     todoText.classList.add("todoText");

//     const todoDate = document.createElement("span");
//     todoDate.textContent = "Date";
//     todoDate.classList.add("date");

//     const todoCardButtonClose = document.createElement("button");
//     todoCardButtonClose.textContent = "X";
//     todoCardButtonClose.classList.add("button");
//     todoCardButtonClose.classList.add("buttoncard");

//     const conteinerDateBtn = document.createElement("div");
//     conteinerDateBtn.classList.add("conteinerdata");

//     todoList.append(todoCard);
//     todoCard.append(todoCardCheckbox, labelCustomCheckbox, todoText, todoDate, todoCardButtonClose, conteinerDateBtn)

//     conteinerDateBtn.append(todoCardButtonClose, todoDate);
//   }
// };
// createTodoList(2);

// ===============================================

// if (event.target.classList.contains('card__btn--confirm')) {
//   event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
//   event.target.closest('.card__item').classList.toggle('card__item--checked');
//   event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
// }

// const root = document.querySelector("#root");
// root.classList.add("todolistblock");

// const createTodoList = () => {

//   const createButton = (text, className, classNameTwo) => {
//     const button = document.createElement("button");
//     button.textContent = text;
//     button.classList.add("button", className);
//     return button;
//   };

//   const createInput = (placeholder, className) => {
//     const input = document.createElement("input");
//     input.placeholder = placeholder;
//     input.classList.add("inputnav", className);
//     return input;
//   };

//   const createSpan = (text, className) => {
//     const span = document.createElement("span");
//     span.textContent = text;
//     span.classList.add(className);
//     return span;
//   };

//   const todoInput = createInput("Enter todo ...", "inputnav");

//   const addButton = createButton("Add", "buttonnav");

//   const deleteAllButton = createButton("Delete All", "buttonnav");

//   const deleteLastButton = createButton("Delete last", "buttonnav", "deletelast");

//   const todoList = document.createElement("div");
//   todoList.classList.add("todolistnav");

//   const todoNavBlock = document.createElement("div");
//   todoNavBlock.classList.add("todonavblock");

//   const todoSearch = createInput("Search...", "search");

//   const showAllButton = createButton("Show All", "buttonshow");

//   const showCompletedButton = createButton("Show Completed", "buttonshow");

//   const allEntries = createSpan("All: 0", "entries");

//   const completedEntries = createSpan("Completed: 0", "entries");

//   root.append(todoNavBlock, todoList);
//   todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton, allEntries, completedEntries, showAllButton, showAllButton, showCompletedButton, todoSearch);

//   let countNum = 0;
//   const createTodoCard = () => {

//       countNum++;
//       const todoCard = document.createElement("div");
//       todoCard.classList.add("todocard");

//       const checkboxButton = createButton("", "checkboxbutton");

//       const todoText = createSpan(todoInput.value, "todotext");

//       const todoDate = createSpan(new Date().toLocaleString(), "date");

//       const todoCardButtonClose = createButton("X", "buttoncard");

//       const conteinerDateBtn = document.createElement("div");
//       conteinerDateBtn.classList.add("conteinerdata");

//       todoList.append(todoCard);
//       todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn)
//       conteinerDateBtn.append(todoCardButtonClose, todoDate);

//       // checkboxButton.addEventListener('click', () => {
//       //   checkboxButton.classList.toggle("checkboxbutton_checked");
//       //   todoCard.classList.toggle("todocard_active");
//       //   todoText.classList.toggle("todotext_line-through");
//         // getShowCheckingTodoCard();
//       // });

//       todoCardButtonClose.addEventListener('click', () => {
//         todoCard.remove();
//         allEntries.textContent = `All: ${getSumTodoCard()}`;
//       });

//       deleteAllButton.addEventListener('click', () => {
//         todoCard.remove();
//         allEntries.textContent = `All: ${0}`;
//       })

//       const getSumTodoCard = () => {
//         const sumTodoCard = document.getElementsByClassName('todocard').length;
//         return sumTodoCard;
//       };
//       allEntries.textContent = `All: ${getSumTodoCard()}`;

//       deleteLastButton.onclick = () => {
//         todoList.lastChild.remove();
//         allEntries.textContent = `All: ${getSumTodoCard()}`;
//       }

//       root.addEventListener('click', (event) => {
//         if (event.target.classList.contains('checkboxbutton')) {
//           event.target.closest('.todocard').classList.toggle('todocard_active')
//           event.target.closest('.checkboxbutton').classList.toggle('checkboxbutton_checked')
//           event.target.closest('.todocard').querySelector('.todotext').classList.toggle('todotext_line-through')
//         }
//         const getShowCheckingTodoCard = () => {
//           const checkTodoCard = document.getElementsByClassName('todocard_active').length;
//           return checkTodoCard;
//         };
//         completedEntries.textContent = `Completed: ${getShowCheckingTodoCard()}`;
//       });

//   }
//   addButton.addEventListener('click', () => {
//     const todoTextValue = todoInput.value;
//     if (!todoTextValue.value) {
//       createTodoCard(1);
//       todoInput.value = "";
//     }
//   });
// };
// createTodoList();
