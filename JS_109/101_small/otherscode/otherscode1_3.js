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
30
if number < 10 return - 1
create a loop to add one to the given number on each iteration
if the new number contains the same digits as the original
return it
- check the digits by changing the number to a string and then into an array
- use array every to check the new digits

*/
function next(num) {
  if (num < 10) return -1;
  let max = Number((num.toString().split('').sort((a, b) => b - a)).join(''))
  // console.log(max)
  for (let i = 1; i <= max; i++) {
    let nextNum = num + i;
    if (nextNum.toString().split('').sort((a, b) => b - a).join('') 
          === num.toString().split('').sort((a, b) => b - a).join('')) {
      return nextNum;
    }
  }
  return -1;
}
console.log(next(12)) // 21
console.log(next(513)) // 531
console.log(next(2017)) // 2071
console.log(next(9)) // -1
console.log(next(111)) // -1
console.log(next(531)) // -1