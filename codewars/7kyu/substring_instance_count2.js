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
split the string using the second argument
the length of the new array - 1 is the number of occurences of the second string
*/
function solution(str1, str2) {
  return (str1.split(str2).length - 1)
}
console.log(solution('aa_bb_cc_dd_bb_e', 'bb'))// # should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb')) //# should return 1