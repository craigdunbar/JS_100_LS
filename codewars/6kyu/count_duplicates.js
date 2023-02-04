/*
# -----------------------INSTRUCTIONS------------------------

Count the number of Duplicates

Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
\that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (
  both uppercase and lowercase) and numeric digits.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
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
# define an empty obj
split the string into an array of chars
iterate over the array
if the current element is present as a key in the obj
-add one to it's value
-if not creat the key with a value of one

iterte over the objects keys array and return number of keys woth a value greater than 1
*/
function duplicateCount(str) {
  let seenObj = {}
  str.toLowerCase().split('').forEach(el => {
    if (!Object.keys(seenObj).includes(el)) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1;
    }
  })
  return Object.keys(seenObj).filter(key => seenObj[key] > 1).length
}

console.log(duplicateCount("")) //, 0);
console.log(duplicateCount("abcde")) //, 0);
console.log(duplicateCount("aabbcde")) //, 2);
console.log(duplicateCount("aabBcde")) //, 2,"should ignore case");
console.log(duplicateCount("Indivisibility")) //, 1)
console.log(duplicateCount("Indivisibilities")) //, 2, "characters may not be adjacent")
