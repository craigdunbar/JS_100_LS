/*
# -----------------------INSTRUCTIONS------------------------
Complete the method that takes a object list of users, and find t
he nexus: the user whose rank is the closest is equal to his honor. 
Return the rank of this user. 
For each user, the key is the rank and the value is the honor.

If nobody has an exact rank/honor match, return the rank of 
the user who comes closest. 
If there are several users who come closest, return the one with 
the lowest rank (numeric value). 
The hash will not necessarily contain consecutive rank numbers; 
return the best match from the ranks provided.


# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
         rank    honor
users = {  1  =>  93,
          10  =>  55,
          15  =>  30,
          20  =>  19,    <--- nexus
          23  =>  11,
          30  =>   2 }

# ----------------------------ALGO---------------------------
# create an array of keys and values , key are rank values are honor
find the subarray whose key - value === 0
return this key as this is the nexus

if no subarray returns 0, look for the one that returns the next lowest difference
- the first element in the subarray is the key
*/
function nexus(obj) {
  let arr = Object.entries(obj);

  let diffArr = arr.map(subArr => {
    if (Number(subArr[0] > subArr[1])) {
      return Number(subArr[0] - subArr[1])
    } else {
      return subArr[1] - Number(subArr[0])
    }
  })

  if (diffArr.includes(0)) {
    let idx = diffArr.findIndex(num => num === 0);
    return Number(arr[idx][0]);
  } else if (!diffArr.includes(0)) {
    let sortArr = diffArr.slice(0)
    let min = sortArr.sort((a, b) => a - b)[0];

    idx = diffArr.findIndex(num => num === min);
    return Number(arr[idx][0]);
  }
}
console.log(nexus({"1":3,"3":3,"5":3})) //,3)
console.log(nexus({ '1': 12540,
'2': 12000,
'6': 7000,
'20': 4000,
'100': 1000,
'273': 750,
'500': 501 }))