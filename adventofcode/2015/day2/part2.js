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
    onePresent = (low1 + low1 + low2 + low2) + (l * w * h);
    result += onePresent;
    console.log(result);
});