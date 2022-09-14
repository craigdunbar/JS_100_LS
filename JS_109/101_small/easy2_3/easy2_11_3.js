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

BEYOND?

# --------------------------EXAMPLES-------------------------
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
# ----------------------------ALGO---------------------------
# as with the previous exercise first initalise an object only this time the 
values are strings
create an empty string
we need the individual digits and we get this by using the modulo 
operator with base 10 ie 4321 % 10 // 1
use this result to look up the object and obtain the string equivalent
add this string value to the string variable
continue this until the remainder === 0
*/
function integerToString(num) {
  let numObj = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7',
                8: '8', 9: '9'}
  let numStr = ''
  while (true) {
    let currentNum = num % 10
    numStr = numObj[currentNum] + numStr;
    num = (num - currentNum) / 10;
    if (num === 0) break;
  } 
  return numStr;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"