// let names = ['bob', 'joe', 'steve', undefined, 'frank'];
// names.forEach(name => {
//   try {
//     console.log(`${name}'s name has ${name.length} letters in it.`);
//   } catch (exception) {
//     console.log('Something went wrong');
//   }
// }); // => bob's name has 3 letters in it.
//     //    joe's name has 3 letters in it.
//     //    steve's name has 5 letters in it.
//     //    TypeError: Cannot read property 'length' of undefined
//     //        at names.forEach (repl:2:42)
//     //        at Array.forEach (<anonymous>)

// ex_1
// let array1 = [1, 2, 3];
// let array2 = array1
// array[1] = 4
// console.log(array2) // [1, 4, 3]

// ex_2
// line 4 character 15 - greeeting not defined

// ex_3
// console.log(Math.sqrt(37));

// ex_4
// console.log(Math.max(1, 6, 3, 2));
// console.log(Math.max(-1, -6, -3, -2));
// console.log(Math.max(2, 2));

// ex_5
// this method splits the string into an array of seperate word
// reverses the order of the words 
// maps the reversed order into a new array
// containing the length of the words not the words

// ex_6
// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// function allMatches(arr, regex) {
//   match = []
//   for( let i in arr) {
//     if (regex.test(arr[i])) {
//     match.push(arr[i]);
//     }
//   }
//   return match
// }

// console.log(allMatches(words, /lab/));
// ex_8 - skip

// function isNotANumber(value) {
//   if (value === NaN) {
//   return true;
//   }  
//   return false;
// }
// console.log(isNotANumber(5));
// console.log(isNotANumber('NotANumber'));

// ex_9
function isZero(value) {
  if (value < 0) {
  return true;
  }  
  return false;
}
console.log(isZero(5));
console.log(isZero(-0));