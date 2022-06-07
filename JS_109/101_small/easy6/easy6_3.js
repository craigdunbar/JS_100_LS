/*
# -----------------------INSTRUCTIONS------------------------
Reverse Number
Write a function that takes a positive integer as an argument 
and returns that number with its digits reversed.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: will be positive, leasding zeros should be dropped.

# Implicit: 

# --------------------------EXAMPLES-------------------------
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
# ----------------------------ALGO---------------------------
# define a function with an integer argument
take the provided integer, convert it too a string and split into an array of characters
reverse the order of the characters in the array.
join back into a string and convert to a number.
*/
function reverseNumber(num) {
  return Number(num.toString().split('').reverse().join(''))
}
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));     // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));     // 1