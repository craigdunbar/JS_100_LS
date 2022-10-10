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
#
create the substrings of the first character in all the strings
up to the length of the shrotest string
define a string called prefix 
if the current substrings are the same for each word make that
substring the current prefix
if the substrings are not the same return the current prefix

flower
f fl flo flow
flow
f fl flo flow
flight
f fl fli flig


*/

// function substrings(str) {
//   let substringsArr = [];
//   for (let i = 0; i <= str.length; i++) {
//     let substring = str.slice(0, i)
//     substringsArr = substringsArr.concat(substring)
//   }
//   return substringsArr;
// }

// function prefix(arr) {
//   lengthArr = arr.map(el => el = el.length);
//   lengthArr.sort((a,b) => a - b)
//   let shortest = lengthArr[0]
//   console.log(shortest);

//   let subsArr = [];
//   let prefixStr = ''
//   arr.forEach(word => {
//     subsArr.push(substrings(word))
//   })
//   let [subs1, subs2, subs3] = [subsArr[0], subsArr[1], subsArr[2]];
//   for (let count = 0; count <= shortest; count ++) {
//     if (subs1[count] === subs2[count] && subs2[count] === subs3[count]) {
//       prefixStr = subs1[count]
//     }
//   }
//   return prefixStr;
// }
// prefix(['flower', 'flow', 'flight'])
// prefix(['dog', 'racecar', 'car'])
// the above solution works for the 3 element array examples 
// but won't work for an array of different size
// re-write the code to work for all the examples below
// since the element are different size the longest prefix 
// can only be the same size as the shortest element
// therefore sort the array in ascending order to get the shortest element
// then iterate over the array to see if all the other 
// elements contain the shortest element
// if they do return the shortest element 
// if not remove the last character form the shortest elmenet and check again

function commonPrefix(arr) {
  arr = arr.sort((a, b) => a.length  - b.length);
  let shortestStr = arr[0]

  while(shortestStr. length > 0) {
    if (arr.every(el => el.startsWith(shortestStr))) {
      return shortestStr;
    } else {
      shortestStr = shortestStr.slice(0, shortestStr.length - 1);
    }
  }
  return shortestStr;
}

console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(commonPrefix(['dog', 'racecar', 'car']) === '');
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
console.log(commonPrefix(['throne', 'dungeon']) === '');
console.log(commonPrefix(['throne', 'throne']) === 'throne');

