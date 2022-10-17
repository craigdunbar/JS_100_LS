/*
# -----------------------INSTRUCTIONS------------------------
Return substring instance count

Complete the solution so that it returns the number 
of times the search_text is found within the full_text.
# --------------------------PROBLEM--------------------------

# Input: string and substring
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
# ----------------------------ALGO---------------------------
# given the string and substring argument
define an aempty array
get the length of the substring
use this length to look at the substrings of the given string that 
have the same number of charaacter
ie in first example substring === 'bb' which is 2 characters
iterate over the given string building substrings that are two character long
ie aa a_ _b bb b_ _c cc etc 
so this by using slice(count, count + 2)
if the substring === argument push this to an array
at the end of the iteration the length of the array is the 
number of instances
*/
function solution(str1, str2) {
  let substringsArr = [];
  let length = str2.length;

  for (let count = 0; count < str1.length; count ++) {
    let substring = str1.slice(count, (count + length));
    if (substring === str2) {
      substringsArr = substringsArr.concat(substring)
    }
  }
return(substringsArr.length);
}
console.log(solution('aa_bb_cc_dd_bb_e', 'bb')) // # should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb')) // 1
console.log(solution('abcdeb','b')) //, 2);
console.log(solution('abc','b')) //, 1);
console.log(solution('abbc','bb')) //, 1);