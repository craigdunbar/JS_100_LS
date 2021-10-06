// short long short
// take two strings as parameters to a function
// dtermine which string is shorter
// concatenate the strins with short string, long string, and short string
// return the concatenated string

function shortLongShort(str1, str2) {
    // let length1 = str1.length;
    // let length2 = str2.length;
    
    if (str1.length < str2.length) {
        return (str1 + str2 + str1);
    } else {
        return (str2 + str1 + str2);
    }
}
console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));