// Create a function that takes three arguments: 
// an array, a string, and a string 
// and returns an array with all the elements 
// that are the same as the second argument replaced 
// with the third argument

function replaceIt(arr1, str1, str2) {
let newArr = [];
arr1.forEach(el => {
  if (el === str1) {
    newArr.push(str2) 
  } else { 
    newArr.push(el)
  }
})
return newArr;
}
console.log(replaceIt(['a', 'b', NaN, [], 'A', 'aa', 'a'], 'a', '00'))
; //['00', 'b', NaN, [], 'A', 'aa', '00']
