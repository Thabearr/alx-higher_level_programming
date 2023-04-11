#!/usr/bin/node
let s;
if (process.argv.length < 3) {
  s = 'No argument';
} else if (process.argv.length === 3) {
  s = 'Argument found';
} else {
  s = 'Arguments found';
}
console.log(s);
