/*
# -----------------------INSTRUCTIONS------------------------

Modify the kebabize function so that it converts a camel case 
string into a kebab case.



# --------------------------PROBLEM--------------------------

# Input: string in camel case
# Output: string kebab
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

# ----------------------------ALGO---------------------------
# 
create an empty string
iterate over the string
if the current letter is lowercase add it to the new string
if the letter is uppercase
- add '-' and the letter.toLowerCase() to the new string
return the new string
*/
function kebabize(str) {
  let newStr = '';
  str = str.replace(/\d/g, '')
  for (char of str) {
    if (char === char.toLowerCase()) {
      newStr = newStr + char;
    } else {
      newStr = newStr + '-' + char.toLowerCase();
    }
  }
  if (newStr.startsWith('-')) {
    return newStr.slice(1);
  } else {
  return newStr;
  }
}
console.log(kebabize('myCamelCasedString')) //, 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps')) //, 'my-camel-has-humps');
console.log(kebabize('V1hog')) // 'vhog'