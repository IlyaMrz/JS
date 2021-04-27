// Removes from text file trash like empty lines, 
// square brackets, https links and broken utf8 characters.

var fs = require('fs');

let file = fs.readFileSync('D:\\albumSM\\rawTracks.txt', 'utf8');
file = file.split('\n').filter(e=>!e.includes('http')).filter(e=>e!=='\r') //?
file = file.filter(e => !['[',']'].includes(e)).join('') //?
let final = file.replace(/[^\x00-\xFF]/g, ""); //?
//fs.writeFileSync('Tracks.txt', file)

fs.writeFileSync('D:\\albumSM\\Tracks.txt', final)