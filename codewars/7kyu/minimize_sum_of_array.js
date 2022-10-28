/*
# -----------------------INSTRUCTIONS------------------------
Mimimize sum of array

Given an array of integers , 
Find the minimum sum which is obtained from summing each Two integers product .
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Array/list will contain positives only .
Array/list will always have even size

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
minSum({5,4,2,3}) ==> return (22) 
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

sort the array => [2, 3, 4, 5]
sum first and last, second and third

minSum({12,6,10,26,3,24}) ==> return (342)
sorted array => [3, 6, 10, 12, 24, 26]
sum first and last, second and second last, third and fourth
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

# ----------------------------ALGO---------------------------
# sort the given array
initalise a sum variable with value 0
initalise a loop with count at 0 and count < arr.length/ 2;
on each iteration sum arr[coun] + arr[arr.length - count]
first => arr[0] + arr[3]
second => arr[1] + arr[2] etc
return the sum
*/
function minSum(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let count = 0; count < arr.length / 2; count ++) {
    let num1 = (arr[count])
    let  num2 = (arr[(arr.length -1) - count])
    sum += num1 * num2
  }
  return sum;
}

console.log(minSum([5,4,2,3])) //, 22);
console.log(minSum([12,6,10,26,3,24])) //, 342);
console.log(minSum([9,2,8,7,5,4,0,6])) //, 74);