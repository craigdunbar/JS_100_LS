/*
# -----------------------INSTRUCTIONS------------------------

Remove the duplicate words

Your task is to remove all duplicate words from a string, 
leaving only single (first) words entries.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'


# ----------------------------ALGO---------------------------
# initalize an empty array
split the string argument into an array of words
iterate over the array
if the newArr does not include the current word add it to the array
else skip it
*/
function removeDuplicateWords(str) {
  let newArr = [];
  let arr = str.split(' ');
  arr.forEach(el => {
    if (!newArr.includes(el)){
      newArr = newArr.concat(el);
    }
  })
  return newArr;
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));