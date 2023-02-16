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
given the integer argument
create  a loop to add one to the integer
check if the integer is odd
check if it's divisable by 7 
check if the digits are unique by converting to a string, then array and using SET
if all of these are true return the new integer 
else continue
*/


function featured(num) {
  while(true) {
    num++
    let arr = num.toString().split('')
    let unique = Number([...new Set(arr)].join(''))
    if (num % 2 === 1 && num % 7 === 0 && unique === num) {
      return num;
    } else if (num > 9876543201) {
       return 'not possible'
    }
  }
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
console.log(featured(9876543201));   // "There is no possible 