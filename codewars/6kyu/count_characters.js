/*
# -----------------------INSTRUCTIONS------------------------
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------


# ----------------------------ALGO---------------------------
# 
define an empty object
split the string into an array of characters 
iterate over the string
if the current character is not an object key 
assign it a value of 1
if it is a key increase the value by one
return the object
*/
function count(str) {
  let seenObj = {}
  str.split('').forEach(el => {
    if (!Object.keys(seenObj).includes(el)) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1
    }
  })
  return seenObj;
}
console.log(count("aba")) //, { a: 2, b: 1 }); 
console.log(count("")) //, {}); 