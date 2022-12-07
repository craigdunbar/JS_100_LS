/*
# -----------------------INSTRUCTIONS------------------------
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

# --------------------------PROBLEM--------------------------

# Input: array
# Output: array 
# ---------------------------RULES---------------------------
# Explicit: duplicate values should be counted only once

# Implicit: 

# --------------------------EXAMPLES-------------------------a
[8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
first element is 8 rmaining elements are [1, 2, 2, 3] 
since two is duplicated elements atr [1, 2 ,3] since all are
< 8 the result is 3

second element is 1 ,remaining elments are [8, 2, 2, 3] 
removing the duplicates again [8, 2, 3] since none are <1 
result is 0

third element is 2 remaining elements are [8, 1, 2, 3] since 
only one element is <2 the result is 1
etc.

# ----------------------------ALGO---------------------------
define an empty array called results
given the array argument iterate over the array 
create a copy of the array with the current element removed
remove any duplicates from the copied array 
use filter to get the number of elments smallet than the current element
add this number to an empty results array
continue to the next iteration 
*/
function smallerNumbersThanCurrent(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(0)
    newArr.splice(i, 1)
    let noDupArr = [...new Set(newArr)]
    results.push(noDupArr.filter(el => el < arr[i]).length)
  }
  return results;
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]