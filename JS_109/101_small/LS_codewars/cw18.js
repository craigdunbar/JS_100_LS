/*
# -----------------------INSTRUCTIONS------------------------
Grouping and counting
Your goal is to write the group_and_count method, which should 
receive and array as unique parameter and return a hash. 
Empty or nil input must return nil instead of a hash. 
This hash returned must contain as keys the unique values of 
the array, and as values the counting of each value.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
input = [1,1,2,2,2,3]

group_and_count(input)# == {1=>2, 2=>3, 3=>1}
# ----------------------------ALGO---------------------------
# define an empty object
iterate over the array
if the object does not include the current element value as a key
add it to the object
if it does + 1 to the value

*/
//  completed in under 5 mins (note the LS page is a ruby problem)
function group_and_count(arr) {
  let obj = {};
  arr.forEach(el => {
    if (!Object.keys(obj).includes(String(el))) {
      obj[el] = 1;
    } else {
      obj[el] += 1
    }
  })
  console.log(obj)
}
group_and_count([0,1,1,0]) //, {0=>2, 1=>2})
group_and_count([1,1,2,2,2,3]) // {1=>2, 2=>3, 3=>1}