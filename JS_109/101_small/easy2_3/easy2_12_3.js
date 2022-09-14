/*
# -----------------------INSTRUCTIONS------------------------
Convert a signed number to a string!
Write a function that takes an integer and converts it
to a string representation.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
# ----------------------------ALGO---------------------------
# use function from last exercise
if num < 0 then change to positive with Math.abs()
then add a '-' to the start of the string
*/
function signedIntegerToString(int) {
 if ( int < 0) {
      int = Math.abs(int)
      return ('-' + integerToString(int))
  } else if (int === 0) {
  return integerToString(int);
  } else {
    return ('+' + integerToString(int));
  }
}
  
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
console.log(signedIntegerToString(4321))// === "+4321");
console.log(signedIntegerToString(-123))//  === "-123");
console.log(signedIntegerToString(0))//  === "0");