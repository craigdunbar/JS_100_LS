/*
# -----------------------INSTRUCTIONS------------------------
Combine Two Lists
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both 
array arguments, with each element taken in alternation.

# --------------------------PROBLEM--------------------------

# Input: two array's
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: You may assume that both input arrays are non-empty, 
and that they have the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
# ----------------------------ALGO---------------------------
# define an empty array
begin an iteration 
on each iteration concat the empty array with the elments of each of the
two original arrays
*/
// function interleave(arr1, arr2) {
//   let newArr = [];
//   for (let count = 0; count < arr1.length; count ++) {
//     newArr = newArr.concat(arr1[count], arr2[count]);
//   }
//   return newArr;
// }

// try solving with forEach, map and reduce..

// function interleave(arr1, arr2) {
//   let newArr = [];
//   arr1.forEach((el, idx) => {
//     newArr = newArr.concat(arr1[idx], arr2[idx])
//   });
//   return newArr;
// }

// function interleave(arr1, arr2) {
//   let newArr = arr1.map((el, idx) => {
//     return el = [arr1[idx], arr2[idx]] 
//   })
//   return newArr.flat()
// }

function interleave(arr1, arr2) {
return arr1.reduce((array, _, index) => {
  array.push(arr1[index], arr2[index]);
  return array;
}, []);
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]