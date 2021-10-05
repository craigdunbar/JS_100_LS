// tip calculator
// ask user for the bill amount
// ask user for the tip amount
// print the tip amount
// print the total bill

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("What is the bill?");
let bill = rlSync.question();

prompt("What is the tip percentage?");
let percent = rlSync.question();

let tip = Number(bill) * (Number(percent) / 100);
let total = Number(bill) + Number(tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);