/*
# -----------------------INSTRUCTIONS------------------------
Convert a string to a Signed Number!

Write a function that takes a string of digits and returns
the appropriate number as an integer. THe string may have
leading + or - sign, the function should return a positive
or negative integer based on this

# --------------------------PROBLEM--------------------------

# Input: string of digits
# Output: postitive or negative integer
# ---------------------------RULES---------------------------
# Explicit: return positive or negavtive based on the sign
return positive if no sign given.
cannot use JS conversion methods
can use function from last exercise.
# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
# ----------------------------ALGO---------------------------
# since we can't use JS conversion methods we need an object containing 
the integers 0 - 9.
use String.startsWith to determine if there is a + or - and if so remove it from string 
but save it to a variable.
convert the given string to an array
iterate over this array and convert the strings to numbers using the previous
exersice ie num = (num *10) + el
if the string started with a  negative return a negative integer
*/
function stringToSignedInteger(str) {
let numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 0;
let newStr = '';
let intArr = [];
if (str.startsWith('+') || str.startsWith('-')) {
  newStr = str.slice(1);
} else {
  newStr = str;
}
newStr.split('').forEach(el => {
  intArr.push(numsArr[el]);
});
intArr.forEach(el => (num = (10 * num) + el));
if (str.startsWith('-')) {
  return num * -1;
}
return num;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true