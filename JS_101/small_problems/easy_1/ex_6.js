// sum or product of consecutive numbers
// get number greater than 0 from user
// get sum or product from user
// calculate given operation on numbers between 1 and given number
const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

let num = Number(rlSync.question(prompt("Enter an integer greater than 0:")));
let operation = rlSync.question(prompt("Enter 's' for sum or 'p' for product"));

let sum = 0;
let product = 1;
if (operation === 's') {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
} else if (operation === 'p') {
  for (let i = 0; i <= num; i++) {
    product += product * i;
  }
  console.log(`The product of the integers between 1 and ${num} and is ${product}`);
}
// refactor