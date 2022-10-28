/*
# -----------------------INSTRUCTIONS------------------------
Distinct digit years
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the 
minimum year number which is strictly larger than the given one and has only distinct digits.
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: next biggest integer with distinct digits
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
1987 => 2013
1988, 1989, 1990 etc. 
does 
2013 => 2014
# ----------------------------ALGO---------------------------
# create a while loop
add one to the given integer
convert year to string then split to array 
check if idx[0] !== idx[1] && 
break if the digits are not the same 
*/
function distinctDigitYear(year) {
  let unique = []
  while (true) {
    let nextYear = year + 1;
    let arr = nextYear.toString().split('');
    unique = [... new Set(arr)];
    if (nextYear === Number(unique.join(''))) {
      return nextYear
    } else {
      year = nextYear
    }
  }
}

console.log(distinctDigitYear(1987)) //,2013)
console.log(distinctDigitYear(2013))//,2014)