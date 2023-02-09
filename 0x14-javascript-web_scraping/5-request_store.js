#!/usr/bin/node
/* using the request module to put webpage content to a file */

const request = require('request');
const fs = require('fs');

const path = process.argv[2];
const file = process.argv[3];

request(path, (error, response, body) => {
	if (error)
	{
		console.error(error);
	}
}).pipe(fs.createWriteStream(file));
