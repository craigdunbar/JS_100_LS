/*
# -----------------------INSTRUCTIONS------------------------

You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to f
igure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work 
regardless of how many numbers there are in total.

Write a function that takes a shuffled list of unique numbers from 1 to n 
with one element missing (which can be any number including n). 
Return this missing number.

Note: huge lists will be tested.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: huge lists will be tested.

# Implicit: 

# --------------------------EXAMPLES-------------------------

[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1
# ----------------------------ALGO---------------------------
# sort the arr of nums into ascending order
iterte over the array
get the current number and add one to it
check if the nest number in the array matches.
if not return the current number + 1
*/
// doesn't work in code wars...

function findNumber(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== 1) {
      return 1;
    } else {
      let next = arr[i] + 1;
      // console.log(next)
      if (next !== arr[i+ 1]) {
        return next;
      }
    }
  }
}

// console.log(findNumber([1,3,4,5,6,7,8])) //, 2);
// console.log(findNumber([7,8,1,2,4,5,6])) //, 3);
// console.log(findNumber([1,2,3,5])) //, 4);
// console.log(findNumber([1,3])) //, 2);
// console.log(findNumber([2,3,4])) //, 1);
// console.log(findNumber([13,11,10,3,2,1,4,5,6,9,7,8])) //, 12);
// console.log(findNumber([1,2,3])) //, 4);
console.log(findNumber([
  2,  3,  4,  5,  6,  7,  8,  9, 10,
 11, 12, 13, 14, 15, 16, 17, 18, 19,
 20, 21, 22, 23, 24, 25, 26, 27, 28,
 29, 30, 31, 32, 33, 34, 35, 36, 37
]));