/*
# -----------------------INSTRUCTIONS------------------------
DOuble double
 double number is an even-length number whose left-side digits are exactly the 
 same as its right-side digits.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: if given integer is not a double number, multiply it by 2 and return result
if given integer is a double number return the given integer


# Implicit: intgers are greater than zero 

BEYOND?

# --------------------------EXAMPLES-------------------------
For example, 44, 3333, 103103, and 7676 are all double numbers, 
whereas 444, 334433, and 107 are not.

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
# ----------------------------ALGO---------------------------
# check the length of the given number
if odd double it and return the result
else 
determine if the number is the same if split in half
we can do this by converting the number to a string then splitting it in half
then convert hthe strings to numbers and compare them. if theyre the same
return the original number 
else double it
*/
function twice(num) {
  if(num.toString().length % 2 === 1) {
    return num * 2
  } 
  let length = String(num).length
  let half = length / 2
  let right = String(num).split('').slice(0, half)
  let left = String(num).split('').slice(half)
  if (Number(right) === Number(left)) {
    return num * 2;
  } else {
    return num;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676