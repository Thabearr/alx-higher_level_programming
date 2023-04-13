#!/usr/bin/node
// converts number from base 10 to given base
exports.converter = function (base) {
  return function (number) {
    return number.toString(base);
  };
};
