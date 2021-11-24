/*
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

input: string
output: an array of all palindromatic substrings

rules: 
Explicit: return all substring palindromes( words that are the same forward and back)
          palindromes are case sensitive
Implicit: if string is empty, result should be empty array
          if no palindromes, result should be empty array

*/