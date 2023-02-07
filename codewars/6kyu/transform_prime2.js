/*
# -----------------------INSTRUCTIONS------------------------
Given a List [] of n integers , find minimum number to be 
inserted in a list, so that sum of all elements of list should 
equal the closest prime number .

# --------------------------PROBLEM--------------------------

# Input: arr of numbers
# Output: number
# ---------------------------RULES---------------------------
# Explicit: List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number . 

# Implicit: 

# --------------------------EXAMPLES-------------------------
minimumNumber ({3,1,2}) ==> return (1)

# ----------------------------ALGO---------------------------
12
use reduce to get the sum of the current array elements
calculate if this number is prime 
calculate the next prime number 
get difference between current and next prime
return the difference

*/
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i*i <= n; i++) {
    if (n % i === 0) return false;
    }
  return true;
}
function nextPrime(n) {
  while(true) {
    n++
    if(isPrime(n)) return n
  }
}
function minimumNumber(arr) {
  let total = arr.reduce((acc, el) => acc + el,0)
  if (isPrime(total)) {
    return 0;
  } else {
  return nextPrime(total) - total
  }
}

console.log(minimumNumber([3,1,2]))