// Create a function that takes an array as an argument and return an array 
// containing all the elements of argument array that appears more than once

// use an object to track the number of occurences of elemetns in the array
// filter the object keys array to only include elements with a value greater than one 


function extractDup(arr) {
  let seenObj = {};
  arr.forEach(el => {
    if (!Object.keys(seenObj).includes(String(el))) {
      seenObj[el] = 1;
    } else {
      seenObj[el]++
    };
  });
  return Object.keys(seenObj).filter(key => seenObj[key] > 1);
}
console.log(extractDup([1,2,3,4,1,2])); //[1,2];
