#!/usr/bin/node

const request = require('request');

movies_id = process.argv[2];
url = "https://swapi-api.alx-tools.com/api/films/"+ movies_id

request.get(url, (error, response, body) => {
	if (error)
	{
		console.error(error);
	}
	else if (response.statusCode == 200) 
	{
		let api = JSON.parse(body);
		console.log(api.title)
	}
});
