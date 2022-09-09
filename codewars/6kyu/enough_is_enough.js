/*
# -----------------------INSTRUCTIONS------------------------
Enough is enough!
Given a list and a number, create a new list that contains each 
number of list at most N times, without reordering.

# --------------------------PROBLEM--------------------------

# Input: array and number
# Output: new array contianing a reduced number of elements
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
input number is 2, and the input list is [1,2,3,1,2,1,2,3] //[1,2,3,1,2,3]
list [20,37,20,21] and number 1 // [20,37,21]
# ----------------------------ALGO---------------------------
# given the array argument 
create a new array of the unique values in the original array
- to creat the unique array use [...new Set(array)]
then take the given number argument and duplicate the unique values n times

given the original array
define an empty object
iterate over the given array and assign each individual value to a key and then 
count the instances of the value
if the value is greater than the given n value then delete this element from the original array
return the array of correct number of values

*/
// function deleteNth(arr, n) {
//   let deletedArr = [];
//   let uniqueArr = [...new Set(arr)];
//   for (let count = 1; count <= n; count++) {
//     deletedArr = deletedArr.concat(uniqueArr);
//   }
//   return deletedArr;
// }
// not allowed to change the order so this is wrong

function deleteNth(arr, n) {
let numObj = {}
  arr.forEach((el, idx) => {
    if (!Object.keys(numObj).includes(String(el))) {
     numObj[el] = 1;
    } else {
      numObj[el] += 1;
    }
  });

 arr.forEach(el => {
    while (numObj[el] > n) {
      let last = arr.lastIndexOf(el);
      arr = arr.slice(0, last).concat(arr.slice(last + 1))
      numObj[el] -= 1;
      if (numObj <= n) break;
    }
  });
 return arr;
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2)); // [1,2,3,1,2,3]
console.log(deleteNth([20,37,20,21], 1)); // [20,37,21]
console.log(deleteNth([ 1, 1, 3, 3, 7, 2, 2, 2, 2 ],3)) // [1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([ 1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3)); // [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5
