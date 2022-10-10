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
# need to start form index 0 and add all the other elements together
compare the value to the left which would be 0 to the sum of the other
elements
if it's the same return 0
else move to position 1 and sum elements 1 and 0
compare to elements 2 to end of array
ie
[1, 2, 3, 4, 3, 2, 1]
first result is  0 compared with 16 not equal so continue
second result is 1 compared to 13
third result is 3 compared to 10
fourth result is 6 compared to 6 return
we can get the different sums using a loop and slice()
on first iteration index = 0
left = arr.slice(0, 0) = []
right = arr.slice(0) = [1, 2, 3, 4, 3, 2, 1]

on second iteration index = 1
left = arr.slice(0 , 1) = [1]
right = arr.slice(1) = [ 2, 3, 4, 3, 2, 1]

on last iteration index = 6
left = arr.slice(0, 6) [1, 2, 3, 4, 3, 2]
right = arr.slice(6) = []

if left or right = [] this is === 0 in this problem
else
use reduce to get the sum of the values in the left and right
if left === right return the index otherwise continue
if left never === right return -1

need to define two variables left and right
then create a loop that goes form 0 to length of arr
follow the steps above
*/
function findEvenIndex(arr) {
  let left;
  let right;

  for (let count = 0; count < arr.length; count++) {
    left = arr.slice(0, count);
    right = arr.slice(count + 1);

    left.length === 0 ? left = 0 : left = left.reduce((a, b) => a + b);

    right.length === 0 ? right = 0 : right = right.reduce((a, b) => a + b);

    if (left === right) {
      return count;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10 , 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10 , -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);
