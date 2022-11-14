/*
# -----------------------INSTRUCTIONS------------------------
Get the next prime number!

You will get a number n (>= 0) and your task is to find the next prime number. 

# --------------------------PROBLEM--------------------------

# Input: number
# Output: next prime number
# ---------------------------RULES---------------------------
# Explicit: optimise the code for large numbers

# Implicit: 

# --------------------------EXAMPLES-------------------------
5   =>  7
12  =>  13

# ----------------------------ALGO---------------------------
# given the number argument
create a loop to add one to the number and then see if it's prime
- prime number can only be divided by itself
create a loop from 2 to the sqrt of the number dividing the number by the count
if the num % count === 0 it's not prime
if so return it
if not continue to add one again
*/

function nextPrime(n){
  while (true) {
    n++;
    if (prime(n)) return n;
  };
};

function prime(n) {
  if (n < 2) return false;
  for (let i = 2; i*i <= n; i++) {
    if (n % i === 0)  return false;
  };
  return true;
};

console.log(nextPrime(0)) //, 2);
console.log(nextPrime(1)) //, 2);
console.log(nextPrime(2)) //, 3);
console.log(nextPrime(3)) //, 5);
console.log(nextPrime(5)) //, 7);
console.log(nextPrime(11)) //, 13);
console.log(nextPrime(17)) //, 19);
console.log(nextPrime(2971)) //, 2999);