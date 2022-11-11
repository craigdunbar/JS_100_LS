// Create a function that takes a string as an argument 
// and a number and console log the string rotated by 
// one to the right as many times as the second argument. 

// split the string into an array
// initalise a loop from 1 to num 
// on each iteration shift the first character 
// and add it to the end of the string

function rotate(str, num) {
  let arr = str.split('')
  for (let i = 1; i <= num; i++) {
    let el = arr.shift()
    arr.push(el)
    console.log(arr.join(''))
  };
  return arr.join('')
}
console.log(rotate('abcdefg', 3));
//'bcdefga'
//'cdefgab'
//'defgabc'
