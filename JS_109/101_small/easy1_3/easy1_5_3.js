/*
# -----------------------INSTRUCTIONS------------------------
Tip calculator

Create a program that asks for the bill amount and a tip 
rate.
The program must compute the tip and then log both the tip and
 the total amount to the console.

# --------------------------PROBLEM--------------------------

# Input: user input for bill amount and tip rate
# Output: tlog the ip amoiunt and total bill
# ---------------------------RULES---------------------------
# Explicit: ignore validation

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
# ----------------------------ALGO---------------------------
# use readline-sync to get the input from the user
calculate the tip amount
log the tip amount and the total bill with 2 dp
*/
let rlSync = require('readline-sync');
let bill = rlSync.question('What is the bill?: ');
let tip = rlSync.question('What is the tip percentage?: ');
let tipAmount = (Number(tip) / 100) * Number(bill);
let totalBill = Number(bill) + tipAmount 

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`)
