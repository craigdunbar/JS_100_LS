// Question 1
// Will the code below return an error?
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// no it will just treat aray slots 3 - 5 as empty
// numbers[4] // will return undefined

// Question 2
// How can you determine if a given string ends in an bang (!)?
// use the endsWith() method

// let str1 = "Come over here!"; 
// console.log(str1.endsWith('!')); // true
// let str2 = "What's up, Doc?";
// console.log(str2.endsWith('!')); // false

// Question 3
// Determine whether the following object of people contians 
// an entry for "Spot".
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// use Object.hasOwnProperty()
// ages.hasOwnProperty('Spot'); // false

// Question 4
// Using the following String, create a new string that 
// contains all lowercase letters except for the 
// first character which should be capitalised.
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
// let newStr = ''
// munstersDescription.toLowerCase()
// newStr = newStr + munstersDescription[0].toUpperCase()
// newStr = newStr + munstersDescription.substring(1).toLowerCase();
// console.log(newStr);
// LS solution
// munstersDescription.charAt(0).toUpperCase() +
// munstersDescription.substring(1).toLowerCase();

// Question 5