// Letter count (part 1)
// funciton takes a string consisting of zero or more space seperated words 
// and returns an object that shows the number of words of different sizes.
// note words consist of any non-space characters.

// input: String
// output: object

// algo
// initialise a function with string arguement
// seperate the string into an array of words
// iterate trough the array and count the number of characters
// add the number of characters to the object as a key , and value is one
// if the number already exists add one to the value
// continue until all the words have been counted.
// return the object

function wordSizes(string) {
    let arr = string.split(' ');
    let obj = {}
    for (count = 0; count < arr.length; count ++) {
        let wordSize = (arr[count].length);
        if(obj.keys !== wordSize) {
            obj[wordSize] = 1
        } else {
            obj[wordSize] += 1;
        }
        }
        return obj
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''))        // {};