/*
# -----------------------INSTRUCTIONS------------------------
Counting duplicates
Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. 
The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer representing number of pairs
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
# ----------------------------ALGO---------------------------
# 
define a count variable and initalize to a value of 0
split the string into an array of lowercase characters
iterate over the array
creat an object to hold the letters in the string and the count of occurences
any letter that has a count over two is a pair
return the number of pairs using object values to get an array and filter to get any
with values of 2 or above.
*/
function duplicateCount(str) {
  let letterObj = {};
  let arr = str.toLowerCase().split('');
  arr.forEach(el => {
    if(!Object.keys(letterObj).includes(el)) {
      letterObj[el] = 1;
    } else {
      letterObj[el] += 1;
    }
  })
  return Object.values(letterObj).filter(el => el >= 2).length;
}
console.log(duplicateCount("")) //, 0);
console.log(duplicateCount("abcde")) //, 0);
console.log(duplicateCount("aabbcde")) //, 2);
console.log(duplicateCount("aabBcde")) //, 2,"should ignore case");
console.log(duplicateCount("Indivisibility")) //, 1)
console.log(duplicateCount("Indivisibilities"))//, 2, "characters may not be adjacent