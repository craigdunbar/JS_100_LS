/*
# -----------------------INSTRUCTIONS------------------------
Exclusive Or
Write a funciton named xor that takes two arguments and
returns true if exactly one of its arguments is truthy,
false otherwise

# --------------------------PROBLEM--------------------------

# Input: two arguments
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
# 
assign the two arguments to variables arg1 and agr2
check for truthy value using if(arg1)
if(arg1) && if(arg2) return false
if(arg1) || if(arg2) return true
*/
function xor(arg1, arg2) {

  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  } else {
    return false;
  }
}
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);