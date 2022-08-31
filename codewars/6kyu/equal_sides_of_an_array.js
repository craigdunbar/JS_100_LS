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
# given the array argument
initalise a loop that starts at the first element of the array at index 0
initalise two variable called leftOf and rightOf
for element 0 of array leftOf === 0; for all other elements leftOf is the sum 
of the elements at index - 1 from itself down to index 0
the rightOf variable is the sum of elements at index +1 up to the end of the array
if leftOf === rightOf break out of the iteration and return the current index number
or -1 if that leftOf !== rightOf
*/
function findEvenIndex(arr) {
  console.log(arr);
  for (let idx = 0; idx < arr.length; idx++) {
    let leftOf = 0;
    let rightOf = 0;

    if (idx === 0) {
      leftOf = 0;
      rightOf = arr.slice(idx + 1).reduce((a, b) => a + b);
    } else if (idx === 1) {
      leftOf = arr[0];
      if (arr.length > 2) {
      rightOf = arr.slice(idx + 1).reduce((a, b) => a + b);
      } else {
        rightOf = 0;
      }
    } else if (idx > 1 && idx < arr.length - 1) {
      leftOf = arr.slice(0, idx).reduce((a,b) => a + b);
      rightOf = arr.slice(idx + 1).reduce((a, b) => a + b);
    } else {
      leftOf = arr.slice(0, idx).reduce((a,b) => a + b);
      rightOf = 0;
    }
    if (leftOf === rightOf) {
      return idx;
    }
  } 
  return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35 ]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35  ]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20 ]));
console.log(findEvenIndex([8, 8 ]));
console.log(findEvenIndex([8, 0 ]));
