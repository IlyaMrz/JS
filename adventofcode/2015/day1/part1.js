const fs = require('fs');

console.time('1.1')
const file = fs.readFileSync('./input.txt').toString();
var up = 0;
var down = 0;
for (i in file) {
    if (file[i] === '(') {
        up += 1
    } else if (file[i] === ')') {
        down += 1
    } else {
        console.log('passing')
    }
}

console.log('up ', up);
console.log('down ', down);
console.log('Answer: ', up - down);
console.timeEnd('1.1')