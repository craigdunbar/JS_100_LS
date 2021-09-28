// Repeat
// function repeat(num, str) {
//     for(let i = 1; i <= num; i += 1) {
//         console.log(str)
//     }
// }
repeat(3, 'ha');
// LS solution 
function repeat(n, string) {
    let repetitions = '';
    
    while (n > 0) {
        repetitions += string
        n -= 1;
    }
    console.log(repetitions)
}