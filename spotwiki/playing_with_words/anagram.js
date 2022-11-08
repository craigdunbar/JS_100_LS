/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes two strings as arguments and 
returns a boolean value of true if two words are anagrams 
and false if they are not anagrams

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
isAnagram('aba', 'aab'); // true
isAnagram('aba', 'aa'); //false


# ----------------------------ALGO---------------------------
# split the string into an array of characters 
sort the array and join it back 
do the same for the second string
compare them 
*/
function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('') ? true : false
}
console.log(isAnagram('aba', 'aab')); // true
console.log(isAnagram('aba', 'aa')); //false