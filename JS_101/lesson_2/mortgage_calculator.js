/*
# -----------------------INSTRUCTIONS------------------------
# Mortgage Calculator
# Write a program that asks the user to enter the loan amount,
# the APR and the loan duration.
# from this calculate the monthly payment.
# --------------------------PROBLEM--------------------------
# Input: strings 
# Output: number with 2 decimal places
# ---------------------------RULES---------------------------
# Explicit: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
            m = monthly payment
            p = loan amount
            j = monthly interest rate
            n = loan duration in months
# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# require readline-sync 
# ask the user for the loan amount in dollars
# ask the user for the APR
# aks the user for the loan duration in months
# calculcate the monthly payment using the formula
# print the monthly payment
*/
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || 
  Number.isNaN(Number(number)) ||
  number === '0' ||
  number.startsWith('-');
}

let rlSync = require('readline-sync');
let loanAmount = rlSync.question(prompt("Enter the loan amount:"));
while (invalidNumber(loanAmount)) {
  prompt("This is not a valid number");
  loanAmount = rlSync.question(prompt("Enter the loan amount:"));
}

let APR = rlSync.question(prompt("Enter the Annual Percentage Rate (APR):"));
let loanDuration = rlSync.question(prompt("Enter the loan duration in months:"));
let monthlyRate = ((APR / 100) / 12);
let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
console.log(`The monthly payment is $${monthlyPayment.toFixed(2)}`);
