#!/usr/bin/node

const request = require('request');

const moviesId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + moviesId;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const api = JSON.parse(body);
    console.log(api.title);
  }
});
