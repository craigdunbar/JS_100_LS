/*
# -----------------------INSTRUCTIONS------------------------

Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

The number 89 is the first integer with more than one digit that 
fulfills the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive 
two integers a, b that defines the range [a, b] (inclusive) and 
outputs a list of the sorted numbers in the range that fulfills 
the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the 
function should output an empty list.

90, 100 --> []


# --------------------------PROBLEM--------------------------

# Input: two integers
# Output: 
# ---------------------------RULES---------------------------
# Explicit: the sum of the digits to consecutive powers in the integer === given integer

# Implicit: 

# --------------------------EXAMPLES-------------------------
89 => 8 ^ 1 + 9 ^ 2 = 89 therefor this works
1 ^ 1 = 1
2 ^ 1 = 2

# ----------------------------ALGO---------------------------
# 
define an empty array
given the integer arguments 
use these as the range of numbers to check
determine hoe many digits the numbers have 
use the number of digits to determine the highest power
create a loop to increase a total by the result of 
the current number ^ the current power
ie for 1, 100 => the highest power would be 3
start a loop at 1 that goes to 100
for the current iteration
get the result of current number ^ no. of digits in current number
so if current num < 10 power is one
if current number is between 10 and 99 power is one on first digit two on second
to get the sum change number to string then split into digits
sum = first digit + second digit ^ 2 + third digit ^ 3 etc

if sum of powers === sum of original digits push to an array
*/
function sumDigPow(num1, num2) {
  let arr = [];

  for (let count = num1; count <= num2; count ++) {
    let sum = 0;
    let numOfDigits = String(count).split('').length
    let digits = String(count).split('')
    
      for (let i = 0; i < numOfDigits; i++) {
        sum += Number(digits[i]) ** (i+1)
      }
    
      if (sum === count) {
        arr.push(count)
      }
  }
  return arr;
}


console.log(sumDigPow(1, 10)) //, [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100)) //, [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100)) //,  [89])
console.log(sumDigPow(90, 100)) //, [])
console.log(sumDigPow(90, 150)) //, [135])
console.log(sumDigPow(50, 150)) //, [89, 135])
console.log(sumDigPow(10, 150)) //, [89, 135])