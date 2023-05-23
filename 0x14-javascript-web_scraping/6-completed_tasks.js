#!/usr/bin/node
// get number of tasks completed by userId
const request = require('request');
request(process.argv[2], (error, response, body) => {
  !error && console.log(JSON.parse(body).reduce(function (all, curr) {
    curr.completed && (all[curr.userId] = (all[curr.userId] || 0) + 1);
    return all;
  }, {}));
});
