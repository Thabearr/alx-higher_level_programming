#!/usr/bin/node
// retrieves all character names in SW film
const request = require('request');
const FILM_URL = `http://swapi.co/api/films/${process.argv[2]}`;
let characters;
const dict = {};
request(FILM_URL, function (error, response, body) {
  if (error) {
    throw new Error(error);
  }
  characters = JSON.parse(body).characters;
  for (const url of characters) {
    request(url, (error, response, body) =>
      !error && addData(url, JSON.parse(body).name));
  }
});

function addData (url, name) {
  dict[url] = name;
  if (Object.entries(dict).length === characters.length) {
    for (const url of characters) {
      console.log(dict[url]);
    }
  }
}
