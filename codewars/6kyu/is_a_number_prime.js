/*
# -----------------------INSTRUCTIONS------------------------
Define a function that takes an integer argument and returns a 
logical value true or false depending on if the integer is a prime.

a prime number ( or a prime ) is a natural number greater 
than 1 that has no positive divisors other than 1 and itself.
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: a prime number must be greater than 0
can only have two divisors

# Implicit: 

# --------------------------EXAMPLES-------------------------
is_prime(1)  // false 
is_prime(2)  // true  
is_prime(-1) // false 
# ----------------------------ALGO---------------------------
# given the integer argument 
if the intgere is 0 below then return false
if the integer can be divided by with 2 or 3 then it's not a prime number
calculate the remiainder of dividing the given integer by two or three and
if it equals zero return false 
else return false
*/
function is_Prime(num) {
  if (num <= 1) {
    return false;
    } else if (num === 2 || num === 3) {
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
    } else {
    return true;
    }
}
console.log(is_Prime(0)) // ,  false, "0 is not prime");
console.log(is_Prime(1)) // false, "1 is not prime");
console.log(is_Prime(2)) // true, "2 is prime");
console.log(is_Prime(73)) // true, "73 is prime");
console.log(is_Prime(75)) // false, "75 is not prime");
console.log(is_Prime(-1)) // false
console.log(is_Prime(789441409)) // false