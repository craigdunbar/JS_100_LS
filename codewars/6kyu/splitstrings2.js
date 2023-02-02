/*
# -----------------------INSTRUCTIONS------------------------

Complete the solution so that it splits the string into pairs 
of two characters. If the string contains an odd number of 
characters then it should replace the missing second character 
of the final pair with an underscore ('_').

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

# ----------------------------ALGO---------------------------
4
define an empty array
split the string into an array of chars
if the array length is odd push('_') to the strings array
iterate over the array
starting at index 0
add the chars at index 0 and index 0 + 1 together and push to the array
repeat to the end of the array
*/
function split(str) {
  let arr = [];
  let strArr = str.split('')
  if (strArr.length % 2 === 1) {
    strArr.push('_')
  }
  for (let i = 0; i < strArr.length; i += 2) {
    let split = (strArr[i] + strArr[i+1])
    arr.push(split)
  }
  return arr;
}
console.log(split('abc'))
console.log(split('abcd'))
console.log(split("abcdef"))//, ["ab", "cd", "ef"]);
console.log(split("abcdefg"))//, ["ab", "cd", "ef", "g_"]);
console.log(split(""))//, []);
console.log(split('wAPCXFoqftEsiYeqe'))
