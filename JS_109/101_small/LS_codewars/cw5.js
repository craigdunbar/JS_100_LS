/*
# -----------------------INSTRUCTIONS------------------------
Non-even substrings
Given a string of integers, return the number of odd-numbered 
substrings that can be formed.

For example,
in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7

# --------------------------PROBLEM--------------------------

# Input: string of integers
# Output: integer represtenting number of substrings
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
(solve("1341"),7);
for the exmple above the substrings are:
1, 13, 134, 1341
3, 34, 341,
4, 41, 
1
so odd are 1, 13, 1341, 33, 341, 41, 1


# ----------------------------ALGO---------------------------
# 
deifne an empty array to hold substrings
define an array to hold odd substrings
given the string argument create an array of substrings
initaial loop from idx 0 to length of string
- will create substring = str.slice(idx)
- pass this substring to a second loop to generate all susbtrings
this loop will go from 0 to substring.length
- substring.slice(count, count + 1)
- push this substring to the empty array

iterate over the array
convert the strings to numbers
if the current element is odd push to the odd array
return the length of the odd array
*/

// function solve(str) {
//   substringsArr = [];
//   oddArr = [];
  
//   for (idx = 0; idx < str.length; idx++) {
//     let substring = str.slice(idx)
  
//     for (count = 0; count < substring.length; count ++) {
//       let substrings = substring.slice(0, count + 1)
//       substringsArr = substringsArr.concat(substrings);
//     }
//   }

//   substringsArr.forEach(el =>{
//     if (Number(el) % 2 === 1) {
//       oddArr = oddArr.concat(el)
//     }
//   })
//   return oddArr.length;
// }
console.log(solve("1341")) //,7);
// console.log(solve("1357")) //,10);
// console.log(solve("13471")) //,12);
// console.log(solve("134721")) //,13);
// console.log(solve("1347231")) //,20);
// console.log(solve("13472315")) //,28)
// My solution works for the test cases but not every case because the string gets 
// too big to convert using the Number() method.
// the better way to do it is look at the last digit of the substrings
// if this digit is odd then increase a counter by  1
function solve(str) {
  let count = 0;

  for (let start = 0; start < str.length; start++) {
    for (let end = start; end < str.length; end++) {
      let substr = str.slice(start, end + 1);
      substr = substr.slice(-1)

       if (substr % 2 === 1) {
          count++;
       }

    }
  }
  return count;
}
console.log(solve('71113166681359814741535957555462755338539923562873759499988198156441914929962598687198')) // 2284