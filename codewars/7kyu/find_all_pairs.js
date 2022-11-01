/*
# -----------------------INSTRUCTIONS------------------------

#You are given array of integers, your task will be to count 
all pairs in that array and return their count.

Notes:

    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. 
    E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in array 
    is between 0 and 1000



# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer representing number of pairs
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
[1, 2, 5, 6, 5, 2]  -->  2 ...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4...because there are 4 pairs: 2, 20, 6 and 2 (again) 

# ----------------------------ALGO---------------------------
# define an empty object
iterate over the array argument and add the numbers as keys in the obj
if the key already exists add 1 to the value
then iterate over the keys array and find any key with value 2
add one to the count 
if value is 4 or higher and % 2 add 2 to the counter

return the counter

or use [...new Set(arr)] to get a unique array
arr.lenght - set length = number of chars removed
if char is even thats the number of pairs
if its odd subtract one and thats the pairs
 - doesn't work for codewars large tests
*/
// function duplicates(arr) {
//   let unique = [...new Set(arr)]
//   // console.log(unique.length)
//   // console.log(arr.length)
//   let count = arr.length - unique.length
//   if (arr.length / unique.length === arr.length) {
//     return Math.floor(arr.length/ 2)
//   } else if (count % 2 === 0) {
//     return count;
//   } else {
//     return count - 1;
//   }
// }
function duplicates(arr) {
  let obj = {};
  let counter = 0;
  arr.forEach(el => {
    if (!Object.keys(obj).includes(String(el))) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  })

  let pairs = Object.values(obj)
  pairs.forEach(el => {
    if (el === 2) {
      counter += 1;
    } else if (el > 2) {
      counter += Math.floor(el / 2)
    }
  })
  return counter;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]))
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log( duplicates([1, 2, 5, 6, 5, 2])) //,2 );
console.log( duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])) //,4 );
console.log( duplicates([0, 0, 0, 0, 0, 0, 0])) //,3 );
console.log( duplicates([1000, 1000])) //,1 );
console.log( duplicates([])) //,0 );
console.log( duplicates([54])) //,0 );