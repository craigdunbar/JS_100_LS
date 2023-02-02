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
split the strinf into an array of chars
iterate over the chars
if the char is a # 
remove the # and the char before it
reassign the str to this shorter string
start the iteration at idx 0 every time
*/
function back(str) {
  let arr = str.split('')
  let newArr = [];
  arr.forEach(el => {
    if (el !== '#') {
      newArr.push(el);
    } else (newArr.pop())
  })
  return newArr.join('');
}
console.log(("abc#d##c")) // 'ac'
console.log(back("abc##d######" )) // ''
console.log(back('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'))