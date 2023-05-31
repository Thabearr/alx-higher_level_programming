document.addEventListener('DOMContentLoaded', () =>
  $('INPUT#btn_translate').click(() =>
    $.get('https://fourtonfish.com/hellosalut/?lang=' +
    $('INPUT#language_code').val(), (data) =>
      $('DIV#hello').html(data.hello))));
