/*
# -----------------------INSTRUCTIONS------------------------

# Convert a String to a Number
Write a function that takes a string of digits and returns 
the appropraite number as an integer.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: Cann't use Sting() or Number() methods

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
# ----------------------------ALGO---------------------------
# 
create an pbject with number strings as keys and integers as values
split the string to an array of strings
define a sum variable and initalize it to 0
iterate over the array
sum = (sum * 10) + integer value // to increase by a factor of 10 each time
*/
function stringToInteger(str) {
  let numObj = {0: 0, 1: 1 , 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
  let arr = str.split('');
  let sum = 0;
  arr.forEach(el => sum = ((sum * 10) + numObj[el]));

  return sum;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true