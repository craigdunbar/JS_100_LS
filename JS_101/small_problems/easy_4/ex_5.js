// Palindromatic strings 2
// same as before only this time case insensetive
// and ignore non-alphanumeric characters

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

function isRealPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(str);
  return (isPalindrome(str));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false