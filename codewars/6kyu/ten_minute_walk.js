/*
# -----------------------INSTRUCTIONS------------------------
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take 
the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) 
and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you 
will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. 
Return false otherwise.

# --------------------------PROBLEM--------------------------
# Input:

# Output:

# ---------------------------RULES---------------------------
# Explicit: you will always receive a valid array containing 
a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
'n','s','n','s','n','s','n','s','n','s' => true


# -----------------ALGO and Data Structure ------------------
to be 10 mins the arr.length must be 10 or less
to get back to start the n === s, e === w
*/
function isValidWalk(arr) {
  if (arr.length !== 10) return false;
  
  let north = arr.filter(el => el === 'n').length
  let south = arr.filter(el => el === 's').length
  let east = arr.filter(el =>el === 'e').length
  let west = arr.filter(el => el === 'w').length
  
  if(north === south && east === west){
  return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //, 'should return false');
console.log(isValidWalk(['w'])) //), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //, 'should return false');
