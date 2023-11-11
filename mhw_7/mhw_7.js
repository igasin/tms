// ------------------------- Task 1 -------------------------
// Выведи все элементы массива в консоль с помощью метода forEach.
// Реализуйте решение двумя способами, используя 
// function declaration & arrow function

// array.forEach(callback(value, index, array), this)

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// function declaration
function printArrayElement (element) {
  console.log(element);
}

fibonacci.forEach(printArrayElement);


// arrow function
fibonacci.forEach((value) => console.log(value)); 



// ------------------------- Task 2 -------------------------
// Используя метод map создайте новый массив, на основе массива 
// users, в котором каждый элемент массива будет содержать 
// строку вида: ['member 1: Darya', 'member 2: Masha', ... etc]
// Реализуйте решение двумя способами, используя 
// function declaration & arrow function.


const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// function declaration
function getNewArrayUsers (value, index) {
  return `member ${index + 1}: ${value}`
};

const newArrayusers = users.map(getNewArrayUsers);

console.log(newArrayusers);


// arrow function
const newUsers = users.map((value, index) => `member ${index + 1}: ${value}`);

console.log(newUsers);

// ------------------------- Task 3 -------------------------
// С помощью метода filter создайте новый массив в котором не 
// будет отрицательных чисел. 
// Реализуйте решение двумя способами, используя 
// function declaration & arrow function.

const numbers = [7, -4, 32, -90, 54, 32, -21]

// // function declaration
// function getPositiveNumbers (numbers) {
//   return 
// }


// arrow function
const positiveNubers = numbers.filter((value) => {
  return value > 0;
});

console.log(positiveNubers);


// ------------------------- Task 4 -------------------------



// ----------------- Advanced level Task 1 ------------------

