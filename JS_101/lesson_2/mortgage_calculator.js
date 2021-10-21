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

const MESSAGES = require('./mortgage_calculator_messages.json');
let rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptyLine() {
  console.log('');
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
  Number.isNaN(Number(number)) ||
  number === '0' ||
  number < 1 ||
  number.startsWith('-');
}

function invalidPercentage(percent) {
  return percent > 100 ||
  percent <= 0 ||
  percent.trimStart() === '' ||
  percent.startsWith('-') ||
  Number.isNaN(Number(percent));
}

function getLoan() {
  prompt(MESSAGES['loanAmount']);
  let loanAmount = rlSync.question();
  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNumber']);
    loanAmount = rlSync.question(prompt(MESSAGES['loanAmount']));
  }
  return Number(loanAmount);
}

function getAPR() {
  prompt(MESSAGES['apr']);
  let APR = rlSync.question();
  while (invalidPercentage(APR)) {
    prompt(MESSAGES['invalidPercent']);
    APR = rlSync.question(prompt(MESSAGES['apr']));
  }
  return Number(APR);
}

function getDuration() {
  prompt(MESSAGES['loanDuration']);
  let loanDuration = rlSync.question();
  while (invalidNumber(loanDuration)) {
    prompt(MESSAGES['invalidNumber']);
    loanDuration = rlSync.question(prompt(MESSAGES['loanDuration']));
  }
  return Number(loanDuration);
}

function calcMonthlyPayment(APR, loanAmount, loanDuration) {
  let monthlyRate = ((APR / 100) / 12);
  let monthlyPayment = loanAmount * (monthlyRate /
    (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
  return monthlyPayment;
}

function displayPayment(monthlyPayment) {
  console.log(`The monthly payment is $${monthlyPayment.toFixed(2)}`);
}

function askToPlayAgain() {
  prompt(MESSAGES['anotherCalc']);
  let again = rlSync.question();
  while (again !== 'y' && again !== 'n') {
    prompt(MESSAGES['invalidAnswer']);
    again = rlSync.question(prompt(MESSAGES['anotherCalc']));
  }
  return again;
}
console.clear();


console.clear();
prompt(MESSAGES['welcome']);
emptyLine();

while (true) {

  let loanAmount = getLoan();
  emptyLine();

  let APR = getAPR();
  emptyLine();

  let loanDuration = getDuration();
  emptyLine();

  let monthlyPayment = calcMonthlyPayment(APR, loanAmount, loanDuration);

  displayPayment(monthlyPayment);
  emptyLine();

  let again = askToPlayAgain();
  if (again === 'n') {
    prompt(MESSAGES['goodbye']);
    break;
  }
  console.clear();
}