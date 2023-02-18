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
# Output: integer representing number of progressions
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
19
define an empty array to hold progresssions
define a counter initaise to 0
iterate over the array
starting at index 0 check if the array includes consecutive numbers
need to use a second loop strting at 1 to add to the current array element
of num + j, and num + j*2
if the numbers are there add one to the counter
return the counter
*/

function progressions(arr) {
  let count = 0;
  let max = Math.max(...arr) 

  for (let i = 0; i < arr.length; i++) {
    for (let j= 1; j < max; j ++){
      if ((arr.includes(arr[i] + j) && (arr.includes(arr[i] + j* 2)))) {
      count += 1;
    }
    }
  }
  return count;
}
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10