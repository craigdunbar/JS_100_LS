/*
# -----------------------INSTRUCTIONS------------------------
simple string expansion

Given a string that includes alphanumeric characters ("3a4B2d") 
return the expansion of that string: 
The numeric values represent the occurrence of each letter 
preceding that numeric value. 
There should be no numeric characters in the final string.

    The first occurrence of a numeric value should be the number of times
     each character behind it is repeated, until the next numeric value appears
    If there are multiple consecutive numeric characters, only the 
    last one should be used (ignore the previous ones)
    Empty strings should return an empty string.

Your code should be able to work for both lower and capital case letters
# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string


# ----------------------------ALGO---------------------------
# 
define a new empty sting 
split the string into an array
iterate over the array
ie for 3d332f2a
if the el is not a number && the previous element [idx - 1] is a number
then repeat the current element [idx - 1] times
the d would become ddd this can be added to the new string
*/
function string_expansion(str) {
  let numArr = ['0', '1', '2',  '3', '4', '5', '6', '7', '8', '9'];
  let newStr = '';
  let count = 0;
  let arr = str.split('');
  for (let i = 0; i <arr.length; i ++) {
    if (numArr.includes(arr[i])) {
    count = Number(arr[i]);
    } else if (!numArr.includes(arr[i])) {
    newStr = newStr + arr[i].repeat(count)
    }
  }
  if (count === 0) {
    return str;
  } else {
  return newStr;
  }
}
console.log(string_expansion('3D2a2d2F'));// 
console.log(string_expansion("3abc")) //  -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
console.log(string_expansion("3d332f2a"))  //-->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
console.log(string_expansion("abcde"))  //-->  "abcde"           # no digits
console.log(string_expansion("1111"))  //-->  ""                # no characters to repeat
console.log(string_expansion(""))  //-->  ""  