/*
# -----------------------INSTRUCTIONS------------------------

# Odd lists

Write a function that returns an Array containing every other
element of an Array that is passed in as an argument

# --------------------------PROBLEM--------------------------

# Input: array
# Output: array of every other element of given array
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
# 
*/
function oddities(arr) {
  // newArr = [];
  // for (let count = 0; count < arr.length; count++) {
  //   if (count % 2 === 0) {
  //     newArr.push(arr[count]);
  //   }
  // }
  // return newArr;

  let newArr = arr.filter((el, idx) => (idx % 2 === 0));
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []