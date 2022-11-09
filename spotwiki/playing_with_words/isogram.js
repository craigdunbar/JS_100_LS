/*
# -----------------------INSTRUCTIONS------------------------
A word in which no letter of the alphabet occurs more than once. 

Create a function that takes one string as an argument and 
returns a boolean value, true if the word is a isogram 
and false if it's not.
# --------------------------PROBLEM--------------------------
# Input:string

# Output: boolean

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
isIsogram('dermatoglyphics'); // true
isIsogram('alabama'); //false

# -----------------ALGO and Data Structure ------------------
create a seen obj to track shich letters of the alphabet have 
apeared in the string 
iterate over the string and add a key to the object for each letter
unless the key exists already then increase the value by one
if all the objects values are one return true else return false
*/
function isIsogram(str) {
  let seenObj = {};
  for (let char of str) {
    if (!Object.keys(seenObj).includes(char)) {
      seenObj[char] = 1;
    } else seenObj[char] += 1;
  }
 return Object.values(seenObj).every(el => el === 1) ? true : false
}

console.log(isIsogram('dermatoglyphics')); // true
console.log(isIsogram('alabama')); //false
