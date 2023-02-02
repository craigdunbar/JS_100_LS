/*
# -----------------------INSTRUCTIONS------------------------

Given a string of integers, return the number of odd-numbered 
substrings that can be formed.

# --------------------------PROBLEM--------------------------

# Input: string 
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. 

# ----------------------------ALGO---------------------------
16
define an empty array
need to get all the substrings of the given string
need to generate a loop to creat substrings of the original string split into 
array of digits
then need another array to create the substrings of the substring
then filter for the odd ones
*/
function solve(str) {
  let subsArr = [];
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++ ){
    let substring = arr.slice(i)
    for (let j = 0; j < substring.length; j++) {
      let substrings = substring.slice(0, j+1)
      subsArr.push(substrings)
    }
  }
  return subsArr.map(el => el.join('')).filter(num => num[num.length -1] % 2 === 1).length; // check last digit instead of number
}
console.log(solve("1341")) //,7);
console.log(solve("1357")) //,10);
console.log(solve("13471")) //,12);
console.log(solve("134721")) //,13);
console.log(solve("1347231")) //,20);
console.log(solve("13472315")) //,28);
console.log(solve("73349798887232632132425544116811276969377242627278638546418")); // 754