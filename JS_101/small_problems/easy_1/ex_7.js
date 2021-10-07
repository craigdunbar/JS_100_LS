// short long short
// take two strings as parameters to a function
// determine which string is shorter
// concatenate the strings with short string, long string, and short string
// return the concatenated string

function shortLongShort(str1, str2) {

  if (str1.length < str2.length) {
    return (str1 + str2 + str1);
  } else {
    return (str2 + str1 + str2);
  }
}
console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));