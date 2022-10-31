/*
# -----------------------INSTRUCTIONS------------------------

Given a string and an array of integers representing indices, 
capitalize all letters at the given indices.

For example:

    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

# --------------------------PROBLEM--------------------------

# Input: string and array
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

abcdef, [1, 2, 5, 100]

# ----------------------------ALGO---------------------------
# 
define a new empty string
iterate a for loop with count at 0 and count < str.length
if arr.includes(count)
change the str[count] to uppercase ie
arr element is 1 => str[1] = b => B
add this to the empty string
else add unchanged string to new string

return the new string
*/
function capitalize(str, arr) {
  let newStr = '';
  for (let count = 0; count < str.length; count ++) {
    if (arr.includes(count)) {
      newStr = newStr + str[count].toUpperCase()
    } else {
      newStr = newStr + str[count]
    }
  }
  return newStr;
}

console.log(capitalize("abcdef",[1,2,5])) //,'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100])) //,'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50])) //,'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10])) //,'abRacaDabRA');
console.log(capitalize("codewarriors",[5])) //,'codewArriors');
console.log(capitalize("indexinglessons",[0])) //,'Indexinglessons');