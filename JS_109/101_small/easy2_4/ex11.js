/*
# -----------------------INSTRUCTIONS------------------------
# Convert a number to a String!
Write a function that converts a non-negative integer into
the string representation of that integer.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Can't use built in methods

# Implicit: 

# --------------------------EXAMPLES-------------------------
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
# ----------------------------ALGO---------------------------
# create an object that has number keys and string number values
get the individual digits by using the modulo opertor to get the remainder
each time ie 4321 % 10 = 1
convert this number to a string from the object
add to an empty string
then subtract the number from the original integer ie 4321 - 1 = 4320 then divide by 10
 = 432
and repeat until there are no more numbers
*/
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

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
