/*
# -----------------------INSTRUCTIONS------------------------
# Combine two lists
Write a funciton that takes two array args
and combines into one array alternating elemnts 
from each.

# --------------------------PROBLEM--------------------------

# Input: arrays
# Output: array
# ---------------------------RULES---------------------------
# Explicit: non-empty arrays, same number of elements

# Implicit: 

# --------------------------EXAMPLES-------------------------
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
# ----------------------------ALGO---------------------------
# initalise function with two array ars
initialise a new empty array
initalise a counter at 0
add value at index zero(counter) from array one to new array
add value ar index zero from array two to empty array
increment counter by 1
continue until counter is equal to array length

*/
// function interleave(arr1, arr2) {
//   let newArr = []
//   for( let idx = 0; idx < arr1.length; idx++) {
//     newArr.push(arr1[idx]);
//     newArr.push(arr2[idx]);
//   }
//   return newArr;
// }

// using forEach
// function interleave(arr1, arr2) {
//   let newArr = []
//   arr1.forEach((el, idx) => {
//     newArr.push(arr1[idx], arr2[idx]);
//   });
// return newArr;
// }
// using map
// function interleave(arr1, arr2) {
//   let newArr = arr1.map((_,idx) => {
//     return[arr1[idx], arr2[idx]];
//   });
//   return newArr.flat();
// }
// using reduce
function interleave(arr1, arr2) {
  return arr1.reduce((newArr, _, index) => {
  newArr.push(arr1[index], arr2[index]);
  return newArr;
}, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"] 