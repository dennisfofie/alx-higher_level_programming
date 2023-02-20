$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data, message) {
  for (let i = 0; i < data.results.length; i++) { $('ul#list_movies').append($('<li></li>').text(data.results[i].title)); }
});
