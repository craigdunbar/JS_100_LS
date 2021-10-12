// the end is near but not here
// write a function that has a string arguement
// function must return the second to last word

// function penultimate(str) {
//   arr = str.split(' ');
//   return arr[arr.length - 2];
// }
// console.log(penultimate("last word") === "last");
// console.log(penultimate("Launch school is great!") === "is");

// further exploration
// to return the middle word of a sentence
// if even number i chose to take the higher of the two 
// using ceil().
function middle(str) {
  arr = str.split(' ');
  let mid = Math.ceil((arr.length - 1) / 2);
  return arr[mid];
}
console.log(middle("Launch school is great!") === "is");
console.log(middle("This has an odd number of words") === 'odd');