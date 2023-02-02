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


# ----------------------------ALGO---------------------------
define an empty object
split the given string into an array of chars
iterate over the array
if Object.keys(obj) does not include the current char 
add it as a key
if it's there add one to the value
return the object
*/
function count(str) {
  let obj = {}
  str.split('').forEach(el => {
    if(!Object.keys(obj).includes(el)) {
      obj[el] = 1;
    } else {
      obj[el] += 1
    }
  })
  return obj;
}
console.log(count("aba")) //, { a: 2, b: 1 }); 
console.log(count("")) //, {}); 