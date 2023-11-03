// les-19

// function checkIsTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkIsTriangle(1, 1, 5));
// console.log(checkIsTriangle(5, 3, 6));
// console.log(checkIsTriangle(10, 13, 2));
// console.log(checkIsTriangle(10, 5, 8));

// const user = {
//   name: "petya",
//   lastname: "ivanov",
// }

// user.name = "andrey";
// delete user.lastname;
// console.log(user.name);

// function checkObjEmpty(obj) {
//   let counter = 0;
//   for (let key in obj) {
//     if (key) {
//       counter += 1;
//     }
//   }
//   if (counter > 0) {
//     return false;
//   } else {
//     return true
//   }
// }

const ladder = {
  floor: 0,
  ladderUp: function() {
    this.floor++ 
    return this
  },
  ladderDown: function() {
    this.floor--
  },
  showFloor: function() {
    console.log(this.floor)
    return this
    
  }
}
console.log(ladder.ladderUp().ladderUp().showFloor());