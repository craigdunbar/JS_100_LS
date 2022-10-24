/*
# -----------------------INSTRUCTIONS------------------------
Are they the same?
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, 
regardless of the order.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------

# Explicit: Remarks

    a or b might be [] or {} (all languages except R, Shell).
    a or b might be nil or null or 

If a or b are nil or null the problem doesn't make sense so return false.

# Implicit: 

# --------------------------EXAMPLES-------------------------
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

nvalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
# ----------------------------ALGO---------------------------
# given the two array arguments
check the length of both array's is the same
if one of the array's are empty return false
iterate over the first array 
square each element and check if the result is included in the second array
if not return false
else return true
*/
function comp(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  if ( Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return false;
  }
  
  for(let count = 0; count < arr1.length; count++) {
    let square = arr1[count] ** 2;
    if (square !== arr2[count]) {
      return false;
    }
  };
  return true;
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]));
[ 121, 144, 19, 161, 19, 144, 19, 11 ] [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ]