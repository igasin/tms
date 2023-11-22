const root = document.querySelector("#root");
root.classList.add("todolistblock");

const createTodoList = () => {

  const createButton = (text, className, classNameOne, classNameTwo) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("button", className);
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

  const todoInput = createInput("Enter todo ...", "inputnav");

  const addButton = createButton("Add", "buttonnav");

  const deleteAllButton = createButton("Delete All", "buttonnav");

  const deleteLastButton = createButton("Delete last", "buttonnav", "deletelast");

  const todoList = document.createElement("div");
  todoList.classList.add("todolistnav");

  const todoNavBlock = document.createElement("div");
  todoNavBlock.classList.add("todonavblock");

  const todoSearch = createInput("Search...", "search");

  const showAllButton = createButton("Show All", "buttonshow");

  const showCompletedButton = createButton("Show Completed", "buttonshow");

  const allEntries = createSpan("All: 0", "entries");

  const completedEntries = createSpan("Completed: 1", "entries")

  root.append(todoNavBlock, todoList);
  
  todoNavBlock.append(deleteAllButton, deleteLastButton, todoInput, addButton, allEntries, completedEntries, showAllButton, showAllButton, showCompletedButton, todoSearch);

  let idNumCheckbox = 0;
  const createTodoCard = (cardNumber) => {

      idNumCheckbox++;
      const todoCard = document.createElement("div");
      todoCard.classList.add("todocard");

      const checkboxButton = createButton("", "checkboxbutton");

      const todoText = createSpan(todoInput.value, "todoText");

      const todoDate = createSpan(new Date().toLocaleString(), "date");

      const todoCardButtonClose = createButton("X", "buttoncard");

      const conteinerDateBtn = document.createElement("div");
      conteinerDateBtn.classList.add("conteinerdata");

      todoList.append(todoCard);
      todoCard.append(checkboxButton, todoText, todoDate, todoCardButtonClose, conteinerDateBtn)

      conteinerDateBtn.append(todoCardButtonClose, todoDate);

      checkboxButton.addEventListener('click', () => {
        checkboxButton.classList.toggle("checkboxbutton_checked");
        todoCard.classList.toggle("todocard_active");
        todoText.classList.toggle("todoText_line-through");
      });
      
      todoCardButtonClose.addEventListener("click", () => {
        todoCard.remove();
      });

      deleteAllButton.addEventListener("click", () => {
        todoCard.remove();
      })

      deleteLastButton.onclick = () => {
        todoList.removeChild(todoList.lastElementChild);
      }
  }

  addButton.addEventListener("click", () => {
    const todoTextValue = todoInput.value;
    if (todoTextValue !== "") {
      createTodoCard(1);
      todoInput.value = "";
    }
  });
};
createTodoList();





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