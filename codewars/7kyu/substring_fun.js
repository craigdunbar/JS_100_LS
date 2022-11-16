/*
# -----------------------INSTRUCTIONS------------------------
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct 
a new word which should be returned as a string, 
where n is the position of the word in the list.

# --------------------------PROBLEM--------------------------

# Input: array of strings
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2


# ----------------------------ALGO---------------------------
# 
create an empty string
iterate over the array 
for each word use slice to remove the letter that is at the same index as the 
word in the array
add this letter to the empty string
*/
function nthChar(arr) {
  let str = '';
  arr.forEach((word, idx) => {
    str += word[idx]
  })
  return str;
}

console.log(nthChar([])) //,'');
console.log(nthChar(['yoda', 'best', 'has'])) //, 'yes');