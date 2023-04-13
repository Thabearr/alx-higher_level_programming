#!/usr/bin/node
// Prints and logs number of calls
exports.logMe = function (item) {
  this.times = (this.times || 0) + 1;
  console.log(`${this.times - 1}: ${item}`);
};
