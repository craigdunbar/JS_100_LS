// sum or product of consecutive numbers
// get number greater than 0 from user
// get sum or product from user
// calculate given operation on numbers between 1 and given number

// const rlSync = require('readline-sync');

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// let num = Number(rlSync.question(prompt("Enter an integer greater than 0:")));
// let operation = rlSync.question(prompt("Enter 's' for sum or 'p' for product"));

// let sum = 0;
// let product = 1;
// if (operation === 's') {
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
// } else if (operation === 'p') {
//   for (let i = 0; i <= num; i++) {
//     product += product * i;
//   }
//   console.log(`The product of the integers between 1 and ${num} and is ${product}`);
// }
// refactored
// function prompt(message) {
//   console.log(`=> ${message}`);
// }
// function getSum(userNum) {
//   let total = 0;

//   for (let i = 1; i <= userNum; i++) {
//     total += i;
//   }
//   return total;
// }

// function getProduct(userNum) {
//   let total = 1;

//   for (let i = 1; i <= userNum; i++) {
//     total *= i;
//   }
//   return total;
// }

// let rlSync = require('readline-sync');

// let num = Number(rlSync.question(prompt("Enter an integer greater than 0:")));
// let operation = rlSync.question(prompt("Enter 's' for sum or 'p' for product"));

// if (operation === 's') {
//   let sum = getSum(num);
//   console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
// } else if (operation === 'p') {
//   let product = getProduct(num);
//   console.log(`The product of the integers between 1 and ${num} and is ${product}`);
// } else {
//   console.log("Invalid operation");
// }

// further exploration
let userNum = [1, 2, 3, 4];

function prompt(message) {
  console.log(`=> ${message}`);
}

function getSum(userNum) {
  total = userNum.reduce((previousValue, currentValue) => previousValue + currentValue);
  return total
}

function getProduct(userNum) {
  total = userNum.reduce((previousValue, currentValue) => previousValue * currentValue);
  return total
}
let rlSync = require('readline-sync');

let operation = rlSync.question(prompt("Enter 's' for sum or 'p' for product"));

if (operation === 's') {
  let sum = getSum(userNum);
  console.log(`The sum of the integers between 1 and ${userNum} is ${sum}`);
} else if (operation === 'p') {
  let product = getProduct(userNum);
  console.log(`The product of the integers between 1 and ${userNum} and is ${product}`);
} else {
  console.log("Invalid operation");
}