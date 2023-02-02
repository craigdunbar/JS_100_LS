/*
# -----------------------INSTRUCTIONS------------------------
An anagram is the result of rearranging the letters of a word 
to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments 
given are anagrams of each other; return false otherwise.


# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


# ----------------------------ALGO---------------------------
to chweck for anagram
sort words into alphabetical order
-split string into an array, sort the array
compare the two words
if same return true, else return false
*/
function isAnagram(str1, str2) {
   let new1 = str1.toLowerCase().split('').sort().join('')
    let new2 = str2.toLowerCase().split('').sort().join('')
    // console.log(new1, new2)
    return new1 === new2 ? true : false;
}
console.log(isAnagram("foefet", "toffee")) //, true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK")) //, true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT")) //, true, 'The word Twconsole.log(isAnagram
console.log(isAnagram("dumble", "bumble")) //, false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round")) //, false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale")) //, false, 'Same letters, but different count')