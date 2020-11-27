const fs = require('fs');


fs.readFile('./text.txt', (err, data) => {
    if (err) {
        console.log('error!');
    }
    console.log('1 async', data.toString('utf-8'));
});

const file = fs.readFileSync('./text.txt');
console.log('2 sync', file.toString());

fs.appendFile('./text.txt', '!', err => {
    if (err) {
        console.log('error!')
    }
});

fs.writeFile('./text2.txt', '~~!', err => {
    if (err) {
        console.log('error!')
    }
});

//delete

fs.unlink('./text2.txt', err => {
    if (err) {
        console.log('error!')
    }
});