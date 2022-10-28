/*
# -----------------------INSTRUCTIONS------------------------

Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

Digit Duplications could occur , So also consider it when forming the Largest

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
maxNumber (213) ==> return (321)
Explanation:
As 321 is _The Maximum number _ could be formed from the digits of the number 213 .

maxNumber (7389) ==> return (9873)
Explanation:
As 9873 is _The Maximum number _ could be formed from the digits of the number 7389 .

maxNumber (63729) ==> return (97632)
Explanation:
As 97632 is _The Maximum number _ could be formed from the digits of the number 63729 .

maxNumber (566797) ==> return (977665)
Explanation:
As 977665 is _The Maximum number _ could be formed from the digits of the number 566797 .
# ----------------------------ALGO---------------------------
# to get the max number sort the number into descednding order
convert number to string, split the string into an array
sort the array
join the array
convert the string to a number
return the string
*/
function maxNumber(num) {
  let arr = num.toString().split('');
  arr.sort((a, b) => b - a);
  return Number(arr.join(''));
}
console.log(maxNumber(213)) //, 321);
console.log(maxNumber(7389)) //, 9873);
console.log(maxNumber(63792)) //, 97632);
console.log(maxNumber(566797)) //, 977665);
console.log(maxNumber(1000000)) //, 1000000);