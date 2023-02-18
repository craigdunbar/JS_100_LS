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
# define an empty array to hold the result

on first iteration index 0, then index 1, index 2 etc
 - use a for loop
get the current value to be checked and assign it to a variable
on first iteration index 0, then index 1, index 2 etc

make a copy of the array using arr.slice(0)
use splice to remove the current element
remove any duplicates
  - use [... new Set(arr)] to do this
use filter to return the elements that are smaller than the current element
add the result of filter().length to the empty array
repeat this for the each element of the array being sure to not mutate the original array


*/
function smallerNumbersThanCurrent(arr) {
  let countArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(0)
    let currentNum = newArr.splice(i, 1)

    let nonDupsArr = [... new Set(newArr)];
    let result = nonDupsArr.filter(num => num < currentNum).length;
    countArr = countArr.concat(result);
  }
  return countArr;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]