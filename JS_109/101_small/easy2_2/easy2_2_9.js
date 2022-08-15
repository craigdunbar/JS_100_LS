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

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
# ----------------------------ALGO---------------------------
# can;t use Number function so convert str to array
iterate over array and convert each string number to it's 
integer equivalent
need array of integers from 0 - 10 to reference to build new integer from
*/
function stringToInteger(str) {
  let intArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let newArr= [];
  let arr = str.split('');
  arr.forEach( el => {
    newArr.push(intArr[el])
  })
  let num = 0;
  newArr.forEach(el => (num = (10 * num) + el)) // first num = 0, then num = 4, then num = 43, then num = 432, then num = 4321
    return num;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true