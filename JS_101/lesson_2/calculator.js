/*
Calculator
# -----------------------INSTRUCTIONS--------------------------------------
# Ask the user for two numbers.
# Ask the user for the type of operation to
# perform: add, subtract, multiply or divide.
# Perform the calculation and display the result.
# --------------------------PROBLEM----------------------------------------

# Input: numbers, and string
# Output: log result of operation of string on numbers
# ---------------------------RULES-----------------------------------------
# Explicit:

# Implicit:

# --------------------------EXAMPLES---------------------------------------

# ----------------------------ALGO----------------------------------------
# Ask the user for the first number.
# Ask the user for the second number.
# Ask the user fot an operation on the two numbers.
# Print the result to the terminal
*/
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function inValidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (inValidNumber(number1)) {
  prompt("Hmm .. that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (inValidNumber(number2)) {
  prompt("Hmm that isn't a valid number");
  number2 = readline.question();
}

prompt('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must chose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}`);