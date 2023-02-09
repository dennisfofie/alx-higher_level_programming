/*const get = 'https://swapi-api.alx-tools.com/api/people/18';

const request = require('request');


request.get(get, (error, response, body) => {
	const app = JSON.parse(body);
	let name = app.name;
})
*/
 const request = require('request');

const url = process.argv[2];
request.get(url, (error, response, body) => {
	const api = JSON.parse(body);
	let count = 0;	
	for (let i = 0; api.results[i] !== undefined; i++)
	{
		if (api.results[i].characters.includes('https://swapi-api.alx-tools.com/api/people/18'))
		{
			count += 1;
		}
	}
	console.log(count);
})
