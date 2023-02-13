/*
# -----------------------INSTRUCTIONS------------------------
You are goiung to be given an array of integers.
Your job is to take that array and find an index N where
the sum of the integers to the left of N is equal to the
sum of the integers to the right of N.
If there is no index that would make this happen, return -1

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit:

# Implicit:

# --------------------------EXAMPLES-------------------------a
[1, 2, 3, 4, 3, 2, 1] // 3
because at position 3, left side is [1,2,3] right side id [3,2,1]

[20,10,-80,10,10,15,35] // 0
becasue at index 0 the left side is [], the right side is also 0
# ----------------------------ALGO---------------------------

iterte over the array
use slice to split the array into a right side and a left side
if the right side reduced === left side reduced return the current index

*/
function equal(arr) {
  let right = [];
  let left = [];
  for (let i = 0; i < arr.length; i ++) {
    right = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    left = arr.slice(i+1).reduce((acc, val) => acc + val, 0);
    if (right === left) {
      return i
    }
  }
  return -1;
}
console.log(equal([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(equal([1, 100, 50, -51, 1, 1]) === 1);
console.log(equal([1, 2, 3, 4, 5, 6]) === -1);
console.log(equal([20, 10 , 30, 10, 10, 15, 35]) === 3);
console.log(equal([20, 10 , -80, 10, 10, 15, 35]) === 0);
console.log(equal([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(equal([-1, -2, -3, -4, -3, -2, -1]) === 3);