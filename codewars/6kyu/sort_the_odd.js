/*
# -----------------------INSTRUCTIONS------------------------
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving 
the even numbers at their original positions.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: array sorted according to the above
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
# ----------------------------ALGO---------------------------
# 
iterate over the array
check whether the element is odd
if odd push this to an new array 
continue to the end of the original array
sort the newArr into ascenduing order
iterate over the original array again
if the element is odd replace it with the element at index 0 of the newArr
delete the element at ondex 0 of the new array
repeat this process until the end of the original array
return the array with the odd elements sorted
*/
function sortArray(array) {
  let oddArr = [];
  array.forEach(el => {
    if (el % 2 === 1 || el % 2 === -1){
      oddArr.push(el);
    }
  })
  console.log(oddArr.sort((a, b) => a -b));
  return array.map(el => {
    if (el % 2 === 1 || el % 2 === -1) {
      el = oddArr[0];
      oddArr.shift()
      return el;
    } else {
    return el;
    }
  })
}
console.log(sortArray([7, 1])); //  [1, 7]
console.log(sortArray([5, 8, 6, 3,4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray([ -28, -33, -18, 39, -21, 34, 36, -9, -7, -16, 36, -39, -44, 36 ])); 
// [ -28, -39, -18, -33, -21, 34, 36, -9, -7, -16, 36, 39, -44, 36 ]