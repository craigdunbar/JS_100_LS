/*
# -----------------------INSTRUCTIONS------------------------

# Odd lists

Write a function that returns an Array containing every other
element of an Array that is passed in as an argument

# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array of specific elements
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: start at index 0

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
# ----------------------------ALGO---------------------------
# 
initalise an empty array
iterate over the given array and push even number index elements to the new arr
return the new arr
*/
// function oddities(arr) {
//   let newArr = []
//   for (let idx = 0; idx < arr.length; idx ++) {
//     if (idx % 2 === 0) {
//       newArr.push(arr[idx])
//     } else {
//       continue;
//     }
//   }
//   return newArr;
// }
// using filter
function oddities(arr) {
  return arr.filter((el, idx)  => idx % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []