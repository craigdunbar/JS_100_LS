/*
# -----------------------INSTRUCTIONS------------------------

Exclusive Or
Write a funciton named xor that takes two arguments and
returns true if exactly one of its arguments is truthy,
false otherwise

# --------------------------PROBLEM--------------------------

# Input: two variables
# Output: boolean true or false
# ---------------------------RULES---------------------------
# Explicit: always two arguments provided

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
# ----------------------------ALGO---------------------------
# assign the given arguments to two variables
evaluste the truthiness of each
if only one is truthy return true 
else return false
*/
// function xor(var1, var2) {
//   if ( (var1) && !(var2)) {
//     return true;
//   } else if ((var2) && !(var1)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// refactored
function xor(var1, var2) {
  if ((var1 && !var2) || (var2 && !var1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);