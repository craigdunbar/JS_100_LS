/*
# -----------------------INSTRUCTIONS------------------------
# Combining Arrays
Write a function that takes two array arguments and returns a 
single array containing the combined values minus any duplicates


# --------------------------PROBLEM--------------------------

# Input: array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: remove duplicates

# Implicit: 

# --------------------------EXAMPLES-------------------------
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
# ----------------------------ALGO---------------------------
# initalize a function with two array arg

*/
// function union(arr1, arr2) {
//   newArr = []
//   newArr.push(arr1);
//   for (let idx = 0; idx < arr2.length; idx++) {
//     if (!arr1.includes(arr2[idx])) {
//       newArr.push(arr2[idx]);
//     }
//   }
//   return newArr.flat();
// }
// my solution didn't check the first array for duplicates
// and doesn't account for multiple arrays
// reading about (...args) led me to Array.from and Set()

function union(...args) {
  return Array.from(new Set(args.flat().sort()));
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 5], [3, 6, 9], [4, 7, 9]));