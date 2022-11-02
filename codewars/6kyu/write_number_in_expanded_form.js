/*
# -----------------------INSTRUCTIONS------------------------
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form

# --------------------------PROBLEM--------------------------
# Input:integer

# Output:string

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
# -----------------ALGO and Data Structure ------------------
split the string into an array
get the length of the array
iterate over the array 
if the current element is === 0 continue
if the current elmenet !== 0;
generate a string that is the current element + 0.repeated (arr.length - 1) - element idx times
- ie for 12 
the length is 2
so for elmeent[0] string should be 1 + 0 repeated(2 - 1) times => 10
for element[arr.length - 1] string should be the element => 2
if we have these values in an array we can join them with '+' to get the string
*/
function expandedForm(num) {
  let strArr = [];
  let arr = num.toString().split('');
  let length = arr.length
  let zero = '0'
  for (let i = 0; i < length; i++) {
    if (arr[i] === '0') {
      continue;
    } else {
      let newStr = arr[i] + zero.repeat((length - 1) - i)
      strArr = strArr.concat(newStr);
    }
  }
  return strArr.join(' + ');
}
console.log(expandedForm(12)) //, '10 + 2');
console.log(expandedForm(42)) //, '40 + 2');
console.log(expandedForm(70304)) //, '70000 + 300 + 4');