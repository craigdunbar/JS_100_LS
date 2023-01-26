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
create an empty str
split the string into an array of chars
iterate over the chars array
for each element if the element's inde is included in the num array
capitalize this char and add to the empty str
if not add the char as is
return the new string

*/
function capitalize(str, arr) {
  let newStr = '';
  str.split('').forEach((char, idx) => {
    if (arr.includes(idx)) {
      newStr = newStr + char.toUpperCase();
    } else {
      newStr = newStr + char;
    }
  })
  return newStr;
}
console.log(capitalize("abcdef",[1,2,5])) //,'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100])) //,'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50])) //,'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10])) //,'abRacaDabRA');
console.log(capitalize("codewarriors",[5])) //,'codewArriors');
console.log(capitalize("indexinglessons",[0])) //,'Indexinglessons');