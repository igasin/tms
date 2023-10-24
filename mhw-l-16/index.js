// task 1

let x = 20;
let y = 58;
let z = 42;

let resultSumm = (x + y +z);
console.log(resultSumm);

// console.log(x + y +z);

// task 2

const secInMinute = 60;
const minuteInHour = 60;
const hoursInDay = 24;
const dayInYear = 365;

let myAge = 45;

let myAgeInSeconds = myAge * dayInYear * hoursInDay * minuteInHour * secInMinute;

console.log(myAgeInSeconds);

// task 3

let count = 42;
let userName = '42';
console.log(typeof count, typeof userName);

count = String(count);
userName = Number(userName);
console.log(typeof count, typeof userName);

count = 42;
userName = '42';
console.log(typeof count, typeof userName);

// count = '' + count;
// count = `${count}`;
count = count.toString();
// userName = + userName;
userName = parseInt(userName);
console.log(typeof count, typeof userName);

// task 4

let a = 1
let b = 2
let c = 'белых медведей'

console.log((a = String(a)) + (b = String(b)) + ' ' + c);

// task 5

