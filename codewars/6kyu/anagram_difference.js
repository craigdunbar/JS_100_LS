/*
# -----------------------INSTRUCTIONS------------------------
Given two words, how many letters do you have to remove from them to make them anagrams?
Example

    First word : c od e w ar s (4 letters removed)
    Second word : ha c k er r a nk (6 letters removed)
    Result : 10


# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: Do not worry about case. All inputs will be lowercase.

# Implicit: 

# --------------------------EXAMPLES-------------------------
First word : c od e w ar s (4 letters removed)
    Second word : ha c k er r a nk (6 letters removed)
    Result : 10

    codewars
    hackerrank
# ----------------------------ALGO---------------------------
# sort the two strings into alphabetical order
iterate over the first string and compare characters to the second string
if the second string includes the same character add one to the counter

subtract counter from string length for both strings and sum the result
return the sum
*/
function anagramDifference(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  console.log(str1, str2)
  let counter = 0;
  for (let char of str1) {
    if (str2.includes(char)) {
      counter ++
      str2 = str2.slice(1)
      console.log(str2)
    // need to remove char from str2 to check for duplicate chars on str1
      // console.log(str2);
    }
  }
  // if (str2.length - counter < 0) {
  //   return counter;
  // } else {
    return (str1.length - counter) + (str2.length - counter)
  // }
}
// console.log(anagramDifference("","")) //,0);
// console.log(anagramDifference("a","")) //,1);
// console.log(anagramDifference("", "a")) //,1);
// console.log(anagramDifference("ab","a")) //,1);
// console.log(anagramDifference("ab","cd")) //,4);
// console.log(anagramDifference("aab","a")) //,2);
// console.log(anagramDifference("a","aab")) //,2)
console.log(anagramDifference("codewars","hackerrank")) //,10);
// console.log(anagramDifference('aiccpwystqovdiwydzoerbghozybvpjrjuyzlcd', 'ztdcbcxwegetltrdzjytqyxinyslgngekbpcrzs')) // 28