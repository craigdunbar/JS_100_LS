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
use require.('readline-sync') to get the input 
use the question method to get the user to enter the bill amount 
and the tip percentage
calculate the tip in dollars
calculate the overall bill
display the tip and overall bill amount
*/
let rlSync = require('readline-sync')
let bill = rlSync.question("What is the bill?: ")
let tip = rlSync.question("What is the tip percentage?: ")

let tipDollars = bill * (tip/ 100);
let overall = Number(bill) + Number(tipDollars)

console.log(`The tip is $${tipDollars.toFixed(2)}.`)
console.log(`The total is $${overall.toFixed(2)}`)