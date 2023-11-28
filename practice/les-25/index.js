// ------ les-25 ------

const numbersArr = [1, 2, 3, {name: "abc", data: {result: 10}}];

// const [a, b, c, d] = numbersArr;

// console.log(a, b, c, d);

// let [aa, ,cc] = numbersArr; 

// console.log(aa, cc);

// [cc, aa] = [aa, cc];

// console.log(aa, cc);

const [_, __, ___, {data: {result}}] = numbersArr;

console.log(result);