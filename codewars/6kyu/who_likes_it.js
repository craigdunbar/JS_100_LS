/*
# -----------------------INSTRUCTIONS------------------------

You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to create 
the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people 
that like an item. 
It must return the display text as shown in the examples
# --------------------------PROBLEM--------------------------
# Input:array

# Output:string

# ---------------------------RULES---------------------------
# Explicit: For 4 or more names, the number in "and 2 others" simply increases.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
# -----------------ALGO and Data Structure ------------------
need to join the arrays to produce a string of names
if length is one no join
if length is two join with ' and'
if length is 3 join first two with ',' and then join third with ' and'
if length is 4 or more join first two with ',' and then get number of remaining
and add that to string
*/
function likes(arr) {
  let nameStr = ''
  if (arr.length === 0) {
    return 'no one likes this'
  }
  
  if (arr.length === 1) {
    nameStr = arr[0] + ' likes this'
  } else if ( arr.length === 2) {
    nameStr = arr.join(' and ') + ' like this'
  } else if (arr.length === 3) {
    nameStr = arr.slice(0, 2).join(', ') + (` and ${arr[2]} like this`)
  } else {
    nameStr = arr.slice(0, 2).join(', ') + (` and ${arr.length - 2} others like this`)
  }
  return nameStr;
}
console.log(likes([])) //, 'no one likes this');
console.log(likes(['Peter'])) //, 'Peter likes this');
console.log(likes(['Jacob', 'Alex'])) //, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])) //, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //, 'Alex, Jacob and 2 others like this')