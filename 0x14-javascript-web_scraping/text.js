const request = require('request');
const fs = require('fs');

request('http://google.com/doodle.png').pipe(fs.createWriteStream('hey.png'));
