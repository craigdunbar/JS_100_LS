/*
# -----------------------INSTRUCTIONS------------------------
Exclusive Or
Write a funciton named xor that takes two arguments and
returns true if exactly one of its arguments is truthy,
false otherwise

# --------------------------PROBLEM--------------------------

# Input: two values of any type
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
# ----------------------------ALGO---------------------------
# evaluate each argument for truthiness
if one value is truthy return true 
else return false
*/
function xor(arg1, arg2) {
  if(arg1 && !arg2) {
    return true;
  } else if (arg2 && !arg1) {
    return true;
  } else {
    return false;
  }
}
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);