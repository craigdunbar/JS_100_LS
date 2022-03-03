/*
# -----------------------INSTRUCTIONS------------------------
Tip calculator

Create a program that asks for the bill amount and a tip 
rate.
The program must compute the tip and then log both the tip and
 the total amount to the console.

# --------------------------PROBLEM--------------------------

# Input: use input for bill amount ant tip percentage
# Output: string showing tip amount 
          string showing total amount
# ---------------------------RULES---------------------------
# Explicit: ignore validation

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
# ----------------------------ALGO---------------------------
# use require to install readline-sync
ask the user for the bill amount
assign this value to the bill variable using prompt method
ask the user for the tip percentage
save this value to the tip variable using prompt
Calculate the tip amount as bill * tip
calculate the total amount as bill plus tip amount
log tip
log total bill
*/
let readline = require('readline-sync');

console.log("What is the bill?");
let bill = parseFloat(readline.prompt());

console.log("What is the tip percentage?");
let tip = parseFloat(readline.prompt());

let tipAmount = (bill * tip/100);
total = tipAmount + bill 

console.log(`The tip is : $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);