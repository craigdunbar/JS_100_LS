/*
# -----------------------INSTRUCTIONS------------------------
Convert a signed number to a string!
Write a function that takes an integer and converts it
to a string representation.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# 
*/
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function integerToString(num) {
  let str = ''
  num = Math.abs(num);
  do {
    remainder = num % 10
    num = Math.floor(num / 10);

    str = DIGITS[remainder] + str;
  } while (num > 0);
  return str;
}
function signedIntegerToString(num) {
  let str = integerToString(num) 
if (Math.sign(num) === -1) {
  str = '-' + str;
} else if (Math.sign(num) === 1) {
  str = '+' + str;
} else {
  str
}
return str;
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");