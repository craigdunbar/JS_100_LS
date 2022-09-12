/*
# -----------------------INSTRUCTIONS------------------------
Given two arrays of strings a1 and a2 return a sorted array 
r in lexicographical order of the strings of a1 which are substrings of strings of a2.

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: an array of unique strings
# ---------------------------RULES---------------------------
# Explicit: Beware: r must be without duplicates.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
# ----------------------------ALGO---------------------------
# iterate over the second array an see if any of the elements of the first array
are substrings of the second array elements
set a variable called regex and assign it the value of the first element in array1
compare all elements of array 2 for a match
if there is a match push array1 element to a new array
if no matches return an empty array
*/
function inArray(array1, array2) {
  let newArr = [];
  array2.forEach(el => {
    array1.forEach(word => {
      let regex = new RegExp(word);
      if (!!(el.match(regex))) {
        newArr.push(word)
      }
    })
  })
  newArr = [...new Set(newArr)];
  return newArr = newArr.sort();
}

let array1 = ["arp", "live", "strong"]

let array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(array1, array2)) // ["arp", "live", "strong"]

array1 = ["tarp", "mice", "bull"]

array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(array1, array2)) // []
