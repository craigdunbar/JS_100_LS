/*
# -----------------------INSTRUCTIONS------------------------

Combine Two Lists
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both 
array arguments, with each element taken in alternation.
# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: You may assume that both input arrays are non-empty, 
and that they have the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
# ----------------------------ALGO---------------------------
define an empty array
initalise a loop
on each iteration take the current indx and add the element from
first array and then second array to the new array
return the new array
*/
// function interleave(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr = newArr.concat(arr1[i], arr2[i]) 
//   }
//   return newArr;
// }
// try solving with forEach, map and reduce..
// map
// function interleave(arr1, arr2) {
//   return arr1.map((el, idx) => {
//     return el = [el].concat(arr2[idx])
//   }).flat();
// }

// reduce
function interleave(arr1, arr2) {
  return arr1.reduce((arr, _, index) => {
    arr.push(arr1[index], arr2[index])
    return arr;
  }, [])
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]