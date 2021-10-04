// calculate cat age

function catAge(num) {
    let age = 0
    if (num === 0){
        return age = 0
    }
    else if (num === 1) {
        return age = 15;
    } else if (num >= 1 && num <= 2) {
        return age = 24;
    } else (num >= 3) 
        return age = (24 + (num - 2) * 4);
 }
 
console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
