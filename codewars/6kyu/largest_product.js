/*
# -----------------------INSTRUCTIONS------------------------
Complete the greatestProduct method so that it'll find the 
greatest product of five consecutive digits in the given 
string of digits.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: The input string always has more than five digits.

# Implicit: 

# --------------------------EXAMPLES-------------------------
greatestProduct("123834539327238239583") // should return 3240

# ----------------------------ALGO---------------------------
# define a variable longest = 0
split the str into an array
iterate over the array and create subArrays of 5 digits
- use arr.slice
use reduce to get the product of these 5 digits
if the product is greater than longest 
longest = current product

return the product
*/
function greatestProduct(str) {
  let largest = 0;
  let arr = str.split('')
  for (let i = 0; i < arr.length - 4; i++) {
    let subArr = arr.slice(i , i + 5)
    let product = subArr.reduce((acc, el) => acc * el, 1) 
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
}


console.log(greatestProduct("123834539327238239583")) //, 3240, 'The method gave a wrong answer');
console.log(greatestProduct("92494737828244222221111111532909999")) //, 5292, 'The method gave a wrong answer');
console.log(greatestProduct("92494737828244222221111111532909999")) //, 5292);
console.log(greatestProduct("92494737828244222221111111532909999")) //, 5292);
console.log(greatestProduct("02494037820244202221011110532909999")) //, 0);