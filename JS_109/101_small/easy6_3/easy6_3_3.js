/*
# -----------------------INSTRUCTIONS------------------------

Reverse Number
Write a function that takes a positive integer as an argument 
and returns that number with its digits reversed.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer with digits reversed
# ---------------------------RULES---------------------------
# Explicit: will be positive, leading zeros should be dropped.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
# ----------------------------ALGO---------------------------
# convert the number to a string
convert the string to an array of numbers
reverse the array
join back to a string
convert back to a number
return the new number
*/
function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''))
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1