/*
# -----------------------INSTRUCTIONS------------------------
Odd lists

Write a function that returns an Array containing every other
element of an Array that is passed in as an argument

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: values should be first, third, fifth etc.

# Implicit: array is never empty

# --------------------------EXAMPLES-------------------------
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
# ----------------------------ALGO---------------------------
# define an empty array
iterate over the given array
for the elements with an even index push them to the new array
return the new array
*/
// function oddities(arr) {
//   let newArr = [];
//   arr.forEach((el, idx) => {
//     if (idx % 2 === 0) {
//       newArr.push(el)
//     }
//   })
//   return newArr;
// }
// using filter()
function oddities(arr) {
  return arr.filter((_, idx) => idx % 2 === 0)
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []