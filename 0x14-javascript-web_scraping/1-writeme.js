#!/usr/bin/node
/* writing to a file from the command line */

const fs = require('fs')

path = process.argv[2];
content = process.argv[3];

fs.writeFile(path, content, 'utf-8', (err) => {
	if (err)
	{
		console.log(data)
	}
})
