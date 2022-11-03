/*
# -----------------------INSTRUCTIONS------------------------

You've just discovered a square (NxN) field and you notice a warning sign. 
The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, 
and returns the location of the mine. 
The mine is represented as the integer 1 in the 2D array. 
Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array where the first element 
is the row index, and the second element is the column index of 
the bomb location (both should be 0 based). 
All 2D arrays passed into your function will be square (NxN), 
and there will only be one mine in the array.

# --------------------------PROBLEM--------------------------

# Input: nested array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: arrays are square n x n
return row, column

# Implicit: 

# --------------------------EXAMPLES-------------------------

mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
# ----------------------------ALGO---------------------------
# 
create a variable row = 0 and column = 0
iterate over the given array
let the row = the current subArr index
iterate over the subArr 
let column = current element index
check to see if the element === 1
if it does retrun row, column
if not continue the iteration
*/
function mineLocation(arr) {
  let row = 0;
  let column = 0;

  for (let subIdx = 0; subIdx < arr.length; subIdx ++) {
    row = subIdx;
    let currentSubArr = arr[subIdx]

    for (let subEl = 0; subEl < currentSubArr.length; subEl ++) {
      column = subEl;
      if (currentSubArr[subEl] === 1) {
        return [row, column]
      }
    }
  }
}
console.log(mineLocation([ [1, 0], [0, 0] ])) //, [0, 0]);
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ])) //, [0, 0]);
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ])) //, [2, 2]);