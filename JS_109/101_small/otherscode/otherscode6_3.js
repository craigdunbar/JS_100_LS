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
15
define an empty string called longest
iterate over the first word in the array
generate substrings of this word starting at one char length
if the other words in the array don't include this char return the string
else add this char to the longest string
return longest string
*/
function common(arr) {
  let longest = ''
  let count = 0;
  let word = arr[0]
  for (let i = 0; i < word.length; i++) {
    let substring = word.slice(0, i + 1)
    // console.log(substring)
    for (let j = 1; j< arr.length; j++) {
      // console.log(arr[j])
      if (arr[j].includes(substring)) {
        count ++;
      }
      // console.log(count)
      if (count === arr.length - 1) {
        longest = substring;
      }
      // count = 0;
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