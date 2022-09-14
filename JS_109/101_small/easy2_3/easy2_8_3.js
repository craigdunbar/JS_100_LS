/*
# -----------------------INSTRUCTIONS------------------------
# Odd lists

Write a function that returns an Array containing every other
element of an Array that is passed in as an argument


# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: values should be first, third, fifth etc.

# Implicit: array never empty

# --------------------------EXAMPLES-------------------------
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
# ----------------------------ALGO---------------------------
#
define an empty array 
initalize a loop to iterate over the array
push the even index values into the new array
return the new array
*/
function oddities(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 0) {
      newArr.push(arr[idx])
    }
  }
  return newArr;
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []