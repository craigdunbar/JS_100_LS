/*
# -----------------------INSTRUCTIONS------------------------
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: If a or b are nil (or null or None, depending on the language), 
the problem doesn't make sense so return false.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] // true

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] // false

# ----------------------------ALGO---------------------------
iterate over the b array and if every elment is the result of the 
corresponding element in a squared return true

*/
function comp(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b)
  arr2 = arr2.sort((a,b) => a-b)
  return arr2.every((el, idx) => el === arr1[idx] ** 2);
}
let a = [121, 144, 19, 161, 19, 144, 19, 11]  
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] // true
console.log(comp(a,b))

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] // false
console.log(comp(a,b))