/*
# -----------------------INSTRUCTIONS------------------------
Staggered Caps (Part 2)
Modify the function from the previous exercise so it ignores non-alphabetic 
characters when determining whether it should uppercase or lowercase each letter. 
The non-alphabetic characters should still be included in the return value; \
they just don't count when toggling the desired case.

# --------------------------PROBLEM--------------------------

# Input: string
# Output:string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
# ----------------------------ALGO---------------------------
# use the same proncipal as the previou exercise except.
set up a counter that will be increased by 1 
for uppercase and decreased by one for lowercase and not changed by 
non-alphabetic characters.
*/
function staggeredCase(str) {
  let count = 0;
  return str.split('').map(char => {
    char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (count === 0) {
          count += 1;
          return char.toUpperCase();
      } else {
        count -= 1
        return char.toLowerCase();
      }
    } else {
      return char;
    }
    }).join('')
  }
console.log(staggeredCase("I Love Launch School!")); // === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );