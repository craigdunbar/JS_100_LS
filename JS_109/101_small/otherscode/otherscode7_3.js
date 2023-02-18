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
40
iterate over the given array
make sub arrays with the curretn element being the mid point
reduce the subarrays to the sum of the elmentns
if the sum of noth subarrays is the same return the current element
*/
function equal(arr) {

  for (let i =0; i < arr.length; i ++) {
    let right = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    let left = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);
    if (right === left) return i
    // console.log(right, left)
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