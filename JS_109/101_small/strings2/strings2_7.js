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
# use the funciton form previous exercise
need ot add a counter to determine which character should be changed 
if the current char is not a letter then skip it and don't increase the counter
only change characters if the counter is even and they're letters
*/
function staggeredCase(str) {
  let counter = 0;
  return str.split('').map(char => {
    if ((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') && counter % 2 === 0) {
      counter += 1;
      return char.toUpperCase()
    } else if ((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') && counter % 2 !== 0) {
    counter += 1;
    return char.toLowerCase()
    } else {
    return char;
    }
  }).join('');
}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");