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
# 
define an empty array
iterate over the string
make substrings pairs
-start at index 0
- then index 2 etc
- use str.slice(i, i + 2) i + 2 each iteration
up to str.length / 2 
add each suibstring to the array
if str.length % 2 === 1 take the last elment and concat it with _
return the arr
*/
function solution(str) {
  let arr = [];
  let evenStr = ''
  if (str.length %  2 === 1) {
    evenStr = str.slice(0, str.length - 1)
  } else {
    evenStr = str
  }

  for (let i = 0; i < evenStr.length; i += 2) {
    substring = evenStr.slice(i, i + 2);
    arr = arr.concat(substring)
  } 
  if (str.length % 2 === 1) {
    let last = str[str.length - 1] + '_'
    arr = arr.concat(last)
  }
  return arr;
}
console.log(solution("abcdef"))//, ["ab", "cd", "ef"]);
console.log(solution("abcdefg"))//, ["ab", "cd", "ef", "g_"]);
console.log(solution(""))//, []);
console.log(solution('wAPCXFoqftEsiYeqe'))