// les-18

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }


// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }



// let num;

// do {
//   num = prompt("type num > 100?", 0);
// } while (num <= 100 && num) {
//   console.log("good")
// }

// let n = 20;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for all i...

//   for (let j = 2; j < i; j++) { // check if a number is divisible..
//     if (i % j == 0) continue nextPrime; // doesn’t fit, take the following
//   }

//   console.log(i); // simple number
// }



// function greetingUser() {
//   let userName = prompt("Enter our name...", "Name")
//   console.log(userName)
// }
// greetingUser();

// function calcFactorial(factorial) {
//   let result = 1;
//   for (let i = 1; i <= factorial; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(calcFactorial(5));

// Преобразование суммы в монеты.
// Напишите функцию JavaScript для преобразования суммы в монеты.
// Пример функции : amount_coins(96, [25, 10, 5, 2,1])
// Здесь 96 - сумма, а 25, 10, 5, 2, 1 - монеты.
// Вывод : 25,25,25,10,10,1


// function sumCoins(total) {
//   const coins = {
//     coins1: 25,
//     coins2: 10,
//     coins3: 5,
//     coins4: 2,
//     coins5: 1
//   }
//   let quantityCoins1 = (total -(total - coins.coins1)) / coins.coins1;
//   let totalAfterTwentyfive = total - (quantityCoins1 * coins.coins1);

//   if (total % coins1) {

//   }
// }





const checkToEven = function(tempNumber) {
  if (tempNumber % 2 === 0) {
    return "even"
  }
  return "odd"
}
console.log(checkToEven(9));