document.addEventListener('DOMContentLoaded', () =>
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', data =>
    $('DIV#hello').text(data.hello)));
