/*
# -----------------------INSTRUCTIONS------------------------
Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number 
that is a multiple of 7, with all of its digits occurring exactly once each. 
For example, 49 is a featured number, but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns 
the next featured number greater than the integer. 
Issue an error message if there is no next featured number.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer representing next featured number
# ---------------------------RULES---------------------------
# Explicit: 
NOTE: The largest possible featured number is 9876543201.
# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
# ----------------------------ALGO---------------------------
# 
given the integer argument
iterate a loop that increases the integer by one on each iteration
if the current integer is odd
 and if it's divisable by 7
  - integer % 7 === 0
   and if it's digits are all unique,
   - integer converted to a string
   - iterate over the string and add each digit as a key in an object
   increase the object value by  one if it already exists
   if all the object values === 1
   return the current integer.
  else move to the next iteration
*/
function features(num) {
    let countObj = {};
    for ( let count = 1; count < 9876543201; count ++) {
        let nextNum = num + count;
        let nextNumString = String(nextNum);
        if (!countObj.keys)
        if (nextNum % 2 !== 1) {
            continue;
        } else if (nextNum % 7 !== 0) {
            continue;
        } else 
    }
}