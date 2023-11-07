// les-20

// -------------- task 1 --------------
// const reversArr = function (someArr) {
//   const result = [];
//   for (let i = someArr.length - 1; i >= 0; i--) {
//     result.push(someArr[i]);
//   }
//   return result;
// }

// -------------- task 2 --------------
// console.log(reversArr([1, 2, 3, 4, 5]));

// false, undefined
// const cleanFalseValues = function(arrSome) {
//   for (let i = 0; i < arrSome.length; i++) {
//     if (arrSome[i] === false || arrSome[i] === undefined) {
//       arrSome.splice(i, 1)
//       i--;
//     }
//   }
//   return arrSome;
// }
// console.log(cleanFalseValues([1, 2, 3, undefined, 5, 6, false, 7]));

// -------------- task 3 --------------

// const arr = [["a", 1]];

// // const obj = {
// //   a: 1,
// // }

// const transformToObject = function(arr) {
//   const transformedmArr = {};
//   for (let i = 0; i < arr.length; i++) {
//     transformedmArr[arr[i][0]] = arr[i][1];
//   }
//   return transformedmArr;
// }
// console.log(transformToObject(arr));

let student3 = {
  name: "Polina",
  age: 27,
};

let student4 = {
  name: "Polina",
  age: 27,
};

if (Object.keys(student3).length !== Object.keys(student4).length) {
  console.log("Objects are not equal");
}

let objectsIsEqual = true;

for (let key in student3) {
  if (student3[key] !== student4[key]) {
   	objectsIsEqual = false;
  }
}

if (objectsIsEqual !== false) {
  console.log("Objects are equal")
} else {
  console.log("Objects are not equal")
}