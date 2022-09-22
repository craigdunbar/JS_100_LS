/*
# -----------------------INSTRUCTIONS------------------------
Always Return Negative
Write a function that takes a number as an argument. 
If the argument is a positive number, return the negative of that number. 
If the argument is a negative number, return it as-is.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: negative integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
# ----------------------------ALGO---------------------------
# get the absolute value of the given integer 
return the abs value * -1
*/
function negative(num) {
  return Math.abs(num) * -1
}
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0