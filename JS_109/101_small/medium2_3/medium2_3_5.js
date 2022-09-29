/*
# -----------------------INSTRUCTIONS------------------------
Next Featured Number Higher Than a Given Value

Write a function that takes an integer as an argument and
returns the next featured number greater than the integer.
A featured number is odd, a multiple of 7 and it's digits 
only appear once.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer representing next featured number
# ---------------------------RULES---------------------------
Explicit: returned integer must be odd
            must be amultiple of 7
            digits must be unique

# Implicit: given interger will be greater than 0
            all arguments will be integers
# --------------------------EXAMPLES-------------------------a
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
# given the integer argument
initialise a loop 
the loop will add one to the integer each time
if the new integer is odd, divisisble by 7 and has all unique numbers
- use modulo operator to check for divisability by 7
- convert the number to a string, split it into an array of digits 
  then compare to a new Set to check for uniqueness
return the new number
else continue iterating
*/
function featured(num) {
  do {
    let nextNum = num + 1
    let numArr = nextNum.toString().split('')
    let uniqueNum = Number([...new Set(numArr)].join(''))
    // console.log(uniqueNum)
    if (nextNum > 9876543201) {
      return 'There is no possible number that fulfills those requirements.'
    } else if (nextNum % 2 === 1 && nextNum % 7 === 0 && uniqueNum === nextNum) {
      return nextNum;
    }
    num = nextNum;
  } while (true)
  // return num;
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
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."