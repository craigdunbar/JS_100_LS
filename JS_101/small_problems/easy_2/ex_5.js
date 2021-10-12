// arithmetic integer
// ask user for first number
// ask user for second number
// print results of all the arithmetic operations

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('Enter the first number:'));
let num2 = Number(rlSync.question('Enter the second number:'));

let add = num1 + num2;
let sub = num1 - num2;
let prod = num1 * num2;
let div = Math.floor(num1 / num2);
let rem = num1 % num2;
let pow = num1 ** num2;

console.log(`${num1} + ${num2} = ${add}`);
console.log(`${num1} - ${num2} = ${sub}`);
console.log(`${num1} * ${num2} = ${prod}`);
console.log(`${num1} / ${num2} = ${div}`);
console.log(`${num1} % ${num2} = ${rem}`);
console.log(`${num1} ** ${num2} = ${pow}`);