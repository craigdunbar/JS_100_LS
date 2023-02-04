/*
# -----------------------INSTRUCTIONS------------------------
For a given nonempty string s find a minimum substring t and 
the maximum number k, such that the entire 
string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return : an array [t, k]

# --------------------------PROBLEM--------------------------

# Input: string
# Output: arr with substring and integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

for string

s = "ababab" // ["ab", 3]

s = "abcde" // ["abcde", 1]

because for this string "abcde" the minimum substring t, 
such that s is t repeated k times, is itself.
# ----------------------------ALGO---------------------------
33
need to generate substinrgs of the string
iterate over the string and make substrings starting at 0 and one char long
get length of str and divide by substring length assign to result variable
if substring * result === str return the susbtring and result
*/
function repeat(str) {
  let result = 0;
  let length = str.length
  let copyStr = str.slice(0);
  
  for (let i= 1; i <= str.length; i++) {
    let substring = copyStr.slice(0, i)
    result = length / substring.length;
    if (str === substring.repeat(result)) {
      return [substring, result];
    }
  }
}
console.log(repeat("ababab" ))
console.log(repeat("abcde" ))
