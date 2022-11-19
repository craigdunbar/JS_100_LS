/*
# -----------------------INSTRUCTIONS------------------------

Assume "#" is like a backspace in string. 
This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
# --------------------------PROBLEM--------------------------
# Input:string

# Output: string

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
# -----------------ALGO and Data Structure ------------------
split the string into an array of chars
iterate over the array
if the current element is a hash remove the previous element
use splice
join the array back into a string
*/
function cleanString(str) {
  let arr = str.split('');
  
  while (arr.includes('#')) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '#') {
        arr.splice((i - 1), 2);
        console.log(arr)
        break;
        } 
      }
    }
  return arr.join('')
}

function cleanString(str) {
  let arr = str.split('');
  let newStr = str.replace(/#/g, '')
  console.log(newStr)
  let hashCount = arr.filter(el => el === '#').length
  let newArr = newStr.split('')
  newArr.splice(1, hashCount)
  
  console.log(newArr);
}
console.log(cleanString('abc#d##c')) //, 'ac');
console.log(cleanString('abc####d##c#')) //, '');
// console.log(cleanString('abjd####jfk#gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'))
// 6+yqw8hfklsd-=-f