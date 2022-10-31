/*
# -----------------------INSTRUCTIONS------------------------
Create a moreZeros function which will receive a string for 
input, and return an array (or null terminated string in C) 
containing only the characters from that string whose binary 
representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the 
first occurence of any such duplicates, so they are in the 
same order in the final array as they first appeared in the input string.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: All input will be valid strings of length > 0. 
Leading zeros in binary should not be counted.

# Implicit: 

# --------------------------EXAMPLES-------------------------

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
# ----------------------------ALGO---------------------------
# 
define a new array = [];
convert the string to an array and remove duplicate characters
iterate over the string withput duplicates
use charCodeAt to get the UTF value
use toString(2) to get binary represenetations of the number
count the number of one's and zero's 
if more zeros than ones select the char and add to the new array
return the new array
*/

function moreZeros(str) {
  let newArr = [];
  let uniqueStr = [...new Set(str)].join('')
  for (let i = 0; i < str.length; i ++) {
    let bin = (uniqueStr.charCodeAt(i).toString(2))
    let zeros = bin.split('').filter(num => num === '0');
    let ones = bin.split('').filter(num => num === '1');
    if (zeros.length > ones.length) {
      newArr = newArr.concat(uniqueStr[i])
    }
  }
  return newArr;
}
console.log(moreZeros('abcde')) //,['a','b','d'])
console.log(moreZeros('Great job!')) //,['a', ' ', 'b', '!'])
console.log(moreZeros('DIGEST')) //,['D','I','E','T'])
console.log(moreZeros('abcdeabcde')) //,['a','b','d'],'Should not return duplicates values')