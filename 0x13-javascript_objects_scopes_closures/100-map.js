#!/usr/bin/node
// maps an array, multiplying each element by its index
const list = require('./100-data').list;
console.log(list);
console.log(list.map((element, index) => element * index));
