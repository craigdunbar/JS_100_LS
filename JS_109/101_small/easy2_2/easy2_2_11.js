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
# since we can't use inbuilt functions we need an object of strings
as reference to replace the integer argument provided to the funtion
initalise an empty array 
to seperate the number into individual digits use %10
ie 4321 % 10 = 1
then use this result to access the object with key of that digit and add this to 
an empty array
use unshift to add the other numbers until all numbers are done ie when % 10 = 0
delete each number from the total and then divide by 10 to get the next number.
return the array joined to make a string
*/
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

console.log(integerToString(4321) === "4321");
console.log(integerToString(0) ===  "0");
console.log(integerToString(5000) === "5000");
console.log(integerToString(1234567890) === "1234567890");