// --------------------------les 21-------------------------------

/* Создайте стрелочную функцию rgb() , которая будет принимать три
числовых аргумента и возвращать строку вида 'rgb(23, 100, 134)' .
Если аргументы не заданы, считать их равными нулю. Не проверять
переменные на тип данных. */

// const rgb = (r, g, b) => `gb(${r}, ${g}, ${b})`;
// console.log(rgb(13, 2, 133));

// ---------------------------------------------------------------
// Переписать код ниже с использованием стрелочных функций:

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// ---------------------------------------------------------------
/* Есть функция confirmPassword() , у которой 3 параметра:
password — строка с паролем;
runSuccess — функция, которая вызывается, если пароль прошел
проверку;
runError — функция, которая вызывается, если пароль не прошел
проверку.
Функция confirmPassword() при вызове показывает prompt окно, в
котором пользователь должен подтвердить свой пароль. Если
password совпадает с полученным из prompt значением, то вызывается
функция runSuccess() , в противном случае — runError() .
На место runSuccess передаем стрелочную функцию, которая
показывает сообщение в alert вида «Пароль успешно подтвержден»,
на место runError — «Пароль не совпадает».
Пример: */

// const confirmPassword = function(password, runSuccess, runError) {
// 	if (prompt(password) === "1234") {
//   	runSuccess()
//   } else {
//   		runError()
//   }
// }

// confirmPassword(
// '1234', // 1 аргумент
// () => { // 2 аргумент
// 	alert("Пароль успешно подтвержден")
// },
// () => { // 3 аргумент
// 	alert("Пароль не совпадает")
// }
// )

// ---------------------------------------------------------------
/* 1. Используя метод forEach , вывести в консоль только
положительные числа.
2. Создать новый массив, состоящий из абсолютных значений чисел
массива numbers . Решить через метод map . Для получения
абсолютного значение можно воспользоваться методом Math.abs .
3. Найти в исходном массиве число 0 . Берем метод find .
4. Получить новый массив, состоящий только из отрицательных
чисел, для решения используем метод filter .
5. Через reduce посчитать сумму всех чисел в массиве. */

// const numbers = [32, -7, 74, 0, -46, -2, 101, -13]

// ---------------------------------------------------------------
// let arr = [1, 2, 3, 3, 3, 4, 4, 4, 5,];

// const findUniValues = (arr) => {
//   return arr.reduce((resultObj, currentValue) => {
//     resultObj[currentValue] = currentValue;
//   }, {});
// }


// ---------------------------------------------------------------



// ['codewars', 'flick', 'code', 'wars', 'flick', 'flick', 'code', 'wars', 'flick']

// function replaceToBooleans (array) {
//   let currentBooleanValue = true;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "flick") {
//       currentBooleanValue = !currentBooleanValue;
//         array[i] = currentBooleanValue;
//     } else {
//       array[i] = currentBooleanValue;
//     }
//   }
//   return array;
// }


const replaceToBooleans = (array) => {
  const getReplaceBoolFalsTru = array.map(value => value === "flick" ? value = !true : value = true)
  return getReplaceBoolFalsTru
};

console.log(replaceToBooleans(['codewars', 'flick', 'code', 'wars', 'flick', 'flick', 'code']))


// const replaceToBooleans = (array) => {
//   const replaceBoolFalsTru = array.reduce((ac, value) => ac.concat(value === "flick" ? value = !true : value = true), []);
//   return replaceBoolFalsTru;
// };

// console.log(replaceToBooleans(['codewars', 'flick', 'code', 'wars', 'flick', 'flick', 'code']))







const transformStr = (str) => {
  return str.toLowerCase().split('').map((letter, _, arr) => {
  return arr.indexOf(letter) === arr.lastIndexOf(letter) ? '(' : ')'
  }).join('');
}

console.log(transformStr("din")); // Output: (((
console.log(transformStr("recede")); // Output: ()()()
console.log(transformStr("Success")); // Output: )())())
console.log(transformStr("(( @")); // Output: "))((