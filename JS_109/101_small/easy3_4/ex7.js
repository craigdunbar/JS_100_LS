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
# calcaulate mid point of given integer
split the integer into two halves 
- split into string then use slice
- then convert back to a number and compare
if the first half !== second half double the original and return it
else return the original
*/
function twice(num) {
  numStr = num.toString().split('');
  let mid = numStr.length / 2
  let left = Number(numStr.slice(0, mid).join(''));
  let right = Number(numStr.slice(mid).join(''));
  if(left === right) {
    return num;
  } else {
    return num * 2;
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