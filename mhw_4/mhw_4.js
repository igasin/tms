// ------------------------- Task 1 -------------------------

function showResultFirstTask() {

  function getSum(someNumber) {
    let resSum = 0;
    for (let i =1; i<= someNumber; i++) {
      resSum += i;
    }
    return resSum;
  }
  console.log(getSum(100));

  // const resultSum = function getSum(someNumber) {
  //   let enteredNumber = prompt("type some number");
  //   let resultSum = 0;
  //   for (let i = 1; i <= enteredNumber; i++) {
  //     resultSum += i;
  //   }
  //   return resultSum;
  // }
  // console.log(resultSum());

}

// ------------------------- Task 2 -------------------------

function showResultSecondTask() {

  function getDividers(divisibleNumber) {
    let dividersNumbers = "getDividers(10): 1";
    for (let i = 2; i <= divisibleNumber; i++) {
      if (divisibleNumber % i === 0) {
        dividersNumbers += `, ${i}`;
      } 
    }
    return dividersNumbers;
  }
  console.log(getDividers(10));

}

// ------------------------- Task 3 -------------------------

function showResultThirdTask() {

  function trimString(someStr, from, to) {
    let trimStr = "";
    for (let i = from - 1; i < someStr.length && i < to; i++) {
      trimStr += someStr[i];
    }
    return trimStr;
  }
  console.log(trimString("I really hope :) it works!?", 5, 16));

  // temp variant

  // function trimString(someStr, from, to) {
  //   if (typeof someStr !== 'string' || typeof from !== 'number' || typeof to !== 'number') {
  //     console.log("Invalid input parameters!");
  //   } else {
  //     let trimStr = "";   
  //   for (let i = from - 1; i < someStr.length && i < to; i++) {
  //     trimStr += someStr[i];
  //   }  
  //   return trimStr
  //   } 
  // }  
  // console.log(trimString("I really hope :) it works!?", 5, 16));

}

// ------------------------- Task 4 -------------------------

function showResultFourthTask() {

  function getSumNumbers(inpNum) {
    let sumNum = 0;
    let numToString = String(inpNum);
    for (let i = 0; i < numToString.length; i++) {
      sumNum += +numToString[i];
    }
    return sumNum
  }
  console.log(getSumNumbers(2021));

}

// ------------------------- Task 5 -------------------------

function showResultFifthTask() {

  function getSum(a, b) {
    if (a === b) {
      return a;
    }
    let resultSum = 0;
    if (a < b) {
      for (let i = a; i <= b; i++) {
        resultSum += i;
      } 
    } else {
        for (let i = b; i <= a; i++) {
          resultSum += i;
        }
      }
      return resultSum;
    }    
  
  console.log(getSum(1, 0));
  console.log(getSum(1, 2));
  console.log(getSum(0, 1));
  console.log(getSum(1, 1));
  console.log(getSum(-1, 0));
  console.log(getSum(-1, 2));

}

// ------------------------- Task 6 -------------------------

function showResultSixthTask() {

  function fooBoo(booleanValue, foo, boo) {
    if (booleanValue === true) { 
      foo()
    } else { 
      boo()
     }
   }
    
  function foo() {
  console.log("foo");
  }
  
  function boo() {
  console.log("boo");
  }
  
  fooBoo(true, foo, boo);
  fooBoo(false, foo, boo);
  
}

// ------------------ Advanced level Task 1 -----------------

function showResultFirstTaskAdvanced() {

  function checkIsTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(checkIsTriangle(1, 1, 5));
  console.log(checkIsTriangle(5, 3, 6));
  console.log(checkIsTriangle(10, 13, 2));
  console.log(checkIsTriangle(10, 5, 8));

}

// ------------------ Advanced level Task 2 -----------------

function showResultSecondTaskAdvanced() {

const showNumberOfSquares = function(n, m) {
  if (n === 0 || m === 0 || n < 0 || m < 0) {
    return 0;
  } else {
    return n * m -1;
  }
}

console.log(`Chocolate 2 by 1, how many breaks? result: ${showNumberOfSquares(2, 1)}`)
console.log(`Chocolate 3 by 1, how many breaks? result: ${showNumberOfSquares(3, 1)}`)
console.log(`Chocolate 1 by 1, how many breaks? result: ${showNumberOfSquares(1, 1)}`)

}

// ------------------ Advanced level Task 3 -----------------

function showResultThirdTaskAdvanced() {

  // let bankDeposit  = 9000;

// let phonePrice = 1500;
// let casePrice = 60;


// // function to calculate tax
// function calculateTax(amount) {
//   return amount * taxRate;
// }

// // function for formatting price
// function formatPrice(amount) {
//   return `$ ${amount.toFixed(2)}`;
// }

// let totalPrice = 0;

// // purchase phones and accessories
// while (totalPrice + phonePrice + calculateTax(totalPrice + phonePrice) + casePrice < bankDeposit) {
//   totalPrice += phonePrice + casePrice;
// }

// // tax calculation
// let tax = calculateTax(totalPrice);

// // calculating the total price + tax
// let finalPrice = totalPrice + tax;

// // total purchase price
// console.log(`Purchase amount: ${formatPrice(finalPrice)}`);

// // Can I afford the purchase or not?
// if (finalPrice < bankDeposit) {
//   console.log("Yes I can buy");
// } else {
//   console.log("I can't do it");
// }

// let bankDeposit = prompt("Type your balance:");
let bankDeposit = 5000;

let phonePrice = 1000;
let casePrice = 50;
let taxRate = 0.05;

// purchase phones and accessories
let totalPrice = 0;
while (totalPrice < bankDeposit - phonePrice + casePrice) {
  totalPrice += phonePrice + casePrice;
}
// console.log(totalPrice);

// function to calculate tax
function calculateTax(totalPrice) {
  return totalPrice * taxRate;
}
// console.log(calculateTax(totalPrice));

// tax calculation
totalPrice += calculateTax(totalPrice);

// function for formatting price
function formatPrice(totalPrice) {
  return `$${totalPrice.toFixed(2)}`;
}

// purchase amount
console.log(`Purchase amount: ${formatPrice(totalPrice)}`);

// Checking your bank account balance
if (totalPrice < bankDeposit) {
  console.log("You can buy this");
} else {
  console.log("No money");
}

}