// multiples of 3 and 5
// write function that takes a number as an arguement
// find the multiples of 3 between 1 and given number
// find multiples of of 5 between 1 and given number
// find sum of all multiples of 3 and 5
// initialize a total at 0
// check if number is divisiabe by 3 or 5
// if true add to total
// if not continue

function multisum(num) {
  let total = 0
  for (count = 0; count <= num; count++) {
  if (count % 3 === 0 || count % 5 === 0) {
    total += count;
  } else {
    continue;
  }
  }
  return total
}
console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
