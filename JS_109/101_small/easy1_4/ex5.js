/*
# -----------------------INSTRUCTIONS------------------------
Tip calculator

Create a program that asks for the bill amount and a tip 
rate.
The program must compute the tip and then log both the tip and
 the total amount to the console.

# --------------------------PROBLEM--------------------------

# Input: user iput bill amount and tip rate
# Output: 
# ---------------------------RULES---------------------------
# Explicit: ignore validation

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
# ----------------------------ALGO---------------------------
# use readline-sync to get user input for bill and tip
calculate the tip amount and total bill
- convert bill to a Number
- tip = bill * tip in percent
- total = bill + tip
use toFixed(2) to return the correct digits after the decimal
*/
let rlSync = require('readline-sync');
let bill = rlSync.question('What is the bill? ');
let tip = rlSync.question('What is the tip percentage? ');

let tipAmount = (tip/ 100) * Number(bill)
let total = Number(bill) + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
