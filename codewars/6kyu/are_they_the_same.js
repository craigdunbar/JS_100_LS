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
# Explicit: If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] // true

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] // false

# ----------------------------ALGO---------------------------
# 
if a or b includes null then return false
to check whether the elments of b are the elments of a squared 
we can first sort both array's into ascending order
we can iterate over the elements of a and compare the square of a 
to the element at the same index of b.
if every element is the square then return true,
else return false.

*/
function comp(array1, array2) {
  if ((!Array.isArray(array1) || !Array.isArray(array2))) {
    return false;
  } else if (array1.includes(null) || array2.includes(null)) {
    return false;
  }
  
  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);

  let newArr = array1.map((el, idx) => {
    if (el ** 2 === array2[idx]) {
      return true;
    }
  })
  return newArr.every(el => el === true);
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) // true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])) // false))
