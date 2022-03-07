/*
# -----------------------INSTRUCTIONS------------------------

# Convert a number to a String!
Write a function that converts a non-negative integer into
the string representation of that integer.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string
# ---------------------------RULES---------------------------
# Explicit: Can't use built in methods

# Implicit: 

# --------------------------EXAMPLES-------------------------
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
# ----------------------------ALGO---------------------------
# reverse of last two examples.
*/
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function integerToString(num) {
  let str = ''
  do {
    remainder = num % 10
    console.log(remainder)
    num = Math.floor(num / 10);

    str = DIGITS[remainder] + str;
  } while (num > 0);
  return str;
}
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
