#!/usr/bin/node
/* reading from a file through the command line */

const fs = require('fs');

let path = process.argv[2];

fs.readFile(path, 'utf-8', (err, data) => {
	if (err)
	{
		console.error(err);
	}
	else {
		console.log(data);
	}

})
