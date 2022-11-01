/*
# -----------------------INSTRUCTIONS------------------------
Complete the solution so that it returns the number of 
times the search_text is found within the full_text. 

# --------------------------PROBLEM--------------------------

# Input: string, substring
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1


# ----------------------------ALGO---------------------------
# split the string using the given substring as a delimiter
the length of this array -1 is the number of instances
return the number if instances
*/
function solution(str, sub) {
  return str.split(sub).length - 1;
}
console.log(solution('aa_bb_cc_dd_bb_e', 'bb'))
console.log(solution('aaabbbcccc', 'bbb')); 