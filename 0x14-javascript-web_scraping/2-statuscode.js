#!/usr/bin/node

const request = require('request');

url = process.argv[2]

request.get(url, (error, response, body) => {
	if (response.statusCode)
	{
		console.log(`code: ${response.statusCode}`);
	}
	else {
		console.error(error);
	}
})
