/*
# -----------------------INSTRUCTIONS------------------------
Staggered Caps (Part 2)
Modify the function from the previous exercise so it ignores non-alphabetic 
characters when determining whether it should uppercase or lowercase each letter. 
The non-alphabetic characters should still be included in the return value; \
they just don't count when toggling the desired case.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
# ----------------------------ALGO---------------------------
same idea as before but instead of using the index we can use a counter
if a non-aplhabetic character is encountered the counter isn't incremented, 
this way the upper lower order is maintained
*/
function staggeredCase(str) {
  let counter = 0;
  let newArr = [];
 let arr = str.split('')
 for (let i = 0; i < arr.length; i++) {
  let char = arr[i];
  if (char.toLowerCase() < 'a') {
    newArr.push(char)
  } else if (counter % 2 === 0) {
    counter += 1;
    newArr.push(char.toUpperCase())
  } else {
    counter += 1;
    newArr.push(char.toLowerCase())
  }
 }
 return newArr.join('');
}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);