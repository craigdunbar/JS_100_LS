/*
# -----------------------INSTRUCTIONS------------------------
Swap Case

Write a function that takes a string as an argument and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
# ----------------------------ALGO---------------------------
#split the given string into an array of characters
iterate over all the characters in the array
if an alphabetic character is lowercase convet to uppercase and vice versa
*/
function swapCase(str) {
    return str.split('').map(char => {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}
console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");