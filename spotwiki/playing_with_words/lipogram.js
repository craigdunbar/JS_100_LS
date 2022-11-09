/*
# -----------------------INSTRUCTIONS------------------------
A written work composed of words chosen to avoid the use of one or more letters

Create a function that takes two strings as  arguments and return a boolean 
value if the first string contains all of the letters of alphabet 
except the one that is the second argument.
# --------------------------PROBLEM--------------------------
# Input: two strings

# Output:boolean

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
isLipogram('abcdefghijklmnopqrstuvwxy', 'z'); //true
isLipogram('abc', 'd'); //false

# -----------------ALGO and Data Structure ------------------
initalise an empty obj
if str1 + str2. lenght < 26 return false
iterate over the string and add the current letter as a key in the object
or increase obj value by one if it exists already
add str2 to the object 
if the sum of obj values is 26 return true
*/
function isLipogram(str1, str2) {
  let seenObj = {};
  let str = str1 + str2;
  if (str.length < 26) {
    return false;
  }
  
  for (let char of str) {
    if (!Object.keys(seenObj).includes(char)) {
      seenObj[char] = 1;
    } else {
      seenObj[char] += 1
    }
  }
  return Object.values(seenObj).reduce((acc, el) => acc + el, 0) === 26 ? true : false
}

console.log(isLipogram('abcdefghijklmnopqrstuvwxy', 'z')); //true
console.log(isLipogram('abc', 'd')); //false
