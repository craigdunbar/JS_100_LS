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
1- minimumNumber ({3,1,2}) ==> return (1)

# ----------------------------ALGO---------------------------
# use reuce to get the sum of the integers
generate a loop to add one to the reduced integer
check if the number is prime 
have a seperate function for prime
 - generate a loop starting at 2 and going the sqrt of the reduced int
 - if the num % the current loop count === 0 is not prime so return false
 if it is prime return true
 if isPrime function returns true return the current num
 else add one to num 
*/
function minimumNumber(arr) {
  let startNum = arr.reduce((a, b) => a + b, 0)
  let num = startNum;
  
  while (true) {
    if (isPrime(num)) {
      return num - startNum;
    } else {
      num++
    }
  }
}

function isPrime(num) {
  for (let i = 2; i*i < num; i ++) {
    if (num % i === 0) return false
  }
  return true;
}

console.log(minimumNumber([3,1,2])) //,1);
console.log(minimumNumber([5,2])) //,0);
console.log(minimumNumber([1,1,1])) //,0);
console.log(minimumNumber([2,12,8,4,6])) //,5);
console.log(minimumNumber([50,39,49,6,17,28])) //,2);