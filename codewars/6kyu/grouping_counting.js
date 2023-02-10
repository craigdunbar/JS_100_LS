/*
# -----------------------INSTRUCTIONS------------------------
Your goal is to write the group_and_count method, which should 
receive and array as unique parameter and return a hash. 
Empty or nil input must return nil instead of a hash. 
This hash returned must contain as keys the unique values 
of the array, and as values the counting of each value.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
input = [1,1,2,2,2,3]

group_and_count(input)# == {1=>2, 2=>3, 3=>1}


# ----------------------------ALGO---------------------------
# simple object creation problem
*/
function group(arr) {
  let seenObj = {};
  arr.forEach(el => {
    if (seenObj[el]) {
      seenObj[el] += 1;
    } else {
      seenObj[el] = 1;
    }
  })
  return seenObj;
}
console.log(group([1,1,2,2,2,3]))