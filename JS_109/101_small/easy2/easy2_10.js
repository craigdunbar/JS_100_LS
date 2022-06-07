/*
# -----------------------INSTRUCTIONS------------------------

Convert a string to a Signed Number!

Write a function that takes a string of digits and returns
the appropriate number as an integer. THe string may have
leading + or - sign, the function should return a positive
or negative integer based on this.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: positive or negative integer
# ---------------------------RULES---------------------------
# Explicit: return positive or negavtive based on the sign
return positive if no sign given.
cannot use JS conversion methods
can use function from last exercise.
# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
# ----------------------------ALGO---------------------------
# 
*/
const obj = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6,
  7: 7, 8:8, 9: 9}

function stringToInteger(str) {
let arr = [];
if (str.startsWith('+') || str.startsWith('-')) {
  arr = str.split('').slice(1);
} else {
  arr = str.split('');
}
let intArr = [];
for (let count = 0; count < arr.length; count++) {
let currentNum = arr[count];
let integer = obj[currentNum];

intArr.push(integer) 
}
let num = 0
intArr.forEach(el => (num = (10 * num) + el));
return num
}

function stringToSignedInteger(string) {
  let number = stringToInteger(string);
  if (string.startsWith('-')) {
    number = (number - (number * 2));
  } 
  return number;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true