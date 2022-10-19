/*
# -----------------------INSTRUCTIONS------------------------
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples 
of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.


# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer result of calculation
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
test(10,23)
# ----------------------------ALGO---------------------------
# create an array from 1 to the given integer
iterate over that array
if the element is divisable by 3 or 5 push it to a new array
after the iteration is finished 
reduce the new array to get the sum of the values
*/
function multiples(num) {
  if (num <= 0) {
    return 0;
  }

  let newArr = [];
  let arr = [...Array(num - 1)].map((el, idx) => el = idx +1);
  arr.forEach(el => {
    if (el % 3 === 0 || el % 5 === 0) {
      newArr = newArr.concat(el);
    }
  })
  return newArr.reduce((acc, value) => acc + value, 0);
}
console.log(multiples(10)) // 23
console.log(multiples(93664)) // 23