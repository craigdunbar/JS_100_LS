/*
# -----------------------INSTRUCTIONS------------------------
Count letters in string
In this kata, you've to count lowercase letters in a given 
string and return the letter count in a hash with 'letter' 
as key and count as 'value'. 

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: all strings are lower case

# Implicit: object keys are in alhabetical order?

# --------------------------EXAMPLES-------------------------
letter_count('arithmetics') //=> 
{"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

# ----------------------------ALGO---------------------------
# creat an empty object
convert string to an array of characters
iterate over the array
if the object does not have the current character as a key
create the key and assign it a value of 1
if the key already exists add one to the value.
after iteration is complete 
return the object 
*/
function letterCount(str) {
  let countObj = {};
  let arr = str.split('').sort();

  arr.forEach(el => {
    if (!Object.keys(countObj).includes(el)) {
      countObj[el] = 1
    } else {
      countObj[el] += 1
    }
  })
  return countObj;
}

console.log(letterCount("codewars")) // {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
console.log(letterCount("activity")) //, {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
console.log(letterCount("arithmetics")) //, {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
console.log(letterCount("traveller")) //, {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
console.log(letterCount("daydreamer")) //, {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});
