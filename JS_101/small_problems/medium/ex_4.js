/*
# -----------------------INSTRUCTIONS------------------------
Stack machine interpolation

Write a function that implements a miniature stack-and-register
based programming language that has a series of string commands
that result in specific operations on the values in the stack.
The operations are:
n : Place a value, n, in the register
PUSH : push the register value to the stack.
       Leave value in register
ADD : Pop a value from the stack and add to the register
      Store the result in the register
SUB : pop a value from the stack and subtract it from the
      register value, store the result in the register
MULT : pop a value from the stack and multiply it by the
        register value, store result in register.
DIV : pop a value from the stack and divide the register value
      it by the popped value. Store the integer value back in the
      register
REMAINDER : pop a value from the stack and divide the register
          value by the popped stack value, store the integer
          remainder in the register
POP : remove the top most item from the stack and place it in
      the register.
PRINT: print the register
# --------------------------PROBLEM--------------------------

# Input: string command
# Output: number resulting from the string command
# ---------------------------RULES---------------------------
# Explicit: all string arguments are valid programs

# Implicit:

# --------------------------EXAMPLES-------------------------
minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
# ----------------------------ALGO---------------------------
# initalise a function with string parameter.
split the string into individual words
initalise and empty stack array
initalise the register with value of 0
initialise a loop to iterate over the given string command
use if statements to determine what actions should be performed
*/
// function minilang(string) {
//   let stack = [];
//   let register = 0;
//   let commands = string.split(' ');
//   for (let index = 0; index < commands.length; index++) {
//     if (Number.isInteger(Number(commands[index])) === true) {
//       register = Number(commands[index]);
//     } else if (commands[index] === 'PUSH') {
//       stack.push(register);
//     } else if (commands[index] === 'MULT') {
//       register *= stack.pop();
//     } else if (commands[index] === 'PRINT') {
//       console.log(register);
//     } else if (commands[index] === 'ADD') {
//       register += stack.pop();
//     } else if (commands[index] === 'POP') {
//       register = stack.pop();
//     } else if (commands[index] === 'DIV') {
//       register = Math.floor(register / stack.pop());
//     } else if (commands[index] === 'REMAINDER') {
//       register %= stack.pop();
//     } else if (commands[index] === 'SUB') {
//       register -= stack.pop();
//     }
//   }
//   return register;
// }

// refactored with a CASE statement
function minilang(string) {
  let stack = [];
  let register = 0;
  let commands = string.split(' ');
  commands.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      default:
        register = Number(command);
    }
  });
  return register;
}

// ** Further exploration ***

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)