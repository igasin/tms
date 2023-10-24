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

let d = Number(!!'доступ');
let e = Number(!!'морпех');
let f = Number(!!'наледь');
let g = Number(!!'попрек');
let j = Number(!!'рубило');

let lengthWords = d + e + f + g + j;

console.log(lengthWords);

// task 6

let i = 'Just do it!';
let k = 777;
let l = true;

console.log(typeof i, typeof k, typeof l);


// task 7

function userData() {
  let userName = prompt('Enter your name')
  let userAge = prompt('Enter your age')

  console.log(userName + ' ' + userAge + ' ' + 'years old')
}