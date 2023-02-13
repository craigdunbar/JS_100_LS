/*
# -----------------------INSTRUCTIONS------------------------
Write a function to find the longest common prefix string
amongst an array of strings.
If there is no common prefix, return an empty string "".

# --------------------------PROBLEM--------------------------

# Input: array
# Output: string
# ---------------------------RULES---------------------------
# Explicit: return longest prefix

# Implicit: strings are all lowercase

# --------------------------EXAMPLES-------------------------a
['flower', 'flow', 'flight'] ==> 'fl'
['dog', 'racecar', 'car'] ==> ''
# ----------------------------ALGO---------------------------
split the first string into an array of chars
generate substrings of the frist string starting at index 0
on each iteration check if the other strings in the array 
contain the current substring
- if they do add the current substring to a variable
- and keep building substrings
if not return the variable storing the longest common substring

*/
function common(arr) {
  let longest = ''
  let word = arr[0]
  let count = 0;
  for (let i = 0; i < word.length; i ++) {
    let substring = word.slice(0, i+1);
    for (let j = 1; j < arr.length; j++) {
      if (arr[j].includes(substring)) {
        count++;
      }
      if (count === arr.length - 1) {
        longest = substring;
      }
    }
    count = 0;
  }
  return longest;
}

console.log(common(['flower', 'flow', 'flight']) === 'fl');
console.log(common(['dog', 'racecar', 'car']) === '');
console.log(common(['interspecies', 'interstellar', 'interstate']) === 'inters');
console.log(common(['throne', 'dungeon']) === '');
console.log(common(['throne', 'throne']) === 'throne');