/*
# -----------------------INSTRUCTIONS------------------------
Find the unique number

There is an array with some numbers. 
All numbers are equal except for one. Try to find it!


# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: It’s guaranteed that array contains at least 3 numbers.

# Implicit: 

# --------------------------EXAMPLES-------------------------
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

# ----------------------------ALGO---------------------------
#
sort the array and check each element agianst the next one 
return the first element that isnt the same
// this didn;t work so I made an object

creat an object with keys as the array elements 
add one to the value for each occurence
return the key with value of one

// if I'd looked a bit longer i wouldve seen that if 
arr[0] was the same as arr[1] then it's the last elment that different 
i wrote the funciton using sort again below.
*/
// function findUniq(arr) {
//   let obj = {};
//   arr.forEach(el => {
//     if (!Object.keys(obj).includes(String(el))) {
//       obj[el] = 1;
//     } else {
//       obj[el] += 1;
//     }
//   })
//   return Number(Object.keys(obj).find(key => obj[key] === 1));
// }
// using array.sort
function findUniq(arr) {
arr.sort((a, b) => a - b);
return arr[0] === arr[1] ? arr.pop() : arr[0];
}

console.log(findUniq([ 1, 0, 0 ])) //, 1);
console.log(findUniq([ 0, 1, 0 ])) //, 1);
console.log(findUniq([ 0, 0, 1 ])) //, 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) //, 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ])) //, 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ])) //, 10);
console.log(findUniq([4, 4, 4, 3, 4, 4, 4, 4])) //, 3);
