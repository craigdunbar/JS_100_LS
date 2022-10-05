/*
# -----------------------INSTRUCTIONS------------------------
Write a function that takes an array of arrays that represents 
a 3x3 matrix and returns the transpose of the matrix. 

You should implement the function on your own, 
without using any external libraries.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
# ----------------------------ALGO---------------------------
# define an array with three subarrays each containing 3 elements
using array deconstruction create the transpose of the original array
for examle the first elmeent of the new array is newArr[0] 
the elements within that array are newArr[0][0], newArr[0][1] and newArr[0][2]
we can assign these elements with the values of the given array
ie
 [newArr[0][0], newArr[0][1], newArr[0][2]] = [arr[0][0], arr[1][0]. arr[2][0]]
 and so on to generate the transpose
*/
function transpose(matrix) {
  let newArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  
  [newArr[0][0], newArr[0][1], newArr[0][2]] = [matrix[0][0], matrix[1][0], matrix[2][0]],
  [newArr[1][0], newArr[1][1], newArr[1][2]] = [matrix[0][1], matrix[1][1], matrix[2][1]],
  [newArr[2][0], newArr[2][1], newArr[2][2]] = [matrix[0][2], matrix[1][2], matrix[2][2]]
  
  return newArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]