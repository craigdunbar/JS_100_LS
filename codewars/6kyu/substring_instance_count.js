/*
# -----------------------INSTRUCTIONS------------------------
Complete the solution so that it returns the number of times 
the search_text is found within the full_text. 

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1


# ----------------------------ALGO---------------------------
# given the two string arguments 
use the second string as the delimiter to split the string
get the length of the split array 
subtract one and that's the number of occurences
*/
function solution(str1, str2) {
  return str1.split(str2).length - 1
}
console.log(solution('aa_bb_cc_dd_bb_e', 'bb'))// # should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb')) //# should return 1