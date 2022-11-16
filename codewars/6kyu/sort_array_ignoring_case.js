/*
# -----------------------INSTRUCTIONS------------------------

Sort the given array of strings in alphabetical order, case insensitive. 

# --------------------------PROBLEM--------------------------

# Input: 
# Output:
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

# ----------------------------ALGO---------------------------
# sort the arrau using local compare
*/
function sortme(names) {
  // return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return names.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase()
    if (a < b) {
      return - 1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
}

// console.log(sortme(["Hello","there","I'm","fine"])) //, ["fine", "Hello", "I'm", "there"])
// console.log(sortme(["C", "d", "a", "B"])) //, ["a", "B", "C", "d"])
// console.log(sortme(["CodeWars"])) //, ["CodeWars"])
// console.log(sortme([])) //, [])
console.log(sortme(["Young","with","Good","day","that","good","Public","great","that","with","for","this"]))
// should equal ["day","for","Good","good","great","Public","that","that","this","with","with","Young"])