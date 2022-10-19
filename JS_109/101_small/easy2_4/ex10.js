/*
# -----------------------INSTRUCTIONS------------------------
Convert a string to a Signed Number!

Write a function that takes a string of digits and returns
the appropriate number as an integer. THe string may have
leading + or - sign, the function should return a positive
or negative integer based on this.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: return positive or negavtive based on the sign
return positive if no sign given.
cannot use JS conversion methods
can use function from last exercise.

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
# ----------------------------ALGO---------------------------
# use the function from before 
if str startswith + or - remove it and use the previous function
after getting the return value check the origianl string again 
and add the - when needed
*/

function stringToSignedInteger(str) {
  let num = 0;
  if (str.startsWith('-')) {
    newStr = str.slice(1)
    num = stringToInteger(newStr) * -1;
  } else if (str.startsWith('+')) {
    newStr = str.slice(1)
    num = stringToInteger(newStr)
  } else {
    num = stringToInteger(str)
  }
  return num;
}

function stringToInteger(str) {
  let numObj = {0: 0, 1: 1 , 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
  let arr = str.split('');
  let sum = 0;

  arr.forEach(el => sum = ((sum * 10) + numObj[el]));
  return sum;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true