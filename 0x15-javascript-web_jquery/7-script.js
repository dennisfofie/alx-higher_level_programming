$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data, message) {
  $('div#character').append((data.name));
});
