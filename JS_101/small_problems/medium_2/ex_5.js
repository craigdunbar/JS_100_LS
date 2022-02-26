/*
# -----------------------INSTRUCTIONS------------------------
Next Features Number Higher Than a Given Value

Write a function that takes an integer as an argument and
returns the next featured number greater than the integer.
A featured number is odd, a multiple of 7 and it's digits 
only appear once.

# --------------------------PROBLEM--------------------------

# Input: starting integer
# Output: next integer greater than given integer that
follows the rules above
# ---------------------------RULES---------------------------
# Explicit: returned integer must be odd
            must be amultiple of 7
            digits must be unique

# Implicit: given interger will be greater than 0
            all arguments will be integers

# --------------------------EXAMPLES-------------------------
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
# ----------------------------ALGO---------------------------
# 
initalise a function that takes an integer argument
use the given integer as the start integer in the iteration
increment the given integer by 1 and check 
against the conditionals:
if new interger is odd && a multiple of 7 && contains 
unique digits, break
else continue the iteration 
return the integer that is returned by the conditional
if there is no next num, return error message from example
*/
function featured(num) {
  let nextNum = num + 1
  const MAX_NUM = 9876543201;

  for (let nextNum = num + 1; nextNum <= MAX_NUM; nextNum++) {
    if ((nextNum % 2 === 1) && (nextNum % 7 === 0) && (uniqueNums(nextNum) === 0)) {
    return nextNum;
    }
  } 
  if (num >= MAX_NUM) {
    return "There is no possible number that fulfills those requirements.";
  } else {
    return nextNum;
  }
}

function uniqueNums(nextNum) {
  let duplicates = 0
  let numArr = String(nextNum).split('')
  for (let count = 0; count < numArr.length; count++) {
    if (numArr.indexOf(numArr[count], count + 1) !== -1) {
      duplicates ++
    } else {
      duplicates;
    }
  }
  return duplicates;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));// "There is no possible number that fulfills those requirements."
