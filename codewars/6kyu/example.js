/*
# -----------------------INSTRUCTIONS------------------------
Equal sides of an array
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers 
to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.
# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer represtenting an index or -1 if none exist
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd 
position of the array, the sum of left side of the index ({1,2,3}) 
and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st 
position of the array, the sum of left side of the index ({1}) 
and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
# ----------------------------ALGO---------------------------
iterate over the array
use slice to build the right side of the current elmeent 
and then the left side of the current element
if the right side reduced === the left side reduced
return the current element
*/
function equal(arr) {
  for(let i = 0; i < arr.length; i++) {
    let right = arr.slice(0, i).reduce((acc, val) => acc + val,0);
    let left = arr.slice(i+ 1).reduce((acc, val) => acc + val,0)
    // console.log(right, left)
    if (right === left) return i
    // console.log(right, left)
  }
  return -1;
}
console.log(equal([1,2,3,4,3,2,1]))
console.log(equal([1,100,50,-51,1,1]))
console.log(equal([20,10,-80,10,10,15,35]))

// console.log(equal([1,2,3,4,3,2,1]));
// console.log(equal([1,100,50,-51,1,1]));
// console.log(equal([20,10,-80,10,10,15,35]));
// console.log(equal([1,2,3,4,5,6]));
// console.log(equal([20, 10, 30, 10, 10, 15, 35 ]));
// console.log(equal([20, 10, -80, 10, 10, 15, 35  ]));
// console.log(equal([10, -80, 10, 10, 15, 35, 20 ]));
// console.log(equal([8, 8 ]));
// console.log(equal([8, 0 ]));