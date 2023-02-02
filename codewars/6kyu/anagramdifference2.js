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
define and empty array
split the strings into array of chars
iterate over the first array
see if the second array contains the same char
if so add this char to a newArr
get the length of the newArr
total = (str1 - length) + (str2 - length)

33
*/
function anagramDifference(str1, str2) {
  let newArr = [];
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let arr3 = str2.split('');
  let idx = 0;
  
  arr1.forEach(el => {
    if (arr3.includes(el)) {
      // console.log(el)
      newArr = newArr.concat(el)
      idx = arr3.findIndex(num => num === el)
      // console.log(idx)
    arr3.splice(idx, 1)
    }
  })
  // console.log(newArr)
  let total1 = (arr1.length - newArr.length)
  let total2 =  (arr2.length - newArr.length);
  // console.log(total1, total2)
  if (total1 < 0 || total2 < 0) {
    return newArr.length
  } else {
    return total1 + total2
  }
}

console.log(anagramDifference('codewars', 'hackerrank'))
console.log(anagramDifference("","")) //,0);
console.log(anagramDifference("a","")) //,1);
console.log(anagramDifference("", "a")) //,1);
console.log(anagramDifference("ab","a")) //,1);
console.log(anagramDifference("ab","cd")) //,4);
console.log(anagramDifference("aab","a")) //,2);
console.log(anagramDifference("a","aab")) //,2);
console.log(anagramDifference("codewars","hackerrank")) //,10);
console.log(anagramDifference('kottxedyvzxzmqbqe', 'jzbmnfpexzrkqeqmf')) // 14