var fs = require('fs');

let file = fs.readFileSync('rawTracks.txt', 'utf8');
file = file.split('\n').filter(e=>!e.includes('http')).filter(e=>e!=='\r').join('\n') //?
file = Array.from(file).filter(e => !['[',']'].includes(e)).join('') //?

fs.writeFileSync('Tracks.txt', file)