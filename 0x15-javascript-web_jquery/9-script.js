$.post('https://fourtonfish.com/hellosalut/?lang=fr', function (data, message) {
  $('div#hello').append(data.hello);
}
);
