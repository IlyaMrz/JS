// removes from text file trash like empty lines, square brackets and https links

var fs = require('fs');

let file = fs.readFileSync('rawTracks.txt', 'utf8');
file = file.split('\n').filter(e=>!e.includes('http')).filter(e=>e!=='\r') //?
file = file.filter(e => !['[',']'].includes(e)).join('') //?

fs.writeFileSync('Tracks.txt', file)