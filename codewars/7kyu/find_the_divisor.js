/*
# -----------------------INSTRUCTIONS------------------------

Create a function named divisors/Divisors that takes an integer 
n > 1 and returns an array with all of the integer's 
divisors(except for 1 and the number itself), from smallest 
to largest. 
If the number is prime return the string '(integer) is prime' 


# --------------------------PROBLEM--------------------------

# Input: num
# Output: array or string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
# ----------------------------ALGO---------------------------
# define an empty array
initalise a loop from 1 to num
on each iteration 
if (num % count === 0) add count to the 
if array length > 0 return the array else return 'number is prime'
*/
function divisors(num) {
  let arr = [];
  for (let count = 2; count < num; count++) {
    if (num % count === 0) {
      arr = arr.concat(count)
    }
  }
  return arr.length > 0 ? arr : `${num} is prime`
}
console.log(divisors(15)) //, [3, 5]);
console.log(divisors(12)) //, [2, 3, 4, 6]);
console.log(divisors(13)) //, "13 is prime");