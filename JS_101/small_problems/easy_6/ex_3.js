/* Reverse number
write a function that takes a positive integer arg and returns the
 number reversed
change thte number to a string, split the string  into an array of chars,
reverse the chars, join back to a string then convert back to a number.
*/
function reverseNumber(num) {
   return (Number(num.toString().split('').reverse().join('')));
}
console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21); //-- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1) === 1);