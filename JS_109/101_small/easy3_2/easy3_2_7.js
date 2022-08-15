/*
# -----------------------INSTRUCTIONS------------------------
DOuble double
 double number is an even-length number whose left-side digits are exactly the 
 same as its right-side digits.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer doubled or integer
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
# need to copmpare digits of the integer to check if they're the same
we can do this by convertiung the integer to a string and split the string
in half. If the first half === the second half return the string 
else double the integer and return it.

*/
function twice(num) {
  let numStr = String(num)
  let firsthalf = numStr.slice(0, (numStr.length/ 2));
  let secondhalf = numStr.slice(numStr.length/ 2);
  
  if (firsthalf === secondhalf) {
    return num
  } else {
    return num * 2
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