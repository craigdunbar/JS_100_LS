// Create a function that takes an array of numbers as an argument 
// and returns a number that is missing in the specific sequence. 
// Return false if there is no missing elements.

// in order to find the missing prime we must iterate over the given array 
// on each iteration we must calculate the next prime number after the current number
// if the next Prime is the same as the next element then continuw thorugh the original array 
// if the next element is no the next prime then return the next prime
// if none are missing return false

// a prime number is only divisable by itself need a function to determine if number is prime
// need a funciton to find the next prime
// then check the return value of next prime against the next array entry 

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i*i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function nextPrime(n) {
  while (true) {
    n++
    if (isPrime(n)) return n;
  }
}

function findMissingPrime(arr) {
  for (let i = 0; i < arr.length - 1; i ++) {
    let currentNum = arr[i]
    if (nextPrime(currentNum) !== arr[i + 1]) {
      return nextPrime(currentNum)
    }
  }
  return false;
}

console.log(findMissingPrime([2, 3, 5, 11, 13, 17, 19, 23]));  //7
console.log(findMissingPrime([23, 29, 31, 41, 43, 47, 53, 59, 61])); //37
console.log(findMissingPrime([53, 59, 61, 67, 71, 73, 79, 83])); //false

