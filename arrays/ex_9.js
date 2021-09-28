// travel
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
                    'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
                    'Marrakesh', 'New York City'];
                    
function contains(city, array) {
    for(let i = 0; i <= array.length; i ++) {
        if (array[i] === city) {
            return true;
        }
    }
    return false
}

// or LS solution
// function contains(element, list) {
//     return list.indexOf(element) >= 0;
// }

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));