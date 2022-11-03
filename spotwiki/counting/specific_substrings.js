/*
# -----------------------INSTRUCTIONS------------------------

Create a function that takes two strings as an argument and 
returns a number representing occurrences of the second argument 
as a sub-string of the first argument,

# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' );// => 3

# ----------------------------ALGO---------------------------
# 
define a counter variable = 0
split the first string into an array of words
iterate over array 
check each word includes str2
if so increase counter by 1
return the counter
*/
function countSubstr(str1, str2) {
  let counter = 0;
  str1.split(' ').forEach(word => {
    if (word.includes(str2)) {
      counter++
    }
  })
  return counter;
}
console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' ));// => 3