/*
# -----------------------INSTRUCTIONS------------------------
Find all pairs
You are given array of integers, your task will be to count 
all pairs in that array and return their count.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. 
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
range of values in array is between 0 and 1000
# Implicit: 

# --------------------------EXAMPLES-------------------------
[1, 2, 5, 6, 5, 2]  -->  2 ...because there are 2 pairs: 2 and 5
2 occurs twice and 5 occurs twice
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4 ...because there are 4 pairs: 2, 20, 6 and 2 (again)

# ----------------------------ALGO---------------------------
# 
define a variable t hold running total of pairs count
generate an object 
- count the number of instances of the numbers in the array
if a number occurs twice it a pair
- find the pairs using object values array
- filter array for values of 2 and get the length
- this is the number of pairs
if it occurs 4 times or an even number of times > 4 - only count it twice
if odd times 3 or greater then divide by 2 and use Math.floor to get pairs
for each pair add one to the pair count
*/
function duplicates(arr) {
  let countObj = {};
  let pairs = 0;

  arr.forEach(el => {
    if (!Object.keys(countObj).includes(String(el))) {
      countObj[el] = 1;
    } else {
      countObj[el] += 1
    }
  })
  let pairsArr = Object.values(countObj);
  pairsArr.forEach(el => {
    if (el === 2) {
      pairs += 1;
    } else if (el > 2) {
      pairs += Math.floor(el / 2)
    }
  })
  return pairs;
}

console.log(duplicates([1, 2, 5, 6, 5, 2])) // ,2 );
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])) //,4 );
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])) //,3 );
console.log(duplicates([1000, 1000])) //,1 );
console.log(duplicates([])) //,0 );
console.log(duplicates([54]))//,0 );
