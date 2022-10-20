/*
# -----------------------INSTRUCTIONS------------------------
Transform to Prime
Given a List [] of n integers , find minimum number to be i
nserted in a list, so that sum of all elements of list should 
equal the closest prime number .

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

# Implicit: 

# --------------------------EXAMPLES-------------------------
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , 
the minimum number to be inserted to transform the sum to prime number is (1) , 
which will make the sum of the List equal the closest prime number (7) .

2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , 
the minimum number to be inserted to transform the sum to prime number is (5) , 
which will make the sum of the List equal the closest prime number (37) .

3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , 
the minimum number to be inserted to transform the sum to prime number is (2) , 
which will make the sum of the List equal the closest prime number (191) .
# ----------------------------ALGO---------------------------
#  a prime number can only be made up by multiply itself by 1
to check if a number is prime get the square root and then use the 
modulo operator from 1 up to the sqrt and if any result is zero it isn't a prime
number
given the array argument use reduce to get the sum of the array
chaeck whether this number is prime
if not add 1 to the value and check again
if prime return the new number
*/
function minimumNumber(arr) {
  let num = arr.reduce((acc, value) => acc + value)
  // let sqrt = Math.ceil(Math.sqrt(num))
  // console.log(sqrt)
  let newNum = num;
  for (let count = 2; count <= num - 1; count ++) {
    // console.log(count)
    if (newNum % count === 0) {
      newNum += 1;
    }
  }
  return (newNum - num);
}

console.log(minimumNumber([3,1,2])) //,1);
console.log(minimumNumber([5,2])) //,0);
console.log(minimumNumber([1,1,1])) //,0);
console.log(minimumNumber([2,12,8,4,6])) //,5);
console.log(minimumNumber([50,39,49,6,17,28])) //,2);