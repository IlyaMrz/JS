const fs = require('fs');

const file = fs.readFileSync('./input.txt').toString();
var up = 0;
var down = 0;

console.time('1.2')
for (i in file) {
    if ((up - down) === -1) {
        console.log('Answer: ', i)
        break
    } else if (file[i] === '(') {
        up += 1
    } else if (file[i] === ')') {
        down += 1
    } else {
        console.log('passing')
    }
}
console.timeEnd('1.2')