#!/usr/bin/node
const dict = require('./101-data').dict;
console.log(Object.entries(dict).reduce(function (accumulator, current) {
  accumulator[current[1]] = (accumulator[current[1]] || []).concat(current[0]);
  return accumulator;
}, {}));
