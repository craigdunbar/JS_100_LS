/*
# -----------------------INSTRUCTIONS------------------------
You're given an array of integers. You must return the number of 
'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
# ----------------------------ALGO---------------------------
# 
define a counter variable = 0
initalise a loop to iterate over the array argument
start the loop at 0 and end at array.length
initalise a second loop to look for elements in the array that are progressions
from the current element starting art 1 and continuing to the Max value of the array
if a combination of three progressions is found increase a counter by 1
return the value of the counter
*/
function progressions(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = 1; j < Math.max(...arr); j++) {
      if (arr.includes(current + j) && arr.includes(current + (j * 2))) {
        counter += 1;
      }
    }
  }
  return counter;
}
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10