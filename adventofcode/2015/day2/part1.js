const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('C:\\Games\\VScodeProjects\\JS\\adventofcode\\2015\\day2\\input.txt'),
    // output: process.stdout,
    console: false
});

const file = fs.readFileSync('./input.txt').toString();
var result = 0

readInterface.on('line', function (line) {
    var array = [];
    var onePresent = 0;
    l = parseInt(line.match(/^\d*/));
    w = parseInt(line.match(/x(\d*\B)/)[1]);
    h = parseInt(line.match(/\d*$/));
    array.push(l, w, h);
    array = array.sort((a, b) => a - b);
    low1 = array[0];
    low2 = array[1];
    onePresent = 2 * l * w + 2 * w * h + 2 * h * l + low1 * low2;
    result = result + onePresent;
    console.log(l, w, h, 'present: ', onePresent, 'NeedWrapper: ', result);

});
