/*
# -----------------------INSTRUCTIONS------------------------
Largest product in a series

Complete the greatestProduct method so that it'll find the greatest 
product of five consecutive digits in the given string of digits.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
greatestProduct("123834539327238239583") // should return 3240

# ----------------------------ALGO---------------------------
# the greatest product will come from 5 conseecutive numbers
*/
function greatestProduct(str) {
  let arr = str.split('').map(el => el = Number(el))
  let total = 0;
  let result = 0;
  for (let count = 0; count < arr.length - 4; count ++) {
    let five = arr.slice(count, count + 5)
      result = five.reduce((acc, el) => acc * el, 1);

    if (result > total) {
      total = result;
    }
  }
  return total;
}

console.log(greatestProduct("123834539327238239583")) //3240 
console.log(greatestProduct("92494737828244222221111111532909999")) // 5292,
console.log(greatestProduct("02494037820244202221011110532909999")) // 0);
console.log(greatestProduct("0873414741"))