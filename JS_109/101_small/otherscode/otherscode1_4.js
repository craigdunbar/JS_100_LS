/*
# -----------------------INSTRUCTIONS------------------------
Video 1
You have to create  a function that takes a positive integer
and returns the next bigger number formed by the same digits

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: next biggest integer with same digits

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
5
given the starting integer
initalise a loop to add one to the integer
if this intgere has the same digits as the origianl return it
- to check the same digits convert the number to a string sort it and put it back into a number
else set the number to this new number and continue adding one 
*/
function next(num) {
  let sortedNum = Number(num.toString().split('').sort((a, b) => a - b).join(''))
  let max = Number(num.toString().split('').sort((a, b) => b - a).join(''))
  if (num === max) return -1;

  for (let i = 1; i <= max; i++) {
    nextNum = num + i;

    if (Number(nextNum.toString().split('').sort((a, b) => a - b).join('')) === sortedNum) {
      return nextNum;
    }
}
return - 1
}
console.log(next(12)) // 21
console.log(next(513)) // 531
console.log(next(2017)) // 2071
console.log(next(9)) // -1
console.log(next(111)) // -1
console.log(next(531)) // -1