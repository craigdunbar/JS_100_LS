/*
# -----------------------INSTRUCTIONS------------------------
DOuble double
 double number is an even-length number whose left-side digits are exactly the 
 same as its right-side digits.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.

# --------------------------PROBLEM--------------------------

# Input: an integer of various digits
# Output: a new integer or the original integer
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
# if length of given integer is odd then return integer doubled.
if length of integer is even 
iterate over the digits in the first half of the number and
compare the digits in the second half ie
integer = 123456 
first half = 123, second half = 456
compare 1 and 4, 2 and 5, 3 and 6
if the values of all the digits are the same return the original integer
if they are different double the original integer and return it
*/
function twice(int) {

  let digits = String(int).split('');
  let half = digits.length / 2;
  let firstHalf = digits.slice(0, half);
  let secondHalf = digits.slice(half)
  
  if (firstHalf.join() === secondHalf.join()) {
    return int;
  } else {
    return int * 2;
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