/*
# -----------------------INSTRUCTIONS------------------------
Combine Two Lists
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both 
array arguments, with each element taken in alternation.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: You may assume that both input arrays are non-empty, 
and that they have the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
# ----------------------------ALGO---------------------------
# iniitialise an empty array
initalise a loop with count = 0;
iterate over the two arrays adding the elements at count 0
up to arr.length - 1 elements to the new array
return the new array
*/
function interleave(arr1, arr2) {
  let newArr = [];
  for (let count = 0; count < arr1.length; count ++) {
    newArr.push(arr1[count], arr2[count])
  }
  return newArr;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]