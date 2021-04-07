var fs = require('fs');

let file = fs.readFileSync('rawTracks.txt', 'utf8');
file = file.split('\n').filter(e=>!e.includes('http')).join('\n') //?
file //?

fs.writeFileSync('Tracks.txt', file)