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

# --------------------------EXAMPLES-------------------------
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
# ----------------------------ALGO---------------------------
# use the function from before
remoove the - from the strt of the string
pass the string to the integerToString function 
add back a + or - depending if the original string started with a -
or of the original string was >0

*/
function signedIntegerToString(num) {
  numAbs = Math.abs(num);
  let str = integerToString(numAbs);

  if(num < 0) {
    str = '-' + str;
  } else if (num > 0) {
    str = '+' + str
  } else {
    str;
  }
  console.log(str);
  return str;
}

function integerToString(num) {
  let str = '';
  let obj = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9'};
  let int = 0;
  
  while(true) {
    int = num % 10;
    str = obj[int] + str
    num = (num - int) / 10
    if (num === 0) break;
  }
  return str;
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");