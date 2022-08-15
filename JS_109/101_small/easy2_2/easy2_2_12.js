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
# 
determine if the given string starts with - and if so
remove it and then  call the integerToString function from the last exercise
if the given number is positive add a '+' to the start of the string and return it
if - add a a '-' at the start fo the string 


*/
function signedIntegerToString(int) {
  if (int < 0) {
    int = Math.abs(int)
    return ('-' + integerToString(int));
  } else if (int > 1){
    return ('+' + integerToString(int));
  } else {
    return (integerToString(int));
  }
}
function integerToString(num) {
  let str = '';
  let obj = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5:'5', 6:'6', 7:'7', 8:'8',
              9: '9'}
  let currentNum = 0
while (true) {
  currentNum = num % 10
  str = obj[currentNum] + str
  num = (num - currentNum) / 10
  if (num === 0) break;
}
return str;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");