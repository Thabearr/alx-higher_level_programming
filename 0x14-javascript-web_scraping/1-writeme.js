#!/usr/bin/node
// reads file passed as arg
const fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], (error) => {
  error && console.log(error);
});
