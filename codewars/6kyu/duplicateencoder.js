/*
# -----------------------INSTRUCTIONS------------------------

The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character 
appears only once in the original string, or ")" if that character
 appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: ignore case

# Implicit: 

# --------------------------EXAMPLES-------------------------
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

# ----------------------------ALGO---------------------------
split the string
map the string array witht the result of filter
if the filter length >= 2 then the char becoames a closing paren )
if not it's an opening paren
*/
function duplicates(str) {
  let arr = str.toLowerCase().split('');
  return arr.map(el => {
    if (arr.filter(char => char === el).length >= 2) {
      return ')'
    } else {
      return '('
    }
  }).join('')
}
console.log(duplicates('din')) // "((("
console.log(duplicates('recede')) //"()()()"
console.log(duplicates('success')) // ")())())"

