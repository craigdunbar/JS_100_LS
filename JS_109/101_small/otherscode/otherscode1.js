/*
# -----------------------INSTRUCTIONS------------------------
Video 1
You have to create  a function that takes a positive integer
and returns the next bigger number formed by the same digits


# --------------------------PROBLEM--------------------------

# Input: integer
# Output: next biggest integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
12 ==> 21
513 ==> 531
2017 ==> 2071
if no bigger number can be composed return -1
9 ==> -1
111 ==> -1
531 ==> -1
# ----------------------------ALGO---------------------------
# define an empty array
begin a loop that adds one to the given num
convert this new num into an array
convert the given num into an array
using every() check the new array includes all the numbers from the given array
return this newArr as an integer if true
else continue with the interation
*/
function nextBiggerNum(num) {
let arr = String(num).split('')
let nextArr= []

  if (arr[0] === arr[1] && arr[1] === arr[2]) {
  return -1;
  }

do {
  let nextNum = num + 1
  nextArr = String(nextNum).split('');
  if (nextArr.length > arr.length) {
    return -1;
  } 
  num = nextNum
} while (arr.every(num => nextArr.includes(num)) === false)
return num
}
console.log(nextBiggerNum(12));
console.log(nextBiggerNum(513));
console.log(nextBiggerNum(2017));
console.log(nextBiggerNum(9));
console.log(nextBiggerNum(111));
console.log(nextBiggerNum(531));
console.log(nextBiggerNum(123456789));