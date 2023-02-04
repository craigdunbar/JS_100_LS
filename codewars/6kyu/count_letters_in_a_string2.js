/*
# -----------------------INSTRUCTIONS------------------------
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}


# ----------------------------ALGO---------------------------
define an empty obj
split the given string into an array of characters
iterate over the array
if the current char is not a key in the obj
make it one and assign a value of 1
if it is then increase the value by one
return the obj
*/
function letter_count(str) {
  let seenObj = {};
  str.split('').sort().forEach(el => {
    if (!Object.keys(seenObj).includes(el)) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1
    }
  })
  return seenObj;
}
console.log(letter_count('arithmetics')) //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
console.log(letter_count("aba")) //, { a: 2, b: 1 }); 
console.log(letter_count("")) //, {}); 