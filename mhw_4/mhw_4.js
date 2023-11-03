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



// ------------------ Advanced level Task 3 -----------------