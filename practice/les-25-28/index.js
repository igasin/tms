// ------ les-25 ------
// const helpers = {
//   getValue2: function (array, key) {
//     let res = [];
//       for (let i = 0; i < array.length; i++) {
//       res. push(array[i][key]);
//     return res;
//   },
//     mapArray: function (array, key) [
//       let result = {};
//         for (let i = 0; i < array.length; i++) {
//         result[array[i][key]] = array[i];
//   }
//   return result;
//   }
// }  
//   export const getValue = helpers.getValue2;
//   export const mapArray = helpers.mapArray;








// const numbersArr = [1, 2, 3, {name: "abc", data: {result: 10}}];

// const [a, b, c, d] = numbersArr;

// console.log(a, b, c, d);

// let [aa, ,cc] = numbersArr; 

// console.log(aa, cc);

// [cc, aa] = [aa, cc];

// console.log(aa, cc);

// const [_, __, ___, {data: {result}}] = numbersArr;

// console.log(result);



// function arrayDiff(a, b) {
  
//   return a.filter((el) => !b.includes(el));
  
// }

// task - 1

// function arrayDiff(a, b) {
  
//   let newArr = [];
  
//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// }

// console.log(arrayDiff([1,2,3], [1,2]));

// // task - 2

// function createPhoneNumber(numbers){
  
//   return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.splice(6, 9).join('')}`
  
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// // task - 3

// function persistence(num) {
  
//   let count = 0;

//   while (num >= 10) {

//     let product = 1;
//     for (let digit of String(num)) {
//       product *= parseInt(digit);
//     }
//     num = product;
//     count++;
//   }
//   return count;
// }  

// console.log(persistence(39));
