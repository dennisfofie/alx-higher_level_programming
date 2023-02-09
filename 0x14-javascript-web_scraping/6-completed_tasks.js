#!/usr/bin/node
/* making api call to output only userid and task */

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
	if (error)
	{
		console.log(error);
	}
	let count = 0;
	let api = JSON.parse(body);
	console.log(api)
	let k = 1;
	for (i = 0; i < api.length; i++)
	{
		if (api[i].userId == k && api[i].completed === true)
		{
			k += 1;
			count += 1
		}
		console.log(api[i].userId);
		console.log('This is the new value of k: ' + k);
	}
	console.log(count)
});
