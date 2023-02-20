const request = require('request');

request.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', (error, response, data) => {
  if (error) {
    console.error(error);
  }
  api = JSON.parse(data);
  console.log(api);
});
