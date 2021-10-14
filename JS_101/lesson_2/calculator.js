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
# Ask the user for an operation on the two numbers.
# Print the result to the terminal
*/
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'fr';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES[LANGUAGE]['welcome']);
do {
  prompt(MESSAGES[LANGUAGE]['firstNum']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[LANGUAGE]['invalidNum']);
    number1 = readline.question();
  }

  prompt(MESSAGES[LANGUAGE]['secondNum']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[LANGUAGE]['invalidNum']);
    number2 = readline.question();
  }

  prompt(MESSAGES[LANGUAGE]['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[LANGUAGE]['validChoice']);
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

  prompt(MESSAGES[LANGUAGE]['playAgain']);
  repeat = readline.question();
} while (repeat === 'y' || (repeat[0].toLowerCase() === 'y'));
prompt(MESSAGES[LANGUAGE]['goodbye']);