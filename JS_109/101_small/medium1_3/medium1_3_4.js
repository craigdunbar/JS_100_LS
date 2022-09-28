/*
# -----------------------INSTRUCTIONS------------------------
# Write a function that implements a miniature stack-and-register-based programming 
language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: assume that all arguments are valid
Initialize the stack and register to the values [] and 0, respectively.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
# ----------------------------ALGO---------------------------
# initalize a variable called stack and assign it to an empty array
initalize a variable called register and assign it the value of 0
given the string argument split the string into an array of commands 
use if..else chain to determine the action on either the stack or the register
remember to change any numbers in the string to Integers using NUmber()
return the result of the string commands
*/
function minilang(str) {
  let stack = [];
  let register = 0
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let commandsArr = str.split(' ');
  commandsArr.forEach((command, idx) => {
    if (numArr.includes(Math.abs(Number(command)))) {
      register = Number(command)
    }  else if (command === 'PRINT') {
      console.log(register)
    } else if (command === 'PUSH') {
      stack = stack.concat(register);
    } else if ( command === 'MULT') {
      register = stack.pop() * register;
    } else if (command === 'ADD') {
      register = stack.pop() + register;
    } else if (command === 'POP') {
      register = stack.pop();
    } else if (command === 'DIV') {
        register = Math.floor(register / stack.pop());
    } else if (command === 'REMAINDER') {
      register = Math.floor(register % stack.pop());
    } else if (command === 'SUB') {
      register = register - stack.pop()
    }
  })
}

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