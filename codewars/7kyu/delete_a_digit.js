/*
# -----------------------INSTRUCTIONS------------------------
Given an integer n, find the maximal number 
you can obtain by deleting exactly one digit of the given number.

# --------------------------PROBLEM--------------------------

# Input: integer 10 ≤ n ≤ 1000000.
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
For n = 152, the output should be 52;

For n = 1001, the output should be 101.
# ----------------------------ALGO---------------------------
# to get the maximum number 
convert number to string
split string to array
find the smallest number in the array and remove it
- have a variable called smallest 
- set it initally to n
- iterate over the array
- if current elmeent is < smallest reassign smallest 
- at tend of iteration find the index of the elmeent with the smallest value
- remove this element from the array
join the array nack into a string and then into a number
return the number

*/
function deleteDigit(n) {
  let big = 0;
  let arr = n.toString().split('');

  for (let idx = 0; idx < arr.length; idx++) {
    let shortArr = arr.slice(0, idx).concat(arr.slice(idx + 1))
    let bigNum = Number(shortArr.join(''))
    if (bigNum > big) {
      big = bigNum
    }
    }
  return big;

}

console.log(deleteDigit(152)) //,52)
console.log(deleteDigit(1001)) //,101)-->
console.log(deleteDigit(10)) //,1)-->
console.log(deleteDigit(455147)) //55147